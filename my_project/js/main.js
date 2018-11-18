$(document).ready(function() {
$('.header').height($(window).height());
})


$('.navbar a').click(function(){
$('body,html').animate({
scrollTop:$('#' + $(this).data('value')).offset().top
},1000);
})

$(function(){

    $('.menuToggle').on('click', function() {
       $('.menu').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
       });

    });

});
