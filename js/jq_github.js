$(document).ready(function() {

  $("#button").click(function() {

    var username = $("#username").val();

    var token = "3ea69d70c956adec26e7ac5995d046429e2913d3";
    var url = 'https://api.github.com/users/' + username + "?access_token=" + token;

    var template = $("template").html();

    $.get(url, function(info) {

      $("#display").prepend(Mustache.render(template,info));

    });

  });

});