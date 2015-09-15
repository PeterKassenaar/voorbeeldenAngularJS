(function () {
	'use strict';

	angular.module('movieApp')
		.controller('movieHomeController', movieHomeController);

	movieHomeController.$inject = ['movieService'];
	function movieHomeController(movieService) {
		var vm = this; // caching van 'this'  keyword in local variabele
		vm.searchMovies = function (keyword) {
			movieService.searchMovies(keyword)
				.then(function (movies) {
					vm.movies = movies.data.Search;
					movieService.setMovieCache(vm.movies); // set caching
				})

				.catch(function (error) {
					alert('ERROR: ' + error);
				})
		};

		vm.clearMovies = function(){
			vm.movies = undefined;
			movieService.clearMovieCache();
		};

		// See if cache is present
		function init() {
			vm.movies = movieService.getMovieCache();
		}

		init();
	}

})();