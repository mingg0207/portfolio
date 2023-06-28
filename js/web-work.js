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
    // console.log(swiper.realIndex);
    let swiper_idx = swiper.realIndex;
    $(".web-work .web-work-list ul li").removeClass("on").eq(swiper_idx).addClass("on");
  });
  
  
  $(".web-work .web-work-list ul li").eq(0).addClass("on");
  $(".web-work .web-work-list ul li").click(function(){
    let i = $(this).index();
    $(".web-work .web-work-list ul li").removeClass("on").eq(i).addClass("on");
    swiper.slideTo(i, 700, false);
  })

  $(".web-work .web-content-area .web-content-wrap .web-content .web-content-img .app-img").mouseover(function(){
    let hover_idx = $(this).index();
    $(".web-work .web-content-area .web-content-wrap .web-content .web-content-img .app-img").not(this).addClass("off");
  }) .mouseout(function(){
    $(".web-work .web-content-area .web-content-wrap .web-content .web-content-img .app-img").removeClass("off");
  })


  const web_work_detail = [  
    "images/process-shinhwa.jpg",
    "images/thumb-arte-pc.png",
    "images/thumb-subway-pc.png",
    "images/process-vbapp.png"
  ]
    
  
  $(".web-work .web-content-area .web-content-wrap .web-content .web-content-desc .btn-wrap .link-btn").click(function(e){
    
    let i = $(this).parents(".web-work .web-content-area .web-content-wrap .web-content").index();
    console.log(i)
    
    if($(this).attr("href") == "#"){
      e.preventDefault();
      $(".modal").fadeIn()
      $(".modal-content").show();
    
      $(".modal-content > img").attr("src", web_work_detail[i])
      
    }
  
    $("html,body").css("overflow", "hidden")
  
  })
  
  
  $(".modal-content a, .modal").click(function(){
    $(".modal").fadeOut()
    $(".modal-content").scrollTop(0).hide();
  
    $("html,body").css("overflow", "")
    // "" > 비워둔다 - 초기값으로 돌아간다.
  })
  
  let close = parseInt($(".modal-content a").css("top"));
  
  $(".modal-content").scroll(function(){
    let pos = $(".modal-content").scrollTop();
    $(".modal-content a").css("top", "calc(2% + "+pos+"px)")
  })

  $(".modal-content a img").mouseover(function(){
    $(this).attr("src", "images/point-btn-on.png")
  }) .mouseout(function(){
    $(this).attr("src", "images/point-btn-off.png")
  })

});