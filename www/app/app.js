(function() {
  'use strict';
  var app = angular.module('deedit', [
    'ionic',
    'firebase',
    'deedit.infra',
    'deedit.pages'
  ]);

  app.run(function($ionicPlatform, LoginManager, $rootScope, $timeout) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });

    $rootScope.LoginManager = new LoginManager($rootScope);

  });

  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/app/browse');
  });

  app.filter('daysleft', function() {
    return function(input) {
      if (input) {
        var today = new Date();
        var splittedDate = input.split('/');
        var dueDate = new Date(splittedDate[2], splittedDate[1] - 1, splittedDate[0]);
        var diff = dueDate.getTime() - today.getTime();
        return  Math.round(diff / (24*60*60*1000));
      }
    };
  });

})();