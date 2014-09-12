(function() {
	'use strict';
	var page = angular.module('deedit.pages');
	page.controller('BrowseController', function($log, $scope, ProjectManager, $ionicLoading) {
		function init() {
			$log.log('Init BrowseController');

			$ionicLoading.show({template:'Loading'});

			ProjectManager.getProjects().then(function(projects) {
				$scope.projects = projects;
				$ionicLoading.hide();
			});
		}
		init();
	});
})();