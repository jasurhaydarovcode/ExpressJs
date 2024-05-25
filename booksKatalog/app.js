const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.get('/books', (req, res) => {
    const filePath = path.join(__dirname, 'books.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Faylni o\'qishda xatolik yuz berdi:', err);
            res.status(500).send('Faylni o\'qishda xatolik yuz berdi');
            return;
        }
        try {
            const books = JSON.parse(data);
            res.json(books);
        } catch (parseError) {
            console.error('JSON parsingda xatolik yuz berdi:', parseError);
            res.status(500).send('JSON parsingda xatolik yuz berdi');
        }
    });
});



app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const book = books.find(b => b.id === id);
  
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: "Ma'lumot topilmadi" });
    }
  });

app.listen(port, () => {
    console.log(`Server http://localhost:${port} da ishga tushdi`);
});
