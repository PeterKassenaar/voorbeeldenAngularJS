(function (app) {
	app.factory('myInterceptor', ['$q', '$log', 'Session', '$rootScope',
        function ($q, $log, Session, $rootScope) {
        	$log.debug('initializing interceptor...')

        	var myInterceptor = {
				// current token toevoegen aan elke request
        		request: function (config) {
        			if (Session.token) {
        				config.headers['x-session-token'] = Session.token;		// <== Gebruik hier de header/notatie die de server verwacht!
        				$log.debug('x-session-token: ', config.headers['x-session-token']);
        			}
        			return config || $q.when(config);
        		},


				// In live site: responseErrors afvangen en handelen
        		responseError: function (response) {
        			if (response.status === 401) {
        				$rootScope.$broadcast(AUTH_EVENTS.unauthorizedResponse, response);						
        			}
        			if (response.status === 419 || response.status === 440) {
        				$rootScope.$broadcast(AUTH_EVENTS.sessionTimeout, response);
        			}
        			// eventueel: $location.path('#/login'); 
        			return $q.reject(response);
        		}

        	}// end myInterceptor{}


        	return myInterceptor;
        }
	])
})(angular.module('myApp'));
