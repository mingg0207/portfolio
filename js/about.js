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


  skill("#html", 0.85);
  skill("#css", 0.8);
  skill("#js", 0.7);
  skill("#ps", 0.9);
  skill("#ai", 0.9);


  var clipboard = new ClipboardJS('.e-mail, .kakao');
  
    clipboard.on('success', function(e) {
        console.log(e);
    });
  
    clipboard.on('error', function(e) {
        console.log(e);
    });

  $(".profile .profile-txt .contact div").click(function(){
    let i = $(".profile .profile-txt .contact div").index(this);
    console.log(i)
    $(".profile .profile-txt .contact div:nth-of-type("+(i+1)+")").addClass("copy");

    setTimeout(function(){
      $(".profile .profile-txt .contact div:nth-of-type("+(i+1)+")").removeClass("copy");
    },1000)

  })

  $(".profile .profile-txt .profile-skill .progress-area .progress").mouseover(function () { 
    $(".profile .profile-txt .profile-skill .progress-area").addClass("on");
  }) .mouseout(function(){
    $(".profile .profile-txt .profile-skill .progress-area").removeClass("on");
  })

});