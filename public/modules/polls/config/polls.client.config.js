'use strict';

// Configuring the Articles module
angular.module('polls').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Polls', 'polls', 'dropdown', '/polls(/create)?');
		Menus.addSubMenuItem('topbar', 'polls', 'List Polls', 'polls');
		Menus.addSubMenuItem('topbar', 'polls', 'New Poll', 'polls/create');
	}
]);