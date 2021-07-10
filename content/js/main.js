$(document).ready(function(){

    // START HOME PAGE 
// if (window.location.pathname == '/index.html') {

  // START TIMER 
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
  // END TIMER 
  
  // START COUNTER 
  window.onscroll =  function(){
  "use strict";
  var calllc = pageYOffset;
  console.log(calllc);

  if (window.pageYOffset > 2800 ){

    const counters = document.querySelectorAll(".course-published__count");
    const speed = 200;

    counters.forEach((counter) => {
      const updateCount = () => {
    
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = (target / speed);
  
        if (count < target) {
          counter.innerText = Math.ceil(count + increment) ;
          setTimeout(updateCount, 1);
          
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }
}
// };


  // END COUNTER 
  // END HOME PAGE 

  // ====================================================================================
  // ====================================================================================

    // START LISTING PAGE 
    if (window.location.pathname == '/listing-page.html'){
      if(window.matchMedia('(max-width:767px)').matches){
        $('.owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          loop:false,
          responsiveClass:true,
          
          responsive:{
              0:{
                  items:1,
                  nav:true
              },
              600:{
                  items:3,
                  nav:false
              },
              1000:{
                  items:5,
                  nav:true,
                  loop:false
              }
          }
      })
      }
    }
    // END LISTING PAGE 

});