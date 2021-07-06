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

const counters = document.querySelectorAll(".course-published__count");
const speed = 300;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = Math.ceil(+counter.getAttribute("data-target"));
    const count =Math.ceil(+counter.innerText);
    const increment = Math.ceil(target / speed);
    console.log(increment);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});




