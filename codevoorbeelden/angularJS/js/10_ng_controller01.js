(function () {
	// Minify-safe syntax
	angular.module('myApp')
		.controller('personController', personController);

	// 2. Maak de  controller
	personController.$inject = ['$scope', 'personFactory'];
	function personController ($scope, personFactory) {
		// via een factory
		$scope.persons = personFactory.getPersons();

		// via een service
		//$scope.mensen = personService.getPersons();
	}
})();
