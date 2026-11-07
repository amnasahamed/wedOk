# Seven-template section review

6 November 2026. Zareen is complete and was excluded from this pass. All seven remaining templates retain their own visual identity.

The remaining desktop/mobile verification is now completed and recorded in [V5_DEVICE_QA.md](V5_DEVICE_QA.md), with [updated screenshots](http://localhost:4173/output/v5-device-qa/).

## Review evidence

- [Open the screenshot gallery](http://localhost:4173/output/v4-section-review/): **70 individual section captures plus seven opening views**, at a 390 × 844 mobile viewport. Each gallery image opens its full-size section capture.
- [Live collection](http://localhost:4173/V2_REVIEW.html).
- Screenshots are genuine CUA browser captures. The page was scrolled through in overlapping steps to load lazy images and trigger section arrivals, then captured as a full page and split using measured section bounds.
- Initial contact sheets/full-page captures are retained in `output/v4-section-review/initial/` for comparison. Final section crops, full-page captures, measured bounds and contact sheets are in `output/v4-section-review/`.

## Final section coverage and improvements

| Template | Sections | Main refinements from the actual screenshots |
|---|---:|---|
| Amber | 12 | Added the previously unused three-photo editorial gallery, mobile swipe/dots/arrow keys, matching courtyard venue surface, readable programme metadata, fitted countdown heading, textile-like swatches, quieter chapter transitions and larger controls |
| Ruby | 12 | Corrected unreadable gift copy on velvet, fitted countdown heading, richer venue depth, clearer time/action labels, better gallery targets, quieter floral repetition and form sizing |
| Bahaar | 11 | Original ChatGPT-generated garden venue photograph, corrected responsive image height, clearer spring-green venue typography, programme markers, colour swatch feedback, event and closing rhythm |
| Bloom | 7 | Manuscript typography, clearer countdown/date metadata, vines moved away from event copy, softer closing paper, choice/focus feedback and larger actions |
| Mithril | 10 | Larger arched portrait, clearer invitation/time/countdown hierarchy, breathing room before crystal interlude, complete fashion silhouettes, cropped empty swag area and readable floating form labels |
| Olive | 7 | Refined invitation hierarchy, prompt hero-title arrival after opening, clear countdown label/branch separation, calmer event/form backgrounds, stronger event dates/actions, larger controls and warm linen continuity |
| Exotic | 11 | Original transparent pomegranate margin art, selective emerald programme surface with cream labels, empty interlude removed, stronger RSVP contrast, closing photograph remains visible after scrolling |

Detailed findings for every section:

- [Amber and Ruby](V4_AMBER_RUBY_AUDIT.md).
- [Mithril and Olive](V4_MITHRIL_OLIVE_AUDIT.md).
- [Bloom, Bahaar and Exotic](V4_BLOOM_BAHAAR_EXOTIC_AUDIT.md).

## Playback corrections

- Amber/Ruby previously combined the film's camera motion with a second CSS zoom, a blur/scale title entrance and a changing veil. Their video layers are now stationary, the veil stays constant, and titles fade in after the opening film. Preloading changed from metadata-only to auto. New artwork and original films are preserved.
- Mithril previously preplayed, paused and reset the next video, then enlarged the departing cover to 150%. The revised `app-playback-v4.js` leaves the next film at its first frame until handoff, waits for a presented frame with `requestVideoFrameCallback`, and crossfades stationary layers. A bounded fallback uses the matching first-frame poster. Original `app.js` is retained.
- Mithril's internal hero poster is now extracted from that actual film. Its opening film plays at natural speed rather than 1.35×.

## Interaction and verification

- Amber's gallery dot navigation and keyboard ArrowRight were exercised: second and third slides reached exactly one and two track-width offsets, and `aria-pressed` followed the selected slide.
- Amber's desktop gallery was checked at 1280px: three equal columns of approximately 363px, all photographs visible, no horizontal page overflow.
- Mithril name field was clicked and filled locally: floating label remained readable above the field, with bronze colour, z-index 1, 0.75 scale and -24px translation. No form submission was made.
- All seven final captures reported zero missing image elements and no horizontal document overflow at 390px. Browser error logs were empty in the inspected pages.
- New/changed scripts pass syntax checks. The collection local-media checker reports zero missing references.
- Mithril handoff self-check passed: no hero preplay/reset, next-frame gating, repeated end events trigger only one transition.
- Existing microinteractions include scratch reveals, scroll arrivals, botanical atmosphere, photo emphasis, touch/keyboard pressed states, focus rings and field/choice feedback. New gallery navigation and refined target sizes complement them. Reduced-motion rules are retained; no new endless reveal or hidden content dependency was added.

This is a completed targeted mobile visual review and implementation pass. It is not an exhaustive device/browser certification or final user approval.

## New original art provenance

All still-image generation in this pass used ChatGPT's built-in image generation. No Fal image generation was used.

Bahaar: `bahaar/assets/images/venue-garden-v4.png` master and `.webp` delivery. Original spring garden ceremony direction and full asset notes are in the three-template audit.

Exotic: `exotic/assets/images/pomegranate-branch-v4.png` master and `.webp` delivery. Transparent RGBA raster, 1254 × 1254. Built-in generation source preserved at `/Users/amnas/.codex/generated_images/01a1af1f-dbb7-7281-b33b-6ba3a94f83bd/exec-36d94f0f-a695-458d-bd3a-a929b02bdff8.png`.

Exotic prompt: Create one exquisite transparent-background raster decorative botanical corner asset for a luxury editorial wedding invitation called Exotic. Original creative artwork, not a copy of any existing invitation. A delicate asymmetrical pomegranate branch grows diagonally from the lower-left corner toward the upper-right with two tiny deep ruby pomegranate fruits, a few midnight emerald slender leaves, fine antique-brass engraved stems and sparse seed-like gold dots. Fine Persian botanical engraving meets hand-painted miniature illustration, sophisticated cultural craft, restrained composition, beautiful fine ink outlines, soft muted warm gold rather than bright yellow, tiny oxblood highlights. Predominantly airy thin line drawing with only small pockets of pigment, no heavy floral bunch, no background, no cream rectangle, no shadow, no framing border, no text or lettering. Branch fills about 70 percent of a square transparent canvas with plentiful transparent negative space. Useful as subtle page-margin art on warm ivory paper; crisp 1024px artwork.
