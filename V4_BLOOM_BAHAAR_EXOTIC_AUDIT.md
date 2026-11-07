# V4 premium section audit — Bloom, Bahaar, Exotic

Updated 6 November 2026. Scope excludes Zareen. Each template retains its distinct existing image family and interactions. Recent opening-film cue, text-contrast and timing fixes remain intact.

## Bloom — botanical manuscript

| Section | Finding | Implemented refinement |
|---|---|---|
| Opener/hero | New film and accelerated readable title already integrated | Retained V3 fixes; no unnecessary new overlay |
| Invitation | Long small italic copy needs breathing room |1.16rem body,1.7 line height, stronger spacing around names; balanced label tracking |
| Scratch date | Small date metadata and flat card edge | Larger readable metadata, restrained border/shadow stationery depth |
| Countdown | Labels too small relative to numbers |.65rem labels, tighter tracking, larger2.35rem numbers, light ruled field |
| Celebration chapters | Dense vertical information and delayed handwriting masks | Unmasked event titles, more intentional event spacing, clearer time and note hierarchy,44px-class buttons |
| RSVP (retained) | Fields disappear into paper; focus needs visible context | Faint ivory field surface, fuller input padding, focus fill and keyboard outline on selected-choice controls |
| Closing | English text inherited Amiri nowrap styling | Cormorant paragraph treatment, natural wrapping and1.6–1.7 line spacing |

File: `bloom/assets/css/v4-refinements.css` linked after V3 atmosphere CSS.

## Bahaar — fresh spring garden editorial

| Section | Finding | Implemented refinement |
|---|---|---|
| Opener/hero | New5s film and ivory title backing already fixed | Preserved timing, cue and contrast fixes |
| Welcome | Large display heading and wide prose need balanced rhythm | Balanced heading wrapping/line height, limited welcome prose width |
| Scratch | Existing sage stipple and scratch interaction have distinct identity | Retained; V3 overlays explicitly avoid this background |
| Gallery | Consistent original spring couple series already generated and portrait-safe | Preserved4:5 arch, existing slow image zoom and accessible dot targets |
| Countdown | Fine labels and wide field feel unanchored | Quiet ivory field, bounded width, larger labels with closer tracking |
| Timeline | Flat blush discs compete with copy | Ivory/blush outlined number seals, deeper numeral contrast, softer shadow; improved text rhythm |
| Venue | Only textual sage surface and CSS leaves, no matching photograph | Generated original springgarden venue and inserted real accessible lazy-loaded image above details; arched responsive crop, controlled shadow, brighter readable copy |
| Dress code | Palette lacks interaction or edge definition | Refined swatch borders and restrained hover lift; retained clear suggested-color role |
| Festivities | Small metadata/map/calendar text | Increased action/date labels, improved note line height; retained existing card lift/focus/press behavior |
| Gifts | Flat large blush field | Soft blush gradient and deeper readable supporting text |
| Closing | Long100svh field could feel under-composed | Reduced minimum to85svh, soft ivory atmospheric center, better paragraph rhythm and readable44px back-to-top target |

Files: `bahaar/src/v4-refinements.css`, `bahaar/src/v4-refinements.js`, linked after V3.

### New image provenance

- Provider: ChatGPT built-in image generation only. No Fal image generation.
- PNG master: `bahaar/assets/images/venue-garden-v4.png`.
- Optimized delivery: `bahaar/assets/images/venue-garden-v4.webp` (1536×1024).
- Prompt: original photorealistic springgarden ceremony at an elegant South Asian estate; jasmine canopy between slender natural branches, off-center ivory garden pavilion, blush roses/sweet peas, pistachio greenery, pale diagonal stone path beside reflecting pool, short chair rows, ivory cushions, small brass water bowls. Soft morning light; cream/sage/blush palette; no people/text/watermark or fantasy palace.
- Composition is new and distinct from the previous templates' central symmetrical palace scenes. It supports Bahaar's fresh garden mood.
- Descriptive alt text: “A jasmine canopy and blush flowers beside an ivory garden pavilion.”

## Exotic — dark rose-garden editorial

| Section | Finding | Implemented refinement |
|---|---|---|
| Opener/hero | New film, visible cue and mobile eyebrow fixes already integrated | Preserved accessible opener and cinematic photo identity |
| Invitation and collage | Dramatic photos need calm light chapters | Reduced background gradient intensity, balanced heading/prose wrapping; preserved photographic crops |
| Scratch | Existing smoky foil matches identity | Retained scratch geometry and feedback |
| Countdown/evening | Timings need stable numeral widths | Tabular lining numeral treatment; mobile minimum time column width |
| Venue | Photo requires intentional presentation | Fine radius and restrained photographic shadow; legible heading line height and44px links |
| Attire | Palette content already appropriate | Retained colors, refined surrounding section spacing |
| Couple wish | Existing English wrap/font issue already fixed | Retained Cormorant, limited line width, no new decoration competing with text |
| RSVP (retained) | Focus/selection needs clear feedback | Gentle focus fill/shadow, visible keyboard outline on hidden-radio wrapper |
| Closing | Full photographic ending is already strong | Preserved dramatic image; no extra competing decoration |

File: `exotic/assets/css/v4-refinements.css` linked after V3.

## Verification and remaining review

- All V4 references added to correct HTML entry points; no video config paths edited.
- Bahaar V4 injection script passes Node syntax.
- Isolated DOM harness verifies venue mounts once across repeated mutation callbacks, uses correct delivery path and descriptive alt text.
- Local server returns HTTP 200 for Bahaar's new venue and Bloom/Exotic V4 CSS.
- New image visually inspected from generation output; coherent light/color, credible architecture and no obvious text or anatomy artifacts.
- Hover enhancements are inside hover-capable media queries; reduced-motion rules suppress added transitions. Existing keyboard/pressed feedback retained.
- Root owns final rendered section captures and cross-template review; browser checks of these new V4 files are pending there. Static checks and isolated harness are not a substitute for final crop/contrast review at390px.
- RSVP remains scoped according to current template configuration; no additional collection-wide removal inferred.

## Full screenshot review and corrections (4.1)

Inspected every full-size file under `output/v4-section-review/bloom/` (7 sections), `bahaar/` (11 sections), and `exotic/` (12 captured regions), plus all three contact sheets. Review included each hero, all copy/card sections, forms and endings.

- Bloom hero, invitation, date card, countdown and RSVP remain coherent and readable. Celebration margin stems crossed the first event's note: reduced side-vine sizes and moved their layer behind body copy. Closing paper showed much heavier raw texture than the rest of the manuscript: added the same quiet ivory veil over that texture.
- Bahaar hero title backing now reads clearly; gallery shows full faces; timetable, attire, festivities, gifts and closing are balanced. Venue image was 1024 CSS pixels tall because the HTML height attribute remained authoritative while only width/aspect-ratio changed. Added explicit height:auto so the existing mobile1.12 aspect ratio produces a compact roughly270px image rather than a narrow thousand-pixel crop. Root recaptures final venue.
- Exotic hero, invitation, Polaroid collage, date, countdown, venue, attire and couple-wish content were reviewed. Evening ornament overlapped times; reduced ornament presence and shifted it farther into margin. Gave this chapter a selective emerald/cream surface, reconnecting the light editorial pages to the dark garden imagery.
- Exotic's empty former translation interlude contributes only a blank strip. The enhancement script hides it only when both text and media/interactive content are absent; no new copy is invented.
- Exotic closing capture was blank because legacy data-m elements remove their visible state after leaving viewport. Closing and its descendants now remain visible; the existing closing photograph is also the section's fallback background. Root confirms actual section-class match and recaptures final region.
- Exotic RSVP labels/placeholders and selected option now have stronger readable contrast.
- All changed CSS entry queries refreshed to4.1. Exotic enhancement script refreshed to4.1. Syntax checked after the empty-interlude adjustment.

Contact-sheet labels for Exotic's sections4–8 were offset; findings above use actual content rather than those stale labels. Root owns corrected capture metadata.

### Exotic original botanical margin asset (4.2)

Root supplied a new original transparent ChatGPT-generated pomegranate branch (`exotic/assets/images/pomegranate-branch-v4.png` and optimized WebP). Inspected the artwork before integrating. Applied only to invitation section identified by `.rs-monogram` and couple-wish section identified by `.rs-dua`, clipped at opposing outer margins at14–16% opacity. Decorative layers ignore pointer events and sit behind text within isolated stacking contexts. No new perpetual animation is added; existing atmosphere provides movement while the botanical remains stable. Programme and RSVP remain free of this branch. Prompt provenance is maintained by root.
