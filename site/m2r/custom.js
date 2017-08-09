/************************************************************
***********************  navbar  *************************
**********************************************************/
expandContent();
collapseContent();
function isScrollDown(){
    let percentage = $(window).scrollTop()/($(window).height()/2);
    let o = percentage * percentage;
    if(percentage < 0.9){
        $("#content").css({
            "opacity": o, 
            "z-index": "-99",
        });
    }else if(percentage < 0.98){
        $("#content").css({
            "opacity": o, 
            "z-index": "0",
        });
        return false;
    } else {
        $("#content").css({
            "opacity": "1", 
        });
        return true;
    };
}    
function expandContent(){
    $("#content").css({
            "position": "absolute",
            "top": "100vh",
    });
    return;
}
function collapseContent(){
    $("#content").css({
            "position": "fixed",
            "top": "0",
    });
    return;
}
if(isScrollDown()){
   expandContent();
}else{
    collapseContent();
}
$(window).scroll(()=>{
    $("#content").show();
    if(isScrollDown()){
        expandContent();
    }else{
        collapseContent();
    }
});
$(".selfanchor").click(function(){
    var link = $(this).attr("href");
    $(window).scrollTop($(window).height());
    setTimeout(function(){window.location.href = link;}, 0);
});
    
/************************************************************
***********************   workflow  *************************
**********************************************************/
const reset = ""+$("#oversea-remove p").html();
$('.workflow-tab a[href="#mix"]').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    $("#workflow .m2r-empty").css({"visibility": "visible"});
    $("#workflow .oversea-empty").css({"visibility": "visible"});
    $("#oversea-remove").addClass("reiko-do col-xs-2 col-sm-2 col-md-2 col-lg-2").removeClass("arrow arrow-left col-xs-1 col-sm-1 col-md-1 col-lg-1").next().removeClass("col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1");
    if($("#oversea-remove p").length == 0) $("#oversea-remove").append("<p class='bg-primary'>"+reset+"</p>");
    $("#workflow .row .manu-do").css({
        "background-color": "rgba(88,122,165,0.8)"
    });
    $("#workflow .row .reiko-do").css({
        "background-color": "rgba(243,124,61,0.8)"
    });
    $("#workflow .row .wrong-do").css({
        "background-color": "rgba(246,86,118,0.8)"
    });
});
$('.workflow-tab a[href="#oversea"]').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    $("#workflow .m2r-empty").css({"visibility": "visible"});
    $("#workflow .row .manu-do").css({
        "background-color": "rgba(243,124,61,0.8)"
    });
    $("#workflow .row .reiko-do").css({
        "background-color": "rgba(243,124,61,0.8)"
    });
    $("#workflow .row .wrong-do").css({
        "background-color": "rgba(243,124,61,0.8)"
    });
    $("#workflow .oversea-empty").css({"visibility": "hidden"});
    $("#oversea-remove p").remove("p");
    $("#oversea-remove").removeClass("reiko-do col-xs-2 col-sm-2 col-md-2 col-lg-2").addClass("arrow arrow-left col-xs-1 col-sm-1 col-md-1 col-lg-1").css({"background-color":"#fff"}).next().addClass("col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1");
});
$('.workflow-tab a[href="#m2r"]').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    $("#workflow .m2r-empty").css({"visibility": "hidden"});
    $("#workflow .oversea-empty").css({"visibility": "visible"});
    $("#oversea-remove").addClass("reiko-do col-xs-2 col-sm-2 col-md-2 col-lg-2").removeClass("arrow arrow-left col-xs-1 col-sm-1 col-md-1 col-lg-1").next().removeClass("col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1");
    if($("#oversea-remove p").length < 1) $("#oversea-remove").append("<p class='bg-primary'>"+reset+"</p>");
    $("#workflow .row .manu-do").css({
        "background-color": "rgba(88,122,165,0.8)"
    });
    $("#workflow .row .reiko-do").css({
        "background-color": "rgba(88,122,165,0.8)"
    });
    $("#workflow .row .wrong-do").css({
        "background-color": "rgba(88,122,165,0.8)"
    });
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});