(function() {
	'use strict';
	var manager = angular.module('deedit.infra');

	manager.factory('LoginManager', function($log, $ionicModal, $firebase, $firebaseSimpleLogin, $window) {
		var LoginManager = function LoginManager(scope) {
			this.scope = scope;
			var $this = this;
			this.firebaseRef = new Firebase('https://deedityh.firebaseio.com/');
			this.auth = $firebaseSimpleLogin(this.firebaseRef);
			this.user = null;

			$ionicModal.fromTemplateUrl('app/infra/loginManager/login.html', {
				scope: $this.scope
			}).then(function(modal) {
				$this.scope.modal = modal;
			});

			this.scope.$on("$firebaseSimpleLogin:login", function(event, user) {
	    		$this.user = user;
	    		$this.closeLogin();
	  		});
	  		this.scope.$on("$firebaseSimpleLogin:logout", function(event) {
	    		$this.user = null;
	    		$this.closeLogin();
	  		});
	  		this.scope.$on("$firebaseSimpleLogin:error", function(event, error) {
	    		$log.warn("Error logging user in: ", error);
	  		});

	  		this.scope.$on('$destroy', function() {
    			$this.scope.modal.remove();
  			});
		};

		// Triggered in the login modal to close it
		LoginManager.prototype.closeLogin = function() {
			this.scope.modal.hide();
		};

		// Open the login modal
		LoginManager.prototype.showLogin = function() {
			this.scope.modal.show();
		};

		// Perform the login action when the user submits the login form
		LoginManager.prototype.login = function(loginData) {
			$log.log('logging in', loginData);
			this.auth.$login('facebook');
		};
		LoginManager.prototype.logout = function() {
			this.auth.$logout();
			$window.cookies.clear(function() {
    			$log.log("Cookies cleared!");
  			});
		};

		return LoginManager;
	});
})();