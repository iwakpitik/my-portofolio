const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// Menyajikan file statis dari folder'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rute untuk halaman uttama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});