(function () {
	// 1. Define module/app in this file and add dependency on Routing
	angular.module('myApp', ['ngRoute']);

	// 2. Configure routes
	angular.module('myApp')
		.config(configRoutes)

	configRoutes.$inject = ['$routeProvider'];
	function configRoutes ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/09_view01.html', // Default view
				controller: 'personController'
			})
			.when('/namen', {
				templateUrl: 'views/09_view01.html',
				controller: 'personController'
			})
			.when('/steden', {
				templateUrl: 'views/09_view02.html',
				controller: 'citiesController',
				controllerAs: 'c' // using controllerAs syntax here
			})
			.when('/detail/:id/:name?', {
				templateUrl: 'views/09_viewDetail.html',
				controller: 'detailController',
				controllerAs: 'd' // using controllerAs syntax here
			})
			.when('/404', {
				templateUrl: 'views/404.html'
			})
			 .otherwise({ redirectTo: '/404' });
	}
})();
