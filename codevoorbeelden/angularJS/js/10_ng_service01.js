(function (app) {
	

	// *********************
	// IDEM, maar dan in een Service
	// Notatie/syntaxis is anders, functionaliteit is gelijk
	//*******************************
	app.service('personService', function () {

		// 1. Data
		var persons = [{ 'name': 'Sasha' },
			{ 'name': 'Stephen' },
			{ 'name': 'Olaf' },
			{ 'name': 'Ger' },
			{ 'name': 'Marco' },
			{ 'name': 'Hetty' },
			{ 'name': 'Jannie' },
			{ 'name': 'Sylvia' },
			{ 'name': 'Pim' },
			{ 'name': 'Soren' }];

		// 2. In een service wordt de API/interface op de service
		//    zelf gedefinieerd en geef je de function terug.
		this.getPersons = function () {
			return persons;
		};

		
	})

})(angular.module('myApp'));