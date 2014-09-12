(function() {
	'use strict';
	var page = angular.module('deedit.pages');
	page.config(function($stateProvider) {
		$stateProvider
			.state('app.watch', {
				url: '/watch/:projectid',
				views: {
					'menuContent': {
						templateUrl: 'app/pages/watch/watch.html',
						controller: 'WatchController'
					}
				}
			});
	});
})();