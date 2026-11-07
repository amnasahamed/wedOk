# Amber and Ruby — backgrounds, motion and interaction

Updated: 6 November 2026. Workstream: amber_ruby.

## Implemented

Both templates now load dedicated `assets/css/v3-motion.css?v=3.1` and `assets/js/v3-motion.js?v=3` after their existing renderer/refinement styles.

## Final V3 opener integration

- Main workstream generated optimized text-free MiniMax opening films and matching posters.
- Amber/Ruby configs now use `./assets/video/opening-v3.mp4` and `./assets/images/opening-poster-v3.webp`.
- Original films and V2 extracted posters retained in their prior locations.
- Both HTML files contain an independent `.v3-opening-cue` with a clear circular play affordance and “Tap to open” text, above the film. The cue lives outside the original renderer-owned `#openingMark`, so renderer updates cannot clear its text.
- Original empty opening mark hidden to avoid duplicate circles. New cue fades away with `.hero.is-open`; existing click and keyboard entry remain attached to `#hero`.
- Cue has pointer-events disabled so all input reaches the existing hero control, whose accessible label already explains opening the invitation.
- Config and stylesheet query versions increased to 3.1.
- Root verified new Amber film plays to completion at 390px width and external cue works. Its brighter final scene required a stronger open-state warm-brown gradient scrim; Ruby received corresponding deep-ruby scrim. Family/welcome/closing copy opacity raised to full and subtle text shadow added. Stylesheet cache version now 3.2; closed opener artwork keeps its prior veil.
- Config JS syntax checks pass; configured video/poster paths exist; representative film and poster HTTP requests return 200.

### Amber

- Warm champagne paper surface: fine low-contrast horizontal fiber texture, peach glow at one corner and muted sage/champagne tone at the other.
- Existing generated ivory/peach floral raster reused as translucent botanical shadows along welcome and gifts margins. Large scale, cropped framing and clear central text space.
- Decorative opacity breathes gently over 18 seconds, only while the ornament intersects the viewport.
- Soft editorial gallery shadow, restrained 7-second photographic push and crossfade.
- Warm brown focus rings and subtle paper-colored input focus surface.

### Ruby

- Ivory supporting sections gain very fine antique-gold diagonal lattice, ruby-tinted corner depth and gold atmospheric light.
- Existing generated dark-red floral raster reused as restrained low-opacity velvet-like botanical shadows, opposite composition from Amber.
- Decorative glow breathes over 22 seconds while visible; lower contrast preserves the ruby/gold photographic hierarchy.
- Richer gallery shadow and antique-gold inset framing, slower 8-second image push, deeper event-card shadows.
- Gold focus rings and ruby input accent feedback.

### Shared interaction behavior

- Existing reveal content is explicitly visible by default. New entrance motion runs through Web Animations only when an element enters the viewport; script failure leaves readable content.
- Section headings, welcome copy, gallery, timeline rows, event cards, dress/gift copy and closing panel receive one-time restrained staggered entrances.
- Existing `.reveal` transitions disabled to avoid stacking two entrance systems.
- Buttons retain meaningful normal states and gain pointer/keyboard pressed feedback, focus outlines, and hover lift only on devices that support hover.
- Gallery dot hit areas enlarged to 22px.
- Revealed scratch surface gains a restrained warm inset glow. Existing reveal interaction and calendar menu remain owned by original renderer.
- Input focus changes background and underline shadow gently.
- Reduced-motion preference disables decorative animation/transitions/image zoom and skips script animations. Content stays visible; controls retain focus outlines.
- Decorative assets have `aria-hidden`, no pointer input, and remain under foreground content.

## Files

Further section-specific V4 polish is documented in `V4_AMBER_RUBY_AUDIT.md`. V4 adds supplementary CSS only; root's V3.3 hero flicker fixes remain untouched.

- `amber/assets/css/v3-motion.css`
- `amber/assets/js/v3-motion.js`
- `ruby/assets/css/v3-motion.css`
- `ruby/assets/js/v3-motion.js`
- Link additions in `amber/index.html` and `ruby/index.html`.

## Verification

- [x] JS syntax passes `node --check` for both new scripts.
- [x] New stylesheet/script endpoints return HTTP 200 from local server.
- [x] Referenced versioned botanical raster paths exist from V2 production.
- [x] No image generation performed for this motion phase. Existing assets were generated through the built-in ChatGPT image tool.
- [x] Final main-generated MiniMax video/poster paths integrated and checked; no new media generation performed by this workstream in the final integration phase.
- [ ] Root final browser check of backgrounds, pressed/focus behavior, gallery transitions and reduced-motion appearance.

## QA notes

Child browser session previously reported IAB unavailable, so root owns visual verification. Preview `/amber/` and `/ruby/`; activate `#hero` to enter. Useful targets: `.welcome-section`, `.gallery-frame`, `#scratchCanvas`, `.event-list article`, `.calendar-cta`, RSVP inputs. The new decoration stays within existing clipped main layout.
