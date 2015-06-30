(function () {
	'use strict';
	// Setter for templateCacheApp
	angular.module('cacheApp', ['ngRoute'])
		.config(function ($routeProvider) {
			$routeProvider.when('/', {
				controller  : 'TestCtrl',
				controllerAs: 'test',
				templateUrl : 'views/testView.html' // <== Staat er wel, maar wordt in deze versie eigenlijk niet gebruikt!
			})
				.otherwise('/');
		})
		.controller('TestCtrl', testCtrl);

	testCtrl.$inject = ['$templateCache'];
	function testCtrl($templateCache) {
		var vm = this;
		vm.user = {
			name: 'Peter Kassenaar'
		};

		// 3.
		console.log($templateCache.get('views/testView.html')); // <== Alleen HTML-snippet. Er vindt geen XHR-call plaats in deze versie.
	}
})();