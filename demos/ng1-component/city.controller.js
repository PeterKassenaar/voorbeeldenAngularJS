(function () {
	'use strict';

	angular.module('myApp')
		.controller('cityController', cityController);

	cityController.$inject = ['cityFactory'];
	function cityController(cityFactory) {
		var vm    = this;
		vm.cities = cityFactory.getCities();
	}

})();
