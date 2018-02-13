(function () {

	// 1. Haal de module op (GETTER) en voeg een controller toe
	angular.module('myApp')
		.controller('citiesController', citiesController);

	citiesController.$inject = []; // minify safe

	// 2. Voeg een controller toe aan de de module.
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
	};
})();
