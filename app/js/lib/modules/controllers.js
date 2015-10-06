'use strict';

/* Controllers Module */

define(['angular'], function(){

  var dreamteamApp = angular.module('dreamteamApp', []);

  dreamteamApp.controller('PlayerCtrl', ['$scope', '$http', function($scope, $http){
    $http.get('players/players.json').success(function(data){
      $scope.players = data;
    });
  }]);

});