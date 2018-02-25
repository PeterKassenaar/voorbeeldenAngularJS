(function () {
	angular.module('myApp')
		.factory('movieFactory', movieFactory);

	movieFactory.$inject = ['$http'];

	function movieFactory($http) {
		// 1. Maak een 'factory'-object
		var factory = {};

		// 2. Definieer URL's waar gegevens worden opgehaald (hier: OMDB API)
		var url = 'http://omdbapi.com/?apikey=f1f56c8e&s=', 		// Let op de 's=' parameter,
			urlDetails = 'http://omdbapi.com/?apikey=f1f56c8e&i=';	// let op de 't=' parameter, voor ophalen details

		// 3a. Definieer functies als API/interface voor de buitenwereld.
		// Als eerste de globale functie getMovies(), die Hardcoded alle 'avatar' films ophaalt
		factory.getMovies = function () {
			return $http({
				method: 'get',
				url: url + 'avatar'
			});
		};

		// 3b. Haal details op voor 1 movie.
		factory.getMovieDetail = function (id) {
			return $http({
				method: 'get',
				url: urlDetails + id
			});
		};

		// 4. Altijd tot slot: retourneer het factory-object
		return factory;
	}
})();
