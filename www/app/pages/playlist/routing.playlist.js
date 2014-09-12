(function() {
	'use strict';
	var page = angular.module('deedit.pages');
	page.config(function($stateProvider) {
		$stateProvider
			.state('app.single', {
				url: '/playlists/:playlistId',
				views: {
					'menuContent': {
						templateUrl: 'app/pages/playlist/playlist.html',
						controller: 'PlaylistController'
					}
				}
			});
	});
})();