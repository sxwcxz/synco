# SyncoMusic web sitesi

Statik site, derleme gerektirmez. Dosyalar:

- `index.html` – sayfa (three.js, GSAP ve yazı tipleri CDN'den yüklenir)
- `phone.glb` – 3D telefon modeli
- `stats.json` – Play Store puanı ve indirme sayısı
- `scripts/update-stats.mjs` + `.github/workflows/update-stats.yml` – stats.json'u her gün Google Play'den güncelleyen GitHub Action

## Yayınlama

Klasörün içeriğini bir GitHub deposuna yükleyin (`.github` klasörü dahil).

- **GitHub Pages:** Settings → Pages → Deploy from a branch → `main` / `(root)`.
- **Vercel / Netlify:** Depoyu içe aktarın. Framework: "Other", build komutu boş, çıktı klasörü `/` (kök).

Üçünde de günlük güncelleme aynı: Action `stats.json` değişirse depoya commit atar, site yeniden yayınlanır. İlk denemek için depoda Actions → "Update Play Store stats" → Run workflow.

## Yerelde deneme

`index.html` dosyasına çift tıklamayın (model `file://` ile yüklenmez). Klasörde `npx serve` veya `python3 -m http.server` çalıştırıp adrese gidin.

## Notlar

- Puan/indirme çekilemezse (Google geçici engellerse) eski değerler kalır, site bozulmaz.
- Dosya yolları göreli olduğu için `kullanici.github.io/depo/` gibi alt klasörlerde de çalışır.
