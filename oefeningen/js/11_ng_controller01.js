(function () {

	var app            = angular.module('myApp');
	// 1. Maak de controller
	var bookController = function ($scope, bookFactory, $location, $http, $sce) {

		// Dit kan NIET (want: async):
		// $scope.books = bookFactory.getBooks();

		$scope.getBooks = function () {
			// 2. Call naar methode in de factory, gebruik promise-notatie (OUD: .success() en .error()
			// bookFactory.getBooks()
			// 	.success(function (bookData) {
			// 		$scope.books = bookData;
			// 	})
			// 	.error(function (err) {
			// 		alert('FOUT! ' + err)
			// 	});

			bookFactory.getBooks()
				.then(function (response) { // <== Callback functie voor de API
					$scope.books = response.data;
				})
				.catch(function (err) {
					console.log(err);
					alert('Error! Status: ' + err.status)
				})

		};
		// Dan zul je een Service (of Factory) moeten schrijven die zelf
		// een stukje business logic heeft en pas retourneert als de
		// items uit de http-call terug zijn gekomen.
		// $scope.partialBooks = bookFactory.getPartialBooks();

		// 3. Dummmy persoonsgegevens ophalen
		//bookFactory.getPeople()
		//  .success(function (data, status, headers, config) {
		//    $scope.people = data;
		//  })
		//  .error(function (data, status, headers, config) {
		//    alert('Error bij Ajax-call: ', status);
		//  })

		var spotifyAPI = 'https://api.spotify.com/v1/search?type=track&query=';

		$scope.getArtist = function (artist) {
			$http({
				method : 'GET',
				url    : spotifyAPI + artist
			})
				.then(function (artistData) {
					console.log(artistData.data.tracks);
					// Transformatie van het return-resultaat
					var artistTracks = [];
					artistData.data.tracks.items.forEach(function (track) {
						var newTrack = {
							cover   : track.album.images[0].url,
							name    : track.name,
							preview : $sce.trustAsResourceUrl(track.preview_url)
						};
						artistTracks.push(newTrack)
					});
					// Na de transformatie het resultaat toekennen aan de $scope
					$scope.tracks = artistTracks;
				})
		}

	};

	app.controller('bookController', ['$scope', 'bookFactory', '$location', '$http', '$sce', bookController]);

	////////////////////////////
	// Weathercontroller maken
	////////////////////////////
	angular.module('myApp')
		.controller('weatherController', weatherController);

	weatherController.$inject = ['bookFactory'];

	function weatherController(bookFactory) {

		var vm         = this;
		//vm.city = window.localStorage.getItem('city')
		vm.plaatsnaam  = '';
		vm.graden      = '';
		vm.showWeather = '';
		vm.getWeather  = function () {
			var city = vm.city;
			var db   = window.localStorage;

			// Set item in localStorage;
			db.setItem('city', city);

			bookFactory.getWeather(city)// 1. praat tegen service
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
