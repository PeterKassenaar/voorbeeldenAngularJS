(function () {
	////////////////////////////
	// Create Weathercontroller
	////////////////////////////
	angular.module('myApp')
		.controller('weatherController', weatherController);

	weatherController.$inject = ['weatherFactory'];

	function weatherController(weatherFactory) {

		var vm         = this;
		//vm.city = window.localStorage.getItem('city')
		vm.plaatsnaam  = '';
		vm.graden      = '';
		vm.showWeather = '';
		vm.getWeather  = function () {
			var city = vm.city;

			weatherFactory.getWeather(city)// 1. talk to factory
				.then(function (weatherData) { //2. get result
					console.log(weatherData);
					vm.plaatsnaam  = weatherData.data.name;// 3. bind to HTML
					vm.graden      = weatherData.data.main.temp;
					vm.showWeather = true;
				})
				// .then(function () {
				// 	// do something else
				// })
				// .then(function () {
				// 	// do something else
				// })
				// .catch(function (err) {
				// 	// do error handling
				// 	console.log('oh nooes! Something bad happened: ', err);
				// })
				// .finally(function () {
				// 	console.log('We\'re done!');
				// });

			vm.resetWeather = function () {
				vm.plaatsnaam  = '';// 4. reset
				vm.graden      = '';
				vm.showWeather = false;
			}
		};
	}// end WeatherController

})();
