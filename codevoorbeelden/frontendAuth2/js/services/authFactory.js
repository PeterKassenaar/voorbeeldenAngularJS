(function(app) {
    app.factory('authService', function($http, Session) {
        return {
            login: function(credentials, callback) {
                // Voor Mock/Dummy data:
                if (credentials.username === 'user' && credentials.password === 'test') {
                    var res = {
                        id: 1,
                        userid: '1',
                        role: 'guest',
                        username : credentials.username,
                        access_level: 2, 	// voor nu: hardcoded, ACCESS_LEVELS.user
						token : '1111-2222'	// voor nu: hardcoded. In real life app komt een user token terug van de server.
                    }
                    Session.create(res.id, res.userid, res.role, res.username, res.access_level, res.token);
					// Keuze: wij geven hier de optie een callback-functie mee te geven.
                    callback('success');
                } else {                	
                	callback('fail');
                }

                // Voor 'echte' data:
                /*
                return $http
                    .post('/login', credentials)
                    .then(function(res) {
                        Session.create(res.id, res.userid, res.role);
                    });
				*/
            },

            logout: function(callback){
            	Session.destroy();
            	callback();
            },

            isAuthenticated: function() {
                return !!Session.userId;
            },

            getUser: function () {
            	if (!!Session.userid) {
            		return Session;
            	} else {
            		return null;
            	}
    
            }, 

            isAuthorized: function(authorizedRoles) {
                if (!angular.isArray(authorizedRoles)) {
                    authorizedRoles = [authorizedRoles];
                }
                return (this.isAuthenticated() &&
                    authorizedRoles.indexOf(Session.userRole) !== -1);
            }

        };
    });
})(angular.module('myApp'));
