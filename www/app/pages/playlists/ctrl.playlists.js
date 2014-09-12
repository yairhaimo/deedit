(function() {
	'use strict';
	var page = angular.module('deedit.pages');
	page.controller('PlaylistsController', function($log, $scope) {
		function init() {
			$log.log('Init PlaylistsController');

			$scope.playlists = [{
				title: 'Reggae',
				id: 1
			}, {
				title: 'Chill',
				id: 2
			}, {
				title: 'Dubstep',
				id: 3
			}, {
				title: 'Indie',
				id: 4
			}, {
				title: 'Rap',
				id: 5
			}, {
				title: 'Cowbell',
				id: 6
			}];
		}
		init();
	});
})();