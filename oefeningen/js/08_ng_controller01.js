(function (app) {

	// 2. Maak de eerste controller
	var personController = function ($scope) {
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
	};

	app.controller('personController', ['$scope', personController]);
})(angular.module('myApp')); // bestaande module doorgeven als parameter
