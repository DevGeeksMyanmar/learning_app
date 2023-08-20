$(document).ready(function(){
    // nav-link active js 
    $(".nav-link").click(function(){
        $(".nav-link").removeClass("nav-active");
        $(this).addClass("nav-active");
    })

    // for nav bar hamburger 
    $('.btn-open-menu').click(function(){
        $("nav ul").css("right","0px");
    })

    $('.btn-close-menu').click(function(){
        $("nav ul").css("right","-200px");
    })

})


