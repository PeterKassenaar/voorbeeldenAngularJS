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

	function componentController() {
		var vm  = this;

		vm.clickMe = function () {
			alert('hello from ' + vm.city);
		};

		vm.$onInit = function() {
			vm.randomNumber = Math.floor((Math.random() *1000) + 1)
		}
	}
})();
