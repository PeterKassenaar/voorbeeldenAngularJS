// 1. Maak hier een andere, extra module, bijvoorbeeld
// met helperFuncties. Deze module wordt straks in stap 2
// geinjecteerd in de 'hoofd'module "mijnApp". De helpermodule
// heeft 1 controller met een dummy-functie clickMe()
angular.module('mijnHelper', [])
    .controller('alertController', function ($scope) {
        $scope.clickMe = function () {
            alert('Hello World');
        }
    });