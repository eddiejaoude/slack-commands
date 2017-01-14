let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let jsonParser = bodyParser.json();
let request = require('request');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.send('Slack Commands!');
});

app.all('/github', jsonParser, function (req, res) {
    console.log(req.params);
    console.log(req.body);

    let username = req.body.text || req.body.user_name || 'eddiejaoude';
    console.log(`username: ${username}`);

    request({
        url: `http://api.github.com/users/${username}/events`,
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'SlackCmds',
        }
    }, function (error, response, body) {
        let data = JSON.parse(body).slice(0, 3).map((item) => {
            return {
                'title': item.type,
                'ts': Date.parse(item.created_at)
            };
        });
        res.json(
            {
                "attachments": data
            }
        );
    })
});

let port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
});
