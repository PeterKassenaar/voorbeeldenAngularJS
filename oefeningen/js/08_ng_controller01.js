(function () {

	// 1. Haal referentie op naar de app
	angular.module('myApp')
			.controller('personController', ['$scope', personController]);

	// 2. Maak de  controller
	function personController ($scope) {
		$scope.persons = [{ 'name': 'John' },
			{ 'name': 'Bob' },
			{ 'name': 'Bart' },
			{ 'name': 'Sandra' },
			{ 'name': 'Harry' },
			{ 'name': 'Peter' },
			{ 'name': 'Michiel' },
			{ 'name': 'Jeroen' },
			{ 'name': 'Irene' },
			{ 'name': 'Mike' }];
	}


})();
