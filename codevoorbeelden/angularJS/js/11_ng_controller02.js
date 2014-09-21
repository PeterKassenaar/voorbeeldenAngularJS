(function (app) {

	// 1. UITGEBREIDER voorbeeld met .success() en .error() callback
	var bookController = function ($scope, bookFactory) {
		// 2. Call naar methode in de factory, gebruik promise-notatie 
		//bookFactory.getBooks()
		//	.success(function (data, status, headers, config) {
		//		$scope.books = data;
		//	})
		//	.error(function (data, status, headers, config) {
		//		alert('Error bij Ajax-call: ', status);
		//	});

		// OF: gebruik de .then() promise
		bookFactory.getBooks()
		.then(
			// success function
			function (responseSuccess) {
				console.log(responseSuccess);
				$scope.books = responseSuccess.data;
			},
			function (responseError) {
				console.log(responseError);
			}
		).then(function (responseSuccess) {
			// ...doe nog iets anders.
		});
	};
	app.controller('bookController', ['$scope', 'bookFactory', bookController]);
})(angular.module('myApp')); // bestaande module doorgeven als parameter
