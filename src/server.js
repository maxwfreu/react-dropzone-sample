var express     = require('express'),
    path        = require('path'),
    multer      = require('multer'),
    bodyParser  = require('body-parser'),
    MulterImpl  = require('../multerImpl');

//Define React module here so that the webpack will import React library before using in index.js
var React = require('react');

var app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'dist')));

//require('../multerImpl')(app); //Call the multerImpl and pass in app state to it

module.exports = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
