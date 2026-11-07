"""Build per-section review images from CUA full-page captures and measured bounds."""
import html
import json
from pathlib import Path
from PIL import Image, ImageDraw

root = Path(__file__).resolve().parents[1]
out = root / 'output/v4-section-review'
names = ['amber', 'ruby', 'bahaar', 'bloom', 'mithril', 'olive', 'exotic']
labels = {
 'amber': ['Hero', 'Welcome', 'Scratch date', 'Gallery', 'Countdown', 'Wedding programme', 'Venue', 'Dress code', 'Festivities', 'Gifts', 'RSVP', 'Closing'],
 'ruby': ['Hero', 'Welcome', 'Scratch date', 'Gallery', 'Countdown', 'Wedding programme', 'Venue', 'Dress code', 'Festivities', 'Gifts', 'RSVP', 'Closing'],
 'bahaar': ['Hero', 'Welcome', 'Scratch date', 'Gallery', 'Countdown', 'Wedding programme', 'Venue', 'Dress code', 'Festivities', 'Gifts', 'Closing'],
 'bloom': ['Hero', 'Invitation', 'Scratch date', 'Countdown', 'Celebrations', 'RSVP', 'Closing'],
 'mithril': ['Hero', 'Invitation', 'Portrait', 'Scratch date', 'Countdown', 'Crystal interlude', 'Venue', 'Dress code', 'RSVP', 'Closing'],
 'olive': ['Hero', 'Invitation', 'Scratch date', 'Countdown', 'Celebrations', 'RSVP', 'Closing'],
 'exotic': ['Hero', 'Invitation', 'Gallery', 'Scratch date', 'Countdown', 'Evening programme', 'Venue', 'Attire', 'With love', 'RSVP', 'Closing'],
}
pages = []
total = 0
overview = Image.new('RGB', (7*220, 555), '#ece7df')
for name in names:
 data = json.loads((out / f'{name}-sections.json').read_text())
 full = Image.open(out / f'{name}-full.jpg').convert('RGB')
 folder = out / name
 folder.mkdir(exist_ok=True)
 tiles = []
 cards = []
 opening = out / f'{name}-opening.jpg'
 if opening.exists():
  cards.append(f'<a class="shot" href="{opening.name}"><h3>Opening</h3><img loading="lazy" src="{opening.name}" alt="{name} opening"></a>')
 for i, sec in enumerate(data['sections']):
  label = labels[name][i] if i < len(labels[name]) else f'Section {i+1}'
  y = max(0, sec['y'])
  bottom = min(full.height, y + sec['height'])
  if bottom <= y:
   raise ValueError(f'Invalid capture bounds: {name} {label}')
  crop = full.crop((0, y, full.width, bottom))
  filename = f'{i+1:02d}-{label.lower().replace(" ", "-")}.jpg'
  crop.save(folder / filename, quality=92)
  tile = Image.new('RGB', (270, 650), '#ece7df')
  d = ImageDraw.Draw(tile)
  d.text((12, 12), f'{i+1:02d}  {label}', fill='#40382e')
  thumb = crop.copy()
  thumb.thumbnail((250, 600))
  tile.paste(thumb, ((270-thumb.width)//2, 40))
  tiles.append(tile)
  path = f'{name}/{filename}'
  cards.append(f'<a class="shot" href="{path}"><h3>{i+1:02d} · {html.escape(label)}</h3><img loading="lazy" src="{path}" alt="{name} {html.escape(label)}"></a>')
  total += 1
 sheet = Image.new('RGB', (270*3, 650*((len(tiles)+2)//3)), '#ece7df')
 for i, tile in enumerate(tiles):
  sheet.paste(tile, ((i%3)*270, (i//3)*650))
 sheet.save(out / f'{name}-contact.jpg', quality=88)
 hero = Image.open(folder / '01-hero.jpg').convert('RGB')
 hero.thumbnail((205, 500))
 col = names.index(name)*220
 ImageDraw.Draw(overview).text((col+10, 12), name.title(), fill='#40382e')
 overview.paste(hero, (col+(220-hero.width)//2, 42))
 pages.append(f'<section id="{name}"><h2>{name.title()} <small>{len(tiles)} sections</small></h2><p><a href="{name}-full.jpg">Full-page capture</a> · <a href="../../{name}/">Open live invitation ↗</a></p><div class="grid">'+''.join(cards)+'</div></section>')

nav = ' · '.join(f'<a href="#{n}">{n.title()}</a>' for n in names)
overview.save(out / 'overview.jpg', quality=90)
document = f'''<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Seven-template section review</title><style>*{{box-sizing:border-box}}body{{margin:0;background:#f4f0e9;color:#37332c;font:16px/1.6 system-ui}}main{{max-width:1280px;margin:auto;padding:32px}}h1,h2{{font-family:Georgia,serif;font-weight:400}}h1{{font-size:44px}}h2{{font-size:36px}}small{{font:13px system-ui;color:#756d60}}a{{color:#6d4e2f}}nav{{position:sticky;top:0;z-index:2;background:#f4f0e9ee;padding:14px 0;backdrop-filter:blur(12px)}}section{{padding:32px 0;border-top:1px solid #d5ccbf}}.grid{{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:22px}}.shot{{display:block;text-decoration:none;background:#fffdf8;border:1px solid #ded6c9;padding:12px}}h3{{font-size:14px;font-weight:500;margin:0 0 12px}}.shot img{{display:block;width:100%;height:490px;object-fit:contain;object-position:top;background:#eee8de}}.shot:hover{{box-shadow:0 8px 25px #4b382514}}@media(max-width:550px){{main{{padding:20px}}h1{{font-size:32px}}}}</style><main><h1>Seven individual worlds</h1><p>{total} section screenshots at a 390 × 844 mobile viewport, plus seven opening views. Zareen is excluded. Select any image for its full-size section capture.</p><nav>{nav}</nav>{''.join(pages)}<p>Captured from the running local invitations on 6 November 2026. Full-page captures were scrolled through before export so section reveals and lazy images could settle. These are visual review records, not photographs of the named venues.</p></main></html>'''
(out / 'index.html').write_text(document)
print(f'Built {total} section crops and {len(names)} contact sheets.')
