// Define this controller as an independent module
(function(){
angular.module('PK.controller', ['PK.service', 'PK.constants']).
	controller('myController', ['$scope', 'myService', 'GLOBALS', function ($scope, myService, GLOBALS) {
        // 1. Algemene variabelen
        $scope.title = 'getBooks()';
		var url = 'http://api.yindo.com/api/book/new/10';

        // 2. Call naar getBooks op de 'oude' manier, met een callback.
        myService.getBooks(url, function (books) {
            $scope.books = books;
        });

        // 3. Een tweede call (naar getBooks2), op de 'nieuwe' manier,
        // waarbij de getBooks2 een promise retourneert op basis van
        // de $q bibliotheek. Zie voor meer
        // informatie eventueel https://docs.angularjs.org/api/ng/service/$q
        myService.getBooks2(url).then(function (books) {
            $scope.books2 = books;
        });

        $scope.naam = GLOBALS.name; // voorbeeld van hoe je gegevens uit het GLOBALS module kunt hergebruiken
	}]);
})();