(function () {

	// 3. Controllers toevoegen aan app
	angular.module('myApp')
		.controller('movieController', movieController)
		.controller('detailController', detailController);


	// 1. Maak de movieController
	movieController.$inject = ['$scope', 'movieFactory'];

	function movieController($scope, movieFactory) {
		// 2. Call naar methode in de factory, gebruik promise-notatie
		movieFactory.getMovies().success(function (data) {
			$scope.movies = data.Search;
		});
	}

	// 2. Maak de detailController (kan ook in aparte file, nu even gecombineerd met movieController)
	detailController.$inject = ['$scope', 'movieFactory', '$routeParams'];

	function detailController($scope, bookFactory, $routeParams) {
		console.log($routeParams);
		// De promise-chain met .then(), zonder nested callbacks.
		// Elke .then() heeft [maximaal] 3 parameters: success(), error() en notify();
		bookFactory.getMovieDetail($routeParams.id)
			.then(  // <=== Eerste .then()
				// Succeshandler
				function (movieData) {
					console.log(movieData.data);
					$scope.movie = movieData.data;
					$scope.imgSrc = movieData.data.Poster;
				},
				// Error handler
				function (reason) {
					alert('er is iets fout gegaan')
				},
				// Eventueel: derde parameter - Notify
				function (message) {
					alert('Dit is de notify handler')
				})
	}
})();
