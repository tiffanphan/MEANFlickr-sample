'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Recipes', 'articles', 'dropdown', '/articles(/create)?',false);
		Menus.addSubMenuItem('topbar', 'articles', 'List Recipes', 'articles', false);
		Menus.addSubMenuItem('topbar', 'articles', 'New Recipes', 'articles/create', false);
	}
]);