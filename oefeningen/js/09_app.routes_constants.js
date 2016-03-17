(function () {
	'use strict';

	// 2. Routes configureren
	angular.module('myApp', ['ngRoute'])
		.config(myRoutes);

	// 3. Routes implementeren
	myRoutes.$inject = ['$routeProvider', 'ROUTES']; // minify safe injection
	function myRoutes($routeProvider, ROUTES) {
		$routeProvider
			.when(ROUTES.root, {
				//template:'<h1>Hello world {{ bedrijf }}</h1>',
				templateUrl : 'views/09_view01.html', // Default view
				controller  : 'personController'
			})
			.when(ROUTES.namen, {
				templateUrl : 'views/09_view01.html',
				controller  : 'personController'
			})
			.when(ROUTES.steden, {
				templateUrl  : 'views/09_view02.html',
				controller   : 'citiesController',
				controllerAs : 'c'
			})
			.when('/detail/:id?/:name?', {
				templateUrl  : 'views/09_viewDetail.html',
				controller   : 'detailController',
				controllerAs : 'd'
			})
			.when('/404', {
				templateUrl : 'views/404.html'
			})
			.otherwise({redirectTo : '/404'});
	}
})();