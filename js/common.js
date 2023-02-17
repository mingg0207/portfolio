$(document).ready(function () {
  
  $(".header .left .hbg-btn img").click(function(){
    if($(this).hasClass("off")){
      $(this).attr("src", "images/point-btn-on.png");
      $(this).toggleClass("off on");
      $(".hbg-nav").addClass("on");
    } else {
      $(this).attr("src", "images/point-btn-off.png");
      $(this).toggleClass("off on");
      $(".hbg-nav").removeClass("on");
    }
  })

});