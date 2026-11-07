# V2 Image Audit — Eight Wedding Invitation Templates

> This document records the original V1 visual audit and proposed improvements. Current production status, implemented changes and the user's later decisions are tracked in [V2_PRODUCTION_TRACKER.md](V2_PRODUCTION_TRACKER.md). In particular, each template must retain its distinct original identity; shared Mughal references below are creative suggestions and must not make the collection resemble Zareen.

## Objective

Replace every still-image asset with a more luxurious, premium, aesthetically coherent, and culturally grounded alternative. Videos may also be regenerated with MiniMax H3 Max when a new film materially improves the experience without breaking the template's established mood. Any image used as a video poster must be extracted from its final video so the first-frame transition remains seamless.

## Production status

### Zareen — V2 reference implementation completed

- Replaced the hero film with a new 5-second, 1080P MiniMax H3 Max image-to-video sequence built from the approved Mughal moon-garden venue artwork.
- Replaced the “Tap to Open” film with a new 5-second, 1080P MiniMax H3 Max two-keyframe sequence: closed Mughal doors open smoothly into the same moon-garden venue used by the invitation.
- Re-extracted the poster from the finished film for a seamless poster-to-video transition.
- Replaced the venue, event illustrations, dress-code plate, cover cartouche, monogram wreath, countdown ornament, dividers, floral ornaments, and closing garland.
- Preserved all directly replaced V1 decorative files beside the live assets with `-v1` filenames.
- Retained editable PNG masters and optimized WebP delivery files for all generated stills.
- Verified the complete invitation on a mobile viewport: hero, event icons, venue, dress code, transparency, type contrast, and final crops all pass.

Key V2 files:

- `zareen/assets/video/hero-video-v2.mp4`
- `zareen/assets/video/cover-video-v2.mp4`
- `zareen/assets/images/cover-poster-v2.webp`
- `zareen/assets/images/hero-poster-v2.webp`
- `zareen/assets/images/venue-v2.webp`
- `zareen/assets/images/dress-code-desi-v2.webp`
- `zareen/assets/images/bouquet-v2.webp`
- `zareen/assets/images/rings-v2.webp`
- `zareen/assets/images/dinner-v2.webp`

## Collection-wide rules

1. Give each template one visual language. Do not mix photorealism, watercolor, generic clip-art, and flat line art inside the same template.
2. Use culturally specific South Asian details with restraint: Mughal/Indo-Islamic architecture, jaali, jharokha, pietra dura, zari, zardozi, gota, kundan, meenakari, mogra, tuberose, marigold, jasmine, rose, and pomegranate blossom.
3. Avoid generic “royal” shortcuts: European rococo scrolls, Christmas berries/holly, stock chandeliers, swans, and fantasy villas unless the template concept explicitly calls for them.
4. Human photographs within one template must depict the same couple, wardrobe world, color grade, season, and venue. Avoid anonymous stock-photo gallery mixtures.
5. Transparent assets need clean anti-aliased edges, no grey/white fringe, no compression halos, and consistent lighting. Export at 2× the maximum display size.
6. Preserve generous negative space for names, dates, and calls to action. Decorative detail should frame content, not compete with it.
7. Build intentional asset families: hero, venue, dress code, event icons, dividers, and closing art should share palette, line weight, material, and lighting.
8. For generated or commissioned work, keep editable layered masters and export WebP/AVIF plus PNG only when alpha is required.

---

## 1. Amber — warm champagne / Mughal garden soirée

### V2 art direction

Move from generic peach ballroom décor to a warm amber-and-champagne South Asian evening: carved sandstone/jali, soft candlelight, ivory roses, mogra, pale peach garden roses, subtle zardozi gold, and refined photographic realism. The current frame assets feel like stock wedding-stage composites and lack cultural specificity.

| Asset | Current issue | V2 replacement direction |
|---|---|---|
| `assets/images/floral-divider.webp` | Dense generic rose garland; flat cutout edges and beige-on-beige muddiness. | Commission a lower, airier divider of ivory rose, mogra, pale peach ranunculus, and fine gold gota leaves; asymmetrical natural depth, clean alpha, candlelit amber highlights. |
| `assets/images/scratch-frame.webp` | Overloaded European ballroom frame with chandelier, drapes, candelabras, and obvious composite/AI artifacts. | Replace with a restrained carved Mughal-jharokha scratch frame: warm ivory stone, slim antique-gold inlay, mogra strings, two small brass diyas/lanterns, broad clean central reveal area. |
| `assets/images/scratch-window.png` | Functional black alpha mask, not decorative; cannot be judged as artwork. | Rebuild only if frame proportions change. Preserve exact scratch interaction geometry, feathered edges, and full transparency behavior; do not “beautify” it as a visible image. |
| `media/gallery/01.webp` | Referenced in config but missing from the project. | Add a premium editorial welcome-night photograph: same couple, champagne/peach wardrobe, candlelit courtyard, authentic South Asian décor. |
| `media/gallery/02.webp` | Referenced in config but missing from the project. | Add a close cultural detail from the same shoot—mogra gajra, kundan, embroidered cuff, or hands—matching the Amber grade. |
| `media/gallery/03.webp` | Referenced in config but missing from the project. | Add a wide evening celebration image from the same venue and couple story; preserve negative space for the gallery crop. |

**Priority:** Highest. The three missing gallery files are a functional content gap, not merely a style issue.

---

## 2. Bahaar — spring garden / editorial South Asian romance

### V2 art direction

Keep the fresh spring-garden premise but make the gallery one authored story: the same couple, one venue, soft ivory/blush/pistachio palette, real South Asian florals and wardrobe, luminous editorial photography, and consistent skin tones. The opener is attractive but the gallery currently jumps across unrelated couples, ceremonies, crops, and color grades.

| Asset | Current issue | V2 replacement direction |
|---|---|---|
| `assets/video/intro-poster.webp` | Visually rich but generic European wrought-iron garden gate; embedded “tap to open” limits localization. It is tied to the video. | Keep motion locked. Re-extract a clean poster from the unchanged intro video at the exact transition frame; only retouch compression/banding. Do not create an unrelated replacement. |
| `assets/gallery/gallery-01.webp` | Casual low-resolution hand-covering-face pose; background and styling feel social-media rather than luxury editorial. | Replace with an elegant close portrait from the unified shoot—soft gesture, visible fine mehndi and jewelry, controlled bokeh, no distracting watch or awkward crop. |
| `assets/gallery/gallery-02.webp` | Tight crop lacks narrative and feels washed out; generic grey wardrobe. | Use an intimate shoulder/hand detail with pistachio or ivory embroidered fabric, heirloom ring, mogra, and deliberate soft daylight. |
| `assets/gallery/gallery-03.webp` | Strong image but belongs to a different, darker red wedding story. | Replace with a Bahaar-palette interaction from the same couple: blush/ivory/pistachio attire, spring garden, gentle hand connection, matching grade. |
| `assets/gallery/gallery-04.webp` | Highly saturated red-and-white var mala scene conflicts with the soft Bahaar visual system. | Use a culturally specific spring ritual detail—jasmine garland, floral chadar, or ring exchange—in muted blush, cream, and fresh green. |
| `assets/gallery/gallery-05.webp` | Underexposed bouquet with heavy flare; subject is indistinct and palette is tropical/dark. | Replace with a luminous closing portrait or bouquet still life featuring garden roses, jasmine, sweet pea, and delicate greenery; preserve rich blacks without crushing detail. |

**Priority:** High. The template needs a complete matched photo set, not five individually sourced images.

---

## 3. Bloom — Indo-Persian botanical manuscript

### V2 art direction

The vintage botanical idea is charming, but the set is repetitive and reads as mixed Victorian clip-art. Rebuild it as one hand-painted Indo-Persian botanical collection on warm handmade paper: pomegranate blossom, desi rose, jasmine, tuberose, champa, and restrained sage foliage with oxblood, coral, blush, and antique-gold accents.

| Asset | Current issue | V2 replacement direction |
|---|---|---|
| `assets/images/opener-poster.jpg` | Single Western rosebud is sparse and generic; it is a video poster. | Re-extract the poster from the unchanged opener video. If the video permits frame choice, choose the sharpest bud frame with clean centered negative space and match the paper tone exactly. |
| `assets/images/paper.jpg` | Good tactile base but visible mirrored/repeating seams make it feel tiled. | Replace with a seamless scan of premium warm cotton rag or handmade wasli paper; subtle fibers, no mirror symmetry, low contrast behind text. |
| `assets/images/cluster.webp` | Attractive but dense, clip-art-like corner with mismatched species and weak cultural identity. | Create a lighter jharokha-corner botanical spray using desi rose, pomegranate blossom, tuberose, jasmine buds, and sage leaves; one painterly hand and cleaner silhouette. |
| `assets/images/garland-left.webp` | Extremely busy wall of flowers; visual hierarchy collapses and repetition is obvious when mirrored. | Replace with a long, airy climbing floral vine inspired by Mughal manuscript borders; varied rhythm, more stems and negative space, designed as distinct left and right assets rather than mirroring one file. |
| `assets/images/garland-band.webp` | Dense symmetrical bouquet strip feels like a stock sticker. | Use a refined horizontal botanical frieze with a subtle central medallion, lower flower density, and deliberate text clearance. |
| `assets/images/sprig.webp` | Thin mixed-flower sprig lacks focal hierarchy and feels disconnected from denser assets. | Paint a culturally grounded pomegranate/jasmine branch with one hero blossom, buds, and elegant stem movement; match linework and pigments to the full family. |
| `assets/images/divider.webp` | Generic central camellia divider; too mechanically symmetrical. | Replace with a slim antique-gold vine and small pomegranate blossom or lotus medallion, with hand-drawn asymmetry and excellent small-size legibility. |
| `assets/images/extra2.webp` | Another dense mixed bouquet; duplicates the role of other florals. | Recompose as a low, panoramic floral bed with clear central breathing room and only 3–4 signature species. |
| `assets/images/extra3.webp` | Near-duplicate of `extra2`, making the experience repetitive. | Make it a genuinely different chapter asset—perhaps jasmine and tuberose with restrained blush accents—while retaining the same painterly system. |
| `assets/images/extra4.webp` | Generic upright sprig with tiny details that disappear on mobile. | Replace with a bolder, simpler side flourish: two stems, larger blossoms, fewer leaves, readable at narrow widths. |
| `assets/images/flower.webp` | Oversized coral lily looks like isolated botanical clip-art and is stylistically louder than the set. | Replace with a hero pomegranate blossom or champa rendered in the same manuscript style, with more nuanced pigment and culturally relevant symbolism. |
| `assets/images/petal0.webp` | Pale petal is usable but line texture differs from darker petals. | Repaint as part of one seven-piece petal sheet; soft blush desi-rose petal, clean alpha, consistent underside shading. |
| `assets/images/petal1.webp` | Dark oxblood petal is very saturated and reads synthetic. | Use a naturally variegated deep-rose petal with softened veins and translucent edges. |
| `assets/images/petal2.webp` | Near-duplicate of petal1; insufficient shape variety. | Use a narrower curled pomegranate or rose petal with visible side profile for believable animation. |
| `assets/images/petal3.webp` | A whole flower is mixed into a petal animation, breaking physical realism. | Replace with a small blossom fragment or clustered jasmine bloom; if keeping a whole flower, reduce its spawn frequency and scale. |
| `assets/images/petal4.webp` | Round dark petal looks waxy and too symmetrical. | Use a folded deep-coral petal with organic asymmetry and softer tonal range. |
| `assets/images/petal5.webp` | Pale petal has an unnatural notch and inconsistent edge treatment. | Replace with a gently curled ivory/blush petal, translucent rim, no cutout halo. |
| `assets/images/petal6.webp` | Very similar to petal0, reducing the sense of natural variation. | Use a small jasmine or tuberose petal with a distinct narrow silhouette and warm ivory tone. |

**Priority:** Medium-high. The concept is good; the biggest gain comes from commissioning one coherent botanical library and reducing density.

---

## 4. Exotic — nocturnal Mughal garden editorial

### V2 art direction

This is the strongest photographic direction, but “Exotic” currently combines an emerald envelope, a dark rose-garden couple series, a pastel watercolor palace, and a white line-art bird. Unify it as a nocturnal Mughal garden: bottle green, oxblood, antique gold, carved stone, candlelight, roses, and the same couple throughout.

| Asset | Current issue | V2 replacement direction |
|---|---|---|
| `assets/images/poster.webp` | Premium-looking emerald embossed envelope, but its botanical motif is generic and the blank seal has no cultural signature. It is tied to cover video. | Re-extract from the unchanged cover video. If retouching is possible, emphasize a subtle jaali/pietra-dura emboss and a monogram impression while preserving frame continuity. |
| `assets/images/hero.webp` | Strong mood, but faces/hands show softness typical of generated imagery and background roses feel synthetic. | Replace with a high-end real/editorial portrait of the same couple in oxblood and ivory, seated in a candlelit Mughal garden; preserve dark negative space for typography. |
| `assets/images/collage-top.webp` | Beautiful detail, but appears generated and repeats the same rose-garden look without a new story beat. | Use a precise cultural detail from the same shoot: zardozi border, mehndi, kundan bangles, and garden texture, with sharper textile authenticity. |
| `assets/images/collage-bottom.webp` | Groom portrait has plausible mood but turban/accessory details need authenticity and face profile is underdefined. | Commission a groom editorial with accurate sherwani/turban styling, kalgi and sehra details, controlled sunset rim light, and matching garden location. |
| `assets/images/closing.webp` | Cinematic composition is good, but figures are small and the scene can read like generic fantasy romance. | Replace with a wider real/editorial departure image in the same garden, using brass lanterns and rose petals with accurate garment trains and a stronger silhouette. |
| `assets/images/venue.webp` | Pastel watercolor palace clashes sharply with the dark photographic world. | Use a night watercolor/gouache or cinematic photograph of a real Mughal-inspired venue in emerald/umber/gold; match the template’s darkness and candlelight. |
| `assets/images/ornament.webp` | White-gold bird branch line art is delicate but unrelated to the oxblood rose language and looks generic chinoiserie. | Replace with a thin antique-gold jaali vine featuring pomegranate blossom or a small peacock motif, drawn to match the envelope emboss. |

**Priority:** Medium. Preserve the dark editorial identity; fix the style breaks rather than changing the concept.

---

## 5. Mithril — ivory, pearl, and carved jaali heirloom

### V2 art direction

Shift from generic European key/chandelier fantasy to an ivory-and-champagne South Asian heirloom invitation. Use carved jaali, scalloped arches, pearl strings, kundan settings, warm ivory silk, pale sage, and restrained antique gold. The current assets alternate between photoreal portraits, watercolor architecture, rococo keys, and clip-art crystals.

| Asset | Current issue | V2 replacement direction |
|---|---|---|
| `assets/images/poster.webp` | Elegant but generic rococo keyhole and key; minimal cultural signal. It is tied to video. | Re-extract from unchanged video. If a new matching still is needed, use an ivory silk cover with a carved jaali keyhole escutcheon and kundan-inspired antique-gold key. |
| `assets/images/interlude.webp` | Flat beige crystal-chain illustration feels like wallpaper and lacks depth. | Replace with delicate pearl-and-kundan swags or mogra strings suspended from small carved finials; translucent highlights, elegant negative space, consistent with the jaali concept. |
| `assets/images/portrait.webp` | Warm portrait is pleasant but generic banquet background, questionable veil construction, and mixed cultural styling. | Use a real/editorial ivory wedding portrait under one dupatta/veil, accurate jewelry and garment drape, soft pearl light, and architectural jaali bokeh. |
| `assets/images/venue.webp` | Attractive watercolor but resembles a fantasy villa; details are culturally blended and overly floral. | Illustrate a credible haveli/palace courtyard with scalloped arches, jaali, chhatri, mogra strings, lanterns, and pale-sage landscaping; fewer decorative inventions, more architectural accuracy. |
| `assets/images/dresscode.webp` | Four fashion figures look generic and facial/detail rendering is inconsistent. | Commission a refined editorial fashion plate showing culturally accurate silhouettes—sherwani/achkan, lehenga, sari or gharara/anarkali—with textile swatches and precise embroidery cues. |
| `assets/images/footer-cover.webp` | Almost blank watercolor wash; feels unfinished rather than luxurious. | Replace with a subtle ivory silk/paper field framed by faint jaali shadow, pearl glints, and a low architectural silhouette so it closes the story without hurting text contrast. |
| `assets/images/crystals.webp` | Stock European crystal garland; noisy edges and inconsistent scale. | Use a purpose-built transparent pearl/kundan or mogra swag set with crisp alpha, physically believable drape, and fewer dangling elements. |
| `assets/images/divider.webp` | Tiny brown ornamental divider is too generic and weak on high-resolution screens. | Replace with a clean antique-gold jaali/paisley divider, slightly thicker line weight, centered kundan stone or lotus bud, scalable as SVG where possible. |
| `assets/images/key.webp` | Low-detail clip-art key with soft edges; generic rococo silhouette. | Redesign as a slim heirloom key inspired by jaali geometry and kundan craft; sharper metalwork, controlled highlights, transparent 2× export. |

**Priority:** High. This template needs a full motif-system replacement to become culturally specific.

---

## 6. Olive — sage courtyard mehfil

### V2 art direction

Keep the calm sage palette, but replace the rustic-European banquet and clip-art chandelier with a refined South Asian courtyard mehfil: pistachio/sage, warm ivory, aged brass, carved stone, jasmine, tuberose, eucalyptus-like soft foliage used sparingly, and hand-painted gouache or realistic illustration throughout.

| Asset | Current issue | V2 replacement direction |
|---|---|---|
| `assets/images/envelope-poster.jpg` | Ivory envelope is polished but has generic damask and blank wax; tied to unchanged envelope video. | Re-extract from the unchanged video. Keep continuity; if retouched, introduce only a subtle jaali damask and embossed monogram without changing envelope geometry. |
| `assets/images/olive-paper.jpg` | Organic paper is attractive but blotchy and dark, competing with text. | Replace with a seamless sage handmade-paper texture with finer fibers, lower contrast, and gentle tonal movement; avoid obvious tiled patches. |
| `assets/images/linen.jpg` | Flat generic linen tile; repeat becomes visible. | Use a seamless warm-ivory silk-linen scan with finer weave and soft directional sheen. |
| `assets/images/linen2.jpg` | Rough coarse fiber conflicts with the clean luxury direction. | Replace with a subtle deckled cotton/washi texture, less coarse and less yellow, suitable for cards and panels. |
| `assets/images/chandelier.webp` | European crystal chandelier is generic clip-art and culturally mismatched. | Replace with an aged-brass South Asian lantern cluster or restrained jhoomar inspired by palace lighting; warm glow, refined metal perforation, clean alpha. |
| `assets/images/greenery.webp` | Saturated photographic greenery has harsh edges, noisy cutout, and mismatches watercolor assets. | Repaint as a sage botanical canopy with jasmine/tuberose, olive-toned leaves, and a few brass accents; airy center and consistent gouache style. |
| `assets/images/banquet.webp` | Rustic farmhouse table and cross-back chairs read Western vineyard wedding. | Illustrate a luxurious courtyard dinner with carved chairs, ivory textiles, brass thalis/candlesticks, low mogra-tuberose florals, and sage napkins; retain transparent cutout composition. |
| `assets/images/sprig.webp` | Small eucalyptus sprig is generic and visually weak. | Replace with a jasmine or tuberose sprig plus muted sage leaves, drawn in the same gouache family and simplified for mobile. |
| `assets/images/divider.webp` | Mirrored eucalyptus clip-art and geometric gold mark feel assembled rather than authored. | Create a slim jaali-inspired divider with paired jasmine sprigs and a tiny brass medallion; precise symmetry, cleaner alpha, stronger small-size readability. |
| `assets/images/urn.webp` | European neoclassical urn with a very busy white bouquet; stock composite look. | Replace with a carved sandstone or hammered-brass vessel holding jasmine, tuberose, pale roses, and restrained sage foliage; natural asymmetry and cohesive lighting. |

**Priority:** High. The banquet, chandelier, greenery, and urn currently define the wrong cultural world.

---

## 7. Ruby — deep ruby ceremonial grandeur

### V2 art direction

Keep the saturated ruby drama, but move away from Christmas-like holly/berries and generic ballroom staging. Build a ceremonial South Asian world with ruby velvet, antique gold zardozi, red roses, deep burgundy dahlias, mogra highlights, carved jharokha, brass lanterns, and dramatic directional light.

| Asset | Current issue | V2 replacement direction |
|---|---|---|
| `assets/images/floral-divider.webp` | Holly-like leaves and red berries make it read as Christmas décor; dense, synthetic cutout. | Replace with a ruby floral runner of velvety red roses/dahlias, mogra pinpoints, deep foliage, and zardozi-gold leaves; no holly or berry clusters. |
| `assets/images/scratch-frame.webp` | Heavy red drapes, European candelabras, and ornate gold scrollwork feel theatrical and generic. | Create a dark ruby velvet jharokha frame with carved antique-gold border, subtle zardozi motifs, mogra strings, and two brass lantern clusters; preserve a clean reveal window. |
| `assets/images/scratch-window.png` | Functional mask, not visible artwork. | Preserve interaction behavior; regenerate only to match the new frame opening and soften the scratch edge. |
| `media/gallery/03.webp` | Authentic cultural detail but low-resolution/soft, with an awkward finger-lock crop and empty muddy background. | Replace with a high-end editorial hand portrait: same couple, richer ruby fabric, refined mehndi, heirloom rings, controlled garden bokeh, intentional hand pose. |

**Priority:** High. Remove the Christmas association and the generic ballroom language first.

---

## 8. Zareen — golden Mughal moon garden

### V2 art direction

“Zareen” should feel luminous, golden, and culturally rooted. Replace the current swan-lake European fantasy with an ivory-and-gold Mughal moon garden: white marble, jaali, chhatri, moonlit water, mogra, tuberose, ivory rose, pale blue accents, kundan, and fine zari. Use one refined gouache/realistic-illustration language for icons and one cinematic language for hero imagery.

| Asset | Current issue | V2 replacement direction |
|---|---|---|
| `assets/images/cover-poster.webp` | Beautiful marble door, but reads as a generic European palace/fantasy gate and duplicates the venue slot. Tied to video. | Re-extract from the unchanged cover video and preserve exact transition. If selecting a frame, choose one with balanced door symmetry and minimal compression. |
| `assets/images/hero-poster.webp` | Swan lake, alpine mountains, and classical rotunda are luxurious but culturally unrelated. Tied to video. | Keep motion locked and re-extract the sharpest frame from the unchanged hero video. For future video revision, target a moonlit Mughal garden/lake with chhatri and jaali instead. |
| `assets/images/cover.webp` | Generic scalloped cream plaque; lacks craft detail and depth. | Replace with a hand-painted parchment/ivory silk cartouche based on Mughal scalloped arches, slim zari border, tiny kundan corner points, and ample clean type area. |
| `assets/images/logo-cover.webp` | Plain gold laurel wreath is Western-classical and generic. | Create a circular monogram wreath from mogra buds, fine zari leaves, and a subtle crescent/jaali rhythm; preserve clarity at favicon size. |
| `assets/images/countdown.webp` | Appears nearly blank/illegible at normal viewing size. | Redesign as a compact gold jaali medallion or hourglass motif with stronger contrast, simplified silhouette, and 2× mobile export. |
| `assets/images/bouquet.webp` | Photoreal cutout bouquet is generic bridal stock and mismatches illustrated icons. | Replace with a gouache bouquet of mogra, tuberose, ivory rose, and pale sage tied with zari ribbon and a small kundan brooch; match all event icons. |
| `assets/images/rings.webp` | Generic rings-on-pillow clip-art; lacks cultural personality and fine detail. | Illustrate heirloom rings in a carved marble or meenakari ring dish, with fine gold and kundan detail; avoid soft beige blob edges. |
| `assets/images/dinner.webp` | Covered brass pot and sweets feel arbitrary and visually less refined than the invitation. | Use a sophisticated celebration-dinner still life: engraved brass/metal thali, folded ivory napkin, mogra, elegant dessert or tea service, restrained palette, no cartoonish forms. |
| `assets/images/venue.webp` | Exact duplicate of the cover-poster door; gives no venue information and wastes a visual slot. | Replace with an actual venue illustration or culturally credible Mughal/Indo-Islamic façade at golden hour, composed horizontally/vertically for its card crop and distinct from the opener. |
| `assets/images/dress-code-desi.webp` | Five fashion figures have inconsistent faces and generic garment detailing; wide strip is hard to read on mobile. | Commission a fashion plate with 3–4 clearly distinct, accurate outfits—sherwani/achkan, sari, lehenga, gharara/anarkali—plus fabric swatches; stronger faces, embroidery, and spacing. |
| `assets/images/doves.webp` | Wedding doves with ribbons are generic Western clip-art and edges look soft. | Replace with a culturally relevant pair of white peacocks/doves only if symbolic, rendered in the same gouache style; alternatively use mirrored mogra-and-zari swags for greater sophistication. |
| `assets/images/floral-ornament.webp` | Large ivory floral swag is low-detail, washed out, and has fuzzy alpha edges. | Repaint as a slender mogra/tuberose cascade with one ivory rose, pale-blue accent flowers, fine zari ribbon, and crisp transparent edges. |
| `assets/images/ornaments.webp` | Flat gold branch divider is too small and generic. | Replace with a fine jaali-and-zari divider with tiny mogra buds and a central kundan diamond; scalable SVG preferred. |
| `assets/images/ornament-closing.webp` | Generic pale floral bar with muddy edges and little contrast. | Create a luminous closing garland of ivory rose, mogra, tuberose, and pale-blue delphinium accents with antique-gold foliage; controlled width and clean alpha. |

**Priority:** Highest. The venue duplication and culturally unrelated hero fantasy are the two largest conceptual weaknesses.

---

## Recommended production order

1. **Lock each template’s cultural art direction and palette** before generating any individual asset.
2. **Replace the highest-impact hero/venue/gallery images:** Zareen, Mithril, Olive, Amber, Ruby.
3. **Create coherent asset families** for Bloom, Mithril, Olive, and Zareen rather than one-off replacements.
4. **Produce matched photo sets** for Bahaar and Exotic using one couple and one editorial grade per template.
5. **Rebuild transparent ornaments and functional frames** at 2× size with clean alpha.
6. **Re-extract video posters** from the unchanged video files and verify frame-perfect transitions.
7. **Test on mobile first:** check crop safety, text contrast, alpha fringes, and whether small decorative detail survives at 375–430 px widths.

## Approval checkpoint before V2 generation

The only creative decision still worth confirming is whether all eight templates should share one broad regional vocabulary (for example, Pakistani/Mughal contemporary luxury) or whether each should represent a different cultural sub-style. The recommendations above assume a coherent Pakistani/North Indian Mughal-contemporary vocabulary across the collection, with a distinct palette and mood for each template.
