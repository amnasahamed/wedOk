(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const observed = new WeakSet();
  const reveal = typeof IntersectionObserver === 'function' ? new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return;
      reveal.unobserve(target);
      if (reduced.matches || !target.animate) return;
      target.animate([{ translate: '0 12px' }, { translate: '0 0' }], {
        duration: 650, easing: 'cubic-bezier(.22,1,.36,1)'
      });
    });
  }, { threshold: .15 }) : null;
  function enhance() {
    const opening = document.querySelector('video[src*="opening-v3.mp4"]');
    const poster = window.VERONA_CONFIG?.media?.openingPoster;
    if (opening && poster && opening.getAttribute('poster') !== poster) opening.setAttribute('poster', poster);
    document.querySelectorAll('section').forEach(section => {
      if (section.querySelector('video') || section.closest('#cover')) return;
      if (!section.classList.contains('mithril-v3-surface')) {
        section.classList.add('mithril-v3-surface');
        const decoration = document.createElement('span');
        decoration.className = 'mithril-v3-art';
        decoration.setAttribute('aria-hidden', 'true');
        section.prepend(decoration);
      }
    });
    document.querySelectorAll('article, #vrScratch').forEach(card => card.classList.add('mithril-v3-card'));
    document.querySelectorAll('h2, h3').forEach(heading => {
      if (observed.has(heading)) return;
      observed.add(heading);
      reveal?.observe(heading);
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
