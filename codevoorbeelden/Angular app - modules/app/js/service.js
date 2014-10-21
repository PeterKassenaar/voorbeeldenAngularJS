// Define this service as an independent module
angular.module('PK.service', []).
	service('myService', ['$http','$q', function ($http, $q) {
		'use strict';

        // 1. De eerste manier, om op de 'oude' wijze met
        // een callback de gegevens te retourneren
		this.getBooks = function (url, callback) {
			$http({
				method: 'jsonp',
				url: url,
				params: { 'callback': 'JSON_CALLBACK' }
			}).success(function (data, status, header, config) {
				callback(data);
			}).error(function (data, status, header, config) {
				throw 'No data returned from : ' + url;
			});
		};

        // 2. De 'nieuwe' manier, door te werken met $q.
        // Je maakt een deferred object, dit wordt uiteindelijk
        // opgelost (resolve()) of niet opgelost (recject()).
        // Aan het einde wordt de complete
        // promise van het deferred object teruggegeven.
        this.getBooks2 = function (url) {
            var deferred = $q.defer();
            $http({
                method: 'jsonp',
                url: url,
                params: { 'callback': 'JSON_CALLBACK' }
            }).success(function (data, status, header, config) {
                // Doe iets met boekendata;
                deferred.resolve(data);
            }).error(function (err) {
                deferred.reject(err);
            });

            // Retourneer het deferred object en de belofte
            // dat het object in de toekomst wordt opgelost, of ge-rejected.
            return deferred.promise;
        };
	}]);