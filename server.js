const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * 🔥 ВЕРСИЯ САЙТА
 * Меняешь ТОЛЬКО при деплое
 */
const VERSION = '1.0.0';

// ❌ отключаем ETag глобально
app.set('etag', false);

/**
 * ❌ HTML — НИКОГДА не кэшируем
 */
app.get('/', (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.sendFile(path.join(__dirname, 'index.html'));
});

/**
 * ✅ Статические файлы — МОЖНО кэшировать
 * versioning решает обновление
 */
app.use(express.static(path.join(__dirname), {
  etag: false,
  lastModified: false,
  maxAge: '30d', // можно 7d / 30d / 1y
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-store');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=2592000');
    }
  }
}));

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
  console.log(`Site version: ${VERSION}`);
});
