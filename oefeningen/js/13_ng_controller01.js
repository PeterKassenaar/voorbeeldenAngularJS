(function () {

	// 1. Create controller
	var movieController = function ($scope, movieFactory) {
		// 2. Call naar methode in de factory, gebruik promise-notatie
		movieFactory.getMovies().success(function (data) {
			$scope.movies = data.Search;
		});
	};

	// 2. Create detailcontroller (SHOULD be in separate file - for now: combined)
	var detailController = function ($scope, movieFactory, $routeParams) {
		console.log($routeParams);
		movieFactory.getMovieDetail($routeParams.id)
			.success(function (data) {
				console.log(data);
				$scope.movie = data;
				$scope.imgSrc = data.Poster;
			});
	};

	// 3. Add Controllers to the
	angular.module('myApp').controller('movieController', ['$scope', 'movieFactory', movieController]);
	angular.module('myApp').controller('detailController', ['$scope', 'movieFactory', '$routeParams', detailController]);

})();
