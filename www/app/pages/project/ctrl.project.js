(function() {
	'use strict';
	var page = angular.module('deedit.pages');
	page.controller('ProjectController', function($log, $scope, $stateParams, ProjectManager, $ionicLoading) {
		function init() {
			$log.log('Init ProjectController');

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