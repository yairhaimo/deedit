(function() {
	'use strict';
	var page = angular.module('deedit.pages');
	page.controller('MenuController', function($log, $scope) {
		function init() {
			$log.log('Init MenuController');
		}
		init();
	});
})();