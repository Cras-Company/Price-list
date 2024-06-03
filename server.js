const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для установки заголовков, предотвращающих кеширование
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Surrogate-Control', 'no-store');
  next();
});

// Middleware для предотвращения кеширования динамических файлов .js
app.use('/*.js', (req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Surrogate-Control', 'no-store');
  next();
});

// Указываем Express, где находятся статические файлы с дополнительными заголовками
app.use(express.static(path.join(__dirname), {
  setHeaders: (res, path) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('Surrogate-Control', 'no-store');
  }
}));

// Маршрут для обработки запросов к вашему сайту
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Слушаем указанный порт
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
