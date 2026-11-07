(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const observed = new WeakSet();
  const observer = typeof IntersectionObserver === 'function' ? new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return;
      observer.unobserve(target);
      target.classList.add('olive-v3-entered');
      if (reduced.matches) return;
      target.querySelectorAll('.h2, .ev').forEach((element, index) => {
        element.animate?.([{ translate: '0 13px' }, { translate: '0 0' }], {
          duration: 700, delay: Math.min(index * 85, 300), easing: 'cubic-bezier(.22,1,.36,1)'
        });
      });
    });
  }, { threshold: .12 }) : null;
  function enhance() {
    document.querySelectorAll('.sec').forEach(section => {
      if (observed.has(section)) return;
      observed.add(section);
      const art = document.createElement('span');
      art.className = 'olive-v3-art';
      art.setAttribute('aria-hidden', 'true');
      section.prepend(art);
      observer?.observe(section);
    });
  }
  let scheduled = false;
  new MutationObserver(() => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => { scheduled = false; enhance(); });
  }).observe(document.body, { childList: true, subtree: true });
  enhance();
})();
