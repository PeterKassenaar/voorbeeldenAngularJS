(function (app) {
	app.factory('bookFactory', function ($http) {
		// 1. Maak een 'factory'-object
		var factory = {};

		// 2. Definieer URL waar gegevens worden opgehaald (hier: Yindo API)
		var url = 'http://api.yindo.com/api/book/new/10';

		// 3. Definieer functies als API/interface voor de buitenwereld
		factory.getBooks = function () {
			return $http({
				method: 'jsonp',
				url: url + '?callback=JSON_CALLBACK'
			});
		}

		// 4. Altijd tot slot: retourneer het factory-object
		return factory;
	});
})(angular.module('myApp'));