# V2 production — Bloom, Bahaar, Exotic

Updated 6 November 2026. Owner: parallel production agent.

## Status

| Template | Status | Direction |
|---|---|---|
| Bloom | In production | Indo-Persian botanical manuscript; coral, oxblood, sage, handmade paper |
| Bahaar | Five V2 images integrated; browser QA underway | Consistent South Asian couple, blush/pistachio spring garden editorial |
| Exotic | Six V2 stills integrated; browser QA underway | Consistent couple, emerald/oxblood nocturnal courtyard editorial |

All originals will be preserved beside V2 deliverables or in template V1 backup folders. Existing videos retained unless a material mismatch requires regeneration. No full verification claimed yet.

Latest user constraint: every template must retain its individual look and feel; the audit's cultural suggestions must not homogenize the collection or reproduce Zareen. No Zareen layout code is copied.

## Generation and integration log

- Read the detailed asset audit, source configuration and imagegen skill.
- Bahaar anchor prompt: vertical editorial portrait of a South Asian bride in pale blush/pistachio lehenga and groom in ivory achkan, warm natural skin, jasmine/rose Mughal courtyard, soft morning light, accurate kundan and embroidery, no text. Built-in image generation.
- Bahaar anchor and matching mehndi/textile detail are integrated as gallery-01 and gallery-02. PNG masters retain -v2 names. V1 originals preserved in assets/gallery/v1/.
- Bloom and Exotic original stills preserved in assets/images/v1/.
- Bahaar complete generated series: anchor portrait, mehndi/textile detail, walking couple, jasmine-garland exchange, bouquet still life. Config now references distinct gallery-01-v2.webp through gallery-05-v2.webp to avoid stale image caches. PNG masters beside delivery WebP.
- Exotic complete generated series: hero-v2, collage-top-v2, collage-bottom-v2, closing-v2, venue-v2, ornament-v2 (PNG/WebP), config updated. Three character-bearing images use the same anchor reference for identity and wardrobe continuity.
- Exotic prompts preserve dark emerald rose garden, oxblood zardozi, ivory achkan, antique-gold lantern light; images include couple bench portrait, textile/mehndi detail, solo groom, walking departure, night courtyard venue, transparent engraved pomegranate/rose divider. Built-in image tool used throughout.
- All retained opener posters re-extracted from exact video first frames. Bloom and Exotic backups in images/v1; Bahaar intro-poster-v1.webp retained. Existing videos retained for continuity and to preserve original distinct identities.
- Added separate v2-refinements.css files for each template. Bahaar gallery reshaped to a consistent arched 4:5 frame to preserve faces; adjusted readable labels and muted copy. Exotic English wish text wraps naturally in Cormorant rather than former Arabic styling. Bloom typography and floral density lightly refined.
- Rebalanced ownership: root handles Bloom petals; amber_ruby agent handles Bloom non-petal botanicals/textures. This workstream retains Bloom layout QA and exact opener poster.

## Remaining

- Bloom assets are completed by companion workstreams; see V2_BLOOM_BOTANICALS_STATUS.md and V2_BLOOM_PETALS_STATUS.md.
- Full user review remains pending. Existing sample dates are in the past; content was preserved.
- Root verified particle source paths through isolated runtime initialization: `WedPetals.ambient(true)` emits all seven exact `-v2.webp` paths and the files exist. Root corrected encoded padding artifact and versioned script to?v=3. This proves initialized image paths, not a complete visual particle-physics audit.

## Final verification evidence

- Bahaar: new config module (`app-v2.js` imports `config-v2.js`) and distinct intro-poster-v2.webp confirmed in browser; all five distinct gallery V2 paths load at 1122×1402. Desktop at1280×720 has no horizontal overflow or broken images. Revised gallery measures576×720 (4:5) and shows full couple portrait faces; original wider crop was corrected after inspection. Existing gate opened successfully once loaded; natural intro duration10s.
- Exotic: all six V2 image sources confirmed in DOM with nonzero natural dimensions. Desktop hero reviewed at1280×720; text sits between faces, dark photographic mood retained. Mobile collage/scratch and night venue reviewed at375×812, no overflow or broken images. Pale gold location link styling strengthened after mobile review.
- Bloom: new botanical hero and paper-v2 background reviewed at1280×720 with no broken images or horizontal overflow. It intentionally retains a centered narrow manuscript column on desktop. Base/closing paper usages overridden to versioned texture. Opener first frame refreshed; skip interaction works.
- Responsive capability applied inconsistently across tabs: although set375×812 initially returned success, only Exotic later measured that size. Do not interpret this as a completed375px visual review for Bahaar or Bloom. Their responsive CSS remains in place; root may perform further narrow-mobile checks.
- All changed configuration JavaScript passes node syntax checks. PNG/WebP ornament alpha verified. Original videos retained, no new Fal video charges incurred by this workstream.
- CUA viewport reset requested before handoff.
- Final Exotic375px hero check caught an overtracked eyebrow clipping at the left edge; added mobile width/padding/text alignment/letter-spacing correction and visually confirmed centered one-line caption after reload. All six images remain loaded and hero preserves original dark editorial identity.
