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
});
function type(){
    nam =document.getElementById("name").value
    ema =document.getElementById("email").value
    alert("Hi"+" "+nam +" "+"we have verified  your email account "+ "please stay with us")
}
