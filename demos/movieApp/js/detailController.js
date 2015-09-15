/**
 * Created by PeterKassenaar on 23/03/15.
 */
(function () {
	'use strict';

	angular.module('movieApp')
		.controller('movieDetailController', movieDetailController);

	movieDetailController.$inject = ['$routeParams', 'movieService']
	function movieDetailController($routeParams, movieService) {
		var vm = this;

		vm.id = $routeParams.id;

		// dit is als het ware een 'init' functie
		movieService.getMovie(vm.id)
			.then(function (movie) {
				vm.movie = movie.data;
			})
			.catch(function (err) {
				alert('ERROR: ' + err);
			})

	}
})();