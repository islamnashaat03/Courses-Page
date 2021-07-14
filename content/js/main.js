
$(document).ready(function(){
    // START COLLAPSE 

  if (window.matchMedia('(max-width:767px)').matches){
    var coll = document.querySelectorAll(".collapsible");
    var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].onclick = function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
        content.classList.toggle('active')
      // if (content.style.display === "flex") {
      //   content.style.display = "none";
      // } else {
      //   content.style.display = "flex";
      // }
    };
  };
  // for (var i = 0 ; i < coll.length ; i++){
  //   this.classList.add('open');
  // }
  }
  
    // END COLLPASE 

    // START HOME PAGE 
if ($('.home-page').length > 0) {

  // START TIMER 
  var countDownDate = new Date("Jul 12, 2021 12:00:00").getTime(),
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
  document.getElementById('timer').style.display = 'none';
  document.getElementById("end").innerHTML = "Sorry The Offer End!!";
  // document.getElementById("timerEnds").remove();
  }
  }, 1000);
    // END TIMER 
    // START COUNTER 
  $(window).on('scroll', function () {
    let scrollTop = Math.ceil(Number($(window).scrollTop()));
    let pageY = pageYOffset
    console.log("scrollTopscrollTopscrollTopscrollTop", scrollTop, pageY)
      if (window.pageYOffset > 2600 ){

    const counters = document.querySelectorAll(".course-published__count");
    const speed = 2000;

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
  })
    // END COUNTER 

if ((window.matchMedia('(max-width:768px)').matches)){
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
            items:1,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:false
        }
    }
})
}
    // POST request using fetch()
fetch("https://jsonplaceholder.typicode.com/posts", {
	
    // Adding method type
	method: "POST",
	
  	// Adding body or contents to send
	body: JSON.stringify({
		title: "foo",
		body: "bar",
		userId: 1
	}),
	
	// Adding headers to the request
	headers: {
		"Content-type": "application/json; charset=UTF-8"
	}
})

// Converting to JSON
.then(response => response.json())

// Displaying results to console
.then(json => console.log(json));


};



  // END HOME PAGE 

  // ====================================================================================
  // ====================================================================================

    // START LISTING PAGE 
    if ($('.listing-page').length > 0){
      
    }
    // END LISTING PAGE 

});

// document.onclick = rollOn();
// function rollOn(){
//   var ser = document.getElementById('searchDiv');
//   if (ser.style.display == 'none'){
//       ser.style.display = 'block';
//   } else{
//       ser.style.display = 'none'
//     }
// };

// var elmnt = document.getElementsByClassName("search-btn");
  function myFunction(){
    var lala = document.getElementById('searchDiv')
      lala.classList.add('active')
  }

  





