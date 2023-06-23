var express = require('express');
var vulnerable = require('./vulnerable');
var api = express.Router();
const multer  = require('multer')
const upload = multer({ dest: './public/data/upload/' })
//rutas para xss

api.post  ('/', upload.single('uploaded_file'), vulnerable);

api.get('/', (req, res) =>  {
    res.render('xee');
})


module.exports = api;