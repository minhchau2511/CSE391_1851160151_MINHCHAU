$(document).ready (function(){
    $(":button").each(function(){
        $(this).click (function(){
            alert($(this).parent().parent().children().eq(1).text());
        })
    });
})