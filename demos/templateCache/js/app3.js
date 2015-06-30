(function () {
	'use strict';
	// Setter for templatecacheApp
	angular.module('cacheApp', ['ngRoute'])
		.config(function ($routeProvider) {
			$routeProvider.when('/', {
				controller   : 'TestCtrl',
				controllerAs : 'test',
				templateUrl  : 'views/testView.html' // <== Staat er wel, maar wordt in deze versie eigenlijk niet gebruikt!
			})
				.otherwise('/');
		})
		.controller('TestCtrl', testCtrl)
		.run(function ($templateCache) {
			$templateCache.put('views/testView.html', '<div style="background-color: #ee5ec6"><h2>pre-populated $templateCache</h2><div>Hello {{test.user.name}}</div></div>');
			// Maar: dit proces het liefst automatiseren via Grunt of Gulp. Bv: https://github.com/miickel/gulp-angular-templatecache
		});

	testCtrl.$inject = ['$templateCache'];
	function testCtrl($templateCache) {
		var vm = this;
		vm.user = {
			name : 'Peter Kassenaar'
		};

		// 3.
		console.log($templateCache.get('views/testView.html')); // <== Alleen HTML-snippet. Er vindt geen XHR-call plaats in deze versie.
	}
})();