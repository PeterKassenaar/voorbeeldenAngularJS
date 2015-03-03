(function () {
	// Best Practice: eerst module definieren, minify-safe $routeParams injecteren
	angular.module('myApp')
		.controller('detailController', detailController);

	// 2. Maak de detailcontroller
	detailController.$inject = ['$routeParams'];
	function detailController($routeParams) {
		var vm = this;
		vm.name = $routeParams.name;
		vm.id = $routeParams.id;
	}
})();
