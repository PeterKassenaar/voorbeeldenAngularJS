"use strict";
/// <reference path="../../typings/tsd.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
var myController = (function () {
    function myController() {
        this.name = 'Mona-Marie';
        this.items = [
            { name: 'Verfkwast' },
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
