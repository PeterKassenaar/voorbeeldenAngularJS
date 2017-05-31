/// <reference path="../../typings/tsd.d.ts"/>

import {IControllerModel }from "./modules/interface.icontrollermodel";
class myController implements IControllerModel {
	name:string;
	items:any[];
    static $inject=['MyService'];

	constructor() {
		this.name  = 'Peter Kassenaar';
		this.items = [
			{name: 'Zaag'},
			{name: 'Boor'},
			{name: 'Hamer'},
			{name: 'Spijker'},
			{name: 'Nietmachine'},
			{name: 'Plakband'}
		];
	}
}

angular.module('myApp')
	.controller('myController', myController);
