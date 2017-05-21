const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();

app.use(express.static('.'));
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
})); 

app.post('/api/search', (req, res) => {
    // console.log(req);
    res.send('Hello');
})

app.listen(80);