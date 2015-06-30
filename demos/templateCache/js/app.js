(function () {
	'use strict';
	// Setter for templateCacheApp
	angular.module('cacheApp', ['ngRoute'])
		.config(function ($routeProvider) {
			$routeProvider.when('/', {
				controller  : 'TestCtrl',
				controllerAs: 'test',
				// 1. Met een inline template: geen templatecache (maar dit is ook niet realistisch in real life apps).
				template    : 'Hello {{ test.user.name }}!'
				// 2. Met een remote template. Dit is realistischer en zorgt voor vullen van $templaceCache.
				//templateUrl  : 'views/testView.html'
			})
				.otherwise('/');
		})
		.controller('TestCtrl', testCtrl);

	// Implementation of controller
	testCtrl.$inject = ['$templateCache'];
	function testCtrl($templateCache) {
		var vm = this;
		vm.user = {
			name: 'Peter Kassenaar'
		};

		// 3. Schrijf huidige cache naar de console.
		// 		Bij 1. (template) is templaceCache undefined
		//		Bij 2. (templateUrl) is templateCache gevuld
		console.log($templateCache.get('views/testView.html'));
	}
})();