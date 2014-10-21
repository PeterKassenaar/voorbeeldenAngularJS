// Testing an Angular JS directive
describe('Testing an AngularJS factory', function () {
	// 0. global variables	
	var $scope, controller, factory;

	// 1. Setup beforeEach() functions
	beforeEach(module('myApp'));
	beforeEach(inject(function ($rootScope, $controller, $injector) {
		$scope = $rootScope.$new();
		controller = $controller('personController', {
			$scope:$scope
		})
		factory = $injector.get('personFactory');
	}));


	// 2. Test if controller exists
	it('Controller personController should exist', function () {		
		expect(controller).not.toBe(null);
	});

	// 3. Test if scope has persons in it
	it('Controller should have persons array on scope', function () {
		expect($scope.persons).not.toBe(null);
	});
	
	// 3. Test if persons array has 10 people
	it('there should be 10 people in the array', function () {
		expect($scope.persons.length).toEqual(10);
	});

	// 4. Manual: call function getPersons() directly on factory object
	it('should return "Bob" for last person in persons array from factory', function () {
		var persons = factory.getPersons();
		expect(persons[9].name).toBe('Bob');
	});
});