'use strict';

// Configuring the Articles module
angular.module('chat').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Maps', 'chat', 'item', '/chat', true);
	}
]);