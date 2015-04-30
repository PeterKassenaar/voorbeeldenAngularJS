(function () {
	angular.module('myApp')
		.factory('bookFactory', function ($http) {
		// 1. Maak een 'factory'-object
		var factory = {};

		// 2. Definieer URL waar gegevens worden opgehaald (hier: Yindo API)
		var urlYindo = 'http://api.yindo.com/api/book/new/10';

		// 3. Definieer functies als API/interface voor de buitenwereld
		// 3a. Voorbeeld 1: Boekgegevens ophalen vanaf Yindo
		factory.getBooks = function () {
			return $http({
				method: 'jsonp',
				url: urlYindo + '?callback=JSON_CALLBACK',
                cache:true
			});
		};

		// 3b. Voorbeeld 2: Dummy persoonsgegevens ophalen vanaf FillText.com
		//var urlPeople = 'http://filltext.com/?rows=10&fname={firstName}&lname={lastName}&email={email}&id={index}';
		//factory.getPeople = function () {
		//	return $http({
		//		method:'jsonp',
		//		url: urlPeople,
		//		params: { 'callback' : 'JSON_CALLBACK' }
		//	});
		//}

		// 3c. Voorbeeld 3: Boeken ophalen, maar ALLEEN id, titel en auteur teruggeven.
		//    i.e. een stukje BI in de service, in plaats van in de controller (==keuze van de maker).

		var partialBooks = [];
		var loadPartialBooks = (function () {
			return $http({
				method: 'jsonp',
				url: urlYindo + '?callback=JSON_CALLBACK'
			});
		})().success(function (data) {
			for (var i = 0; i < data.length; i++) {
				// mapping van je properties

				partialBooks.push({
					name: data[i].firstAuthorName,
					id: data[i].firstAuthorID,
					title: data[i].title,
					language : data[i].languageID== 1 ? 'Nederlands' : 'Buitenlands'
				});
			}
		});

		factory.getPartialBooks = function () {
			return partialBooks;
		};

		factory.getWeather = function (city) {
			return $http({
				method: 'get',
				url: 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=' + city
			});
		};

		// 4. Altijd tot slot: retourneer het factory-object
		return factory;
	});
})();