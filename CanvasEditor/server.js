'use strict';

var express = require('express');
var app = express();
var path = require('path');
var chalk = require('chalk');

var port = 8080;


app.use('/public', express.static('public'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(port);