import gplay from 'google-play-scraper';
import { readFileSync, writeFileSync } from 'node:fs';

const fmt = n => n >= 1e9 ? `${n / 1e9}B+` : n >= 1e6 ? `${n / 1e6}M+` : n >= 1e3 ? `${n / 1e3}K+` : `${n}+`;

try {
  const app = await gplay.app({ appId: 'com.eaysoft.syncomusic', lang: 'en', country: 'us' });
  if (!(app.score > 0) || !app.minInstalls) throw new Error('unexpected data from Google Play');
  const next = { rating: Number(app.score).toFixed(1), downloads: fmt(app.minInstalls), updated: new Date().toISOString().slice(0, 10) };
  const prev = JSON.parse(readFileSync('stats.json', 'utf8'));
  if (prev.rating !== next.rating || prev.downloads !== next.downloads) {
    writeFileSync('stats.json', JSON.stringify(next, null, 2) + '\n');
    console.log('Updated', next);
  } else console.log('No change');
} catch (e) {
  console.error('Could not update stats, keeping the old values:', e.message);
}
