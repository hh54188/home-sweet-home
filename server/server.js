const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('.'));

app.get('/api/search', (req, res) => {
    res.send('Hello');
})

app.listen(80);