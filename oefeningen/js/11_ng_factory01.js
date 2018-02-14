(function () {
	angular.module('myApp')
		.factory('weatherFactory', weatherFactory);

	weatherFactory.$inject = ['$http']; // minify-safe maken
	function weatherFactory($http) {
		// 1. Maak een 'factory'-object
		var factory = {};

		// 2. Voorbeeld : Weergegevens ophalen via openweatherMap. Sinds 1-11-2015: AppID (=api key) verplicht. zelf aanvragen op http://home.openweathermap.org/
		factory.getWeather = function (city) {
			return $http({
				method : 'get',
				url    : 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=8566d604cd9402b65394b034e52aa2af&q=' + city
			});
		};

		// 3. Altijd tot slot: retourneer het factory-object
		return factory;
	}
})();
