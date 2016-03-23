(function () {

  var app = angular.module('myApp');

	// 1. Maak de controller
	var bookController = function ($scope, bookFactory, GLOBALS) {
		var vm = this;
		// 2. Call naar methode in de factory, gebruik promise-notatie
		bookFactory.getBooks()
			.success(function (data) {
				vm.books = data;
		});

		// Luister naar event dat wordt gegooid vanuit de interceptor
		$scope.$on(GLOBALS.customEvent, function(event, data){
			vm.eventData = data;
		   //alert('Ik heb het Event ontvangen!')
		});

		// Luister naar 'ready' event dat wordt gegooid vanuit de interceptor
		$scope.$on(GLOBALS.customEventReady, function(event, data){
				vm.eventReadyData = data;
				//	alert('Het request/response is compleet!')
		});

		$scope.$on(GLOBALS.showSpinner, function(event, data){
			if(data){
				vm.showSpinner = true;
			}
		});

		$scope.$on(GLOBALS.hideSpinner, function(event, data){
			if(data){
				vm.showSpinner = false;
			}
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
	app.controller('bookController', ['$scope', 'bookFactory', 'GLOBALS', bookController]);
	app.controller('detailController', ['$scope', 'bookFactory', '$routeParams', detailController]);

})();
