(function () {
	// Definieer de module/app in dit bestand en voeg (later) eventuele dependencies toe
	var app = angular.module('myApp', ['ngRoute']);
	app.config(function ($routeProvider) {
		$routeProvider
			.when('/', {			
				templateUrl: '/views/09_view01.html' // Default view
			})
			.when('/namen', {				
				templateUrl: '/views/09_view01.html'
			})
			.when('/steden', {
				templateUrl: 'views/09_view02.html'
			})
		.otherwise({ redirectTo: '/views/09_view01.html' });

	});
})();


//controller: 'personController',
//controller: 'citiesController',