var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var jsonParser = bodyParser.json();

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Slack Commands!');
});

app.post('/github', jsonParser, function (req, res) {
    res.json(req.body);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
