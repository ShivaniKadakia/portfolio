/* ═══════════════════════════════════════════
   NAVBAR: scroll shadow + active link
═══════════════════════════════════════════ */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  // Scrolled shadow
  navbar.classList.toggle('scrolled', window.scrollY > 10);

  // Active nav link based on scroll position
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) current = sec.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

/* ═══════════════════════════════════════════
   MOBILE MENU TOGGLE
═══════════════════════════════════════════ */
const toggle = document.querySelector('.nav-toggle');
const navLinksEl = document.querySelector('.nav-links');
const navSocialEl = document.querySelector('.nav-social');

if (toggle) {
  toggle.addEventListener('click', () => {
    const open = navLinksEl.style.display === 'flex';
    navLinksEl.style.display = open ? 'none' : 'flex';
    navLinksEl.style.flexDirection = 'column';
    navLinksEl.style.position = 'absolute';
    navLinksEl.style.top = '72px';
    navLinksEl.style.left = '0';
    navLinksEl.style.right = '0';
    navLinksEl.style.background = 'rgba(248,244,238,0.97)';
    navLinksEl.style.padding = '1rem 2rem';
    navLinksEl.style.borderBottom = '1px solid #E2D9CF';
    navLinksEl.style.zIndex = '99';
    if (open) navLinksEl.style.display = 'none';
  });
}

/* ═══════════════════════════════════════════
   SCROLL ANIMATIONS (Intersection Observer)
═══════════════════════════════════════════ */
const animEls = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger children slightly
      setTimeout(() => {
        entry.target.classList.add('is-visible');
      }, i * 120);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

animEls.forEach(el => observer.observe(el));

/* ═══════════════════════════════════════════
   EMAIL COPY (main page nav)
═══════════════════════════════════════════ */
const EMAIL = 'sk3443@cornell.edu';

const navEmailCopy = document.getElementById('nav-email-copy');
const toast = document.getElementById('toast-email');
if (navEmailCopy && toast) {
  navEmailCopy.addEventListener('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(EMAIL).then(() => {
      toast.classList.add('is-visible');
      setTimeout(() => toast.classList.remove('is-visible'), 1800);
    });
  });
}

/* Footer email copy */
const footerEmailCopy = document.getElementById('footer-email-copy');
const toastFooter = document.getElementById('toast-email-footer');
if (footerEmailCopy && toastFooter) {
  footerEmailCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      toastFooter.classList.add('is-visible');
      setTimeout(() => toastFooter.classList.remove('is-visible'), 1800);
    });
  });
}
