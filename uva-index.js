if (window.cordova) {
  document.addEventListener("deviceready", onDeviceReady);
}
else {
  onDeviceReady();
}
function onDeviceReady() {

  console.log(device.cordova);

  var urlAllQuotes = 'http://pk-chuckfacts.azurewebsites.net/api/quotes/all';
  var urlRandomQuote = 'http://pk-chuckfacts.azurewebsites.net/api/quotes/random';


  // 1. MAAK mijn Angular Module
  angular.module('myApp', []); // <=== Door [] toe te voegen, is angular.module een SETTER

  // 2. Controller maken
  angular.module('myApp')
    .controller('myController', myController);

  // 3. Controller implementatie
  myController.$inject = ['$http']; // Minify-safe!
  function myController($http) {
    // Initialisaties
    var vm = this;
    vm.error = false;
    vm.quotes = [];

    $http({
      url   : urlAllQuotes,
      method: 'GET'
    }).success(function (quotes) {
      vm.quotes = quotes;
      vm.error = false;
    }).error(function (err) {
      vm.quotes = [];
      vm.error = true;
    });

  }// end myController

  angular.bootstrap(document.getElementById('body'), ['myApp']);
}