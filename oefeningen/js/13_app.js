(function () {
    // Definieer de module/app in dit bestand en voeg (later) eventuele dependencies toe
    angular.module('myApp', ['ngRoute'])
        .config(configFunction);

    configFunction.$inject = ['$routeProvider', '$httpProvider'];
    function configFunction($routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/13_view01.html' // Default (en enige) view in dit eenvoudige project
            })
            .when('/detail/:ean', {
                templateUrl: 'views/13_view_detail.html'
            })
            .otherwise({redirectTo: '/'});

        // push de interceptor-factory op de $httpProvider-module
        // (ze zijn gedefinieerd in 13_ng_factory01.js)
        $httpProvider.interceptors.push('myInterceptor');
    }
})();