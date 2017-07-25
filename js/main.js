$(document).ready(function(){
    var eventsArray = ['Prototype','Startup Street','Beg Borrow Startup','Ideathon'];
    var i=0;
    setInterval(function () {
      i = (i+1)%4;
      $('.timer p:first').fadeOut(function() {
        $(this).text(eventsArray[i]);
        $(this).fadeIn();
      });
    }, 2000);
    $(".type-out").typed({
       strings: ["S.H.E.I.L.D.", "Startups Hub for Entrepreneurs and an Initiative for Leadership Development"],
        typeSpeed: 50,
        backSpeed: 50,
        showCursor: true,
        cursorChar:"|"
    });
    $(".nav-abt").click(function(){
      $('html,body').animate({
          scrollTop: $(".about").offset().top
      },1000);
   });
    $(".nav-event").click(function(){
      $('html,body').animate({
          scrollTop: $(".events").offset().top
      },1000);
   });
  $(".nav-team").click(function(){
      $('html,body').animate({
          scrollTop: $(".board").offset().top
      },1000);
   });
    $(".nav-contact").click(function(){
      $('html,body').animate({
          scrollTop: $(".contact").offset().top
      },1000);
   });
    $(window).scroll(function(){
        var d= $(this).scrollTop();
        $(".type-out").css({
            'transform':'translate(0px,'+d/2+'%)'
        });
        if(d > $('.help-window').offset().top - $(window).height()){
            var op=(d-$(".help-window").offset().top +400)/(d/7);
            $(".red-tint").css({'opacity' : op});
        }
        if(d>580)
            {
               $(".navbar").css({'opacity':'1','transition':'0.3s ease','background-color':'#333'});
            }

        else{
               $(".navbar").css({'transition':'0.3s ease','background-color':'transparent'});
        }
            });
    var d = new Date();
    var countDownDate = new Date("Sept 23, "+ d.getFullYear() +" 10:00:00").getTime();
    var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
    });
