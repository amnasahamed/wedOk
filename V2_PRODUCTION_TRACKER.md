## Collection branding · 6 November 2026

- [x] Confirmed scope: collection identities and visible wordmarks; Zareen branding only.
- [x] Named all eight distinct designs and updated collection cards, browser titles and design metadata.
- [x] Added matching, accessible typographic closing signatures.
- [x] Preserved original URLs, couple names and all completed imagery/playback behavior.
- [x] Live desktop/mobile branding review, configuration syntax, local assets and playback regression checks passed.
- Reference: [BRANDING.md](BRANDING.md).

# Invitation Collection — V2 Production Tracker

Last updated: 6 November 2026 (Asia/Kolkata)

## Indian locations update

The seven active templates now use Indian venues/cities throughout their location data, map queries and calendar locations. Calendar/countdown offsets changed to IST (+05:30), preserving displayed local times. Zareen remains unchanged. Mapping, official venue references and validation: [INDIAN_LOCATIONS.md](INDIAN_LOCATIONS.md). Previous QA screenshots predate this text-only update; current mobile location captures are in `output/india-locations/`.

## V5 desktop/mobile QA completed — Zareen untouched

All seven remaining templates passed **21 layout/playback cases** at 1440×900, 375×812 and 430×932, plus seven live portrait–landscape playback checks. All 210 section captures were reviewed. Final checks show no page overflow, missing image elements or browser console errors. Opening timing/seek/zoom/race issues, recovery paths and additional control/layout defects were fixed and rechecked.

Results, exact fixes, repeatable checks and scope limits: [V5_DEVICE_QA.md](V5_DEVICE_QA.md). [Open verification screenshots](http://localhost:4173/output/v5-device-qa/). Zareen's 82 files match their pre-test SHA-256 hashes exactly. Physical-device/multi-browser verification remains outside this local-browser test scope.

## V4 section review completed — seven templates, Zareen excluded

User confirmed Zareen is complete and requested screenshots of every section of the remaining seven, followed by further premium asset/layout/interaction refinements. This pass is implemented and visually reviewed. **70 final section captures plus seven opening views** are available in the [screenshot gallery](http://localhost:4173/output/v4-section-review/). Final counts: Amber12, Ruby12, Bahaar11, Bloom7, Mithril10, Olive7, Exotic11.

Full findings, playback corrections, new original asset provenance, verification and limits: [V4_SECTION_REVIEW.md](V4_SECTION_REVIEW.md). All seven final mobile captures have no missing images or horizontal overflow; inspected error logs are empty. Amber gallery dot/keyboard navigation and Mithril floating labels were exercised. Additional desktop/device coverage and final user approval remain separate.

## Purpose and source of truth

## Active V3 experience expansion

User requested a further pass for new videos, beautiful backgrounds, animation and microinteractions across all eight. This is a new experience layer beyond V2 still-image production; do not conflate V2 implementation completion with V3 completion.

- All IMAGE generation must use ChatGPT's built-in image tool. Fal is authorized only for MiniMax H3 Max VIDEO generation.
- Every generation should be creatively inspired by the template's identity, not a literal copy of the original composition.
- Fresh opening scenes and reveal concepts generated and integrated for Amber, Ruby, Bahaar, Bloom, Mithril, Olive and Exotic. Earlier cleanup variants were superseded by the creative-direction instruction and are not used as final V3 openers. Prompts, request IDs and output paths: [V3_VIDEO_PRODUCTION.md](V3_VIDEO_PRODUCTION.md).
- Distinct experience CSS/JS implemented across all eight: champagne botanical light for Amber, velvet geometry for Ruby, spring haze for Bahaar, manuscript light for Bloom, pearl/sage light for Mithril, linen/sprigs for Olive, emerald/brass depth for Exotic, champagne/floral light for Zareen.
- V3 logs: `V3_MITHRIL_OLIVE_MOTION.md`, `V3_AMBER_RUBY_MOTION.md`, `V3_BLOOM_BAHAAR_EXOTIC_MOTION.md`; Zareen and video production recorded centrally.
- Required checks: readable background stacking, touch/keyboard feedback, no duplicated reveals, offscreen motion paused where relevant, reduced-motion respect, matching video posters, optimized silent delivery, and distinct visual identity.

### V3 integration and targeted verification — 6 November

- Seven fresh opening films integrated, alongside Zareen’s existing upgraded films. All use exact extracted first-frame posters and optimized silent H.264 delivery; original generated masters retained.
- Root browser checked all seven new opening assets at 390px: all reported readyState 4 with no media error. Tap opens each invitation; Amber, Ruby and Bahaar reached their final scenes; Mithril, Olive, Bloom and Exotic completed their cover-to-page transition.
- Mithril’s matching cover poster is separate from its retained internal chandelier hero. Bahaar’s title timing corrected from 6 seconds to 3.8 seconds for its 5.17-second film. External opening cues supplied for Amber, Ruby, Bahaar and Exotic.
- Final-scene readability refinements: stronger warm/dark scrims on Amber/Ruby, ivory backing behind Bahaar text, dark antique-bronze Mithril cover text. Olive/Bloom mobile page sizing corrected; checked 390px pages have no horizontal document overflow.
- Olive/Bloom hero content and section typography visually rechecked after transitions. Zareen desktop hero and configured section order checked; RSVP remains absent. New scripts pass syntax checks, local media checker reports zero missing references across all eight. Workstream harnesses cover one-shot observer registration and reduced-motion behavior.
- This is targeted visual and playback QA, not an exhaustive device/browser matrix or final user approval. Review collection locally at `http://localhost:4173/V2_REVIEW.html`.

Track the visual upgrade of all eight invitation templates from V1 to V2. Update this file as work is completed, reviewed, or redirected. Record actual results separately from planned work; browser verification is not the same as user approval.

- Detailed per-asset audit: [V2_IMAGE_AUDIT.md](V2_IMAGE_AUDIT.md).
- Workspace: `/Users/amnas/Desktop/new designs - production/invitations`.
- Local preview base: `http://localhost:4173/` (requires the local server to be running).
- Working reference: `zareen/`.
- Audit inventory: 71 existing still-image assets and 3 missing Amber gallery references. Functional masks and video posters require special handling; not every file should be regenerated as independent artwork.

## User brief and decisions

- **Explicit user direction, 6 November:** Every template is different. Inspect its own visual look and feel and enhance it; do not make the collection look like Zareen. Zareen sets a quality benchmark only. Preserve each template's distinctive palette, visual medium, composition, interaction and mood. This instruction takes precedence over shared cultural motif suggestions in the earlier audit.

- Upgrade all eight templates with more luxurious, premium, aesthetic, culturally grounded imagery while preserving each template's mood.
- Replace image assets with coordinated families; create additional supporting assets where useful.
- Videos may be retained or improved. User authorized MiniMax H3 Max through Fal for new video generation.
- Review every image within its real layout: quality depends on the complete composition, placement, crop, typography, and spacing.
- Use transparent PNG/WebP botanical artwork for floral flourishes. User explicitly preferred raster artwork over SVG floral line drawings.
- Backgrounds should have subtle geometric detail and floral framing; retain readable, uncluttered text areas.
- Small, faint typography is unacceptable. Use stronger contrast and readable mobile labels.
- Floral margin assets need enough scale and visible area to feel intentional.
- Balance open hero space with restrained monograms where appropriate.
- RSVP removed from Zareen only. No collection-wide RSVP decision has been made.
- Preserve V1 originals and use versioned V2 files or explicit backups for replacements.
- Regional direction currently follows the audit's Mughal/South Asian vocabulary. This is a working creative assumption, not a separately confirmed requirement that every template share identical motifs.

## Collection status

### Active parallel production — 6 November 2026

The user explicitly authorized parallel execution and completion of the collection.

| Workstream | Ownership | Live production log |
|---|---|---|
| Main | Zareen final fixes, collection integration and central tracking | This file |
| Mithril / Olive | Asset generation, integration, layout and verification | `V2_MITHRIL_OLIVE_STATUS.md` |
| Amber / Ruby | Asset generation, missing galleries, frames and verification | `V2_AMBER_RUBY_STATUS.md` |
| Bloom / Bahaar / Exotic | Botanical library, matched galleries, integration and verification | `V2_BLOOM_BAHAAR_EXOTIC_STATUS.md` |

Parallel asset production and integration are complete. Targeted browser checks and source-path validation are recorded below and in the workstream logs. Full user review is pending; narrow-screen coverage limitations are explicit.

Status key: **Audited** = recommendations documented; **In progress** = assets/layout actively revised; **Implemented** = integrated locally; **Verified** = specific checks performed; **Approved** = explicit user acceptance of the complete template.

| Order | Template | Visual direction | Current state | Next action |
|---|---|---|---|---|
| Reference | Zareen | Ivory and gold Mughal moon garden; marble, mogra, jaali, pale blue | Implemented; delivery refinements and responsive checks performed | User review |
| 1 | Mithril | Ivory heirloom key, pearl/crystal, editorial portrait, soft architectural light | V2 integrated; root browser checks performed | Final collection regression review |
| 2 | Olive | Sage stationery, envelope, botanical canopy, aged brass and banquet | V2 integrated; root browser checks performed | Final collection regression review |
| 3 | Amber | Champagne and peach, sandstone, candlelit courtyard | V2 generated and integrated; root browser review performed | Final collection regression review |
| 4 | Ruby | Ruby velvet, antique gold, roses, ceremonial grandeur | V2 generated and integrated; root browser review performed | Final collection regression review |
| 5 | Bloom | Botanical manuscript, coral/oxblood, paper and drifting petals | All17 generated assets integrated; desktop browser and petal source initialization verified | User review; additional narrow-device visual pass if needed |
| 6 | Bahaar | Spring garden editorial; blush, ivory, pistachio | Five photographs integrated; desktop crop/cache/source checks verified | User review; additional narrow-device visual pass if needed |
| 7 | Exotic | Emerald, oxblood, cinematic evening garden editorial | Six stills integrated; desktop and375px mobile checks verified | User review |

V2 still-image production and integration are complete across all eight. The table records implementation and targeted checks; final user approval remains separate.

## Repeatable production workflow

- [ ] Inspect each original asset and its actual desktop/mobile placement.
- [ ] Record palette, rendering style, cultural details, composition constraints, and asset dimensions.
- [ ] Generate coordinated hero/venue/gallery anchors first.
- [ ] Generate supporting illustrations, raster florals, dividers, textures, and dress-code assets as needed.
- [ ] Preserve identity and wardrobe continuity across photographic sets.
- [ ] Inspect generated assets for anatomy, architectural drift, artifacts, alpha edges and cropping.
- [ ] Generate opener/hero videos where justified; preserve starting and ending compositions.
- [ ] Extract posters from final video frames; check poster-to-playback continuity.
- [ ] Check audio against existing background music; preserve source render separately if muting delivery video.
- [ ] Integrate assets with typography, contrast, rhythm, responsive layout and intentional negative space.
- [ ] Verify all sections at narrow mobile, wider mobile, tablet and desktop widths.
- [ ] Verify opener, music, scratch card, calendar, location and any retained forms.
- [ ] Check file references, missing media, loading weight and horizontal overflow.
- [ ] Record prompt, provider/model, job IDs, final files, known limitations and user feedback.
- [ ] Update this tracker and the detailed audit before handoff.

## Zareen implementation record

### Images and assets implemented

- [x] Venue illustration: `zareen/assets/images/venue-v2.png` and `.webp`.
- [x] Bouquet, rings and dinner illustrations: `bouquet-v2`, `rings-v2`, `dinner-v2` (PNG masters and WebP delivery).
- [x] Dress-code fashion plate: `dress-code-desi-v2` (PNG/WebP).
- [x] Cover cartouche: `cover-v2` (PNG/WebP); live decorative path `cover.webp` updated.
- [x] Monogram wreath: `logo-cover-v2` (PNG/WebP); live path `logo-cover.webp` updated.
- [x] Countdown medallion: `countdown-v2` (PNG/WebP); live path `countdown.webp` updated.
- [x] Peacock ornament: `peacock-ornament-v2` (PNG/WebP); live path `doves.webp` updated.
- [x] Floral ornament, divider and closing garland: `floral-ornament-v2`, `ornaments-v2`, `ornament-closing-v2` (PNG/WebP); respective live decorative paths updated.
- [x] Generated closed gate source: `cover-poster-v2-source.png`.
- [x] Raster botanical flourish: `botanical-ink-v2.png` and `.webp`; verified alpha channel.
- [x] Original `botanical-line.svg` no longer referenced for floral margin artwork. File retained.
- [x] Existing-path decorative replacements have `-v1.webp` backups. Config-visible original images remain alongside versioned replacements.

Image generation: built-in image tool. Core direction: luminous ivory/champagne Mughal garden, white marble, jaali, chhatri, mogra/tuberose, pale blue, kundan and fine zari; coordinated realistic gouache for supporting illustrations.

Raster botanical prompt: airy hand-painted jasmine/mogra/tuberose vine, antique-gold ink, light watercolor, sparse leaves, faint dusty-blue accents, transparent background, narrow vertical composition, no text or frame.

### Videos implemented

| Asset | Model / endpoint | Request ID | Delivery |
|---|---|---|---|
| Internal hero | Fal `minimax/h3-max/image-to-video` | `01a1af2d-5c0c-7790-9d57-49f504e7be33` | `assets/video/hero-video-v2.mp4`; 1080×1916, 24fps, approximately 5.18s |
| Tap to Open | Fal `minimax/h3-max/image-to-video` | `01a1af3e-5e49-7c90-8fc9-6d35bd568663` | `assets/video/cover-video-v2.mp4`; 1080×1916, approximately 5.17s; silent delivery |

- [x] Cover opens from the new closed gate to the same garden venue used inside the invitation.
- [x] Cover source with generated audio retained as `cover-video-v2-with-audio.mp4`.
- [x] Original cover video and poster preserved with `-v1` filenames.
- [x] Hero poster: `assets/images/hero-poster-v2.webp`, extracted from final hero video.
- [x] Cover poster: `assets/images/cover-poster-v2.webp`, re-extracted from the finished cover film during final delivery checks.
- [x] Confirmed hero playback is muted in the browser; optimized delivery files also omit audio.
- [x] Created fast-start H.264 web delivery versions: `hero-video-v2-web.mp4` (~3.7MB), `cover-video-v2-web.mp4` (~5.1MB), reduced from ~22MB each. Config now uses these files; source renders remain preserved.

Hero motion prompt: slow stabilized architectural dolly, light garland sway, candle flicker and water ripples; preserve architecture and palette; no people.

Cover motion prompt: symmetrical doors opening with believable weight, centered slow forward camera movement, reveal matching garden, finish on venue reference; no geometry drift or new subjects.

### Layout and styling implemented

- [x] Hero names/divider/date repositioned inside the cartouche.
- [x] Warm ivory page background and deeper brown/gold text.
- [x] Removed stacked double-border section boxes; added restrained gold hairlines.
- [x] Countdown numbers enlarged/darkened; labels enlarged with tighter tracking.
- [x] Reception schedule changed to vertical timeline with circular icon fields and connecting line on mobile.
- [x] Added faint geometric background motif and soft champagne/dusty-blue gradients.
- [x] Replaced SVG botanical margin ornament with transparent raster artwork.
- [x] Added botanicals beside countdown, reception, Good to know and couple wish sections.
- [x] Enlarged lower botanicals to 192×464px at mobile rules, 22% opacity, partially cropped at edges.
- [x] Moved existing monogram to upper sky; added Wedding Reception caption.
- [x] Removed RSVP from configured section list.
- [x] Added CSS/config query versions to refresh changed assets in browser.

Implementation files: `zareen/assets/css/lago.css`, `zareen/assets/css/motion.css`, `zareen/assets/js/config.js`, `zareen/index.html`.

### Verification performed and remaining concerns

- [x] Repeated visual browser checks around a 526px-wide mobile view.
- [x] Confirmed configured V2 image/video sources load locally.
- [x] Inspected generated cover start/middle/end frames and observed opener playback.
- [x] Verified transparent raster asset alpha and non-empty delivery files.
- [x] Confirmed RSVP DOM is absent after opening invitation.
- [x] Confirmed computed countdown styles and raster ornament references.
- [ ] Full final desktop/tablet/narrow-mobile review remains outstanding. Previous broad statements of mobile/desktop verification should not be treated as a completed breakpoint audit.
- [ ] Confirm monogram appearance and caption legibility at all widths; implemented at 84% opacity and roughly 100px wreath width on mobile.
- [x] Replaced position-based section styling with stable `data-section` attributes assigned by `assets/js/layout-v2.js` from configured section keys.
- [ ] Review floral cropping and text clearance at 375–430px widths; recent placement checks used a wider mobile viewport.
- [x] English wish text now receives English language/direction metadata and Cormorant font styling through `layout-v2.js`.
- [ ] Countdown currently shows zero because sample event date (18 October 2026) is past. Change dates only when user supplies intended content or authorizes new sample dates.
- [ ] Geometric motif still uses an SVG data URI in CSS. User's raster preference was applied to florals; clarify only if they request all geometric artwork in raster too.
- [ ] Final user approval of the entire template is pending.

## Feedback history and lessons to carry forward

| User feedback | Implemented response | Production lesson |
|---|---|---|
| Tap-to-open film was still V1 | Generated and integrated V2 cover film | Include entrance experience in template review |
| Hero text placement incorrect | Centered text group inside cartouche safe area | Design around actual asset geometry |
| Background and font colors weak | Ivory background, stronger text colors | Set contrast before adding decoration |
| Countdown and events unattractive | Quieter sections, larger labels, timeline | Review composition, not isolated assets |
| Remove RSVP | Removed from Zareen section list | Keep this decision scoped to Zareen |
| Background too plain | Subtle geometry and atmospheric gradients | Use restrained visual texture |
| Add floral ink artwork | Added margin botanicals | Frame content through open margins |
| Prefer PNG over SVG | Generated transparent raster botanical | Use suitable media for the requested art style |
| Floral implementation too small | Increased size and visible area | Avoid tiny, excessively cropped ornaments |
| Empty hero sky | Added monogram and caption | Use negative space intentionally |

## Next session checklist

1. Consult the detailed workstream logs for completed checks and responsive coverage limits.
2. Review all eight invitations from `http://localhost:4173/V2_REVIEW.html`.
3. Record explicit user feedback and approval separately from implementation/verification.
4. Preserve originals and versioned masters in subsequent revisions.

## Deliverable records

Asset production is integrated across all eight templates. Filesystem inventory contains 69 V2 PNG files: 67 generated image masters plus two extracted PNG video posters. Additional extracted WebP/JPEG posters and optimized WebP delivery files are recorded in workstream logs. Original videos are retained outside Zareen to preserve their individual entrances; Zareen has two new MiniMax H3 Max films.

Final checks so far: all eight configured media scans and HTML/CSS local reference checks pass; no unreplaced visible still slots found by the separate read-only audit. Browser console errors were empty in inspected Zareen, Amber, Ruby, Bahaar, Mithril and Olive tabs. These are implementation and targeted verification results, not user approval or a claim that every possible device was tested.

- [Mithril / Olive](V2_MITHRIL_OLIVE_STATUS.md)
- [Amber / Ruby](V2_AMBER_RUBY_STATUS.md)
- [Bahaar / Exotic / Bloom layout](V2_BLOOM_BAHAAR_EXOTIC_STATUS.md)
- [Bloom botanical family](V2_BLOOM_BOTANICALS_STATUS.md)
- [Bloom animated petals](V2_BLOOM_PETALS_STATUS.md)
- Local collection review hub: [V2_REVIEW.html](V2_REVIEW.html)
- Repeatable file check: `node tools/check-local-assets.mjs` (configured media and HTML/CSS local references; does not replace visual or dynamic app checks).

## Change log

- **Final implementation handoff:** all eight V2 templates integrated, each retaining its own original visual identity. Local collection hub opened at `/V2_REVIEW.html`. File/config scans pass. Bloom's actual particle initialization was exercised in an isolated harness: all seven emitted V2 image paths resolve; an encoded-path padding defect was detected and corrected. Bahaar poster/config modules and Bloom closing paper now use cache-safe versioned URLs. Exotic mobile375px and all six still sources verified; Bahaar/Bloom desktop verified. Narrow-mobile coverage for those latter two remains a documented verification limit, not an unreported production blocker.

- **Mithril / Olive:** 17 independent raster masters, optimized delivery and two exact posters integrated. Root observed distinct retained entrances and layouts, no missing image elements or horizontal overflow in inspected views. Mithril faint date text strengthened after review. Details in `V2_MITHRIL_OLIVE_STATUS.md`.
- **Bloom petals:** seven individual transparent raster fragments generated and integrated with preserved animation physics; masters, versioned WebP and prompt log in `V2_BLOOM_PETALS_STATUS.md`.

- **Parallel production update:** Amber/Ruby integrated eight generated artworks and exact extracted video posters. Amber's three missing galleries resolved. Root browser confirmed scratch reveal geometry, no missing image elements or horizontal overflow in inspected states, and Ruby gallery/floral clearance after refinement. Desktop and ~506px mobile views inspected; do not infer a complete 375px audit from these checks.
- **Zareen delivery update:** optimized video downloads, exact cover poster, stable named section styling, English wish metadata; mobile 390px and tablet768/desktop1440 checks observed no missing images or horizontal overflow. Desktop hero crop adjusted to preserve upper sky and monogram.

- **6 November 2026:** Created central tracker from the asset audit and implementation history. Recorded Zareen's actual changes, known gaps, proposed remaining order and the user's aesthetic preferences.
