/* Spring editorial heading cadence, layered over the existing gallery/reveal logic. */
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const observer = new IntersectionObserver(entries => entries.forEach(({ target, isIntersecting }) => {
    if (!isIntersecting) return;
    target.classList.add('v3-entered');
    if (!reduced.matches) {
      const headings = target.querySelectorAll('.section-kicker, h2');
      headings.forEach((heading, i) => heading.animate(
        [{ opacity: .72, translate: '0 7px' }, { opacity: 1, translate: '0 0' }],
        { duration: 1000, delay: i * 100, easing: 'cubic-bezier(.16,1,.3,1)' }
      ));
    }
    observer.unobserve(target);
  }), { threshold: .12 });
  const seen = new WeakSet();
  function connect() {
    document.querySelectorAll('.section').forEach(section => {
      if (seen.has(section)) return;
      seen.add(section); section.classList.add('v3-section'); observer.observe(section);
    });
  }
  connect();
  const root = document.querySelector('#app');
  if (root) new MutationObserver(connect).observe(root, { childList: true });
})();
