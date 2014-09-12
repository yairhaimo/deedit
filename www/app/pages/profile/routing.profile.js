(function() {
	'use strict';
	var page = angular.module('deedit.pages');
	page.config(function($stateProvider) {
		$stateProvider
			.state('app.profile', {
				url: '/profile',
				views: {
					'menuContent': {
						templateUrl: 'app/pages/profile/profile.html',
						controller: 'ProfileController'
					}
				}
			});
	});
})();