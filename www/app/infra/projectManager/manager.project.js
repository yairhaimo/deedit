(function() {
	'use strict';
	var manager = angular.module('deedit.infra');

	manager.factory('ProjectManager', function($log, $q, $firebase) {
		var ProjectManager = function ProjectManager() {
			// var ref = new Firebase("https://deedityh.firebaseio.com/");
   //  		// create an AngularFire reference to the data
   //  		this.data = $firebase(ref);
   //  		this.projects = this.data.$asObject();
		};



		// var projects = [
		// 	{
		// 		id: 0,
		// 		image: 'http://lorempizza.com/380/240',
		// 		title: 'Feed the hungry',
		// 		objective: 10000,
		// 		completed: 3500,
		// 		daysleft: 19 // TODO: change to due date
		// 	},
		// 	{
		// 		id: 1,
		// 		image: 'http://lorempizza.com/385/245',
		// 		title: 'Tickle the thirsty',
		// 		objective: 15000,
		// 		completed: 4500,
		// 		daysleft: 13 // TODO: change to due date
		// 	},
		// 	{
		// 		id: 2,
		// 		image: 'http://lorempizza.com/375/235',
		// 		title: 'Sleep for profit',
		// 		objective: 3000,
		// 		completed: 2500,
		// 		daysleft: 3 // TODO: change to due date
		// 	}
		// ];

		ProjectManager.getProjects = function() {
			var deferred = $q.defer();

			var ref = new Firebase("https://deedityh.firebaseio.com/projects");
    		var data = $firebase(ref);
			var ret = data.$asArray();

    		ret.$loaded().then(function() {
               deferred.resolve(ret);
          	});

			return deferred.promise;
		};

		ProjectManager.getProjectById = function(id) {
			var deferred = $q.defer();
			
			var ref = new Firebase("https://deedityh.firebaseio.com/projects/" + id);
    		var data = $firebase(ref);
    		var ret = data.$asObject();

    		ret.$loaded().then(function() {
               deferred.resolve(ret);
          	});
			
			return deferred.promise;
		};

		return ProjectManager;
	});
})();