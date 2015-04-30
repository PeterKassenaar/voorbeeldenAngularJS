(function () {
    // Definieer de module/app in dit bestand en voeg (later) eventuele dependencies toe
    var app = angular.module('myApp', ['ngRoute']);
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/12_view01.html' // Default (en enige) view in dit eenvoudige project
            })
            .when('/detail/:ean/:title?/:authorName?', {	// Met optionele parameters
                templateUrl: 'views/12_view_detail.html'
            })
            .otherwise({ redirectTo: '/' });

    })
})();