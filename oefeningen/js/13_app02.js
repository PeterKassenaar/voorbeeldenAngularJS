(function () {
	// Definieer de module/app in dit bestand en voeg (later) eventuele dependencies toe
	var app = angular.module('myApp', ['ngRoute']);
	app.config(myConfig);

	myConfig.$inject = ['$routeProvider', '$httpProvider'];
	function myConfig($routeProvider, $httpProvider) {
		$httpProvider.interceptors.push('myInterceptor');
		
		$routeProvider
			.when('/', {
				templateUrl : 'views/13_view02.html' // Default (en enige) view in dit eenvoudige project
			})
			.when('/detail/:ean', {
				templateUrl : 'views/13_view_detail.html'
			})
			.otherwise({redirectTo : '/'});
	};

	app.constant('GLOBALS', {
		customEvent      : 'my-custom-event',
		customEventReady : 'my-custom-event-ready',
		hideSpinner      : 'hideSpinner',
		showSpinner      : 'showSpinner'
	})
})();
