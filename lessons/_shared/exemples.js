function obrirTab(event, id) {
  event.preventDefault();
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(el => {
    el.classList.remove('bg-blue-600', 'text-white');
    el.classList.add('bg-gray-200', 'text-gray-700', 'hover:text-gray-900');
  });
  document.getElementById(id).classList.add('active');
  const btn = event.currentTarget;
  btn.classList.remove('bg-gray-200', 'text-gray-700', 'hover:text-gray-900');
  btn.classList.add('bg-blue-600', 'text-white');
  window.location.hash = id;
}

function toggleCode(btn) {
  const pre = btn.parentElement.querySelector('.code-preview');
  pre.classList.toggle('active');
  btn.textContent = pre.classList.contains('active') ? 'Amagar codi' : 'Veure codi';
}

document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.slice(1);
  const target = hash ? document.querySelector(`.tab-btn[href="#${hash}"]`) : null;
  if (target) { target.click(); } else { const first = document.querySelector('.tab-btn'); if (first) first.click(); }
});
