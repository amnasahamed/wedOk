# Bloom botanical production

Owner: amber_ruby parallel workstream. Updated 6 November 2026.

Scope: paper texture and non-petal floral raster asset family. Root owns petals; bloom_bahaar_exotic owns CSS QA and opener poster.

Direction: preserve romantic botanical manuscript identity, warm paper, oxblood/coral/blush flowers and sage foliage. Use one fine ink/gouache hand, more breathing room and clearer silhouettes. No Zareen asset reuse.

Status: all 10 non-petal replacement assets generated, visually inspected and integrated. All originals retained in images/v1. PNG masters and versioned WebP delivery files saved in bloom/assets/images. Root/other workstream own final browser/CSS verification.

## Generated asset manifest and prompt set

Generation mode: built-in image tool, one distinct generation call per asset. Shared prompt style: romantic vintage Indo-Persian botanical manuscript ink and muted gouache, one artisanal hand with fine veins, antique pigments, oxblood/coral/blush/ivory/sage palette. Transparent assets explicitly requested actual alpha, no paper/background rectangle, no text/frame/watermark, no photorealism.

| Base filename | Final prompt composition | Output |
|---|---|---|
| cluster | Airy L-shaped corner spray, oxblood desi rose at upper-right elbow, coral pomegranate, ivory jasmine, branches extending left/down, ample empty center | `cluster-v2.png`, `cluster-v2.webp` |
| garland-left | Tall 1:3 left-edge climbing vine, rose/pomegranate/tuberose/jasmine, natural rhythm, concentration at left margin, open inward branches | `garland-left-v2.png`, `garland-left-v2.webp` |
| garland-band | Wide low frieze, central oxblood rose, tiny coral flowers, jasmine and sage stems extending outward with open air | `garland-band-v2.png`, `garland-band-v2.webp` |
| sprig | Tall graceful pomegranate branch, one coral focal bloom, two buds and tiny jasmine, sparse sage leaves, elegant upward motion | `sprig-v2.png`, `sprig-v2.webp` |
| divider | Slim antique-gold ink stem, one small coral pomegranate at center, paired jasmine buds and sage leaves, strong small-size silhouette | `divider-v2.png`, `divider-v2.webp` |
| extra2 | Panoramic low floral bed, roses at both outer ends, coral/jasmine, deliberate central dip and low stems for breathing room | `extra2-v2.png`, `extra2-v2.webp` |
| extra3 | Pale chapter: gently hanging ivory tuberose/jasmine garland with blush roses and small oxblood buds, open sage stems | `extra3-v2.png`, `extra3-v2.webp` |
| extra4 | Simple upright two-stem flourish, larger blush rose and ivory champa, a few jasmine buds and sparse sage leaves, mobile legibility | `extra4-v2.png`, `extra4-v2.webp` |
| flower | Single coral pomegranate hero blossom, nuanced folded petals, golden stamens, short stem/two sage leaves/bud, isolated clear silhouette | `flower-v2.png`, `flower-v2.webp` |
| paper | Warm ivory wasli/cotton-rag macro scan, fine fibers, low contrast, even light, no stains/vignette/folds or mirrored seams | `paper-v2.png`, `paper-v2.webp` |

All output names above resolve under `bloom/assets/images/`. WebP quality 92 and alpha quality 100. Existing delivery paths were also updated for compatibility with the original renderer; V1 backup directory remains untouched.

## Integration

- Hero HTML directly references `cluster-v2.webp` and `garland-left-v2.webp`.
- Added `assets/js/v2-images.js?v=2` ahead of original renderer. It maps only the nine botanical base filenames emitted by the obfuscated renderer to versioned WebP paths, covering dynamically created section imagery and preventing stale V1 caches.
- Replacement observer watches only image `src` and added elements; versioned filenames do not match the upgrade allowlist, avoiding loops.
- Paper original `paper.jpg` replaced with a JPEG derivative for compatibility. CSS owner notified to change CSS texture references to `paper-v2.webp` for cache-safe delivery.
- CSS untouched by this workstream. Other agent owns sizing/placement/crop review.
- Original two-edge mirrored use retained; distinct left/right generation remains optional if final layout review indicates repetition is visible.

## Verification

- [x] Generated outputs visually inspected for shared rendering style, composition and palette.
- [x] Representative corner, frieze and hero-flower WebP files report alpha.
- [x] All ten PNG masters and ten versioned WebP delivery files exist and are non-empty.
- [x] `node --check bloom/assets/js/v2-images.js` passes.
- [ ] Root browser review of full page and dynamic image source upgrades.
- [ ] CSS owner's responsive floral sizing and paper texture verification.
- [ ] User complete-template approval.
