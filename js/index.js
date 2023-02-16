$(document).ready(function () {
  
  $(".main .main-wrap .nav .menu-btn img").mouseover(function(){
    $(this).attr("src", "../images/point-btn-off.png")
  }) .mouseout(function(){
    $(this).attr("src", "../images/point-btn-on.png")
  })

});