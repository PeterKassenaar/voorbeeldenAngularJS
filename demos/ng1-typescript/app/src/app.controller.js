"use strict";
/// <reference path="../../typings/tsd.d.ts"/>
var myController = (function () {
    function myController() {
        this.name = 'Peter Kassenaar';
        this.items = [
            { name: 'Zaag' },
            { name: 'Boor' },
            { name: 'Hamer' },
            { name: 'Spijker' },
            { name: 'Nietmachine' },
            { name: 'Plakband' }
        ];
    }
    return myController;
}());
myController.$inject = ['MyService'];
angular.module('myApp')
    .controller('myController', myController);
