$(document).ready(function () {



    
    
    
    
    $('.saveBtn').on('click', function () {
        console.log("click button")
        var textValue = $(this).siblings('.description').val();
        var textTime = $(this).parent().attr('id');
        console.log(textValue);
        console.log(textTime);
        localStorage.setItem(textValue, textTime);
        



    })










































})