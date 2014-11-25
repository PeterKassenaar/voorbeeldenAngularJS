(function () {
	// Definieer de module/app in dit bestand en voeg (later) eventuele dependencies toe
	var app = angular.module('myApp', ['ngRoute']);
	app.config(function ($routeProvider) {
		$routeProvider
			.when('/', {				
				templateUrl: 'views/10_view01.html' // Default (en enige) view in dit eenvoudige project
			})
			.when('/namen', {				
				templateUrl: 'views/10_view01.html'
			})		
		.otherwise({ redirectTo: '/' });

	});
})();