(function (app) {

	angular.module('myApp')
		.controller('bookController', bookController);
	// 1. Maak de controller
	bookController.$inject = ['$scope', 'bookFactory'];
	function bookController($scope, bookFactory) {

		// Dit kan NIET (want: async):
		//$scope.books = bookFactory.getBooks();


		// 2. Call naar methode in de factory, gebruik promise-notatie 
		bookFactory.getBooks()
			.success(function (boeken) {
				console.log(boeken);
				$scope.books = boeken;
			}).error(function (err) {
				alert('Er is iets fout gegaan: ', err);
			});


		// Dan zul je een Service (of Factory) moeten schrijven die zelf
		// een stukje business logic heeft en pas retourneert als de
		// items uit de http-call terug zijn gekomen.
		$scope.partialBooks = bookFactory.getPartialBooks();

		// 3. Dummmy persoonsgegevens ophalen
		//bookFactory.getPeople()
		//	.success(function (data, status, headers, config) {
		//		$scope.people = data;
		//	})
		//	.error(function (data, status, headers, config) {
		//		alert('Error bij Ajax-call: ', status);
		//	})


		// 4. Weer ophalen in een bepaalde stad

		$scope.showWeather = false;
		$scope.getWeather = function () {
			var city = $scope.city;
			bookFactory.getWeather(city).success(function (weatherData) {
				console.log(weatherData);
				$scope.plaatsnaam = weatherData.name;
				$scope.graden = weatherData.main.temp;
				//$scope.showWeather = true;
			});
		};

		$scope.resetWeather = function () {
			if ($scope.city.length === 0) {
				$scope.plaatsnaam = null;
				$scope.graden = null;
			}
			console.log($scope.city);
		}


	}
})(); // bestaande module doorgeven als parameter
