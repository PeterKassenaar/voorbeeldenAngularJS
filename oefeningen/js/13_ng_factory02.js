(function () {
    //
    // Eerste factory/service op deze app, de Interceptor (om XHR-requests te onderscheppen)
    //
    angular.module('myApp')
        .factory('myInterceptor', myInterceptor);

    myInterceptor.$inject = ['$rootScope', 'GLOBALS'];

    function myInterceptor($rootScope, GLOBALS) {
        // 1. Create a 'factory'-object
        var interceptor = {};

        // 2. Functions to intercept request and response
        interceptor.request = function (config) {
            // broadcast custom event, send config.url as data
            $rootScope.$broadcast(GLOBALS.customEvent, config.url);
            $rootScope.$broadcast(GLOBALS.showSpinner);
            return config;
        };

        // 2. Functies om success te onderscheppen
        interceptor.response = function (config) {
            // broadcast custom event, stuur config.url mee als data
            $rootScope.$broadcast(GLOBALS.customEventReady, 'Event Done!');
            // Return the config after a simulated delay
            $rootScope.$broadcast(GLOBALS.hideSpinner);
            return config;
        };

        // 4. Return factory object
        return interceptor;
    }

    /////////////////////////////////////////////////
    //
    // The second factory on the app,
    // to get some movie data
    //
    angular.module('myApp')
        .factory('movieFactory', function ($http) {
                // 1. Create a 'factory'-object
                var factory = {};

                // 2. Define URL (here: Movie API)
                var url = 'http://omdbapi.com/?apikey=f1f56c8e&s=',
                    urlDetails = 'http://omdbapi.com/?apikey=f1f56c8e&i=';

                // 3. functions as the API/interface for the outside world
                factory.getMovies = function () {
                    return $http({
                        method: 'get',
                        url: url + 'avatar' // TODO: make movie title dynamic
                    });
                }

                factory.getMovieDetail = function (movieId) {
                    return $http({
                        method: 'get',
                        url: urlDetails + movieId
                    });
                };

                // 4. Always: return factory-object
                return factory;
            }
        );
})();
