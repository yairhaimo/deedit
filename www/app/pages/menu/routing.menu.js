(function() {
	'use strict';
	var page = angular.module('deedit.pages');
	page.config(function ($stateProvider) {
		$stateProvider
	    	.state('app', {
	    		abstract: true,
	        	url: '/app',
	         	templateUrl: 'app/pages/menu/menu.html',
	         	controller: 'MenuController'
	     	});
	});
})();