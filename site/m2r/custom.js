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
$('.workflow-tab a[href="#mix"]').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
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
    $("#workflow .row .manu-do").css({
        "background-color": "rgba(243,124,61,0.8)"
    });
    $("#workflow .row .reiko-do").css({
        "background-color": "rgba(243,124,61,0.8)"
    });
    $("#workflow .row .wrong-do").css({
        "background-color": "rgba(243,124,61,0.8)"
    });
});
$('.workflow-tab a[href="#m2r"]').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
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