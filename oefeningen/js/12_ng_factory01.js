(function () {
	angular.module('myApp')
		.factory('movieFactory', movieFactory);

	movieFactory.$inject = ['$http'];

	function movieFactory($http) {
		// 1. Create a 'factory' object
		var factory = {};

		// 2. Define URL's to get data from (here: OMDB API)
		var url = 'http://omdbapi.com/?apikey=f1f56c8e&s=', 		// watch the 's=' parameter,
			urlDetails = 'http://omdbapi.com/?apikey=f1f56c8e&i=';	// watch the 't=' parameter, voor ophalen details

		// 3a.Define functions to call the factory from the outside world
		// Global function getMovies(), fetching all 'avatar' movies, hardcoded.
		factory.getMovies = function () {
			return $http({
				method: 'get',
				url: url + 'avatar'
			});
		};

		// 3b. Get details for one movie
		factory.getMovieDetail = function (id) {
			return $http({
				method: 'get',
				url: urlDetails + id
			});
		};

		// 4. Return factory object
		return factory;
	}
})();
