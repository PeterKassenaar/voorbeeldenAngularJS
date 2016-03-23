(function () {

	// 1. Maak de controller
	var bookController = function ($scope, bookFactory) {
		// 2. Call naar methode in de factory, gebruik promise-notatie 
		bookFactory.getBooks().success(function (data) {
			$scope.books = data;
		});
	};

	// 2. Maak de detailcontroller (kan ook in aparte file, nu even gecombineerd)
	var detailController = function ($scope, bookFactory, $routeParams) {
		console.log($routeParams);
		bookFactory.getBookDetail($routeParams.ean)
			.success(function (data) {
				console.log(data);
				$scope.book = data;
				$scope.imgSrc = 'http://content.yindo.nl/images/covers/' + data.ean + '.jpg';
			});
	};

	// 3. Controllers toevoegen aan app
	angular.module('myApp').controller('bookController', ['$scope', 'bookFactory', bookController]);
	angular.module('myApp').controller('detailController', ['$scope', 'bookFactory', '$routeParams', detailController]);

})(); // bestaande module doorgeven als parameter
