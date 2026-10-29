// Lightweight intersection observer: animations only start when content reaches the viewport.
const items = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
items.forEach((item) => observer.observe(item));

const menu = document.querySelector('.menu-button');
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  document.querySelector('.nav nav')?.classList.toggle('mobile-open', !open);
});
