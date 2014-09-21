(function(app) {
    app.service('Session', function() {
        this.create = function(sessionId, userId, userRole, userName, access_level, token) {
            this.id = sessionId;
            this.userId = userId;
            this.userRole = userRole;			// In Real life app gebruik je meestal role OF access_level. Niet beide.
            this.access_level = access_level;
            this.userName = userName;
            this.token = token;
        };
        this.destroy = function() {
            this.id = null;
            this.userId = null;
            this.userRole = null;
            this.access_level = null;
            this.userName = null;
            this.token = null;
        };
        return this;
    });
})(angular.module('myApp'));
