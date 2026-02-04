const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ❌ Отключаем ETag
app.set('etag', false);

// ✅ Общие заголовки
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

// ✅ Статика ПОСЛЕ
app.use(express.static(path.join(__dirname), {
  etag: false,
  lastModified: false,
  setHeaders: (res) => {
    res.setHeader('Cache-Control', 'no-store');
  }
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});