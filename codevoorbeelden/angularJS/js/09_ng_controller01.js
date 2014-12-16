(function (app) {

  // 2. Maak de eerste controller
  var personController = function ($scope) {
    $scope.persons = [
      {id: 0, 'name': 'John'},
      {id: 1, 'name': 'Bob'},
      {id: 2, 'name': 'Bart'},
      {id: 3, 'name': 'Sandra'},
      {id: 4, 'name': 'Harry'},
      {id: 5, 'name': 'Peter'},
      {id: 6, 'name': 'Michiel'},
      {id: 7, 'name': 'Jeroen'},
      {id: 8, 'name': 'Irene'},
      {id: 9, 'name': 'Mike'}];
  };

  app.controller('personController', ['$scope', personController]);
})(angular.module('myApp')); // bestaande module doorgeven als parameter
