$(document).ready(function(){
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
    $(window).scroll(function(){
        var d= $(this).scrollTop();
        if(d>580)
            {
               $(".navbar").css({'opacity':'1','transition':'0.3s ease','background-color':'#333'});              
            }
        
        else{
               $(".navbar").css({'transition':'0.3s ease','background-color':'transparent'}); 
            
        }
            });
    $(".board-box").click(function(){
        
    });
    
});