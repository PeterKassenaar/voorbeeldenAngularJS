(function () {

    // 1. Get reference to the app
    angular.module('myApp')
        .controller('personController', ['$scope', personController]);

    // 2. Create controller
    function personController($scope) {
        $scope.persons = [
            {'name': 'John'},
            {'name': 'Bob'},
            {'name': 'Bart'},
            {'name': 'Sandra'},
            {'name': 'Harry'},
            {'name': 'Peter'},
            {'name': 'Michiel'},
            {'name': 'Jeroen'},
            {'name': 'Irene'},
            {'name': 'Mike'}
        ];
    }


})();
