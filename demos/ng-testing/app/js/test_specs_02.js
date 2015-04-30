// Credits: http://www.benlesh.com/2013/05/angularjs-unit-testing-controllers.html
// (ik gebruik hier een versimpelde weergave van bovenstaand artikel, met eigen/uitgebreide annotaties)

// Jasmine Test specifications go here.
describe('Testing an AngularJS Controller', function () {
	// 0. variabelen binnen dit describe-block
	var $scope, ctrl;

	beforeEach(function () {
		// 1. load the module you're testing.
		module('myApp');

		// 2. INJECT! This part is critical
		// $rootScope - injected to create a new $scope instance.
		// $controller - injected to create an instance of our controller.
		inject(function ($rootScope, $controller) {
			// 2a. Handmatig: create a scope object for us to use.
			$scope = $rootScope.$new();

			// 2b. Now run that scope through the controller function,
			// injecting any services or other injectables we need.
			// **NOTE**: this is the only time the controller function
			// will be run, so anything that occurs inside of that
			// will already be done before the first spec.
			ctrl = $controller('myController', {
				$scope: $scope,
			});
		});

	});// einde beforeEach(), met setup van de Controller

	// *****************
	// Test specifications
	// *****************

	// Test 1.
	it('should read Hello World when message is printed', function () {
		//just assert. $scope was set up in beforeEach() (above)
		expect($scope.msg).toEqual('Hello World');

	});

	// Test 2
	it('should print 4 when calculate is called', function () {
		expect($scope.calculate()).toEqual(4);
	});

	// Test 3
	it('should add !!! to message when shout() is called', function () {
		//setup
		$scope.msg = 'Hello Amsterdam';

		//make the call.
		$scope.shout();

		//assert
		expect($scope.msg).toEqual('Hello Amsterdam!!!');
	});

	// Test 4
	it('should return 4 when array.length is requested', function () {
		// setup
		$scope.myArr = [1, 2, 3, 4, 5];
		$scope.removeFromArr();

		// expect
		expect($scope.myArr.length).toEqual(4);

	});

});