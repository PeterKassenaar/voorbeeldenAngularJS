(function () {
	angular.module('myApp')
		.factory('bookFactory', bookFactory);

	bookFactory.$inject = ['$http']; // minify-safe maken
	function bookFactory($http) {
		// 1. Maak een 'factory'-object
		var factory = {};

		// 2. Definieer URL waar gegevens worden opgehaald (hier: Yindo API)
		var urlYindo = 'http://api.yindo.com/api/book/new/10';

		// 3. Definieer functies als API/interface voor de buitenwereld
		// 3a. Voorbeeld 1: Boekgegevens ophalen vanaf Yindo
		factory.getBooks = function () {
			return $http({
				method : 'jsonp',
				url    : urlYindo + '?callback=JSON_CALLBACK'
			});
		};

		// 3b. Voorbeeld 2: Dummy persoonsgegevens ophalen vanaf FillText.com, plus andere notatie parameters
		var urlPeople     = 'http://filltext.com/?rows=10&fname={firstName}&lname={lastName}&email={email}&id={index}';
		factory.getPeople = function () {
			return $http({
				method : 'jsonp',
				url    : urlPeople,
				params : {'callback' : 'JSON_CALLBACK'}
			});
		}

		// Voorbeeld 4 : Weergegevens ophalen via openweatherMap. Sinds 1-11-2015: AppID (=api key) verplicht. zelf aanvragen op http://home.openweathermap.org/
		factory.getWeather = function (city) {
			return $http({
				method : 'get',
				url    : 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=8566d604cd9402b65394b034e52aa2af&q=' + city
			});
		};

		// 5. Altijd tot slot: retourneer het factory-object
		return factory;
	}
})();
