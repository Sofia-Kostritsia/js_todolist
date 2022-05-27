$(document).ready(function(){
    $(function() {
        var $tasksList = $("#tasksList");
        var $taskInput = $("#taskInput");
        var $notification = $("#notification");
        var displayNotification = function() {
            if (!$tasksList.children().length) {
                $notification.fadeIn("fast");
            } else {
                $notification.css("display", "none")
            }
        }
//таск адд через кнопку
        $("#taskAdd").on("click", function() {
            if(!$taskInput.val()) {return false;}
            $tasksList.append("<li>" + $taskInput.val() + "<button class='delete'>&#10006</button></li>");
            $taskInput.val("");
            displayNotification();
            $(".delete").on("click", function() {
                var $parent = $(this).parent();
                $parent.css("animation", "fadeOut .3s linear");
                setTimeout(function() {
                    $parent.remove();
                    displayNotification();
                }, 2);
            })
        })
//таск адд через ентер
        $("#taskInput").keyup(function(events){
            if(events.keyCode == 13){
                $("#taskAdd").click();
                $(this).val("");
            }
        })
    })
})