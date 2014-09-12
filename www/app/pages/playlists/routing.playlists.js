(function() {
	'use strict';
	var page = angular.module('deedit.pages');
	page.config(function($stateProvider) {
		$stateProvider
			.state('app.playlists', {
				url: '/playlists',
				views: {
					'menuContent': {
						templateUrl: 'app/pages/playlists/playlists.html',
						controller: 'PlaylistsController'
					}
				}
			});
	});
})();