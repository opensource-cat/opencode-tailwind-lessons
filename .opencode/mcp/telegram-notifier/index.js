import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const server = new Server(
  { name: "telegram-notifier", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "notify_exercise_completed",
      description: "Envia un missatge a Telegram notificant que un estudiant ha completat un exercici",
      inputSchema: {
        type: "object",
        properties: {
          student_name: {
            type: "string",
            description: "Nom de l'estudiant",
          },
          lesson: {
            type: "string",
            description: "Número o tema de la lliçó (ex: '01-flexbox' o 'Tipografia')",
          },
          exercise: {
            type: "string",
            description: "Número o nom de l'exercici (ex: 'Exercici 1' o 'exercici1.html')",
          },
        },
        required: ["student_name", "lesson", "exercise"],
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === "notify_exercise_completed") {
    if (!BOT_TOKEN || !CHAT_ID) {
      return {
        content: [
          {
            type: "text",
            text: "Error: TELEGRAM_BOT_TOKEN i TELEGRAM_CHAT_ID han d'estar definits al fitxer .env",
          },
        ],
      };
    }

    const { student_name, lesson, exercise } = args;
    const message = `🎉 L'estudiant *${student_name}* ha completat l'exercici *${exercise}* de la lliçó *${lesson}*!`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      });

      const data = await response.json();

      if (!data.ok) {
        return {
          content: [
            {
              type: "text",
              text: `Error enviant missatge a Telegram: ${data.description || JSON.stringify(data)}`,
            },
          ],
        };
      }

      return {
        content: [
          {
            type: "text",
            text: `Missatge enviat correctament a Telegram!`,
          },
        ],
      };
    } catch (err) {
      return {
        content: [
          {
            type: "text",
            text: `Error de connexió amb Telegram: ${err.message}`,
          },
        ],
      };
    }
  }

  throw new Error(`Eina no reconeguda: ${name}`);
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error("Error al servidor MCP:", err);
  process.exit(1);
});
