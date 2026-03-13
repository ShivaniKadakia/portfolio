/* Topbar scroll state (match main navbar behaviour) */
const csTopbar = document.querySelector('.cs-topbar');
if (csTopbar) {
  const handleScroll = () => {
    if (window.scrollY > 10) {
      csTopbar.classList.add('cs-topbar--scrolled');
    } else {
      csTopbar.classList.remove('cs-topbar--scrolled');
    }
  };
  handleScroll();
  window.addEventListener('scroll', handleScroll);
}

/* ═══════════════════════════════════════════
   CASE STUDY — TOC active link on scroll
═══════════════════════════════════════════ */
if ('IntersectionObserver' in window) {
  const tocLinks = document.querySelectorAll('.cs-toc-link');
  const anchors = Array.from(document.querySelectorAll('.cs-section[id], .cs-subsection[id]'));

  const tocObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        tocLinks.forEach(link => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  anchors.forEach(el => tocObserver.observe(el));
}
