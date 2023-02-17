$(document).ready(function () {
  
  var swiper = new Swiper(".swiper.web-content-area", {
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    speed: 1000,
    centeredSlides: true,
    pagination:{
      el: ".swiper-pagination",
      clickable: true
    }
  });

  swiper.on('transitionStart', function() {
    console.log(swiper.realIndex);
    let swiper_idx = swiper.realIndex;
    $(".web-work .web-work-list ul li").removeClass("on").eq(swiper_idx).addClass("on");
  });
  
  
  $(".web-work .web-work-list ul li").eq(0).addClass("on");
  $(".web-work .web-work-list ul li").click(function(){
    let i = $(this).index();
    $(".web-work .web-work-list ul li").removeClass("on").eq(i).addClass("on");
    swiper.slideTo(i, 700, false);
  })

});