$(document).ready(function () {
    $("ul li").click(function () { 
        var index = $(this).index();
        $("iframe").attr("src", "./bt1."+ (index +1 )+".html");
    });
})