(function () {
	var myApp = angular.module('myApp', []);

	/* Simple service example. 
 * This is a service created just to use as an example of
 * some simple service that is making some asynchronous call.
 * A real-life example of something like this would be a 
 * service that is making $http or $resource calls, perhaps. */
	myApp.factory('someService', function ($timeout, $q) {
		return {

			// simple method to do something asynchronously.
			someAsyncCall: function (x) {
				var deferred = $q.defer();
				$timeout(function () {
					deferred.resolve(x + '_async');
				}, 100);
				return deferred.promise;
			}
		};
	});
})();
