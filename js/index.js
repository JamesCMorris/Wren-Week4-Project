$(document).ready(function() {
    $("#click").click(function(){
        $('html, body').animate({
            scrollTop: $("#table").offset().top
        }, 1000);
    });
});

$(document).ready(function() {
    $("#landing-arrow").click(function(){
        $('html, body').animate({
            scrollTop: $("#table").offset().top
        }, 1000);
    });
});

$(document).ready(function() {
    $("#table-arrow").click(function(){
        $('html, body').animate({
            scrollTop: $("#lille").offset().top
        }, 1000);
    });
});

$(document).ready(function() {
    $("#main-arrow").click(function(){
        $('html, body').animate({
            scrollTop: $("#research").offset().top
        }, 1000);
    });
});

$(document).ready(function() {
    $("#footer-arrow").click(function(){
        $('html, body').animate({
            scrollTop: $("#header").offset().top
        }, 1000);
    });
});

var rellax = new Rellax('.rellax');