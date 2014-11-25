﻿(function (app) {
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
			// In een live app zal hier een $http-call worden gedaan en geretourneerd
		};

	
		// 4. Altijd tot slot: retourneer het factory-object
		return factory;
	});








	// *********************
	// IDEM, maar dan in een Service
	// Notatie/syntaxis is anders, functionaliteit is gelijk
	//*******************************

	app.service('personService', function () {
		var persons = [
			{ 'name': 'Sasha' },
			{ 'name': 'Stephen' },
			{ 'name': 'Olaf' },
			{ 'name': 'Ger' },
			{ 'name': 'Marco' },
			{ 'name': 'Hetty' },
			{ 'name': 'Jannie' },
			{ 'name': 'Sylvia' },
			{ 'name': 'Pim' },
			{ 'name': 'Soren' }
		];

		// public function
		this.getPersons = function () {
			return persons;

			// Hier komt normaal gesproken een $http-call naar AJAX-webservice
		};
		
		// andere public function
		this.getAdressess = function () {
			// haal alle adressen op ....
		}

	})
})(angular.module('myApp'));