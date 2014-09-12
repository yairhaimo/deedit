(function() {
	'use strict';
	var page = angular.module('deedit.pages');
	page.controller('MenuController', function($log, $scope, LoginManager) {
		function init() {
			$log.log('Init MenuController');
			$scope.LoginManager = new LoginManager($scope);
			$scope.loginData = {};
		}
		init();
	});
})();