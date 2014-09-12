(function() {
	'use strict';
	var page = angular.module('deedit.pages');
	page.config(function($stateProvider) {
		$stateProvider
			.state('app.support', {
				url: '/support/:projectid',
				views: {
					'menuContent': {
						templateUrl: 'app/pages/support/support.html',
						controller: 'SupportController'
					}
				}
			});
	});
})();