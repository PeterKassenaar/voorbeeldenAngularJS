(function (app) {

	// 2. Maak de  controller
	var personController = function ($scope, personFactory, personService) {
		// via een factory
		$scope.persons = personFactory.getPersons();

		// via een service
		$scope.mensen = personService.getPersons();
	};

	// hier: met minify-safe syntax
	app.controller('personController', ['$scope', 'personFactory', 'personService',  personController]);


})(angular.module('myApp')); // bestaande module doorgeven als parameter
