(function (app) {
	function personFactory() {
		var factory = {};

		var persons = [
			{ 'name': 'Tina' },
			{ 'name': 'Peter' },
			{ 'name': 'Feline' },
			{ 'name': 'Sandra' },
			{ 'name': 'Javan' },
			{ 'name': 'Mario' },
			{ 'name': 'Real' },
			{ 'name': 'Vincent' },
			{ 'name': 'Steven' },
			{ 'name': 'Bob' }
		];
		factory.getPersons = function () {
			return persons;
		};

		return factory;
	}

	// add factory to app
	app.factory('personFactory', personFactory);

})(angular.module('myApp'))