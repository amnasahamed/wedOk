# Amber / Ruby V2 production

Updated 6 November 2026. Owner: parallel workstream amber_ruby.

## Status

- Amber: all decorative still replacements and all three formerly missing gallery files generated and integrated. Readability/crop refinements implemented. Root browser verification in progress.
- Ruby: all decorative still replacements and gallery replacement generated and integrated. Readability/crop refinements implemented. Root browser verification in progress.
- Videos: retaining current motion while still assets and layout are rebuilt; posters will be extracted from their existing video sources.
- Verification: static file references, JS config syntax, HTTP media response and alpha checks passed. Child CUA browser unavailable; root owns mobile/desktop browser checks.

## Decisions

- Preserve functional scratch masks and their geometry unless replacement frame requires a new controlled opening.
- Replace decorative files at existing paths after backing up V1, because app scripts are obfuscated.
- Resolve missing Amber gallery files with a coordinated champagne courtyard / cultural details / dinner series.
- All artwork generation uses built-in image tool. PNG masters and WebP delivery retained.

## Generated assets

| Template | Asset | Prompt direction | State |
|---|---|---|---|
| Amber | floral-divider | Airy ivory/peach roses, mogra, antique-gold gota leaves, transparent landscape 3:1 | Integrated |

## Integrated assets (built-in image generation)

All paths are relative to the template directory. PNG masters are preserved. Delivery WebP files use quality 90–91 and full alpha quality for transparent artwork.

| Template | Master | Delivery/live path | Final prompt direction |
|---|---|---|---|
| Amber | `assets/images/floral-divider-v2.png` | `assets/images/floral-divider.webp` | Transparent 3:1 airy ivory/peach roses, mogra, antique-gold gota leaves; realistic petals and candlelit amber highlights, no berries/holly/rococo |
| Amber | `assets/images/scratch-frame-v2.png` | `assets/images/scratch-frame.webp` | Transparent 3:2 warm ivory sandstone jharokha, thin gold floral inlay, mogra, two brass lanterns, broad clear center, no chandelier/European scrolls |
| Amber | `media/gallery/01-v2.png` | `media/gallery/01.webp` | Photographic 3:2 candlelit sandstone haveli wedding stage, ivory/peach roses, mogra, brass lanterns, champagne textiles and blue-hour light |
| Amber | `media/gallery/02-v2.png` | `media/gallery/02.webp` | Photographic 3:2 bridal mehndi hands and kundan ring on pale-peach embroidered silk, mogra gajra, matching courtyard candlelight; natural anatomy |
| Amber | `media/gallery/03-v2.png` | `media/gallery/03.webp` | Photographic 3:2 courtyard dinner, ivory silk linen, peach napkins, engraved brass thalis, mogra and carved chairs, matching sandstone setting/grade |
| Ruby | `assets/images/floral-divider-v2.png` | `assets/images/floral-divider.webp` | Transparent 3:1 deep ruby roses, burgundy dahlias, ivory mogra, dark foliage, gold zardozi leaves, dramatic warm rim light; no holly/berries |
| Ruby | `assets/images/scratch-frame-v2.png` | `assets/images/scratch-frame.webp` | Transparent 8:5 ruby velvet jharokha surround, antique-gold scalloped arch, zardozi, small roses/mogra and brass lanterns; broad clear center |
| Ruby | `media/gallery/03-v2.png` | `media/gallery/03.webp` | Photographic 3:2 natural bride's mehndi hand resting in groom's palm, ruby zardozi silk, kundan, ivory sherwani, candlelit garden, realistic skin/anatomy |

## Layout and interaction

- Existing composition, animations and interactions preserved; no Zareen layout or asset reuse.
- Amber keeps warm champagne/courtyard editorial identity; Ruby keeps deep velvet ceremonial drama.
- Added per-template `assets/css/v2.css` loaded after original stylesheet.
- Floral divider scale reduced to 760px desktop Amber / 800px Ruby, responsive below those limits.
- Gallery uses 3:2 desktop, 4:5 mobile; image filters removed to preserve authored color grade, crop-safe positioning applied.
- Improved welcome body copy, countdown label contrast and size; Amber signatures darkened after root QA feedback.
- Existing `scratch-window.png` masks and canvas interaction retained. New frames use original native aspect ratios; date text safe region adjusted within clear centers.
- Videos retained. Exact first-frame posters extracted to `media/intro-poster-v2.png` and `.webp`, configured in media settings.
- V1 original decorative images/masks backed up in `assets/images/v1/`. Ruby original gallery backed up at `media/gallery/v1/03.webp`.
- Cache-safe final references use `floral-divider-v2.webp`, `scratch-frame-v2.webp` and gallery `01-v2.webp` / `02-v2.webp` / `03-v2.webp`. Earlier live-path copies remain present, while HTML/config now explicitly target versioned delivery files.
- RSVP preserved: removal authorization only applied to Zareen.

## Checks and remaining verification

- [x] Both JS configs pass `node --check`.
- [x] All configured video, poster, music and gallery paths exist.
- [x] Amber gallery HTTP request returns 200.
- [x] Both generated scratch frames report alpha.
- [x] Generated images visually inspected from image-tool outputs: coherent palettes, photographic details and open frame centers.
- [x] Root Amber desktop pass: no missing images or horizontal overflow; subsequent readability feedback addressed.
- [x] Root Amber scratch Enter reveal verified clean within replacement frame.
- [x] Root Ruby desktop pass: no missing media or horizontal overflow; hand gallery visually coherent.
- [x] Fixed root-reported Ruby floral overlap with Our Story kicker: shifted divider upward and added responsive content clearance in both templates.
- [x] Versioned all new image delivery references to prevent stale V1 media caches.
- [ ] Root final narrow-mobile and desktop review including scratch reveal geometry and gallery cropping.
- [ ] Explicit user approval (not inferred from generation or integration).

## Browser verification handoff

- URLs: `http://localhost:4173/amber/` and `/ruby/`.
- Entrance: `#hero` role button; video `#introVideo`.
- Scratch: `#date`, `#scratchCard`, `#scratchCanvas`.
- Gallery: `.gallery-frame`, `.gallery-slide img`.
- Current CSS/cache versions: original `styles.css?v=2`, new `v2.css?v=2`, config `config.js?v=2`.
