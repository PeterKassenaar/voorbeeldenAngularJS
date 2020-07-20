(function () {
    angular.module('myApp')
        .factory('personFactory', personFactory);

    personFactory.$inject = [];
    function personFactory() {
        // 1. Create a 'factory'-object
        var factory = {};

        // 2. Define data, or other variables that should be
        // shared over components in your app
        var persons = [{'name': 'John'},
            {'name': 'Bob'},
            {'name': 'Bart'},
            {'name': 'Sandra'},
            {'name': 'Harry'},
            {'name': 'Peter'},
            {'name': 'Michiel'},
            {'name': 'Jeroen'},
            {'name': 'Irene'},
            {'name': 'Mike'}];

        // 3. Define functions as API/interface for the outside world
        factory.getPersons = function () {
            return persons;
            // In a live app THIS is the place where you would
            // do an $http-call.
        };

        // factory.AddPerson = function() { ... }

        // 4. Always in the end: return the factory-object
        return factory;
    }


    // *********************
    // IDEM, maar dan in een Service
    // Notatie/syntaxis is anders, functionaliteit is gelijk
    //*******************************
    angular.module('myApp')
        .service('personService', personService);

    personService.$inject = [];
    function personService() {
        var persons = [
            {'name': 'Sasha'},
            {'name': 'Stephen'},
            {'name': 'Olaf'},
            {'name': 'Ger'},
            {'name': 'Marco'},
            {'name': 'Hetty'},
            {'name': 'Jannie'},
            {'name': 'Sylvia'},
            {'name': 'Pim'},
            {'name': 'Soren'}
        ];

        // public function. Let op het keyword 'this'
        this.getPersons = function () {
            return persons;
            // HIER komt normaal gesproken een $http-call naar AJAX-webservice
        };

        // andere public functions
        this.getAddresses = function () {
            // haal alle adressen op ....
        }
    }
})();
