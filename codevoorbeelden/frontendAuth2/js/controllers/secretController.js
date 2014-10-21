(function (app) {
	app.controller('secretController', function ($scope) {
		$scope.msg = 'Hello secret!';
	});
})(angular.module('myApp'));