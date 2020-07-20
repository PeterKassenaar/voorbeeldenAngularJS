(function () {
	// Best Practice: first create/get module ,
	// then inject $routeParams minify-safe.
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
