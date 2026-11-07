# Mithril and Olive — V3 atmosphere and interaction

Updated 6 November 2026. Background/motion implemented; new V3 opener films subsequently wired as requested. Root browser visual review requested.

## Mithril

- Pearl/ivory ambient background with sage and champagne corner lighting.
- Very faint raster pearl/kundan swag layered into alternating section corners.
- Heading arrival uses a restrained 12px upward settlement, once per heading; default content remains visible.
- Existing persistent opacity hiding on data-v/data-hero disabled; original renderer behavior remains otherwise intact.
- Venue/article and scratch card gain subtle hover lift and pearl shadow on fine-pointer devices.
- Buttons and links gain soft hover elevation, pressed scaling and visible keyboard focus.
- Focused fields receive a fine warm-gold underline shadow; closing key has a slight fine-pointer hover rotation.
- Identity preserved: heirloom key, unlock, pearl/crystal, editorial portrait, soft sage/ivory.

## Olive

- Generated jasmine/tuberose sprig softly layers into alternating section margins.
- Sage light subtly overlays the existing linen; hero copy gains a quiet ivory halo; dark arch retains its own olive-paper character with a mild top highlight.
- Event cards and section headings settle into place on scroll with 85ms stagger, once per section.
- Tiny diamond divider medallion gives one restrained scale arrival.
- Existing greenery/chandelier motion retained; no extra conflicting continuous motion applied.
- Event cards highlight gently on hover/focus-within; buttons press to 97%; radio choices and form inputs gain focus/hover/checked feedback.
- Removed initial opacity hiding on regular scroll content and initial arch clipping so content remains available without enhancement JS.
- Identity preserved: narrow botanical stationery, envelope entrance, botanical canopy, brass light, banquet base and olive arch cards.

## Safety and accessibility

- Both enhancement files are isolated and cache-versioned after original CSS/JS.
- Native buttons/links remain native; no hover-only content or cursor effects.
- Ornament layers are pointer-transparent and aria-hidden; no new raster generation needed for this pass.
- Reduced-motion preference disables all animations/transitions; reveal JS checks preference before each animation.
- No opacity-zero enhancement states; Web Animations settles translate only and has no persistent fill state.
- Mutation observers handle sections inserted by the existing legacy renderers and avoid repeated enhancement using classes/WeakSets.

## Files

- `mithril/assets/css/experience-v3.css`
- `mithril/assets/js/experience-v3.js`
- `olive/assets/css/experience-v3.css`
- `olive/assets/js/experience-v3.js`
- Both template `index.html` files load the isolated enhancement files with `?v=3`.

## Verification

- JavaScript syntax checks pass for both enhancement scripts.
- Collection local-config media checker passes with zero missing references across eight templates.
- Existing raster asset paths used in the new backgrounds resolve in each template's `assets/images/` folder.
- Child browser unavailable earlier in this workstream; root final visual review requested for decoration stacking, touch feedback, dark-panel contrast and reduced-motion behavior.

## Final V3 opener integration

- Mithril config `media.lockVideo` now references `assets/video/opening-v3.mp4`.
- Mithril has a separate `media.openingPoster` value for `assets/images/opening-poster-v3.webp`; enhancement script assigns it only to the opening video. `heroVideo` and `heroPoster` remain unchanged.
- Mithril HTML preloads the matching opener poster; config version bumped to 3 and enhancement JS to 3.1.
- Olive envelope video and poster reference `assets/video/opening-v3.mp4` and `assets/images/opening-poster-v3.webp`; preload matches.
- Original Mithril `lock-cover.mp4` and Olive `envelope.mp4`, plus earlier posters, remain untouched alongside versioned files.
- Both new delivery videos: silent H.264, 1080×1916, about 5.17 seconds; Mithril approximately 3.2MB and Olive 4.0MB.
- Config/enhancement syntax passes; collection local media check reports zero missing references (Mithril now 13 configured references).
- Root confirmed Mithril new cover poster/video loaded with readyState 4 and no media error. Pale ivory cover initially weakened original gold type; cover names/hint now rich antique bronze with a subtle cream text halo.
- Olive cover hint/skip now use stronger bronze on cream and hint pulse removed for stable legibility.
- Root flagged horizontal scrollbar at Olive 390px. `.page` now fits `min(100%,30rem)` rather than viewport units that include scrollbar width; html/body clip decorative horizontal overflow.
- Both V3 CSS cache versions bumped to 3.1 for the final contrast/overflow patch.
