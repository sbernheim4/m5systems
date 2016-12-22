'use strict';
var path = require('path');
var express = require('express');
var app = express();
var port = 1337;

// folder to serve public files --> css, img, etc
app.use(express.static(path.join(__dirname, 'public')));

/*
 * serve all the files in ../browser/ staticlly as well --> Needed since the
 * html template files must be served statically so that they can be accessed
 * by the browser as well on a GET request
 */
app.use(express.static(path.join(__dirname, '../browser')));


/*app.use(function (req, res, next) {
	if (req.path !== '/browser/js/app.js'&&  path.extname(req.path).length > 0) {
		console.log(req.path);
		res.status(404).end();
	} else {
		next();
	}
});*/

// for any get request return the index.html file
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, '/index.html'));
});

// listen on the port for incoming requests
app.listen(port, function() {
	console.log('Listening to port:', port);
});
