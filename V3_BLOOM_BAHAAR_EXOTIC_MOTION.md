# V3 atmosphere and interaction implementation

Updated 6 November 2026. Scope: Bloom, Bahaar and Exotic only. Main workstream owns all video changes. No video configuration paths changed here.

## Implemented

### Bloom

- Layered manuscript paper with faint sage and blush light pools, retaining generated paper texture.
- Very slow light wash crossing the paper; gentle independent botanical-margin rotation.
- One-time heading emphasis on sections entering the viewport; existing petals/reveal logic retained.
- Button lift, tactile pressed feedback and visible keyboard focus.
- Files: `bloom/assets/css/v3-atmosphere.css`, `bloom/assets/js/v3-atmosphere.js`; linked in index.html.

### Bahaar

- Airy spring gradients on light sections, avoiding the existing dark scratch section's stippled surface.
- Gallery-side atmospheric floral haze from its own generated bouquet photograph, softly masked.
- Active-gallery image develops a gentle 2.5% zoom, preserving its portrait-safe frame.
- Enlarged gallery-dot touch targets and visible active indicator.
- Event cards lift on pointer hover, button press feedback, visible keyboard focus, staggered kicker/heading emphasis.
- Files: `bahaar/src/v3-atmosphere.css`, `bahaar/src/v3-atmosphere.js`; linked in index.html.

### Exotic

- Warm ivory editorial surfaces with restrained emerald/brass depth, while keeping photographic hero dark.
- Slow translucent lantern-light wash across the hero photo, quieter venue glow.
- Photo detail hover emphasis and brass shadow glints, tactile button pressed states, visible focus.
- One-time heading sharpness/opacity emphasis on scroll.
- Files: `exotic/assets/css/v3-atmosphere.css`, `exotic/assets/js/v3-atmosphere.js`; linked in index.html.

## Motion and accessibility rules

- No content is persistently hidden by new scripts. Heading effects begin at72–78% opacity and finish at100%; no hidden-state class is required to read content.
- Existing transform-based reveal systems are not replaced. Small movement uses the independent translate property; Exotic uses slight blur/opacity only.
- Entry observation is one-shot with WeakSet registration, including sections created by the original renderer after load.
- Decorative layers ignore pointer events. Hover effects are restricted to hover-capable devices; pressed and focus feedback work separately.
- All new perpetual animations and transitions are disabled under prefers-reduced-motion. JS skips entry animations when reduced motion is active.
- No new images generated in this phase; only built-in-generated existing raster artwork used. Bahaar uses its own bouquet asset, with no Zareen ornament or layout reuse.

## Verification

- All three new scripts pass Node syntax checks.
- Isolated runtime harness tested each script with dynamically inserted sections: section registration occurs once even after repeated mutation callbacks; heading animation occurs in normal motion mode and never runs in reduced-motion mode.
- Inspected original pseudo-elements and avoided Bahaar's existing scratch texture to prevent animation/background conflicts.
- CSS/JS links confirmed in all three HTML entry points.
- Browser verification attempted, but CUA reported Browser is not available for both retained handles and a new in-app tab. No viewport changes were made in this phase. Visual rendering and hover/touch checks remain pending in the parent workstream; do not treat the isolated harness as a visual animation audit.

## Preservation

All V2 asset families and interactions remain. Existing videos and their generation are managed by the main workstream. Changes are isolated in separate V3 files for simple review and adjustment.

## Final V3 opening video integration

- Main generated optimized five-second opening films and matching raster posters; no generation performed in this integration step.
- Bloom static video src/poster and image preload now use `assets/video/opening-v3.mp4` and `assets/images/opening-poster-v3.webp`.
- Bahaar canonical config, V2 config and new V3 config point to those matching files. New `app-v3.js` imports `config-v3.js` for fresh module cache delivery; original and V2 entry scripts retained. HTML loads app-v3.js?v=3.
- Bahaar's external HTML/CSS Tap to open cue is attached to its real opening button; text fades with the existing opening button state and its accessible name remains Open wedding invitation.
- Bahaar namesAppearAtSeconds changed from6 to3.8, placing the title reveal before the new5.17s film ends.
- Exotic coverVideo/coverPoster point to V3 delivery paths; config script query refreshed to?v=3.
- Original films and V2 sources remain present. All three optimized films report5.166667s through ffprobe. New Bahaar modules and Exotic config pass syntax checks. All referenced new videos/posters exist and are nonempty.
- Visual opening and playback checks remain with the parent workstream because CUA was unavailable here.

## Corrections from parent mobile QA

- Bloom's mobile page previously used100vw inside a viewport with a vertical scrollbar. Set manuscript column to min(100%,30rem), cap root/body width and clip horizontal overflow. Decorative layers remain within the page.
- Bloom section headings explicitly retain full opacity and have no handwriting mask, so they remain readable before legacy observers fire. Hero name writing/date reveal shortened to finish around1.2s after entry rather than4.5s.
- Bahaar's final floral scene competed with the title. Added a soft ivory radial backing behind hero content and deeper rose/sage text, preserving the garden edges.
- Exotic's text-free opener now has an external cream/gold Tap to open cue. Its actual coverCard control has role=button, tabindex=0, accessible name, and Enter/Space invoke the existing click action. No duplicate click listener added.
- CSS queries updated to3.2; Exotic enhancement JS query updated to3.2.
- Exotic accessibility script passes syntax and isolated mounting/keyboard harness checks: cue mounts once, Enter and Space each trigger one existing click action, unrelated keys do not trigger.
- Parent performs final rendered verification of these corrections.
