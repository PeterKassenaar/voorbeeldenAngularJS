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
		//	})

		// OF: gebruik de .then() promise
		bookFactory.getBooks()
		.then(
			// success function
			function (responseSuccess) {
				console.log(responseSuccess);
				$scope.books = responseSuccess.data;
				return bookFactory.getNextBooks();
			},
			function (responseError) {
				console.log(responseError);
			}
		).then(function (responseSuccess) {
			// ...doe nog iets anders.
		})
		.error(function () {
			// generieke errror handler, voor zover daar niet in
			// is voorzien in de aparte .then()-calls.
		});



		bookFactory.getPeople()
			.success(function (data, status, headers, config) {
				$scope.people = data;
			})
			.error(function (data, status, headers, config) {
				alert('Error bij Ajax-call: ', status);
			})

		// Dit kan NIET (want: async)
		//$scope.books = bookFactory.getBooks();

		// Dan zul je een Service (of Factory) moeten schrijven die zelf
		// een stukje business logic heeft en pas retourneert als de 
		// items uit de http-call terug zijn gekomen.
		$scope.partialBooks = bookFactory.getPartialBooks();
	};
	app.controller('bookController', ['$scope', 'bookFactory', bookController]);
})(angular.module('myApp')); // bestaande module doorgeven als parameter
