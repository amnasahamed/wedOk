# Amber / Ruby V5 playback and responsive QA

Updated 6 November 2026. Scope: Amber and Ruby. Zareen untouched.

## Proven issue and fix

The V3.3 title fade used a fixed 5.2-second CSS delay after `.is-open` was applied. The original decoded Ruby app confirms that its entry handler applies `.is-open` immediately and calls `video.play()` immediately afterward, with a rejected play promise ignored. This means wall time and media progress can diverge under loading or buffering. Both current MP4 deliveries have measured duration 5.166667 seconds, but that does not make a fixed CSS delay correct on a slow connection.

Implemented a separate progressive controller and CSS layer:

- `amber/assets/js/v5-playback.js` / `ruby/assets/js/v5-playback.js`.
- `amber/assets/css/v5-playback.css` / `ruby/assets/css/v5-playback.css`.
- Both indexes load these with `?v=5`.
- Titles fade exactly once when the final media position is reached (within 80ms of duration) or `ended` fires.
- No fixed-duration title reveal when the new controller initializes successfully. Original V3.3 behavior remains fallback if script does not load.
- Media errors reveal usable title content after opening; preload errors do not accidentally open the closed cover.
- No-progress start has a bounded 12-second fallback. A stalled stream has an 18-second no-progress fallback, reset by actual media progress. These prevent a permanent hidden title if playback fails silently.
- Repeated entry/class changes cannot restart the title fade. A restored already-ready title retains its state.
- Reduced motion preserves the same media timing but suppresses the title fade animation.
- Existing original hero click/keyboard/repeat-input handling remains in place.

## Preserved corrections

- Stationary video compositor layer with positive z-index.
- Constant open/closed veil and palette-specific contrast treatment.
- Preload auto and existing optimized V3 films/posters.
- Root's playback/layout fixes in V3.3 CSS remain untouched.
- V4 screenshot-driven heading wrapping, Ruby gifts contrast, quiet transitions and Amber editorial gallery remain intact.
- No generation, new design additions or other-template changes in this QA phase.

## Meaningful media-state checks

Harness: `node amber/qa/playback-check.mjs` exercises the exact controller source for both templates with a fake clock and event-driven video/DOM doubles. It checks:

1. Wall time 5.2 seconds alone does not reveal a buffered title.
2. Mid-film progress/waiting stays gated; reaching the final frame reveals it.
3. Repeated input/ended events only add the ready state once.
4. A 12-second video is not incorrectly treated as a 5.2-second clip.
5. Initial no-progress and explicit media-error cases fall back without opening the closed cover.
6. Restored ready state does not replay the title entrance.

Result: six scenarios pass for Amber and six for Ruby. These are controller logic checks, not claims of real network or compositor verification.

## Responsive/source self-check

- V4 CSS uses bounded widths and mobile text wrapping; prior 390px captures showed countdown clipping and Ruby gift contrast, both already corrected.
- Amber gallery is native scroll-snap below 900px and a three-column photographic composition above it; keyboard/dot behavior remains in its independent V4 controller.
- Existing motion preserves visible content by default; new V5 title gating applies only after intentional invitation entry.
- No playback CSS transforms or opacity changes applied to the video layer by V5.

## Verification status

- [x] Both new scripts pass `node --check`.
- [x] Both current MP4 durations measured with ffprobe.
- [x] Exact media-state harness passes for both templates.
- [x] Source references and stylesheet ordering reviewed.
- [ ] Root real-browser desktop/mobile playback matrix after V5 patch.
- [ ] Root real-browser delayed-loading/buffering behavior and final-frame fade observation.
- [ ] Root reduced-motion, focus, scroll, gallery and replay/reload observations.

Root owns actual browser testing; this workstream does not claim new screenshots or device behavior from the source harness.

## Actual desktop visual review

Reviewed root's 1440×900 browser captures individually at full size: `output/v5-device-qa/amber-desktop/01.jpg` through `12.jpg` and `ruby-desktop/01.jpg` through `12.jpg`, plus both contact sheets. All 24 sections were inspected, not inferred from the contact sheets.

| Section | Amber | Ruby |
| --- | --- | --- |
| Hero | Family copy and names readable over warm stone; balanced central placement. | Names and family copy clear over velvet architecture. |
| Welcome | Dark body copy readable; floral shadows stay peripheral. | Red signatures and body copy clear; no leaf/text collision. |
| Scratch | Frame, mask and instruction fit cleanly. | Frame fits; canvas cue is subdued, with readable instruction beneath. |
| Gallery | Three arches, central stagger and gradient captions fit without clipping. | Main hand photograph fits and section heading clears upper foliage. |
| Countdown | Full heading and labels fit. | Full heading fits; bottom leaf nearly touched DAYS label. Added desktop bottom space. |
| Program | Timeline and supporting text clear. | Timeline clear; added bottom space to retain clearance from taller leaves. |
| Venue | Ivory copy clear on photograph/scrim. | Ivory copy clear on velvet card. |
| Dress | Paragraph and arch swatches fit. | Paragraph and rectangular swatches fit; added desktop bottom space for foliage. |
| Festivities | Four-card grid, dates and actions fit. | Four-card grid and actions fit; no text collision. |
| Gifts | Warm dark heading and supporting copy readable. | Previously invisible copy now clearly ivory on ruby. |
| RSVP | Form labels, fields, assistance copy and send action fit. | Leaf tip crossed assistance phone copy. Corrected desktop bottom spacing. |
| Closing | Arch, greeting and names fit. | Arch, greeting and names fit. |

Correction: Ruby `v4-polish.css` sets desktop bottom padding to 160px (previously 120px) on countdown/program/dress/RSVP; index cache advances to `v=4.2`. This is a targeted response to the actual foliage collision, not a layout redesign. Root should recapture Ruby RSVP/countdown to confirm the 40px clearance increase. No playback layers changed.

Root reports zero horizontal overflow, missing images, text overflow and console errors for both desktop pages, and observed Ruby V5 title reveal at media completion. Amber desktop playback baseline predates V5 and is being rerun by root. Mobile matrix and compositor/delayed-loading observations remain root-owned pending work; the controller harness still passes six scenarios for each template after this spacing-only change.

## Narrow 375px visual review

Individually inspected all 24 root captures in `output/v5-device-qa/amber-mobile375/01.jpg`–`12.jpg` and `ruby-mobile375/01.jpg`–`12.jpg`. Heroes retain readable family copy and names; welcome headings fit; scratch frames/instructions fit; gallery subject crops remain useful; countdown headings/labels fit; timelines retain readable times; venue actions stay inside cards; dress copy/swatches fit; all four stacked event cards/actions fit; gift copy is readable; form fields/send actions and closing copy fit. Ruby's larger foliage does not collide with mobile assistance copy. Some section files include adjacent-section material because of the browser capture position; this was not misclassified as a layout defect.

Actual issue in Amber `04.jpg`: first photo visible while third navigation dot was active. The old IntersectionObserver could mark the last of three simultaneously visible desktop slides as active and retain that state after resizing. Replaced dot selection with the track's actual `scrollLeft / clientWidth`, synchronized on native scroll and viewport resize. No autoplay, navigation behavior or visual layout changed. Cache query is now `v4-gallery.js?v=4.1`.

Verified JavaScript syntax and executed the exact gallery source with DOM doubles: initial first selection, last-slide scroll, desktop/mobile resize restoration and middle-slide selection passed. Root should verify the real gallery at 430px after refreshing this script. Root reports both 375px pages have zero page/text overflow, missing images and console errors, and normal V5 playback naturally ends before the title appears. Those are root browser results, not inferred from the harness.

## Music control accessibility correction

Root's accessible-state inspection found the button still announced “Play background music” while actual music played. Both original HTML buttons have that static label and no pressed state. Added an independent audio-event synchronization block in each existing V5 script: `play`/`playing`/`pause`/`ended`/`emptied`/`error` and restored-page events set the actual next action (“Pause background music” or “Play background music”) and `aria-pressed`. No change to sound, autoplay or click handling. Script cache advances to `?v=5.1`.

Exact-source state checks pass for initial paused, playing, paused again and media-error cases on both templates; the six opener scenarios still pass for each. Real music toggle verification at 430px remains root-owned.

### First-click recovery after an external pause

Root's 430px check found a system/external audio pause could leave the original app's private `playing` boolean stale, so the first button click incorrectly paused an already-paused element. Decoded original source confirms its click handler branches on that boolean rather than `audio.paused`. The independent V5 audio block now owns the button's capture-phase click, prevents duplicate legacy handling, and decides directly from the audio element: paused/ended → play; otherwise → pause. It also synchronizes the visible label and animated-bars class alongside accessibility attributes. Rejected play promises restore accurate state. Both index script queries advance to `v=5.2`.

Persistent exact-source harness now includes first-click recovery after an external pause: start/play, simulate external pause, first click resumes exactly once, next click pauses. Capture-phase duplicate suppression and label/pressed state assertions pass for both templates; all six opener scenarios remain green. Root owns final actual 430px click verification.

## Wide 430px visual and playback review

Individually reviewed all 24 section images in `output/v5-device-qa/{amber,ruby}-mobile430/01.jpg` through `12.jpg`, plus both `mobile430-playback-contact.jpg` sequences and their captured state metadata. No additional text clipping, incorrect subject crop, foliage/text collision or low-contrast section copy found. Both hero family blocks remain readable; scratch frames and notes fit; headings, timeline labels, event cards/buttons, forms and closing greetings fit. Ruby gift copy remains legible on velvet. Amber gallery now visibly shows the first dot filled with the first setting photograph, correcting the mismatched state observed at 375px.

The sampled playback sequences show coherent opening movement followed by the final image and one title appearance; no blank flash or poster return is visible in the sampled frames. Video opacity stays 1 and transform stays identity throughout recorded metadata. Both title sequences begin appearing only at the final 5.166667-second media position. Sampling is not proof against a flash between captures, and these are local-browser runs, not physical-device or real throttled-network tests. Root reports all seven templates × three viewport cases have zero overflow, missing images or console errors; final orientation, gallery resize/control and live music recovery checks remain root-owned.
