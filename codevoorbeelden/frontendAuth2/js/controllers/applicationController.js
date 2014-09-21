(function(app) {
	app.controller('applicationController', ['$scope', 'USER_ROLES', 'authService', 'Session', '$rootScope', 'AUTH_EVENTS',
        function ($scope, USER_ROLES, authService, Session, $rootScope, AUTH_EVENTS) {
        	$scope.currentUser = null;
        	$scope.userRoles = USER_ROLES;
        	$scope.isAuthorized = authService.isAuthorized;

        	$scope.$on('auth-login-success', function () {
        		console.log(' loginSuccess ontvangen');
        		$scope.currentUser = Session;
        	});

        	$scope.$on('auth-login-failed', function () {
        		console.log(' loginFailed ontvangen');
        		$scope.currentUser = null;
        	});

        	$scope.$on('auth-logout-success', function () {
        		console.log(' user uitgelogd');
        		$scope.currentUser = null;
        	});

        	
        }
	]);
})(angular.module('myApp'));
