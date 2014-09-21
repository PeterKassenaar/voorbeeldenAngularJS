(function (app) {

	// 1. Maak de controller
	var bookController = function ($scope, bookFactory) {
		// 2. Call naar methode in de factory, gebruik promise-notatie 
		bookFactory.getBooks().success(function (data) {
			$scope.books = data;
		});
	};

	// 2. Maak de detailcontroller (kan ook in aparte file, nu even gecombineerd met bookController)
	var detailController = function ($scope, bookFactory, $routeParams) {
		console.log($routeParams);
		// De promise-chain met .then(), zonder nested callbacks.
		bookFactory.getBookDetail($routeParams.ean)
			.then(function (bookData) {
					console.log(bookData.data);
					$scope.book = bookData.data;
					return bookFactory.getPage($scope.book.bookID); // bookID doorgeven om specifieke pagina/cover op te halen.
				})
			.then(function (permissionObject){
				$scope.imgSrc = 'data:image/png;base64,' + permissionObject.data.pageBitmapString;
			});
	};

	// 3. Controllers toevoegen aan app
	app.controller('bookController', ['$scope', 'bookFactory', bookController]);
	app.controller('detailController', ['$scope', 'bookFactory', '$routeParams', detailController]);

})(angular.module('myApp')); // bestaande module doorgeven als parameter
