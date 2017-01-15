# slack-commands

## Slack usage

`/github <username>`

if no `username` is provided it will use your slack username.

![Screenshot](https://cloud.githubusercontent.com/assets/624760/21960883/fe0e763c-daf0-11e6-8383-6ec840fcc6f4.png)

## Developer quickstart

1. npm install
2. node app.js

## API end points
 
```http
GET /
```

```html
Slack commands!
```
 
```http
POST /github

<body>
```

```json
<body>
```

## Deploy to Heroku

### Add remote

`git remote add heroku https://git.heroku.com/slackcmds.git`

or 

`heroku git:remote -a slackcmds`

### Push branch

`git push heroku prototype-v0.1:master -f`
