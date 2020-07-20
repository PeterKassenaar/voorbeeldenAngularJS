
// 1. Create another, additional module here, for example
// with Helper Functions. This module in step 2 will be
//  injected into the "main" module "myApp". The helper module
// has 1 controller with a dummy function clickMe()
(function(){
	angular.module('myHelper', [])
		.controller('alertController', function ($scope) {
			$scope.clickMe = function () {
				alert('Hello World from Helpermodule');
			}
		});
})();

// of course this is a silly example - you wouldn't do this in real
// applications, but it shows the power of creating stand-alone modules
// and injecting them into a main module.
//
// This way you create re-usable software/angular modules.

