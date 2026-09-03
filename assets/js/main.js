// ============================================================
// YachtRelay AI — shared front-end behavior
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

  // ---- Subtle hero background parallax ----
  const heroBg = document.querySelector('.hero-bg');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (heroBg && !reduceMotion) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 600);
        heroBg.style.transform = `scale(1.06) translateY(${y * 0.12}px)`;
        ticking = false;
      });
    }, { passive: true });
  }

  // ---- 3D yacht tilt + parallax (charter booking page only) ----
  const yachtTilt = document.getElementById('yacht3dTilt');
  const heroSection = document.querySelector('.hero');
  if (yachtTilt && heroSection && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    let raf = null;
    const setPose = (mx, my) => {
      // mx, my in -1..1
      const ry = mx * 24;   // rotateY range
      const rx = -my * 13;  // rotateX range
      yachtTilt.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      yachtTilt.style.setProperty('--mx', mx.toFixed(3));
      yachtTilt.style.setProperty('--my', my.toFixed(3));
    };
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const my = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setPose(mx, my));
    });
    heroSection.addEventListener('mouseleave', () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setPose(0, 0));
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
