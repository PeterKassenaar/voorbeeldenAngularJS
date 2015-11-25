(function () {
    // Definieer de module/app in dit bestand en voeg (later) eventuele dependencies toe
    angular.module('myApp', ['ngRoute'])
        .config(configRoutes);

    configRoutes.$inject = ['routeProvider'];
    function configRoutes($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/10_view01.html' // Default (en enige) view in dit eenvoudige project
            })
            .when('/namen', {
                templateUrl: 'views/10_view01.html'
            })
            .otherwise({redirectTo: '/'});

    }
})();