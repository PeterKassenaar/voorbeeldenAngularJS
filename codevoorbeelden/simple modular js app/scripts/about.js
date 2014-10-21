(function (about, $) {
	'use strict';

	about.vm = {};
	about.vm.init = function () {
		console.log('  initialiseren about.js...');
	};

	$(document).on('click', '#btnAbout', function () {
		alert('Copyright (C) 2014 - ' + window.app.db.getItem('Author'));  // defined in app.js. Would be better to TEST first if it existed, though...
	});

})(window.about = window.about || {}, $);