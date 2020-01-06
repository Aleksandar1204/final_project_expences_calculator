const express = require('express');
const bodyParser = require('body-parser');
var jwt = require('express-jwt');
const config = require('../config/index.js');
const db = require('../db/connection');
const auth = require('../handlers/auth');
const cors = require('cors');


db.init(config.getConfig('db'));

var api = express();

api.use(bodyParser.json());
api.use(cors());
api.use(
    jwt(
        {secret: config.getConfig('jwt').key}
    )
    .unless({
        path: ['/api/v1/auth/register', '/api/v1/auth/login']
    })
);

api.post('/api/v1/auth/register', auth.register);
api.post('/api/v1/auth/login', auth.login);
api.get('/api/v1/auth/user/:email', auth.userInfo);
api.get('/api/v1/auth/renew', auth.renew);
api.post('/api/v1/auth/reset-link', auth.resetLink);
api.post('/api/v1/auth/reset-password', auth.resetPassword);
api.post('/api/v1/auth/change-password', auth.changePassword);

api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send({message: 'Invalid token'});
    } else {
        next(err);
    }
});

api.listen(8080, err => {
    if(err){
        console.log('Could not start server');
        console.log(err);
        return;
    }
    console.log('Server successfully started on port 8080');
});