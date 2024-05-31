const express = require('express');
const app = express();
const port = 3000;

// إعداد مسار الجذر
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

// إعداد مسار API بسيط
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Vercel!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
