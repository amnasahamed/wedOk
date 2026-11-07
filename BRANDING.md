# Invitation collection branding

Implemented 6 November 2026. Scope confirmed: collection names and visible invitation branding, including Zareen branding only.

| Previous name | New identity | Signature |
|---|---|---|
| Amber | **Sunehri** | Candlelit celebrations |
| Bahaar | **Gulistan** | A garden in celebration |
| Bloom | **Gulabi** | Romance in every petal |
| Exotic | **Raat Rani** | For evenings that linger |
| Mithril | **Aabha** | An heirloom of light |
| Olive | **Aranya** | Rooted in togetherness |
| Ruby | **Gulnaar** | A celebration in velvet |
| Zareen | **Noor Mahal** | A luminous celebration |

## Where the identities appear

- Collection cards in `V2_REVIEW.html`.
- Each invitation’s browser title and design metadata.
- A restrained, palette-matched typographic wordmark and signature at the end of each invitation.
- Bahaar’s active and alternate design metadata now use Gulistan.

The couple names remain the primary invitation identity. Existing folder URLs, configuration globals, RSVP storage keys and historical QA reports retain their original identifiers to preserve working links, behavior and audit history. Typography is live text, so signatures remain crisp and accessible at every screen size.

Noor Mahal (formerly Zareen): only its index title, configuration title, design metadata, branding stylesheet reference and closing signature changed. Its images, video, invitation content, layout styles and playback scripts are preserved.

These are creative collection names, not a claim of trademark clearance.

## Verification

- All eight names, closing wordmarks and title metadata verified locally.
- Live browser review included desktop and mobile layouts; no horizontal overflow observed in the inspected invitations.
- Corrected renderer title overrides in the seven config-driven invitations and Gulistan’s active renderer.
- Local media references: zero missing across all eight templates.
- Existing opening/playback regression checks pass for all seven upgraded templates.
- Zareen file comparison: only `index.html` and the branding title in `assets/js/config.js` changed; all other original files are byte-for-byte preserved.
- Screenshots are saved in `output/branding/`. Viewport checks do not replace testing on physical phones.
