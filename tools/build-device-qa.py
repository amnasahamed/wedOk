"""Make review contact sheets from actual CUA device-matrix captures."""
from pathlib import Path
import json
import math
from PIL import Image, ImageDraw

root = Path(__file__).resolve().parents[1] / 'output/v5-device-qa'
names = ['amber','ruby','bahaar','bloom','mithril','olive','exotic']
labels = {'desktop':'Desktop · 1440 × 900','mobile375':'Mobile · 375 × 812','mobile430':'Mobile · 430 × 932'}
records = {}

def film_sheet(key, trace, suffix):
    rows = json.loads(trace.read_text())
    rows = rows['frames'] if isinstance(rows,dict) else rows
    shots = []
    for row in rows[1:-1]:
        number = math.floor(row['at']/100+.5)
        path = root / f'{key}-t{number:03d}.jpg'
        # A resize can briefly return the previous viewport's capture buffer.
        if path.exists() and 'state' in row:
            im=Image.open(path)
            state=row['state']
            if abs(im.width/im.height-state['width']/state['height'])>.025:
                continue
        if path.exists() and path not in shots:
            shots.append(path)
    if not shots:
        return
    film = Image.new('RGB',(960,((len(shots)+2)//3)*250),'#e9e4dc')
    for i,path in enumerate(shots):
        im=Image.open(path).convert('RGB');im.thumbnail((310,215))
        x,y=(i%3)*320,(i//3)*250
        ImageDraw.Draw(film).text((x+8,y+5),path.stem.split('-')[-1],fill='#42382c')
        film.paste(im,(x+(320-im.width)//2,y+28))
    film.save(root/(key+suffix),quality=88)

for source in sorted(root.glob('*-layout.json')):
    key = source.name.removesuffix('-layout.json')
    full_path = root / (key + '-full.jpg')
    if not full_path.exists():
        continue
    info = json.loads(source.read_text())
    records[key] = info
    full = Image.open(full_path).convert('RGB')
    sections = info['sections']
    sheet = Image.new('RGB', (900, ((len(sections)+2)//3)*530), '#e9e4dc')
    folder = root / key
    folder.mkdir(exist_ok=True)
    for i, sec in enumerate(sections):
        top = max(0, sec['y'])
        bottom = min(full.height, top + sec['height'])
        if bottom <= top:
            continue
        crop = full.crop((0, top, full.width, bottom))
        crop.save(folder / f'{i+1:02d}.jpg', quality=90)
        crop.thumbnail((280, 485))
        x, y = (i%3)*300, (i//3)*530
        ImageDraw.Draw(sheet).text((x+10,y+10), f'{i+1:02d} '+sec['heading'].replace('\n',' ')[:34], fill='#42382c')
        sheet.paste(crop,(x+(300-crop.width)//2,y+40))
    sheet.save(root / (key+'-contact.jpg'), quality=88)
    trace = root/(key+'-playback.json')
    if trace.exists():
        film_sheet(key,trace,'-playback-contact.jpg')

sections = []
table = []
overview = Image.new('RGB',(7*220,555),'#e9e4dc')
for n in names:
    cards=[]
    statuses=[]
    for size,label in labels.items():
        key=n+'-'+size
        d=records[key]
        passed=not d['missing'] and not d['errors'] and d['scrollWidth']<=d['width']
        status='Passed' if passed else 'Review needed'
        statuses.append(status)
        cards.append(f'<article><h3>{label}</h3><p class="pass">{status}</p><a href="{key}-full.jpg"><img loading="lazy" src="{key}-full.jpg" alt="{n} at {d["width"]} pixels"></a><p><a href="{key}-full.jpg">Full page</a> · <a href="{key}-contact.jpg">All sections</a> · <a href="{key}-playback-contact.jpg">Opening sequence</a></p></article>')
    rotation=root/(n+'-rotation.json')
    film_sheet(n+'-rotation',rotation,'-contact.jpg')
    r=json.loads(rotation.read_text())
    okay=r['landscapeObserved'] and r['portraitRestored'] and not r['resets']
    cells=''.join(f'<td>{status}</td>' for status in statuses)
    table.append(f'<tr><th>{n.title()}</th>{cells}<td>{"Passed" if okay else "Review needed"}</td></tr>')
    sections.append(f'<section id="{n}"><h2>{n.title()}</h2><p><a href="../../{n}/">Open live invitation ↗</a> · <a href="{n}-rotation-contact.jpg">Portrait–landscape playback</a></p><div class="grid">'+''.join(cards)+'</div></section>')
    hero=Image.open(root/(n+'-mobile430/01.jpg')).convert('RGB');hero.thumbnail((205,500))
    x=names.index(n)*220
    ImageDraw.Draw(overview).text((x+10,12),n.title(),fill='#42382c')
    overview.paste(hero,(x+(220-hero.width)//2,42))
overview.save(root/'overview.jpg',quality=90)
nav=' · '.join(f'<a href="#{n}">{n.title()}</a>' for n in names)
page='''<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Desktop and mobile verification</title><style>*{box-sizing:border-box}body{margin:0;background:#f5f1e9;color:#363b31;font:16px/1.6 system-ui}main{max-width:1300px;margin:auto;padding:32px}h1,h2{font-family:Georgia,serif;font-weight:400}h1{font-size:44px}h2{font-size:34px}a{color:#705333}nav{padding:14px 0}section{padding:36px 0;border-top:1px solid #d8cfc1}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:22px}article{background:#fffdf8;border:1px solid #ded5c7;padding:16px}h3{font-size:16px;margin:0}.pass{color:#476246;font-size:13px}article img{width:100%;height:430px;object-fit:cover;object-position:top}article p{font-size:13px}.table{overflow:auto}table{width:100%;border-collapse:collapse;margin:24px 0 36px}th,td{text-align:left;padding:12px;border-bottom:1px solid #d8cfc1}td{color:#476246}footer{font-size:13px;color:#6b6c63;margin:40px 0}@media(max-width:550px){main{padding:20px}h1{font-size:32px}}</style><main><h1>Desktop and mobile verification</h1><p>Seven templates · 21 screen-size checks · seven live orientation checks.</p><p>Opening films, transitions, every section, image delivery and controls were checked. Fixes include media-driven title timing, stable cover fades, first-frame playback, attendance choices, gallery resizing and keyboard date reveals. Zareen was excluded.</p><nav>NAV</nav><div class="table"><table><thead><tr><th>Template</th><th>Desktop</th><th>375px mobile</th><th>430px mobile</th><th>Orientation playback</th></tr></thead><tbody>TABLE</tbody></table></div>SECTIONS<footer>6 November 2026. Tested in the local in-app browser at the listed viewport sizes, not on physical iOS/Android hardware. Opening sequences are sampled browser screenshots; media decoding and failure/recovery logic were checked separately. No RSVP responses were submitted. <a href="../../V2_REVIEW.html">Back to the collection</a>.</footer></main></html>'''
(root/'index.html').write_text(page.replace('NAV',nav).replace('TABLE',''.join(table)).replace('SECTIONS',''.join(sections)))
print(f'Refreshed {len(records)} device cases and seven orientation records.')
