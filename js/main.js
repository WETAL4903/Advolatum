$(document).ready(function(){
  $(".slider").slick({
    arrows:false,
    dots:true,
    adaptiveHeight:true,
    speed:600,
  });
})

function goToDirectory(){
document.location.href="http://127.0.0.1:5500/html/catalog.html";
}