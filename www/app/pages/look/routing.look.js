(function() {
	'use strict';
	var page = angular.module('deedit.pages');
	page.config(function($stateProvider) {
		$stateProvider
			.state('app.look', {
				url: '/look/:projectid',
				views: {
					'menuContent': {
						templateUrl: 'app/pages/look/look.html',
						controller: 'LookController'
					}
				}
			});
	});
})();