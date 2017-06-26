var express = require('express');
var app = express();

app.set('port',process.env.PORT || 5002);

app.get('/hello', function(request, response) {
    response.send("Hello, this is Docker Example Two!");
});

app.listen(app.get('port'), function() {
	console.log('Express started on http://localhost:'+
		app.get('port') + '; press Ctrl-C to terminate.');
});