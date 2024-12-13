const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3000;

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/script', express.static(path.join(__dirname, 'script')));

app.use('/css', express.static(path.join(__dirname, 'assets', 'css')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/artist.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'artist.html'));
});

app.get('/news.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'news.html'));
});

app.get('/script/data/artists.json', (req, res) => {
    const artistsData = fs.readFileSync(path.join(__dirname, 'script', 'data', 'artists.json'), 'utf-8');
    res.header("Content-Type", "application/json");
    res.send(artistsData);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
