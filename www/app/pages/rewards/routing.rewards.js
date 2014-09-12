(function() {
	'use strict';
	var page = angular.module('deedit.pages');
	page.config(function($stateProvider) {
		$stateProvider
			.state('app.rewards', {
				url: '/rewards',
				views: {
					'menuContent': {
						templateUrl: 'app/pages/rewards/rewards.html',
						controller: 'RewardsController'
					}
				}
			});
	});
})();