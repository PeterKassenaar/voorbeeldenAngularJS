// Credits: http://www.benlesh.com/2013/05/angularjs-unit-testing-controllers.html


// Jasmine Test specifications go here.
describe('Testing Jasmine setup', function () {
	// Elke test is een 'it'-statement
	it('Should return true if jasmine is running', function () {
		expect(true).toBe(true);
	})

	it('Should return true if var a equals true', function () {
		var a = true;
		expect(a).toBe(true);
	})
	
	// geneste describe-functies, voor het grouperen van related tests

	describe('Testing  variable b', function () {
		var b = 10;
		it('b should be 10 at this point', function () {
			var b = 10;
			expect(b).toBe(10);
		});

		it('b should be true at this point', function () {
			var b = '10';
			expect(b).toBeTruthy();
		});
	});
	
});