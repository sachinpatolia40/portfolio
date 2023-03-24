$(document).ready(function(){
    $(".navbar-list .navbar-link").on("click",function(){
        $(".navbar-list .navbar-link").removeClass("active");
        $(this).addClass("active");
        $(".main-content article").removeClass("active");
        $("." +$(this).attr("data-page")).addClass("active");
    })
})

