const menuBtn = document.getElementById('menuBtn');
const mobileLinks = document.getElementById('mobileLinks');

menuBtn.addEventListener('click', () => {
  const open = mobileLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.textContent = open ? '✕' : '☰';
});

mobileLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileLinks.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.textContent = '☰';
  });
});
