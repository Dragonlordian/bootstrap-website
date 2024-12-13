const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5500;

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/artist.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'artist.html'));
});

app.get('/news.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'news.html'));
});

app.get('/script/data/:filename', (req, res) => {
    const filename = req.params.filename;
    res.sendFile(path.join(__dirname, 'script/data', filename));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});