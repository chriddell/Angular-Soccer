(function(){
  var app = angular.module('dreamTeam', [ ]);

  app.controller('SquadController', function(){
    this.teams = teams;
  });

  app.controller('PlayerController', function(){
    this.player = {};

    this.addPlayer = function(team) {
      team.players.push(this.player);
      this.review = {};
    };
  });

  var teams = [{
      name: 'First XI',
      description: 'Definitely in the squad.',
      players: [{
        name: 'Ronaldinho',
        position: 'CF',
        country: 'Brazil',
        description: 'Test description',
        image: 'ronaldinho.png'
      },
      {
        name: 'Cafu',
        position: 'CDM',
        country: 'Brazil',
        description: 'Test again',
        image: 'cafu.png'
      }]
    },
    {
      name: 'Secondary XI',
      description: 'Not quite top, top...',
      players: [{
        name: 'Thomas Müller',
        position: 'CAM',
        country: 'Germany',
        description: 'Test',
        image: 'muller.png'
      }]
    }];
})();