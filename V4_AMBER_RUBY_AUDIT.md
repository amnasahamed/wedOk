# Amber / Ruby V4 premium pass

Updated 6 November 2026. Scope: Amber and Ruby only. Zareen untouched.

## Preservation

- Preserved root's V3.3 flicker fixes: stationary video layer, positive z-index layers, opacity-only title fade delayed 5.2 seconds, constant veil, preload auto.
- No video/config edits in this pass.
- No new image generation needed; all reused art was previously generated with ChatGPT built-in image generation. No Fal image generation.
- Original layouts/interactions and distinct identities retained: Amber champagne courtyard editorial; Ruby ruby velvet/antique-gold ceremonial.

## Section audit and changes

| Section | Finding | Implemented refinement |
|---|---|---|
| Entrance / hero | Flicker/contrast recently corrected by root | Kept entire corrected hero implementation unchanged |
| Welcome | V2/V3 type and botanical shading already coherent | Kept warm readable copy and airy framing |
| Scratch date | Root verified reveal fits generated frame | Retained interaction, safe text geometry, keyboard/touch behavior |
| Gallery | Authorial photo set and V3 zoom/crossfade already strong; small dot targets | Enlarged dot hit targets from 22px to 32px with discreet visible centers |
| Countdown | V2 improved labels and original large numerals already work | Retained numeric hierarchy and distinctive template palette |
| Day program | Time labels and supporting notes too small/light | Larger time labels, stronger contrast, 1.02rem supporting notes, calmer heading line-height and subtle timeline node halo |
| Venue — Amber | Plain dark panel missed chance to connect to new venue imagery | Added generated champagne courtyard stage photograph behind a strong warm scrim; foreground title/address/action remain above and readable |
| Venue — Ruby | Needed depth without importing a different photographic world | Rich velvet color gradients, low-opacity ruby floral art along bottom, antique-gold interior rule |
| Dress code | Overlapping circles felt generic rather than textile-inspired | Separated swatches as taller fabric samples: softly arched chips for Amber, rectangular tailored chips for Ruby; enlarged descriptive copy |
| Festivities | Small action labels and touch targets; supporting metadata narrow | Larger labels and 44–46px date/action targets, quieter letter spacing, slightly larger location copy, distinct warm section surfaces |
| Gifts | Copy width/decoration competed slightly | Constrained prose width, reduced abstract bloom opacity while retaining botanical raster framing |
| RSVP | Small form captions, basic input targeting | Larger labels and at least 48px field heights; original form behavior unchanged |
| Closing | Arch needed a subtle stationery surface | Added translucent ivory silk/paper shading and clearer footer details within existing frame |
| Calendar popup | Flat menu and small actions | Refined padding/shadow/corners, 44px item targets and touch pressed backgrounds |

## Files

- `amber/assets/css/v4-polish.css` and `ruby/assets/css/v4-polish.css`.
- Each index loads its V4 file after V3.3 styles with `?v=4`.
- No V3 CSS/JS edits, central tracker edits or other-template edits.

## Interaction and accessibility

- V3 visible-by-default progressive entrances retained.
- V4 introduces no new perpetual animation or invisible text states.
- Touch devices suppress sticky card and swatch hover transforms.
- Existing touch/keyboard pressed feedback, focus rings and reduced-motion rules retained.
- New calendar transitions explicitly disabled under reduced motion.
- Decorative venue layers are pseudo-elements with pointer-events disabled and controlled z-index; content remains above them.

## Checks

- [x] Both V4 CSS files return HTTP 200 locally.
- [x] Existing V3 JavaScript syntax still passes.
- [x] Background image paths resolve to existing versioned generated assets.
- [x] Source confirms video stationary layer, title delay, preload auto and V3.3 links remain intact.
- [ ] Root browser screenshots/visual checks of venue sections, swatches, mobile program metadata and calendar menu.
- [ ] User approval of final compositions.

Browser checks are owned by root because child browser access was unavailable in earlier phases.

## Actual mobile screenshot review and corrective pass

Reviewed both contact sheets and every full-size section image provided by root under `output/v4-section-review/amber/` (11 original sections) and `ruby/` (12 sections), at the recorded 390px viewport. This was an inspection of actual captured browser output, not an inferred source-only review.

### Findings

- Both heroes: typography reads clearly over their respective films; no playback changes made in this review.
- Both welcome sections: strong body readability and coherent floral families; large heading fits tightly but remains readable in captures.
- Both scratch sections: replacement architectural frames are coherent; existing scratch foil/reveal treatment retained.
- Amber countdown and Ruby countdown: long script heading extended beyond right viewport edge. Fixed with a 15ch maximum width, normal wrapping, balanced lines and restrained fluid type sizing.
- Programme sections: stronger time/supporting copy from V4 reads well; timeline alignment is consistent.
- Venue sections: Amber photographic courtyard panel and Ruby velvet panel both read clearly; no correction needed.
- Dress code: textile-like swatches and descriptive copy are clear, with no collision.
- Festivities: action controls and data are readable, consistent and aligned. Long stacked cards remain an intentional mobile layout.
- Amber gifts: paragraph approached the cropped right boundary. Explicit full-width/min-width constraints now keep the gift-copy flex item inside its section.
- Ruby gifts: critical dark-on-dark heading and paragraph contrast failure. Set explicit velvet background and ivory body/heading with gold eyebrow; opacity now full.
- RSVP sections: controls and labels are clear. Preserved because removal authorization applied only to Zareen.
- Closing sections: arch, quote, names and sample date read well. Captures include a dark strip after the arch; this appears to be the following body/background area, not content clipping. No speculative layout change made without root measurement.
- Repeated full-width floral dividers were too uniform across chapters. Replaced three transitions (before countdown, dress and RSVP) with fine gold hairlines and reduced top padding. Key entrance, date, programme and closing transitions retain the flower family.

### Amber gallery added after source/capture review

The three V2 Amber gallery assets existed in config and on disk but the original HTML had no gallery section. Root explicitly authorized presenting them.

- Added `amber-editorial-section` after scratch and before countdown, bringing Amber to 12 content sections including closing.
- Mobile: native horizontal scroll snap with 3 photos, readable overlay captions, 40px button targets, keyboard arrows and active `aria-pressed` dots.
- Desktop at 900px+: three staggered arch-shaped photographs, warm champagne styling.
- Added `amber/assets/js/v4-gallery.js` for dot navigation and active state; images remain accessible and swipeable if JavaScript fails.
- Uses existing `01-v2.webp`, `02-v2.webp`, `03-v2.webp`; no generation or video changes.
- Standalone IDs/classes avoid conflict with the original renderer. No autoplay introduced.

### Final verification state

- [x] Full-size actual mobile section captures inspected for both templates.
- [x] Corrective CSS applied with cache versions Amber 4.2 / Ruby 4.1.
- [x] New gallery script passes syntax check; endpoint returns 200.
- [x] Static count confirms Amber now has 12 section/footer elements.
- [ ] Root new captures of corrected countdown/gifts/quiet transitions and Amber gallery dot/swipe behavior.
- [ ] Root desktop gallery composition verification.
