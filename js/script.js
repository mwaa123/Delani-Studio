$(function(){
    $('#dove1 .dove').click(function(){
        $('#dove1 .dove').toggle();
    });

    $('#dove2 .dove2').click(function(){
        $('#dove2 .dove2').toggle();
    });

    $('#dove3 .dove3').click(function(){
        $('#dove3 .dove3').toggle();
    });
    $(".img1").hover(function(){
        $(this).find('.text1').fadeIn(300);
    }, function() {
        $(this).find('.text1').fadeOut(100);
    });

    $(".img2").hover(function(){
        $(this).find('.text2').fadeIn(300);
    }, function() {
        $(this).find('.text2').fadeOut(100);
    });

    $(".img3").hover(function(){
        $(this).find('.text3').fadeIn(300);
    }, function() {
        $(this).find('.text3').fadeOut(100);
    });
    $(".img4").hover(function(){
        $(this).find('.text4').fadeIn(300);
    }, function() {
        $(this).find('.text4').fadeOut(100);
    });

    $(".img5").hover(function(){
        $(this).find('.text5').fadeIn(300);
    }, function() {
        $(this).find('.text5').fadeOut(100);
    });
    $(".img6").hover(function(){
        $(this).find('.text6').fadeIn(300);
    }, function() {
        $(this).find('.text6').fadeOut(100);
    });

    $(".img7").hover(function(){
        $(this).find('.text7').fadeIn(300);
    }, function() {
        $(this).find('.text7').fadeOut(100);
    });

    $(".img8").hover(function(){
        $(this).find('.text8').fadeIn(300);
    }, function() {
        $(this).find('.text8').fadeOut(100);
    });

});
function type(){
    nam =document.getElementById("name").value
    ema =document.getElementById("email").value
    alert("Hi"+" "+nam +" "+"we have verified  your email account "+ "please stay with us")
}
