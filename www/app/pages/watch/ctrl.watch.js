(function() {
	'use strict';
	var page = angular.module('deedit.pages');
	page.controller('WatchController', function($log, $scope, $stateParams, $ionicLoading, ProjectManager) {
		function init() {
			$log.log('Init WatchController');

			$ionicLoading.show({
				template: 'Loading'
			});
			ProjectManager.getProjectById($stateParams.projectid).then(function(project) {
				$scope.project = project;
				$ionicLoading.hide();
			});
		}
		init();
	});
})();