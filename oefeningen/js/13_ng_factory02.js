(function (app) {
	//
	// Eerste factory/service op deze app, de Interceptor (om XHR-requests te onderscheppen)
	//
	app.factory('myInterceptor', function ($rootScope) {
		// 1. Maak een 'factory'-object
		var interceptor = {};

		// 2. Functies request en response te onderscheppen
		interceptor.request = function (config) {
			// broadcast custom event, stuur config.url mee als data
			$rootScope.$broadcast('my-custom-event', config.url)
			// Return the config or wrap it in a promise if blank.
			return config;
		};

		// 2. Functies om success te onderscheppen
		interceptor.response = function (response) {
			// broadcast custom event, stuur config.url mee als data
			$rootScope.$broadcast('my-custom-event-ready', response.data)
			// Return the config or wrap it in a promise if blank.
			return response;
		};

		// 4. Return factory object
		return interceptor;
	});

	//
	// De tweede factory op deze app, de oorspronkelijke bookFactory (om boekgegevens op te halen)
	//
	app.factory('bookFactory', function ($http) {
		// 1. Maak een 'factory'-object
		var factory = {};

		// 2. Definieer URL waar gegevens worden opgehaald (hier: Yindo API)
		var url = 'http://api.yindo.com/api/book/new/10',
			urlDetails = 'http://api.yindo.com/api/book/details/';

		// 3. Definieer functies als API/interface voor de buitenwereld
		factory.getBooks = function () {
		    return $http({
		        method: 'jsonp',
		        url: url + '?callback=JSON_CALLBACK'
		    });
		};

		factory.getBookDetail = function (ean) {
		    return $http({
		    	method: 'jsonp',

		        url: urlDetails + ean + '?callback=JSON_CALLBACK'
		    });
		};

		// 4. Altijd tot slot: retourneer het factory-object
		return factory;
	});
})(angular.module('myApp'));
