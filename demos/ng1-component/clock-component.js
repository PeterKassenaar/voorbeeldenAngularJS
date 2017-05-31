(function () {
	'use strict';
	angular.module('myApp')
		.component('clockComponent', {
			controller : function ($interval) {
				var vm  = this;
				vm.name = 'Peter Kassenaar';
				vm.time = new Date();
				$interval(function () {
					vm.time = new Date();
				}, 1000)
			},
			bindings   : {},
			template   : [
				'<div>Hello {{ $ctrl.name}}</div>',
				'<h1>Current time {{ $ctrl.time|date:"HH:mm:ss"}}</h1>'
			].join('')
		})

})();
