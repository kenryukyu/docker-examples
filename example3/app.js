var express = require('express');
var app = express();
var mysql = require('mysql');

app.set('port',process.env.PORT || 5002);

mysql.createConnection({
    host: "database-container",
    user: "root",
    password: "password"
});

app.get('/hello', function(request, response) {
    response.send("Hello, this is Docker Example Three! I'm connected to a database container!");
});

app.listen(app.get('port'), function() {
	console.log('Express started on http://localhost:'+
		app.get('port') + '; press Ctrl-C to terminate.');
});