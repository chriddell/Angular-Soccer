require.config({
  baseUrl: 'js/lib/',
  paths: {
    "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
    "angular": "angular.min"
  }
});

require(["modules/controllers"], function(){
});