'use strict';

/* App Module */

var dreamteamApp = angular.module('dreamteamApp', [
  'ngRoute',
  'dreamteamControllers'
]);

dreamteamApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/players', {
        templateUrl: 'partials/players.html',
        controller: 'PlayerCtrl'
      }).
      when('/players/:playerId', {
        templateUrl: 'partials/view.html',
        controller: 'PlayerDetailCtrl'
      }).
      otherwise({
        redirectTo: '/players'
      });
  }]);