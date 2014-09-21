(function (app) {
	app.factory('bookFactory', function ($http) {
		// 1. Maak een 'factory'-object
		var factory = {};

		// 2. Definieer URL's waar gegevens worden opgehaald (hier: Yindo API)
		var url = 'http://api.yindo.com/api/book/new/10',
			urlDetails = 'http://api.yindo.com/api/book/details/',
			urlGetPage = 'http://api.yindo.com/api/page/load/00000000-0000-0000-0000-000000000000/'; // standaard : even als anonieme gebruiker boekpagina ophalen

		// 3a. Definieer functies als API/interface voor de buitenwereld. Als eerste de globale functie getBooks()
		factory.getBooks = function () {
			return $http({
				method: 'jsonp',
				url: url + '?callback=JSON_CALLBACK'
			});
		};

		// 3b. Haal details op voor 1 boek.
		factory.getBookDetail = function (ean) {
			return $http({
				method: 'jsonp',
				url: urlDetails + ean + '?callback=JSON_CALLBACK'
			});
		};

		// 3c. Haal pagina op binnen 1 boek.
		factory.getPage = function (bookID) {
			return $http({
				method: 'jsonp',
				url: urlGetPage + bookID + '/0' + '?callback=JSON_CALLBACK'	// '0' is altijd de cover van een boek en die is by design altijd gratis toegankelijk. Andere/meer pagina's ophalen? Dan dit paginanummer dynamisch maken.
			});
		};
		
		// 4. Altijd tot slot: retourneer het factory-object
		return factory;
	});
})(angular.module('myApp'));