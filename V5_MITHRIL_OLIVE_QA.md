# V5 Mithril and Olive playback QA

Date: 2026-11-06. Scope: opening continuity, failure recovery, desktop/mobile review. No new imagery or changes to Zareen.

## Implemented

### Mithril

- Modified only the readable opening and handoff functions in `mithril/assets/js/app-playback-v4.js`.
- The opener now has a bounded watchdog, including the case where playback resolves but never advances or ends. The handoff clears that watchdog and remains idempotent.
- The cover holds until the hero produces a decoded frame, using `requestVideoFrameCallback` where available and playing plus two animation frames otherwise. The hero is not preplayed or reset during the opener.
- Failed or slow hero playback reveals the matching hero poster, hides the undecoded video, and unlocks the invitation. If a frame arrives later, the video replaces the poster after that frame is ready.
- The opener error and rejected-play paths continue to usable content; scrolling unlocks after the cover fade.

### Olive

- Preserved `olive/assets/js/app.js`; index now loads the surgical version copy `olive/assets/js/app-playback-v5.js`.
- Removed the legacy 0.6-second seek. Playback starts at zero, matching the V3 cover poster.
- Disabled the extra scripted camera zoom; the generated film supplies the motion.
- Added `olive/assets/css/opening-v5.css`: stationary cover stage, no cream veil flash, existing opacity crossfade, reduced-motion transition override.
- Preserved original page initialization, Skip, ended/time-threshold handling and 7.5-second fallback. A rejected play also reaches the invitation.

## Checks performed

- `node --check` on both live playback scripts: passed.
- `node mithril/assets/js/playback-v5-selfcheck.mjs`: passed actual-source behavioral harness for decoded-frame handoff, no hero reset, repeated events, no-frame-callback fallback, rejected hero, stalled hero with later recovery, known/unknown-duration opener watchdog, rejected opener, and scroll unlock.
- `node olive/assets/js/playback-v5-selfcheck.mjs`: passed actual-source behavioral harness for normal opening at zero, repeated tap, ended unlock, stalled watchdog, rejected play, Skip, keyboard activation and time threshold; checked original source preservation and stationary/no-veil CSS rules.
- `node tools/check-local-assets.mjs`: all eight templates report zero missing configured local media. This checks configured references; it is not a complete rendered-network test.
- Visually inspected all desktop section images supplied by root: `output/v5-device-qa/mithril-desktop/01.jpg` through `10.jpg`, and `olive-desktop/01.jpg` through `07.jpg`. No additional clipping or layout defect found. Portrait arch, isolated countdown labels, floating form labels, attire composition, Olive event arch, form and closing panel all fit the captured layouts.
- Root's desktop and 375px mobile layout JSONs for these two templates report no missing images, oversized text or console errors. Both mobile documents report scrollWidth 360 within a 375px viewport. These are root browser captures; this agent did not run a browser independently.

## Final browser confirmation

Root owns the shared browser and final desktop/mobile opening matrix. The Olive desktop baseline was captured before the zero-start/stationary-stage patch, so it must not be described as final playback proof. Parent notified to rerun the changed opener and use a fresh Mithril script query version. These behavioral tests exercise controller paths; they do not simulate real decoding or prove zero flicker on a physical device.

## Mobile visual review and interaction regression follow-up

- Inspected every individual section screenshot at both mobile widths: `mithril-mobile375/01.jpg` through `10.jpg`, `mithril-mobile430/01.jpg` through `10.jpg`, `olive-mobile375/01.jpg` through `07.jpg`, and `olive-mobile430/01.jpg` through `07.jpg`. Also reviewed all four contact sheets. This adds 34 actual mobile section views to the 17 desktop views above.
- No further layout or readability defect identified in those captures: the four countdown values and labels remain separate, portrait faces and attire figures are preserved, mobile invitation text fits, Olive's four event blocks have clear buttons, and form controls fit inside their panels. Mithril's modest bronze/ivory contrast and Olive's green/linen palette remain distinct.
- Root identified a functional regression in the V4 form-label fix: the broad `label[for]` rule applied `pointer-events:none` to attendance radio labels. Root narrowed the rule in `mithril/assets/css/refinement-v4.css` to labels adjacent to text inputs, excluding radio/checkbox inputs, and refreshed the stylesheet version. Radio labels retain normal pointer behavior.
- Root then verified actual selection of both Mithril attendance choices, field typing, music toggle and scratch-card Enter interaction at the mobile sizes. This is browser interaction evidence supplied by root, separate from this agent's screenshot review.
- Root reports all 21 desktop/mobile layout cases across the seven in-scope templates have zero overflow, missing images and console errors. Final desktop/orientation checks remain root-owned.
