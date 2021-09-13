$(function () {



$('.nav-bar a').click(function () {

$('html , body').animate({

scrollTop : $('#' +$(this).data('value')).offset().top


},2500);


});
    


});


