(function (app) {
	app.directive('myDirective', function () {
		return {
			restrict : 'A',
			link: function (scope, el, attrs) {
				console.info('my-directive loaded...');
				// add a simple class to the directive
				el.addClass('pk-ok');
			}
		}
	});
})(angular.module('myApp'));