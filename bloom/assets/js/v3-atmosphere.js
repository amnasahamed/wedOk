/* One-shot heading emphasis; never hides content or replaces Bloom's petal system. */
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const seen = new WeakSet();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(({target, isIntersecting}) => {
      if (!isIntersecting) return;
      target.classList.add('v3-entered');
      if (!reduced.matches) target.querySelector('h2')?.animate(
        [{ opacity: .75, translate: '0 5px' }, { opacity: 1, translate: '0 0' }],
        { duration: 950, easing: 'cubic-bezier(.22,1,.36,1)' }
      );
      observer.unobserve(target);
    });
  }, { threshold: .12 });
  function connect() {
    document.querySelectorAll('#sections > section').forEach(section => {
      if (seen.has(section)) return;
      seen.add(section); section.classList.add('v3-section'); observer.observe(section);
    });
  }
  connect();
  const root = document.querySelector('#sections');
  if (root) new MutationObserver(connect).observe(root, { childList: true });
})();
