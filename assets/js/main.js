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

  // ---- Hero cursor spotlight ----
  if (heroSection && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    const spotlight = document.createElement('div');
    spotlight.className = 'hero-spotlight';
    spotlight.setAttribute('aria-hidden', 'true');
    heroSection.appendChild(spotlight);
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const sx = ((e.clientX - rect.left) / rect.width) * 100;
      const sy = ((e.clientY - rect.top) / rect.height) * 100;
      heroSection.style.setProperty('--sx', sx.toFixed(1) + '%');
      heroSection.style.setProperty('--sy', sy.toFixed(1) + '%');
    });
  }

  // ---- Magnetic hero CTAs ----
  const magneticBtns = document.querySelectorAll('.hero-buttons .btn-primary, .cta-band .btn-primary');
  if (magneticBtns.length && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const mx = e.clientX - rect.left - rect.width / 2;
        const my = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${(mx * 0.25).toFixed(1)}px, ${(my * 0.3).toFixed(1)}px)`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
  }

  // ---- Cursor-tilt cards ----
  const tiltCards = document.querySelectorAll('.compare-card, .testimonial-card, .seg-card, .process-step, .stage-card');
  if (tiltCards.length && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    tiltCards.forEach(card => {
      card.classList.add('tilt-card');
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 7).toFixed(2)}deg) translateY(-3px)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }

  // ---- Count-up numbers (.compare-total strong) ----
  const countEls = document.querySelectorAll('.compare-total strong');
  if (countEls.length) {
    const countIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        countIO.unobserve(entry.target);
        const el = entry.target;
        const raw = el.textContent.trim();
        const match = raw.match(/[\d,.]+/);
        if (!match) return;
        const numStr = match[0];
        const target = parseFloat(numStr.replace(/,/g, ''));
        const prefix = raw.slice(0, match.index);
        const suffix = raw.slice(match.index + numStr.length);
        const duration = reduceMotion ? 1 : 1100;
        const start = performance.now();
        function tick(now) {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = Math.round(target * eased);
          el.textContent = prefix + val.toLocaleString('en-US') + suffix;
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = raw;
        }
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });
    countEls.forEach(el => countIO.observe(el));
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
