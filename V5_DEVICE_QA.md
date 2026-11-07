# Seven-template desktop and mobile QA

Started 6 November 2026. Scope: Amber, Ruby, Bahaar, Bloom, Mithril, Olive and Exotic. Zareen excluded; SHA-256 baseline recorded separately to verify it remains untouched.

## Test matrix

Actual local-browser checks at 1440 × 900 desktop, 375 × 812 narrow mobile and 430 × 932 larger mobile. Each case covers opening playback/handoff, full-page scroll, image delivery, horizontal overflow, typography/cropping and console errors. Targeted gallery, scratch, calendar, form and keyboard checks supplement the layout matrix. Browser viewport checks are distinguished from physical-device tests.

## Result

Completed: **21 layout/playback cases, seven live orientation cases, and 210 individual section reviews**. No horizontal document overflow, missing image elements or browser console errors were found in the final matrix. All opening films completed and handed off to their invitations. Zareen's 82 files are byte-for-byte unchanged from the pre-test SHA-256 baseline.

[Open the verification gallery](http://localhost:4173/output/v5-device-qa/) for full-page screenshots, per-section contact sheets and opening/orientation sequences. Raw measurements and playback traces are retained beside the images. Initial desktop evidence is retained in `baseline-desktop/`.

| Template | Desktop 1440 × 900 | Mobile 375 × 812 | Mobile 430 × 932 | Live 375 → 812 → 375 rotation |
|---|---|---|---|---|
| Amber | Passed | Passed | Passed | Passed; no seek/restart |
| Ruby | Passed | Passed | Passed | Passed; no seek/restart |
| Bahaar | Passed | Passed | Passed | Passed; no seek/restart |
| Bloom | Passed | Passed | Passed | Passed; no seek/restart |
| Mithril | Passed | Passed | Passed | Passed; second film starts normally |
| Olive | Passed | Passed | Passed | Passed; no seek/restart |
| Exotic | Passed | Passed | Passed | Passed; no seek/restart |

## Issues fixed

| Template | Proven issue | Final behavior |
|---|---|---|
| Amber / Ruby | Title appeared after a fixed wall-clock delay even when playback buffered; failed playback lacked a usable title fallback | Title follows actual final media time/ended, with one fade and bounded failure/stall recovery; stationary video and constant veil retained |
| Amber / Ruby | Music click could use a stale private playing flag after audio paused externally; accessible label stayed wrong | Click branches on actual audio state; visible label, animated bars, aria-label and aria-pressed follow play/pause |
| Amber | Mobile gallery dot could retain the third selection after switching from the desktop three-column layout | Scroll/resize synchronization uses the actual visible slide; first, last, desktop and restored mobile states verified |
| Ruby | Desktop foliage crowded countdown labels and crossed RSVP assistance text | Added 40px desktop bottom spacing in the affected chapters; final screenshots recaptured |
| Mithril | Resolved play promise followed by a stall could keep the opener locked; hero fallback needed a guaranteed matching poster | Bounded opening watchdog, decoded-frame handoff, matching-poster fallback and late-frame recovery; repeated events transition only once |
| Mithril | V4 floating-label pointer rule also disabled radio labels; choice targets were undersized | Rule scoped to text-field labels, radio labels clickable with 44px targets; both choices exercised at 375px and 430px |
| Olive | Legacy start sought to 0.6 seconds, enlarged the video during playback and flashed a cream veil | Starts at the matching first frame, stationary video stage and opacity-only handoff; Skip and existing stall watchdog preserved |
| Bloom | Idle scale animation snapped on activation; fixed 4.6-second cutoff shortened the new film; a wall-clock timeout could truncate buffering | Stable stage, actual duration/end detection, persistent accessible Skip during a stall; Space activation does not scroll the page |
| Bahaar | Names followed a 3.8-second timer instead of playback; a prolonged stalled opener had no explicit recovery | Media-time title reveal, failure recovery and accessible Skip after prolonged buffering |
| Bahaar | Scratch card was exposed as an image and lacked keyboard reveal | Enter/Space invoke the actual reveal once; completed foil becomes aria-disabled with tabIndex -1; pointer/touch listeners retained |
| Exotic | Startup play/pause/reset priming could race the first tap; cover exit scaled and blurred | Native preload, one guarded play, stationary fade-only exit and preloaded hero portrait |
| Exotic | Desktop venue calligraphy had zero top padding and clipped its ascender; opening prompt remained visible during playback | Added 54.4px top padding (heading now starts 70.39px inside its section); prompt fades on activation and is hidden by media time 0.29s |

## Playback evidence

- All seven source opening MP4s decoded successfully through FFmpeg: 124 frames each, no fully black decoded frames. Source masters were not regenerated or replaced in this QA pass.
- Actual browser traces and sampled screenshots cover poster, first decoded frames, film progress, handoff and settled content. Amber/Ruby titles first become visible at the film's final position. Mithril's next video starts without a preplay/reset or outgoing zoom.
- All seven were activated with Enter at narrow mobile size and with pointer activation at desktop/larger mobile sizes. Live orientation cases used Space, changed aspect ratio during playback, then returned to portrait; no backwards media-time jump or restart was observed.
- Resized screenshot buffers can momentarily retain the previous viewport aspect. Contact sheets exclude those mismatched capture buffers; raw frames remain available. Mithril and Exotic were repeated with capture-aspect validation before saving resized frames.
- No sampled stable-size frame showed a blank/black handoff. Sampling and decoder checks do not certify every frame on every browser or device.

## Controls and visual verification

- Every section was inspected individually at all three sizes: Amber36, Ruby36, Bahaar33, Bloom21, Mithril30, Olive21 and Exotic33 captures.
- Name entry/clearing and attendance selection were exercised without submitting RSVP data. Mithril, Olive, Bloom and Exotic radio groups selected both alternatives correctly. Amber/Ruby attendance menus accepted selection. Bahaar has no response form in its configured layout.
- Music controls were exercised on all seven. Amber's pause/resume state and both templates' accessible-label synchronization were rechecked after the final fix.
- Keyboard scratch reveal was exercised on all seven. Bahaar's final desktop/narrow-mobile completion state was verified: foil fades out, pointer-events none, aria-disabled true and tabIndex -1.
- Amber's gallery last-slide position was exactly two track widths; desktop grid showed three equal columns, and switching back to mobile retained a dot matching the visible image.
- Decorative scroll-width flags were inspected rather than treated as clipped text: Exotic's clipped shimmer layers extend beyond their button boxes, and Bloom's empty music control includes a halo. Their actual labels fit, and document width stays within the viewport.
- Reduced-motion rules were retained throughout. V5 removes extra zoom/blur movement rather than adding another reveal system. Reduced-motion code paths are covered by the existing styles and controller checks; OS-level emulation was not available in the browser tool.

## Repeatable checks

All passed after the final changes:

```sh
node amber/qa/playback-check.mjs
node mithril/assets/js/playback-v5-selfcheck.mjs
node olive/assets/js/playback-v5-selfcheck.mjs
node tools/check-botanical-playback.mjs
node tools/check-local-assets.mjs
```

The state checks exercise actual source functions/listeners with small media/DOM doubles: normal completion, buffering, rejected play, stalled playback, repeated activation, Skip, poster fallback and keyboard behavior. They are separate from the real-browser evidence above. Syntax validation passed for 42 live script entry points and the changed scratch module. Configured local assets report zero missing references.

Detailed workstream records: [Amber / Ruby](V5_AMBER_RUBY_QA.md), [Mithril / Olive](V5_MITHRIL_OLIVE_QA.md), [Bloom / Bahaar / Exotic](V5_BLOOM_BAHAAR_EXOTIC_QA.md).

## Scope limits

These are actual local in-app-browser viewport checks, not physical iOS/Android or a multi-browser hardware lab. No RSVP responses were submitted, no external calendar/map action was committed, and no live network throttling was available; failure/buffering recovery was exercised in the repeatable state checks. Zareen was neither opened for testing nor modified.
