(function () {
	'use strict';

	angular.module('myApp')
		.factory('cityFactory', cityFactory)

	function cityFactory() {
		var factory = {};

		var cities      = [
			{name : 'Enschede'},
			{name : 'Hengelo'},
			{name : 'Groningen'},
			{name : 'Dieren'},
			{name : 'Nieuwegein'}
		];

		factory.getCity = function (id) {
			return cities[id];
		};

		factory.getCities = function () {
			return cities;
		};
		return factory;
	}

})();
