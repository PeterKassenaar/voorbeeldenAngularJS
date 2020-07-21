(function () {
	//
	// First factory/service on deze app:
	// The Interceptor (to catch XHR-requests)
	//
	angular.module('myApp')
		.factory('myInterceptor', myInterceptor);

	myInterceptor.$inject = ['$location']; //minify safe
	function myInterceptor($location) {
		// 1. Create a 'factory'-object
		var interceptor = {};

		// 2. Function to capture successful OUTBOUND calls
		interceptor.request = function (request) {
			// Request success
			console.log('In interceptor request for ' + request.url + ' : ', request);
			// Handle additional stuff, for instance:
			//a. Create an Auth header
			//request.headers['X-token']= '1239871924662134823845'
			// b. Show Loading indicator (we're gonna do that next)
			return request; 		// for now: return unaltered.
		};

		interceptor.response = function (response) {
			// Response success
			console.log('in interceptor response: ', response);
			// ... additional stuff ...
			// Like hiding loading indicator
			return response;	// for now: return unaltered
		};

		// 3. Functions to handle Errors.
		interceptor.requestError = function (rejection) {
			console.error('in interceptor requestError: ', rejection); // Contains the data about the error on the request.
			// Return the promise rejection.
			// hide loading indicator
			return rejection;
		};

		interceptor.responseError = function (rejection) {
			console.log('in interceptor responseError', rejection); // Contains the data about the error on the response.
			// Return the promise rejection.
			// for instance: 404, not found:

			// Verberg loading indicator
			if (rejection.status === 404) {
				//window.location = 'views/404.html'; // or use Angular $location() object.
				$location.path('/404');
			}
			if (rejection.status === 401 || rejection.status === 403) { // unauthorized
				$location.path('/login'); // or use Angular $location() object.
			}
			return rejection;
		};

		// 4. Return factory object
		return interceptor;
	}

	/////////////////////////////////////////////////
	//
	// The second factory on the app,
	// to get some movie data
	//
	angular.module('myApp')
		.factory('movieFactory', function ($http) {
			// 1. Create a 'factory'-object
			var factory = {};

			// 2. Define URL (here: Movie API)
			var url = 'http://omdbapi.com/?apikey=f1f56c8e&s=',
				urlDetails = 'http://omdbapi.com/?apikey=f1f56c8e&i=';

			// 3. Definieer functies als API/interface voor de buitenwereld
			factory.getMovies = function () {
				return $http({
					method : 'get',
					url    : url + 'avatar' // TODO: make movie title dynamic
				});
			};

			factory.getMovieDetail = function (movieId) {
				return $http({
					method : 'get',
					url    : urlDetails + movieId
				});
			};

			// 4. Always: return factory-object
			return factory;
		});
})();
