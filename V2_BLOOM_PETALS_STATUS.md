# Bloom — V2 animated petals

Completed 6 November 2026 by main workstream.

- Generated seven individual transparent raster artworks with the built-in image tool.
- PNG masters: `bloom/assets/images/petal0-v2.png` through `petal6-v2.png`.
- Optimized alpha WebP delivery: matching `-v2.webp` filenames, 256×256; original live filenames also updated.
- V1 image originals preserved by botanical workstream under `assets/images/v1/`.
- V1 animation script preserved as `assets/js/wed-petals-v1.js`.
- Animation references now select distinct `-v2.webp` URLs; script cache version updated.
- Existing particle count, timing, physics and reduced-motion behavior preserved.

## Prompt set

Shared prompt: isolated single botanical fragment for falling-petal animation; refined manuscript watercolor and fine vein linework; natural asymmetry, subtle pigment texture, readable at24px, centered square transparent alpha canvas; no background, stems, leaves, text, watermark or cast shadow.

| Index | Distinct subject |
|---|---|
| 0 | Broad curved pale-blush desi-rose petal, translucent ivory-pink edge |
| 1 | Rounded oxblood rose petal with folded edge and muted burgundy pigment |
| 2 | Narrow curled coral pomegranate petal in side profile |
| 3 | Tiny ivory jasmine fragment with three connected petals |
| 4 | Asymmetric folded deep-coral rose petal |
| 5 | Gently curled pale ivory/blush rose petal |
| 6 | Narrow elongated warm-ivory tuberose petal |

Generated outputs visually inspected. Animation script syntax passes. An isolated runtime harness invoked the actual animation initialization and confirmed all seven emitted `-v2.webp` paths resolve to existing files. Fixed the obfuscated decoder's padding handling after the harness detected a stray trailing character. Script cache version is now3. This verifies source loading paths; it is not a frame-by-frame browser physics audit.
