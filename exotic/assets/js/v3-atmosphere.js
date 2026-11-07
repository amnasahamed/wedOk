/* Quiet cinematic emphasis with no persistent hidden or transformed content. */
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const seen = new WeakSet();
  const observer = new IntersectionObserver(entries => entries.forEach(({target, isIntersecting}) => {
    if (!isIntersecting) return;
    target.classList.add('v3-entered');
    if (!reduced.matches) target.querySelector('h2')?.animate(
      [{ opacity: .78, filter: 'blur(1px)' }, { opacity: 1, filter: 'blur(0)' }],
      { duration: 1100, easing: 'cubic-bezier(.22,1,.36,1)' }
    );
    observer.unobserve(target);
  }), { threshold: .12 });
  function connect() {
    const emptyInterlude = document.querySelector('[data-quran]')?.closest('section');
    if (emptyInterlude && !emptyInterlude.textContent.trim() && !emptyInterlude.querySelector('img,video,button,a,form')) {
      emptyInterlude.hidden = true;
      emptyInterlude.style.display = 'none';
    }
    const cover = document.querySelector('#coverCard');
    if (cover && !cover.querySelector('.v3-opening-cue')) {
      cover.setAttribute('role', 'button');
      cover.setAttribute('tabindex', '0');
      cover.setAttribute('aria-label', 'Open wedding invitation');
      const cue = document.createElement('span');
      cue.className = 'v3-opening-cue';
      cue.textContent = 'Tap to open';
      cue.setAttribute('aria-hidden', 'true');
      cover.append(cue);
      cover.addEventListener('click', () => cover.classList.add('v5-opening-active'), { once:true });
      cover.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          cover.click();
        }
      });
    }
    document.querySelectorAll('.t049 section:not(.rs-hero)').forEach(section => {
      if (seen.has(section)) return;
      seen.add(section); section.classList.add('v3-section'); observer.observe(section);
    });
  }
  connect();
  const root = document.querySelector('#app');
  if (root) new MutationObserver(connect).observe(root, { childList: true, subtree: true });
})();
