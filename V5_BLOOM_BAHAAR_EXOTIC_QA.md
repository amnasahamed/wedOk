# V5 opening and responsive QA — Bloom, Bahaar, Exotic

Updated 6 November 2026. Scope is opening reliability and responsive behavior; no imagery generation or design expansion. Zareen untouched. Root owns rendered desktop/mobile matrix.

## Proven source issues and fixes

### Bloom

- Legacy `timeupdate` completed entry at4.6s despite the new film being5.1667s. Changed to actual duration minus0.08s, preserving nearly all final film frames and the native ended listener.
- Legacy7s wall-clock timeout could finish entry while the video was buffering. Replaced with15s check that finishes only on actual ended/error; buffering itself does not force a transition.
- Existing Skip button remains available during playback and stalls, with native keyboard access. Added capture keydown preventDefault for Space/Enter while retaining original activation handler; this prevents page scrolling on Space without duplicate clicks.
- Idle video scale animation snapped back to1 on tap. Disabled idle breathe/scale and transition on opening video to keep poster and decoded film in the same framing.
- Source backup: `bloom/assets/js/app-before-v5-qa.js`.
- New files: `assets/js/v5-opening-guard.js`, `assets/css/v5-opening-qa.css`; original app entry cache refreshed to?v=5.

### Bahaar

- Existing poster handling correctly waits for requestVideoFrameCallback (or playing plus animation frames). Retained.
- Existing experienceOpened guard prevents repeated taps from restarting film/music. Retained.
- Existing title wall timer could reveal names before playback reached its configured3.8s point, especially under buffering. Timer now checks actual video progress/ended/error; existing timeupdate and ended listeners still reveal naturally.
- Added a narrow failure guard: after a real tap, if play remains paused at0 or media errors, readable original title and page access are restored. No video seek/restart is performed.
- For a prolonged mid-film buffer, an explicit Skip animation button appears after8s only while title is still unrevealed. Activating it pauses playback and reveals the original invitation. Normal film completion does not show this control.
- Failure guard binds once even with dynamic module rendering and repeated taps.
- Source backup: `bahaar/src/app-before-v5-qa.js`.
- New files: `src/v5-opening-guard.js`, `src/v5-opening-qa.css`; app-v3 module cache refreshed to?v=5.

### Exotic

- Original startup priming called play, then asynchronously paused and reset video time to0. A user tap before the priming promise resolved could be paused by that earlier callback. Replaced priming sequence with native video.load(), retaining the poster until intentional play.
- Existing click-start, repeated-tap guard and ended/error transition listeners retained.
- Cover exit now fades without legacy1.06 zoom/6px blur, preventing spatial/blur jump into the hero.
- Hero image is preloaded to avoid an unloaded portrait behind the fading cover.
- Accessible Tap to open control and Enter/Space handling from V4 retained.
- Source backup: `exotic/assets/js/app-before-v5-qa.js`.
- New file: `assets/css/v5-opening-qa.css`; original app cache refreshed to?v=5.

## Self-check evidence

- Bloom isolated watchdog harness:4.6s playing and mid-buffer states do not finish; ended/error states finish. Verified dynamic final threshold expression exists and old early cutoff is absent. Original explicit Skip action remains.
- Bahaar isolated DOM/event harness: normal progress, rejected/paused play, media error and mid-film buffer cases pass. Repeated clicks create only one pair of recovery timers. Buffered case exposes Skip; activating it makes original title visible and hides the recovery control.
- Exotic source assertions: startup play/pause/reset prime sequence absent, native load present; original guarded click/ended/error listeners retained. Earlier V4 keyboard harness proved Enter/Space invoke existing click once each.
- All three modified app scripts plus new guards pass syntax checks; Bahaar checked in module mode.
- Opening films/posters retain shared object-fit/position framing. No resize handler restarts or seeks the films. Existing responsive width containment and decorative overflow fixes retained.
- Reduced-motion CSS from V3/V4 remains; V5 removes cover scaling/blur rather than adding animation.

## Limits and final rendered review

Root is capturing real desktop/mobile behavior, including immediate tap, decoded first frame, final frame and settled invitation. Isolated harnesses prove guards and state decisions; they do not prove absence of every decoded-frame flash on every browser/device. Record root's observed playback/crop results separately before declaring full visual completion.


## Desktop rendered review — 1440 × 900

Reviewed all29 actual individual section captures in `output/v5-device-qa`: Bloom01–07, Bahaar01–11, Exotic01–11, plus all three desktop playback contact sheets and playback/layout JSON evidence.

- Bloom: hero names, family invitation, scratch card, countdown, four-event programme, response form and closing all visible and readable. The narrow manuscript column is intentional; botanical margins remain separate from event text and controls. No heading persistence or horizontal overflow defect visible in these captures.
- Bahaar: all11 chapters reviewed, including complete portrait crop, timeline, corrected landscape garden venue, attire, four festival cards and closing. The title's ivory backing keeps deep rose names readable over the film's final garden frame. Venue no longer has the narrow/tall mobile image defect; desktop composition retains the jasmine canopy and pavilion.
- Exotic: all11 chapters reviewed. Dark portrait hero and emerald programme retain contrast; invitation, collage, scratch, countdown, venue, attire, wish, form and closing are present. Pomegranate margins remain subtle. Venue heading top swash was clipped in section07. Root confirmed desktop computed padding-top0 and headingY0 inside an overflow-hidden section. Added scoped desktop venue padding-top3.4rem, preserving the already-correct mobile spacing. V5 CSS query bumped to5.1; root will recapture the corrected section.
- Layout JSON for all three reports no missing images, oversized text or console errors. Document scroll width1425 at viewport1440 reflects the native vertical scrollbar and does not exceed viewport width.
- Actual playback JSON shows each video reaches5.166667s with ended=true. Bloom and Exotic covers fade without transform and are removed by about6.6s; Bahaar gate is hidden and title visible over the final frame. Contact sheets show progressive playback into the settled invitation with no sampled blank/black frame. Sampling does not prove every decoded frame on every device.

Recovery detail: Bloom keeps explicit Skip available throughout a stall rather than ending on a wall-clock deadline. Bahaar's unresolved play promise/paused=false with no progress cannot be inferred as failed playback; its8s Skip control remains the deliberate recovery path. Neither automatically truncates a buffering film.


## Targeted mobile375 review

Inspected Exotic's actual scratch/calendar, venue/map and response/Send captures, plus invitation, collage, countdown, programme, attire and wish. Calendar205px, map188px and Send108px all contain their complete visible labels without clipping. Their larger reported scrollWidth comes from the moving shimmer decoration, already clipped by the button's overflow:hidden. The document remains360px wide inside375px viewport. Bloom's only mobile oversizedText entry is an empty43px music control, not an overflowing text string. Bahaar mobile375 records zero missing images, oversized text and console errors. Root retains the full375/430 responsive matrix and final venue recapture evidence.


Completed full375px visual matrix: reviewed each of29 actual section files in `bloom-mobile375/01–07`, `bahaar-mobile375/01–11`, `exotic-mobile375/01–11`, plus the three375 playback contact sheets. All section headings, body text, image crops, programme details, countdowns, forms and closings remain present and readable. Botanical decoration does not cover Bloom copy; Bahaar gallery preserves complete faces and attire, and its venue image remains balanced; Exotic maintains the dark hero/programme contrast and readable ivory chapters. No additional375px design or layout correction required. Sampled opening contacts progress into each final hero without blank/black frames; video/cue framing stays consistent.


## Bahaar keyboard scratch control

Root's control audit found the scratch canvas had role=img and no keyboard reveal. Added `src/lib/scratch-v5.js` preserving the original module, with role=button, tabindex0, a clear accessible label and Enter/Space calling the existing guarded reveal closure directly. Existing pointer/finger handlers remain. Focus outline added; app module import and cache query updated5.2. The completed foil becomes aria-disabled and tabIndex-1, removing the invisible tab stop. Isolated real-module VM harness verifies Enter makes foil opacity0/pointer-events none and invokes date reveal once; repeated Space remains idempotent, both keys prevent page scrolling, and pointer/touch listeners remain installed. No simulated pointer gesture used.


## Full430px visual review

Reviewed all29 individual430px section captures in `bloom-mobile430/01–07`, `bahaar-mobile430/01–11` and `exotic-mobile430/01–11`. Each heading, paragraph, portrait/collage/venue crop, countdown, programme, form/control and closing remains present and readable. No additional430px crop, overlap, contrast, spacing or clipping issue found. Across1440px desktop and375px/430px mobile this is87 individual section reviews, in addition to playback sampling. Root reports all21 collection/device cases without horizontal document overflow, missing assets or console errors; decorative shimmer scrollWidth cases distinguished from actual text overflow.

Root also tested Bahaar430 Enter on the actual role=button scratch canvas: the existing reveal runs and foil becomes noninteractive. Final desktop assertion of the5.2 completed aria-disabled/tabIndex state and corrected Exotic desktop venue is delegated to root's final browser pass.


## Final rendered assertions and repeatable check

Root's final actual browser pass confirmed Exotic desktop venue padding54.4px and headingY70.39px, with the swash fully inside the section. Bahaar desktop and375px Enter reveal both passed: foil opacity fades toward0, pointer-events none, aria-disabled true and tabIndex-1. All21 collection/device layouts and seven rotation traces pass without horizontal document overflow, missing assets, backward playback time or blank/error states.

The no-dependency regression harness is persisted at `tools/check-botanical-playback.mjs`. Run from repository root:

```sh
node tools/check-botanical-playback.mjs
```

It executes production guard/listener code with small DOM/media doubles: Bloom actual duration expression and watchdog under mid-progress/buffer/ended/error; Bahaar whole recovery guard under progressing, paused/rejected, media-error, unresolved play and mid-buffer states, repeated taps and actual progress-gated names callback; Bahaar real decoded scratch initializer with Enter/Space idempotence, completed accessibility state and retained pointer/touch handlers; Exotic real decoded click/ended/error bindings with successful/rejected play, repeated tap and actual finish latch. Exotic rendering is deliberately replaced by a counted transition after the real latch; decoded browser frames and layout are covered by the separate actual matrix. Final run: all checks passed.
