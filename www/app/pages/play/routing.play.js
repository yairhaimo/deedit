(function() {
	'use strict';
	var page = angular.module('deedit.pages');
	page.config(function($stateProvider) {
		$stateProvider
			.state('app.play', {
				url: '/play/:projectid',
				views: {
					'menuContent': {
						templateUrl: 'app/pages/play/play.html',
						controller: 'PlayController'
					}
				}
			});
	});
})();