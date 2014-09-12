(function() {
	'use strict';
	var page = angular.module('deedit.pages');
	page.config(function($stateProvider) {
		$stateProvider
			.state('app.browse', {
				url: '/browse',
				views: {
					'menuContent': {
						templateUrl: 'app/pages/browse/browse.html',
						controller: 'BrowseController'
					}
				}
			});
	});
})();