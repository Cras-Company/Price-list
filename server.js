const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Указываем Express, где находятся статические файлы
app.use(express.static(path.join(__dirname)));

app.use((req, res, next) => {

  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 1);
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.setHeader('Expires', expiryDate.toUTCString());

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
