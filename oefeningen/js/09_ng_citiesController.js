(function () {
	// 1. Maak een JavaScript-variabele en Angular-module op basis van de HTML-directive
	// 2. Voeg een controller toe aan de de module.

	angular.module('myApp')
			.controller('citiesController',  citiesController);

	function citiesController () {
		var vm = this;
		vm.cities = [
			{ 'name': 'New York', 'country': 'USA' },
			{ 'name': 'Los Angeles', 'country': 'USA' },
			{ 'name': 'Las Vegas', 'country': 'USA' },
			{ 'name': 'Amsterdam', 'country': 'NL' },
			{ 'name': 'Berlin', 'country': 'GER' },
			{ 'name': 'Rome', 'country': 'IT' },
			{ 'name': 'Paris', 'country': 'FR' },
			{ 'name': 'London', 'country': 'GB' },
			{ 'name': 'Liverpool', 'country': 'GB' },
			{ 'name': 'Madrid', 'country': 'SP' }
		];
	};

})();
