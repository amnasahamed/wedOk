# Mithril and Olive — section refinement audit

6 November 2026. Source audit and targeted implementation completed; root owns final screenshots/browser checks and Mithril opener transition repair. Zareen untouched.

## Scope and identity

Mithril keeps its ivory/sage heirloom key, pearl/crystal, portrait and fashion language. Olive keeps the narrow envelope stationery, botanical canopy, brass lantern, banquet, olive arch event panel and linen. No new image was necessary: existing individually generated raster V2 artwork supplies the complete section family.

## Mithril section findings and changes

| Section | Finding | Implemented refinement |
|---|---|---|
| Lock opener / hero | Root identified frame reset/zoom jump | Root owns transition fix. This workstream leaves playback and original app untouched |
| Invitation | V3 ambient pearl framing fits written invitation | Retained restrained pearl light; balanced heading wrapping |
| Portrait | Repeated corner swag competed with full editorial photograph | Suppress background ornament here; complete arched image frame and gentle photographic shadow |
| Scratch | Interaction needs easy touch target and stable focus treatment | Retain existing scratch behavior; controls at least 44px, warm visible focus ring |
| Countdown | Needs clear hierarchy rather than more artwork | Retain V2 number hierarchy and V3 pearl light; no new ornamental cluster |
| Interlude | Existing full crystal artwork already provides a chapter transition | Suppress duplicate V3 corner decoration behind it |
| Venue | Illustration should read as one complete scene | Softly rounded article/image edges, contained scene, responsive automatic height at narrow widths |
| Dress code | Needs full fashion silhouettes and simple framing | 90% width/31rem cap, slight shadow; label swatches semantically, small fine-pointer hover enlargement |
| RSVP | Decorative corners make form busier than necessary | Suppress decorative swags; quiet ivory input surfaces; minimum 48px fields/44px choice targets; disabled-state feedback |
| Closing | Closing asset already frames copy | Suppress repeated background swags behind closing artwork; narrow English line wrapping corrected after original stylesheet ordering |

## Olive section findings and changes

| Section | Finding | Implemented refinement |
|---|---|---|
| Envelope opener | New V3 poster already matched; controls darkened in prior pass | Retained working opener and typed control styling |
| Hero | Canopy/light/banquet already create a complete composition | Kept existing illustration arrangement and animation; no new competing decoration |
| Invitation | Names and dense framed copy benefit from more vertical rhythm | Increased names line-height/margins; reduced divider width to 80%/16rem; quiet radial ivory field inside frame |
| Scratch | Strong card motif requires room around functional interaction | Balanced section padding; minimum 44px action targets |
| Countdown | Unit labels should visually separate from numerals | Slightly larger numerals and explicit label top spacing |
| Events | Arch, urn and event information already supply visual richness | Remove extra botanical watermark behind event section; improve event spacing, title leading, venue/note rhythm |
| RSVP | Form should be calmer and easy to tap | Remove margin ornament; 48px fields/choices, subdued field fill, disabled feedback |
| Closing | Already has dark olive paper, brass vessel and typography | Remove extra watermark; slightly enlarge vessel, constrain line measure and preserve dark closure |

## Motion and microinteractions

- Existing V3 scroll settlement/stagger retained; V4 does not add another reveal system.
- Existing focus/hover/pressed responses retained; V4 improves target dimensions and field states.
- New swatch hover effect only runs on fine pointers; palette meaning remains available through accessible image labels.
- Reduced motion still disables V3 transitions/animations and explicitly disables V4 swatch/field movement.
- V4 enhancement styles never set content to opacity zero.

## Implementation files

- `mithril/assets/css/refinement-v4.css`
- `mithril/assets/js/refinement-v4.js`
- `olive/assets/css/refinement-v4.css`
- `olive/assets/js/refinement-v4.js`
- Both template indexes load their new files with `?v=4`.
- Section classes derive from actual media/form contents; no positional nth-child dependency added.
- No editing of original obfuscated app, V3 playback, configs, media paths or central tracker.

## Checks

- Both new JS files pass `node --check`.
- Collection media checker reports zero missing config media paths across all eight templates.
- Referenced raster images already exist and were checked in the V2 asset pass.
- Root browser pass requested for final portrait arch, full fashion plate, venue sizing, form targets and Olive event/footer spacing at narrow and desktop widths.
- No child browser access available; screenshots/viewport checks are not claimed here.

## Actual screenshot review follow-up

Root supplied mobile section captures under `output/v4-section-review/`. Reviewed both contact sheets and all individual non-hero sections (plus Olive hero) using local image inspection.

- Mithril portrait occupied only approximately 150px of the mobile width. Enlarged its real `div[data-g]` frame to `min(70vw,18rem)` and matched both image/border arch radii.
- Mithril countdown unit labels crowded the following crystal chapter. Added 1.75rem bottom padding and stronger .65rem labels.
- Mithril invitation script names, venue copy/time and RSVP placeholders were too pale. Added scoped antique-bronze colors and explicit full-opacity placeholder text.
- Olive's countdown lower-right sprig overlapped the seconds label. Reduced it to 6rem and moved it outward/down; expanded frame bottom padding; removed duplicate watermark in that section.
- Olive's dark-arch date and action labels benefited from stronger ivory/gold contrast. Adjusted only those labels and button borders.
- Olive invitation, hero, scratch, form and closing already form a coherent complete composition; no extra decorative layers added after inspecting them.
- Mithril RSVP DOM confirmed direct swag image with transparent lower canvas; constrained to 5rem with top-aligned cover crop, removing excess blank space.
- Root confirmed faint input text was a negative-z floating label hidden behind the filled input background. Raised only `label[for]` to z-index 1, pointer-transparent, with stronger bronze; preserved existing focus/float behavior.

These screenshot-led CSS updates require root recapture/read-back before final visual acceptance. No playback, original app, index or config changed in this follow-up.
