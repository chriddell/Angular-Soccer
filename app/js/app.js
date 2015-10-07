require.config({
  baseUrl: 'js/lib/',
  paths: {
    "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
    "picturefill": "picturefill",
    "html5-shiv": "html5-shiv"
  }
});

require(["picturefill", "html5-shiv"], function(){});