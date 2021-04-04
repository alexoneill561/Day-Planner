var today = moment();




$(document).ready(function () {


    $('.saveBtn').on('click', function () {
        console.log("click button")
        var textValue = $(this).siblings('.description').val();
        var textTime = $(this).parent().attr('id');
        console.log(textValue);
        console.log(textTime);
        localStorage.setItem(textValue, textTime);

        
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    
    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);
       }
        



    });




        
    function pastPresentFuture() {
        hour = time.hours();
        $(".time-block").each(function () {
            var thisHour = parseInt($(this).attr("id"));
            
            if (thisHour > hour) {
                $(this).addClass("future")
            }
            else if (thisHour === hour) {
                $(this).addClass("present");
            }
            else {
                $(this).addClass("past");
            }
        })
    }
    
    pastPresentFuture();




})