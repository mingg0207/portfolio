$(document).ready(function () {

  function skill(id, per){
    let bar = new ProgressBar.Circle(id,{
      strokeWidth: 10,
      trailWidth: 1,
      trailColor: "#ddd",
      color: "#f23e3e",
      duration: 1400,
      step: function(state, circle){
        circle.setText(Math.round(circle.value()*100)+"%")
      }
    })
    bar.animate(per)
  }
  
    skill("#ps", 0);
    skill("#ai", 0);
    skill("#html", 0);
    skill("#css", 0);
    skill("#js", 0);

  var currentDirection = '';
  var lastScrollTop = 0;

  $(".profile .profile-txt").on('scroll', function(){
    var currentPos = $(this).scrollTop();
    if (currentPos > lastScrollTop){
      // 아래로 스크롤 중
      if(currentDirection != 'down') { // 마지막 방향 확인
      currentDirection = 'down';
      $( 'svg, .progressbar-text' ).remove();
      skill("#ps", 0.9);
      skill("#ai", 0.9);
      skill("#html", 0.85);
      skill("#css", 0.8);
      skill("#js", 0.7);
      }
      
    } else {
      // 위로 스크롤 중
      if(currentDirection != 'up') { // 마지막 방향 확인
        currentDirection = 'up';
      }
    }
    lastScrollTop = currentPos;
});

  var clipboard = new ClipboardJS('.e-mail, .kakao');
  
    clipboard.on('success', function(e) {
        console.log(e);
    });
  
    clipboard.on('error', function(e) {
        console.log(e);
    });

  $(".profile .profile-txt .contact div p").click(function(){
    let i = $(this).parents(".profile .profile-txt .contact div").index();
    console.log(i)
    $(".profile .profile-txt .contact div:nth-of-type("+i+")").addClass("copy");

    setTimeout(function(){
      $(".profile .profile-txt .contact div:nth-of-type("+i+")").removeClass("copy");
    },1000)

  })

  $(".profile .profile-txt .profile-skill .progress-area .progress").mouseover(function () { 
    $(".profile .profile-txt .profile-skill .progress-area").addClass("on");
  }) .mouseout(function(){
    $(".profile .profile-txt .profile-skill .progress-area").removeClass("on");
  })


  setInterval(function(){
    $(".profile .profile-img .plus-ani").addClass("active")
    setTimeout(function(){
      $(".profile .profile-img .plus-ani").removeClass("active")
    },500)
    
  },1100)


  let currrent_skill_idx = 0;
  $(".profile .profile-txt .profile-skill .progress-area .progress").mouseover(function(){
    let skill_idx = $(this).index();
    $(".profile .profile-txt .profile-skill .progress-area").addClass("skill-desc"+(skill_idx+1));
    currrent_skill_idx = skill_idx;
  }) .mouseout(function(){
    $(".profile .profile-txt .profile-skill .progress-area").removeClass("skill-desc"+(currrent_skill_idx+1));
  })


});