var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function(request, response) {
    response.send('Hello, world!');
});

app.get('/happy-birthday/:name', function(request, response) {
    response.send('Happy Birthday ' + request.params.name + '!');
});

app.post('/addTwoNumbers', function(request, response) {
    var c = request.body.a + request.body.b;
    response.send(500, "a + b = " + c);
});

app.listen(8000, function() {
    console.log("Listening on port 8000!");
});
