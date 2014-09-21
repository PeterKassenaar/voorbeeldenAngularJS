(function (app) {

	// 2. Maak de  controller
	var personController = function ($scope, personFactory) {
		$scope.persons = personFactory.getPersons();
	};

	// hier: met minify-safe syntax
	app.controller('personController', ['$scope', 'personFactory', personController]);

	// of simpelweg:
	//app.controller('personController', personController);
})(angular.module('myApp')); // bestaande module doorgeven als parameter
