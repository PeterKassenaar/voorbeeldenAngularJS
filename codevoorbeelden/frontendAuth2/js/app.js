(function() {
    var myApp = angular.module('myApp', ['ngRoute']);

    // 1. Definieer beschikbare access levels. Bijvoorbeeld: pub, user, admin
    myApp.constant('ACCESS_LEVELS', {
        pub: 1,
        user: 2,
        admin: 3 // future use
    });

	// 1a. OF: authorization op basis van Roles, bijvoorbeeld Admin, editor, guest
    myApp.constant('USER_ROLES', {
        all: '*',
        admin: 'admin',
        editor: 'editor',
        guest: 'guest'
    });

	// 1c. Definieer authorization events. Deze worden afgevuurd bij login/logout en opgepikt in de diverse views/scopes.
    myApp.constant('AUTH_EVENTS', {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    });


    // 2. Set up Routes. Let op de custom property 'access_level'
    myApp.config(function($routeProvider, $httpProvider, ACCESS_LEVELS, USER_ROLES) {
        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeController',
            access_level: ACCESS_LEVELS.pub,		// voor 1. authorization op basis van accesss level, OF
            data: {									// voor 1a. authorization op basis van roles.
                authorizedRoles: [USER_ROLES.all]
            }

        })
            .when('/secret', {
                templateUrl: 'views/secret.html',
                controller: 'secretController',
                access_level: ACCESS_LEVELS.user,
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor, USER_ROLES.guest]
                }
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'loginController',
                access_level: ACCESS_LEVELS.pub,
                data: {
                    authorizedRoles: [USER_ROLES.all]
                }
            })
            .otherwise({
                redirectTo: '/'
            });

        $httpProvider.interceptors.push('myInterceptor');
    });

    // 3. Check de event $routeChangeStart en check of de user toegang heeft tot de gevraagde pagina.
    myApp.run(function($rootScope, AUTH_EVENTS, ACCESS_LEVELS, authService, Session, $location) {
        $rootScope.$on('$routeChangeStart', function(evt, next, current) {
            console.log('Benodigd access level voor volgende pagina: ', next.access_level);

            // 1. Bij checken op basis van Access Levels:
            if (!Session.access_level && (next.access_level > ACCESS_LEVELS.pub)) {
                $location.path('/login');
            }
            
			// 2. Bij checken op basis van Roles:
            // var authorizedRoles = next.data.authorizedRoles;
            // if (!authService.isAuthorized(authorizedRoles)) {
            //     evt.preventDefault();
            //     if (authService.isAuthenticated()) {
            //         // user is not allowed
            //         $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
            //     } else {
            //         // user is not logged in
            //         $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
            //     }
            // }
        });
    });

})();
