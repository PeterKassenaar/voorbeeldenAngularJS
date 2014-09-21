(function (app) {
	//
	// Eerste factory/service op deze app, de Interceptor (om XHR-requests te onderscheppen)
	//
	app.factory('myInterceptor', function ($q) {
		// 1. Maak een 'factory'-object
		var interceptor = {};

		// 2. Functies om success te onderscheppen
		interceptor.request = function (config) {
			// Request success
			console.log('in interceptor request voor ' + config.url + ' : ', config);
			// Doe aanvullende dingen...
			// Return the config or wrap it in a promise if blank.
			return config || $q.when(config);
		};

		interceptor.response = function (response) {
			// Response success
		    console.log('in interceptor response: ', response);
			// ... doe aanvullende dingen, bijvoorbeeld op basis van response.status == 401 (Unauthorized)
			return response || $q.when(response);
		};

		// 3. Functies om de Errors af te handelen.
		interceptor.requestError = function (rejection) {
		    console.log('in interceptor requestError: ', rejection); // Contains the data about the error on the request.
		    // Return the promise rejection.
		    return $q.reject(rejection);
		};

		interceptor.responseError = function (rejection) {
		    console.log('in interceptor responseError', rejection); // Contains the data about the error on the response.
		    // Return the promise rejection.
		    // bijvoorbeeld: 404, not found:
		    if (rejection.status === 404) {
		        window.location = 'views/404.html'; // of gebruik Angular $location() object.
		        return;
		    }
		    return $q.reject(rejection);
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