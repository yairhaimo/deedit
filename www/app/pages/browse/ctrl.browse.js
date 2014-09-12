(function() {
	'use strict';
	var page = angular.module('deedit.pages');
	page.controller('BrowseController', function($log, $scope) {
		function init() {
			$log.log('Init BrowseController');

			$scope.items = [
				{
					title: 'Feed the hungry',
					objective: 10000,
					completed: 3500,
					daysleft: 19 // TODO: change to due date
				},
				{
					title: 'Tickle the thirsty',
					objective: 15000,
					completed: 4500,
					daysleft: 13 // TODO: change to due date
				},
				{
					title: 'Sleep for profit',
					objective: 3000,
					completed: 2500,
					daysleft: 3 // TODO: change to due date
				}
			];
		}
		init();
	});
})();