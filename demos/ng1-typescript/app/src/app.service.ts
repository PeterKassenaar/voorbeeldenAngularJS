class MyService {
    persons = [
        {name: 'Bart-Jan'},
        {name: 'Shanna'},
        {name: 'Yuri'},
        {name: 'Kelvin'},
        {name: 'Gosse'},
        {name: 'Joost-Jan'}
    ];

    getItems() {
        return this.persons;
    }
}
angular.module('myApp').service('MyService', MyService);