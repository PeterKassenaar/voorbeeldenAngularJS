(function () {
	// Getter for the module and its configuration
	angular.module('myApp', ['ngRoute'])
		.config(configFunction);

	configFunction.$inject = ['$routeProvider', '$httpProvider']; // minify safe DI

	function configFunction($routeProvider, $httpProvider) {
		$routeProvider
			.when('/', {
				templateUrl : 'views/13_view01.html' // Default (and only) view in this  project
			})
			.when('/detail/:id', {
				templateUrl : 'views/13_view_detail.html'
			})
			.otherwise({redirectTo : '/'});

		//**********
		// Important:
		// push de interceptor-factory to the  $httpProvider-module
		// (they are defined in 13_ng_factory01.js)
		//**********
		$httpProvider.interceptors.push('myInterceptor');
	}
})(); // iffy
