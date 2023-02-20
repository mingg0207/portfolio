$(document).ready(function () {
  
  var swiper = new Swiper(".swiper.design-content-area", {
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
    $(".design-work .design-work-list ul li").removeClass("on").eq(swiper_idx).addClass("on");
  });
  
  
  $(".design-work .design-work-list ul li").eq(0).addClass("on");
  $(".design-work .design-work-list ul li").click(function(){
    let i = $(this).index();
    $(".design-work .design-work-list ul li").removeClass("on").eq(i).addClass("on");
    swiper.slideTo(i, 700, false);
  })


  const web_work_detail = [  
    ["images/process-itamin1.jpg", "images/process-itamin2.jpg"],
    "images/process-water.jpg"
  ]
    
  
  $(".design-work .design-content-area .design-content-wrap .design-content .design-content-desc .btn-wrap .link-btn").click(function(e){
    
    let i = $(this).parents(".design-work .design-content-area .design-content-wrap .design-content").index();
    console.log(i)
    let i_ver = $(this).index();
    
    e.preventDefault();
    $(".modal").fadeIn()
    $(".modal-content").show();

    if($(this).parents(".design-work .design-content-area .design-content-wrap .design-content .design-content-desc .btn-wrap").hasClass("one-btn")){
      $(".modal-content > img").attr("src", web_work_detail[i])
      
    } else {
      $(".modal-content > img").attr("src", web_work_detail[i][i_ver])
      
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