$(document).ready(function () {

  $("a").click(function(e){
    if($(this).attr("href") == "#"){
      e.preventDefault();
    }
  })

  // [다크모드]
  $("html").attr("data-dark", false)
  
  const dark_mode = localStorage.getItem("dark_mode");

  if (dark_mode == "night") {
    $("html").attr("data-dark", "true")
    $(".header .right .dark-btn").addClass("night");

  } else {
    $("html").attr("data-dark", "false")
    $(".header .right .dark-btn").removeClass("night");

  }

  // PC, 태블릿 다크모드 버튼

  $(".header .right .dark-btn").click(function(e){
    
    e.preventDefault()

    if ($("html").attr("data-dark") == "true") {
      $("html").attr("data-dark", "false")

      // 라이트 모드시 설정 초기화
      localStorage.removeItem("dark_mode")
    } else {
      $("html").attr("data-dark", "true")

      // 다크모드 유지
      localStorage.setItem("dark_mode", "night")
    }

    $(".header .right .dark-btn").toggleClass("night");

  })


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

  

  $("html,body").contextmenu(function(e){

    e.preventDefault();

    let x = e.pageX;
    let y = e.pageY;

    console.log("가로:"+x , "세로:"+y)

    $(".quick-menu").css("left", x+"px").css("top", y+"px").show();
  })


  $("html,body").click(function(e){
      $(".quick-menu").hide()
  })

});