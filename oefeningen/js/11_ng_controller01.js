(function () {
	////////////////////////////
	// Weathercontroller maken
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

			weatherFactory.getWeather(city)// 1. praat tegen service
				.then(function (weatherData) { //2. ontvang result
					console.log(weatherData);
					vm.plaatsnaam  = weatherData.data.name;// 3. bind aan HTML
					vm.graden      = weatherData.data.main.temp;
					vm.showWeather = true;
				});

			vm.resetWeather = function () {
				vm.plaatsnaam  = '';// 3. bi
				vm.graden      = '';
				vm.showWeather = false;
			}
		};
	}// end WeatherController

})();
