$(function() {
    $(document).ready(function(){
        $("button#clickMeYes3").bind('click', function() {
          $.getJSON($SCRIPT_ROOT + "/game", {
                username: username,
                story: story
          }, function() {
                window.alert("you've completed this story!");
          });
          return false;
        });
      });
    });

$(function() {
    $(document).ready(function(){
        $("button#clickMeNo3").bind('click', function() {
          $.getJSON($SCRIPT_ROOT + '/game', {
                username: username,
                story: story
          }, function() {
                window.alert("you've completed this story!");
          });
          return false;
        });
      });
    });
