(function () {
	// Best Practice: eerst module definieren, minify-safe $routeParams injecteren
	angular.module('myApp')
		.controller('detailController', ['$routeParams', detailController])


	// 2. Maak de detailcontroller
	function detailController($routeParams) {
		var vm = this;
    vm.name = $routeParams.name;
		vm.id = $routeParams.id;
	};

})();
