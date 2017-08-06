/*function completestory(story) {
    var story = story;
    $.ajax({
        type: "POST",
        data: {
            story: story
            username: username
        },
        url: "/game",
        beforeSend: function(){
            $(".ajaxTest").text("Trying to complete...");
        },
        success: function(data) {
            $(".ajaxTest").text(data.a);
            if (data.b == "true") {
                location.reload();
            }
        }
    });
}*/

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

