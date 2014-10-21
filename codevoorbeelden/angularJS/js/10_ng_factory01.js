(function (app) {
	app.factory('personFactory', function () {
		// 1. Maak een 'factory'-object
		var factory = {};

		// 2. Definieer data, of andere inhoud
		var persons = [{ 'name': 'John' },
			{ 'name': 'Bob' },
			{ 'name': 'Bart' },
			{ 'name': 'Sandra' },
			{ 'name': 'Harry' },
			{ 'name': 'Peter' },
			{ 'name': 'Michiel' },
			{ 'name': 'Jeroen' },
			{ 'name': 'Irene' },
			{ 'name': 'Mike' }];

		// 3. Definieer functies als API/interface voor de buitenwereld
		factory.getPersons = function () {
			return persons;
		};

		// 4. Altijd tot slot: retourneer het factory-object
		return factory;
	});
})(angular.module('myApp'));