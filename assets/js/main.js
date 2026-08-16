// ============================================================
// PortRelay AI — shared front-end behavior
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Sticky header state ----
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  if (header) {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---- Mobile nav toggle ----
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // ---- Scroll reveal via IntersectionObserver ----
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach((el, i) => {
      el.style.transitionDelay = (i % 6) * 0.06 + 's';
      io.observe(el);
    });
  }

  // ---- Smooth FAQ expand/collapse ----
  document.querySelectorAll('.faq-item').forEach(item => {
    const summary = item.querySelector('summary');
    const panel = item.querySelector('p');
    if (!summary || !panel) return;
    summary.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = item.hasAttribute('open');
      document.querySelectorAll('.faq-item[open]').forEach(other => {
        if (other !== item) collapse(other);
      });
      if (isOpen) collapse(item);
      else expand(item);
    });
    function expand(el) {
      const p = el.querySelector('p');
      el.setAttribute('open', '');
      const target = p.scrollHeight;
      p.style.overflow = 'hidden';
      p.style.height = '0px';
      p.style.transition = 'height 0.3s ease';
      requestAnimationFrame(() => { p.style.height = target + 'px'; });
      p.addEventListener('transitionend', function clear() {
        p.style.height = '';
        p.style.overflow = '';
        p.removeEventListener('transitionend', clear);
      });
    }
    function collapse(el) {
      const p = el.querySelector('p');
      const current = p.scrollHeight;
      p.style.overflow = 'hidden';
      p.style.height = current + 'px';
      p.style.transition = 'height 0.3s ease';
      requestAnimationFrame(() => { p.style.height = '0px'; });
      p.addEventListener('transitionend', function clear() {
        el.removeAttribute('open');
        p.style.height = '';
        p.style.overflow = '';
        p.removeEventListener('transitionend', clear);
      });
    }
  });

});
