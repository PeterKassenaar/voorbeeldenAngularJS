(function (app) {
	app.controller('homeController', function ($scope, $rootScope, authService, AUTH_EVENTS) {
		$scope.msg = 'Hello world';
		// $scope.isLoggedIn = authFactory.isLoggedIn();
		
		$scope.logout = function () {
			authService.logout(function () {
				$rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
			});
		};
	});
})(angular.module('myApp'));