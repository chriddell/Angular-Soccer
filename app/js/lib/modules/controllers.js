'use strict';

/* Controllers Module */

var dreamteamControllers = angular.module('dreamteamControllers', []);

dreamteamControllers.controller('PlayerCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('players/players.json').success(function(data) {
      $scope.players = data;
    });
  }]);

dreamteamControllers.controller('PlayerDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('players/' + $routeParams.playerId + '.json').success(function(data) {
      $scope.player = data;
    });
  }]);
