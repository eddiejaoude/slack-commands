var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var jsonParser = bodyParser.json();
var request = require('request');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('Slack Commands!');
});

app.all('/github', jsonParser, function (req, res) {
    console.log(req.params);
    console.log(req.body);

    request({
        url: `http://api.github.com/users/${req.body.user_name || req.body.text}/events`,
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'SlackCmds',
        }
    }, function (error, response, body) {
        let data = JSON.parse(body).map((item)=>{
            return { 'type': item.type, 'date': item.created_at};
        });
        res.json(data);
    })
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
});
