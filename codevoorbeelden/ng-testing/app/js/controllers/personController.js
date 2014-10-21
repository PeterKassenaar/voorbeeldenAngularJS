(function (app) {
	var personController = function ($scope, personFactory) {
		$scope.persons = personFactory.getPersons();
	};

	app.controller('personController', ['$scope', 'personFactory', personController]);
})(angular.module('myApp'));