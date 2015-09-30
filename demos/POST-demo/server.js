var express    = require('express');
var bodyParser = require('body-parser');
var jwt        = require('jwt-simple');
var _          = require('lodash');
var app        = express();
//*******************
// Parse forms & JSON in body
//*******************
app.use(bodyParser.urlencoded({
	extended : true
}));
app.use(bodyParser.json());

//Stel middleware in voor serveren van statische bestanden (HTML, CSS, images)
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	res.send('Gebruik: stuur een POST-request met user-gegevens(bv "username" en "email") naar http://localhost:3000/user')
});

//****************
// De route voor vewerken van AngularJS - POST-request
//****************
var user = {};
app.post('/user', function (req, res) {
	// verwerk binnenkomende request. We gaan er van uit
	// dat de parameter 'username' en 'email' aanwezig zijn.
	// TODO: error checking!
	console.log(req.body);
	user.username = req.body.username;
	user.email    = req.body.email;
	// Echo het user-object naar de client
	res.json(user);

});


app.listen(3000, function () {
	console.log('Server gestart op poort 3000...');
});