(function (app) {
	var ctrl = function ($scope) {
		$scope.msg = 'Hello World';

		// add some simple functions to be tested
		$scope.calculate = function () {
			return 2 + 2;
		};

		$scope.shout = function () {
			$scope.msg = $scope.msg + '!!!';
		};

		$scope.myArr = [];

		$scope.removeFromArr = function () {
			$scope.myArr.pop();
		}

		
	};

	app.controller('myController', ['$scope', ctrl]);
})(angular.module('myApp'));