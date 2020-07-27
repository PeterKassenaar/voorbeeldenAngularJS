(function () {
	'use strict';

	angular.module('my.components', [])
		.component('userList', {
			controller: userListController,
			template: template
			// external HTML-file: nice separation of concerns, but notice
			// the full path in the string.
			//templateUrl: 'users/user-list/user-list.html'
		})

	userListController.$inject = ['$http']

	// The controller for this function
	function userListController($http) {
		var vm = this;

		vm.users = [
			{id: 1, name: 'Peter'},
			{id: 2, name: 'Sandra'},
			{id: 3, name: 'Javan'},
			{id: 4, name: 'Feline'},
		]

		// lifecycle hook - call this function automatically when
		// the component is initialized.
		// vm.$onInit = function(){
		// 	vm.getUsers();
		// }

		vm.getUsers = function () {
			const url = 'https://jsonplaceholder.typicode.com/users'
			$http.get(url)
				.then(function (result) {
					vm.users = result.data;
				})
		}

		vm.deleteUser = function (user) {
			return this.users = this.users.filter(u => u !== user)
		}
	}

	// Return a string with the template for this component.
	// PRO: Single File Component (SFC), better for reusability and distribution
	// CON: not as nice separation of concerns.
	function template() {
		return `
			<h2>List of users from internal template function</h2>
			<button ng-click="$ctrl.getUsers()">Get users</button>
			<div ng-repeat="user in $ctrl.users">
    		{{ user.id}} - {{ user.name }}
<!--    		<button ng-click="$ctrl.deleteUser(user)">Delete</button>-->
			</div>
		`
	}
})();
