const toggleBtn = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');
const overlay = document.getElementById('overlay');

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  nav.classList.remove('active');
  overlay.classList.remove('active');
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active');
  });
});
