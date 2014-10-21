// Testing an Angular JS directive
describe('Testing an AngularJS custom directive', function () {
	// 0. glboal variables
	var element;
	var $scope;

	// 1. Setup beforeEach() functions
	beforeEach(module('myApp'));
	beforeEach(inject(function ($compile, $rootScope) {
		$scope = $rootScope;
		element = angular.element('<div>{{ 2 + 2 }}</div>');
		//element = angular.element('<div my-Directive>{{ 2 + 2 }}</div>');
		$compile(element)($rootScope);
	}));


	// 2. Test if element compiled correctly
	it('innerHTML of element should contain 4', function () {
		$scope.$apply();  // OF: $Scope.$digest(). Zie https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$digest voor meer info
		expect(element.html()).toBe('4');
	});

	// 3. Test if directive added a class correctly
	//describe('Directive should have added the class "pk-ok" to the element', function () {
	//	it('should have a class of "pk-ok" inside the element', function () {
	//		expect(element.hasClass('pk-ok')).toBe(true);
	//	});
	//});
});