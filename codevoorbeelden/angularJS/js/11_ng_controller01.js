(function (app) {

	// 1. Maak de controller
	var bookController = function ($scope, bookFactory) {
		// 2. Call naar methode in de factory, gebruik promise-notatie 
		bookFactory.getBooks().success(function (data) {
			$scope.books = data;
		});
	};

	app.controller('bookController', ['$scope', 'bookFactory', bookController]);
})(angular.module('myApp')); // bestaande module doorgeven als parameter
