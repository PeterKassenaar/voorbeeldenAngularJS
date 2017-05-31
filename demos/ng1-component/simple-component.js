(function () {
	'use strict';

	angular.module('pk.components',[])
		.component('simpleComponent', {
			templateUrl : 'mycomponent.html',
			controller  : componentController,
			bindings :{
				city :'@' // pass data into the component
			}
		});

	//componentController.$inject = ['cityFactory'];
	function componentController() {
		var vm  = this;

		vm.clickMe = function () {
			alert('hello from ' + vm.city);
		}
	}
})();
