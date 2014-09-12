(function() {
	'use strict';
	var page = angular.module('deedit.pages');
	page.config(function($stateProvider) {
		$stateProvider
			.state('app.project', {
				url: '/projects/:projectid',
				views: {
					'menuContent': {
						templateUrl: 'app/pages/project/project.html',
						controller: 'ProjectController'
					}
				}
			});
	});
})();