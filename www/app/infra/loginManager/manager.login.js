(function() {
	'use strict';
	var manager = angular.module('deedit.infra');

	manager.factory('LoginManager', function($log, $ionicModal, $timeout) {
		var LoginManager = function LoginManager(scope) {
			this.scope = scope;
			var $this = this;
			$ionicModal.fromTemplateUrl('app/infra/loginManager/login.html', {
				scope: $this.scope
			}).then(function(modal) {
				$this.scope.modal = modal;
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
		LoginManager.prototype.doLogin = function(loginData) {
			$log.log('logging in', loginData);

			// Simulate a login delay. Remove this and replace with your login
			// code if using a login system
			var $this = this;
			$timeout(function() {
				$this.closeLogin();
			}, 1000);
		};

		return LoginManager;
	});
})();