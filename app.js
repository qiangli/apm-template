var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());
app.use(express.static('.'));

app.get('/', function (request, response) {
    response.sendfile('index.html');
});

app.listen(8000, function () {
    console.log('Express server started!!!');
});
