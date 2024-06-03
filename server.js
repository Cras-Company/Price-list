const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Указываем Express, где находятся статические файлы
app.use(express.static(path.join(__dirname)));

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Surrogate-Control', 'no-store');

  next();
});

// Маршрут для обработки запросов к вашему сайту
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Слушаем указанный порт
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
