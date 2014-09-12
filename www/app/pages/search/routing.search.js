(function() {
	'use strict';
	var page = angular.module('deedit.pages');
	page.config(function($stateProvider) {
		$stateProvider
			.state('app.search', {
				url: '/search',
				views: {
					'menuContent': {
						templateUrl: 'app/pages/search/search.html',
						controller: 'SearchController'
					}
				}
			});
	});
})();