(function() {
	'use strict';
	var page = angular.module('deedit.pages');
	page.controller('SupportController', function($log, $scope, $stateParams, ProjectManager, $ionicLoading) {
		function init() {
			$log.log('Init SupportController');
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