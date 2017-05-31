var MyService = (function () {
    function MyService() {
        this.persons = [
            { name: 'Bart-Jan' },
            { name: 'Shanna' },
            { name: 'Yuri' },
            { name: 'Kelvin' },
            { name: 'Gosse' },
            { name: 'Joost-Jan' }
        ];
    }
    MyService.prototype.getItems = function () {
        return this.persons;
    };
    return MyService;
}());
angular.module('myApp').service('MyService', MyService);
