(function () {
	'use strict';

	angular.module('pk.components',[])
		.component('simpleComponent', {
			templateUrl : 'mycomponent.html',
			controller  : componentController
			// bindings :{
			// 	city :'='
			// }
		});

	//componentController.$inject = ['cityFactory'];
	function componentController() {
		var vm  = this;
		vm.city = 'Haarlem';

		vm.clickMe = function () {
			alert('hello from component');
		}
	}
})();
