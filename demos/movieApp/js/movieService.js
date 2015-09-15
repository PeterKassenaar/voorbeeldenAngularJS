/**
 * Created by PeterKassenaar on 23/03/15.
 */
(function(){
    'use strict';

    angular.module('movieApp')
		.service('movieService', movieService);

	movieService.$inject=['$http', '$cacheFactory'];
	function movieService($http,  $cacheFactory){
		var url = 'http://www.omdbapi.com/?';

		this.searchMovies = function(keyword){
			return $http({
				method:'GET',
				url: url + 's=' + keyword
			});
		}; // end searchMovies

		this.getMovie = function (id) {
			return $http({
				method:'GET',
				url: url + 'i=' + id
			});
		};

		//********************************
		// Caching getters and setters
		var cache = $cacheFactory('movieCache');
		this.setMovieCache = function(movies){
			cache.put('movieCache', movies);
		};
		this.getMovieCache = function(){
			return cache.get('movieCache');
		};
		// reset / clear cache
		this.clearMovieCache = function(){
			cache.removeAll();
		}


	}
})();