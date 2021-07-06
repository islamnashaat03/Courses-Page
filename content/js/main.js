//  START TIMER IN HOME PAGE 
var countDownDate = new Date("Jul 14, 2021 12:00:00").getTime(),

myfunc = setInterval(function() {

var now = new Date().getTime(),
timeleft = countDownDate - now,
days = Math.floor(timeleft / (1000 * 60 * 60 * 24)),
hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)),
seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML =  days 
    document.getElementById("hours").innerHTML =  hours 
    document.getElementById("mins").innerHTML = minutes 
    document.getElementById("secs").innerHTML = seconds 

if (timeleft < 0) {
clearInterval(myfunc);
document.getElementById("days").innerHTML = ""
document.getElementById("hours").innerHTML = "" 
document.getElementById("mins").innerHTML = ""
document.getElementById("secs").innerHTML = ""
document.getElementById("end").innerHTML = "TIME UP!!";
}
}, 1000);
// END TIMER IN HOME PAGE 
// START COUNTER IN HOME PAGE 
// $(function(){
//     "use strict"
//     $(".course-published__count").countTo();
    
// });
function countUp() {
    $('.course-published__count').each(function() {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 4000,
          easing: 'swing',
          step: function(now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    }
    $(function() {
      "user strict";
      var bAnimate = true;
      $(".course-published__count").css ("opacity", "0.0");
      
      $(window).scroll(function() {
        console.log("scroll top=" + $(this).scrollTop());
        console.log("div offset top=" + $("div").offset().top);
        var scrolling = $(this).scrollTop(),
          divoffset = $(".course-published__count").offset().top,
          screenBottom = scrolling + $(window).height(), 
          elemBottom = divoffset + $(".course-published__count").outerHeight (); // 
        if (screenBottom > elemBottom) {
          if (bAnimate) {
             $(".course-published__count").css ("opacity", "1.0");
            countUp();
            bAnimate = false;
          }
        }
      })
    })


