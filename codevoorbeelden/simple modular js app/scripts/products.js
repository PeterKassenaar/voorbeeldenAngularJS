(function (products, $) {
	'use strict';

	products.vm = {};
	products.vm.init = function(){
		console.log('  initialiseren products.js...');
	}
})(window.products = window.products || {}, $)