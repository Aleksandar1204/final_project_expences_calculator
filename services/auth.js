const express = require('express');
const bodyParser = require('body-parser');
var jwt = require('express-jwt');
const config = require('../config/index.js');
const db = require('../db/connection');
const auth = require('../handlers/auth');
const cors = require('cors');


db.init(config.getConfig('db'));

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(
    jwt(
        {secret: config.getConfig('jwt').key}
    )
    .unless({
        path: ['/api/v1/auth/register', '/api/v1/auth/login']
    })
);

app.post('/api/v1/auth/register', auth.register);
app.post('/api/v1/auth/login', auth.login);
app.get('/api/v1/auth/user/:email', auth.userInfo);
app.get('/api/v1/auth/renew', auth.renew);
app.post('/api/v1/auth/reset-link', auth.resetLink);
app.post('/api/v1/auth/reset-password', auth.resetPassword);
app.post('/api/v1/auth/change-password', auth.changePassword);

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send({message: 'Invalid token'});
    } else {
        next(err);
    }
});

app.listen(8081, err => {
    if(err){
        console.log('Could not start server');
        console.log(err);
        return;
    }
    console.log('Server successfully started on port 8081');
});