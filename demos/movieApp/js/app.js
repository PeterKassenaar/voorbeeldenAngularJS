(function () {
	'use strict';
	// Setter for movieApp
	angular.module('movieApp', ['ngRoute'])
		.config(configFunction);

	configFunction.$inject = ['$routeProvider']; // minify safe DI!
	function configFunction($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl  : 'views/home.html',
				controller   : 'movieHomeController',
				controllerAs : 'vm'
			})
			.when('/detail/:id', {
				templateUrl  : 'views/detail.html',
				controller   : 'movieDetailController',
				controllerAs : 'vm'
			})
	}
})();