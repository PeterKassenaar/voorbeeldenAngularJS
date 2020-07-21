(function () {

    var app = angular.module('myApp');

    // 1. Create controller
    var movieController = function ($scope, movieFactory, GLOBALS) {
        var vm = this;
        // 2. Call to method in the factory, use promise-notation
        movieFactory.getMovies()
            .success(function (data) {
                    vm.movies = data.Search; // This particular API wraps its results in a Search array
            });

        // Listen to event that is thrown from the interceptor
        $scope.$on(GLOBALS.customEvent, function (event, data) {
            vm.eventData = data;
            //alert('I got the event!!')
        });

        // Listen to 'ready' event that is thrown from the interceptor
        $scope.$on(GLOBALS.customEventReady, function (event, data) {
            vm.eventReadyData = data;
            // alert('Request/response is complete!')
        });

        $scope.$on(GLOBALS.showSpinner, function () {
            // show the spinner.
            console.log('showing spinner...');
            vm.showSpinner = true;
        });

        $scope.$on(GLOBALS.hideSpinner, function () {
            console.log('hiding spinner...');
            vm.showSpinner = false;
        });
    };

    // 2. Create detailcontroller (Can be in separate file, for now combined in this file)
    var detailController = function ($scope, movieFactory, $routeParams) {
        console.log($routeParams);
        movieFactory.getMovieDetail($routeParams.id)
            .success(function (data) {
                console.log(data);
                $scope.movie = data;
                $scope.imgSrc = data.Poster;
            });
    };

    // 3. Add Controllers to app
    app.controller('movieController', ['$scope', 'movieFactory', 'GLOBALS', movieController]);
    app.controller('detailController', ['$scope', 'movieFactory', '$routeParams', detailController]);

})();
