(function(app) {
    app.controller('loginController', function($scope, $rootScope, authService, AUTH_EVENTS) {
        // login user
    	$scope.credentials = {
    		username: '',
    		password: ''
    	};

        $scope.login = function(credentials) {
            console.log('username: ', $scope.credentials.username, ', password: ', $scope.credentials.password);
            // voor dummy login
            authService.login(credentials, function (response) {
            	if (response === 'success') {
            		$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            	} else if (response === 'fail') {
            		$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            	}
            });

            // Voor echte login, via promise
            // authService.login(credentials).then(function() {
            //     $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            // }, function() {
            //     $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            // });
        } // end scope.login
    });
})(angular.module('myApp'));
