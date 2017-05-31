(function(){
    'use strict';

    angular.module('myApp')
		.factory('cityFactory',cityFactory)

	function cityFactory() {
		var factory = {};
		factory.getCity=function () {
			return 'amstelveen';
		}

		return factory;
	}

})();
