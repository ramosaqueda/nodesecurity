var express = require('express');
var vulnerable = require('./vulnerable');
var api = express.Router();

//rutas para xss

api.post  ('/', vulnerable);

api.get('/', (req, res) =>  {
    res.render('xss');
})


module.exports = api;