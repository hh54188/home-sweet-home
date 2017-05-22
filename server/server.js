const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();

// For express 4.x
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('.'));


app.post('/api/search', (req, res) => {

    let keywords = req.body.keywords;
    let page = req.body.page;

    res.send(JSON.stringify({
        data: [{
            id: '1',
            title: 'Hello Test',
            link: 'http://example.com'
        }],
        pagination: {
            total: 15,
            cur: parseInt(page, 10)
        }
    }));
});

app.get('/api/latest', (req, res) => {

    res.send(JSON.stringify({
        data: [{
            id: '1',
            title: 'Hello Test',
            link: 'http://example.com'
        }],
        pagination: {
            total: 15,
            cur: parseInt(req.query.page, 10)
        }
    }));
});

app.use(function (req, res, next) {
	res.status(404).send("Sorry can't find that!")
});

app.use(function (err, req, res, next) {
	console.error(err.stack)
  	res.status(500).send('Something broke!')
})

app.listen(80);