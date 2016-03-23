(function () {
	// Definieer de module/app in dit bestand en voeg (later) eventuele dependencies toe
	angular.module('myApp')
		.config(configInterceptor);

	configInterceptor.$inject=['$httpProvider'];
	function configInterceptor($httpProvider){
		$httpProvider.interceptors.push('myInterceptor');
	}

})();
