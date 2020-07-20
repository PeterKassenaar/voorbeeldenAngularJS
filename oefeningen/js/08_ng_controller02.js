(function () {

	// 1. Get the module (GETTER) and add controller
	angular.module('myApp')
		.controller('citiesController', citiesController);

	citiesController.$inject = []; // minify safe

	// 2. Add controller to the module.
	function citiesController() {
		var vm = this;
		vm.cities = [
			{'name': 'New York', 'country': 'USA'},
			{'name': 'Los Angeles', 'country': 'USA'},
			{'name': 'Las Vegas', 'country': 'USA'},
			{'name': 'Amsterdam', 'country': 'NL'},
			{'name': 'Berlin', 'country': 'GER'},
			{'name': 'Rome', 'country': 'IT'},
			{'name': 'Paris', 'country': 'FR'},
			{'name': 'London', 'country': 'GB'},
			{'name': 'Liverpool', 'country': 'GB'},
			{'name': 'Madrid', 'country': 'SP'}
		];
	}
})();
