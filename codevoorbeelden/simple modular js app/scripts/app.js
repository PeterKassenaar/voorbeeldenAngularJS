// app.js
(function (app, $) {
	'use strict'; // Meer over strict mode: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode

	function init() {
		console.log('initialiseren app.js...');
		if (window.home) { window.home.vm.init(); }
		if (window.about) { window.about.vm.init(); }
		if (window.products) { window.products.vm.init(); }

		// some items to be retrieved in other views
		if (window.sessionStorage) {
			app.db = window.sessionStorage;
			app.db.setItem('session', new Date().getMilliseconds());
			app.db.setItem('Author', 'Peter Kassenaar');
		}

	    // 1. Beginnen met de homepage
		$('#content').load('views/home.html');

	    // 2. Menu aanhaken
		$('nav a').on('click', function (e) {
		    e.preventDefault();
		    $('#content').load('views/' + $(this).data('page') + '.html');
		});
	}

	// 0. Bootstrapping process
	if (window.cordova) { // If we're in PhoneGap
		document.addEventListener('deviceready', init, false);
	} else {
		$(document).ready(init);
	}
}(window.app = window.app || {}, jQuery));