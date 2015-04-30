(function (app) {

	// 1. Maak de bookController
	var bookController = function ($scope, bookFactory) {
		// 2. Call naar methode in de factory, gebruik promise-notatie 
		bookFactory.getBooks().success(function (data) {
			$scope.books = data;
		});
	};

	// 2. Maak de detailController (kan ook in aparte file, nu even gecombineerd met bookController)
	var detailController = function ($scope, bookFactory, $routeParams) {
		console.log($routeParams);
		// De promise-chain met .then(), zonder nested callbacks.
        // Elke .then() heeft [maximaal] 3 parameters: success(), error() en notify();
		bookFactory.getBookDetail($routeParams.ean)
			.then(  // <=== Eerste .then()
                // Succeshandler
                function (bookData) {
                        console.log(bookData.data);
                        $scope.book = bookData.data;
                        return bookFactory.getPage($scope.book.bookID); // bookID doorgeven om specifieke pagina/cover op te halen.
                },
                // Error handler
                function (reason) {
                        alert('er is iets fout gegaan')
                },
                // Eventueel: derde parameter - Notify
                function (message) {
                        alert('Dit is de notify handler')
                })
			.then(  // <=== Tweede .then()
                // Successhandler
                function (permissionObject) {
                    $scope.imgSrc = 'data:image/png;base64,' + permissionObject.data.pageBitmapString;

                },
                // Error handler
                function (reason) {
                        alert('er is iets anders fout gegaan')
                })
	};

	// 3. Controllers toevoegen aan app
	app.controller('bookController', ['$scope', 'bookFactory', bookController]);
	app.controller('detailController', ['$scope', 'bookFactory', '$routeParams', detailController]);

})(angular.module('myApp')); // bestaande module doorgeven als parameter
