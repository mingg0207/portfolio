$(document).ready(function () {
  
  $(".header .left .hbg-btn img").click(function(){
    if($(this).hasClass("off")){
      $(this).attr("src", "images/point-btn-on.png");
      $(this).toggleClass("off on");
      $(".hbg-nav").addClass("on");
      $(".window").addClass("on");
    } else {
      $(this).attr("src", "images/point-btn-off.png");
      $(this).toggleClass("off on");
      $(".hbg-nav").removeClass("on");
      $(".window").removeClass("on");
    }
  })

  $(".window").click(function(){
    $(".header .left .hbg-btn img").attr("src", "images/point-btn-off.png");
      $(".header .left .hbg-btn img").removeClass("on").addClass("off");
      $(".hbg-nav").removeClass("on");
      $(".window").removeClass("on");
  })

});