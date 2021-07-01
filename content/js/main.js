
var countDownDate = new Date("Jul 14, 2021 12:00:00").getTime(),

myfunc = setInterval(function() {

var now = new Date().getTime(),
timeleft = countDownDate - now,
days = Math.floor(timeleft / (1000 * 60 * 60 * 24)),
hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)),
seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + " : " + " "
    document.getElementById("hours").innerHTML = hours + " : "
    document.getElementById("mins").innerHTML = minutes + " : "
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

$(function(){
    "use strict"
    // $(".course-published__count").countTo();
    $(".course-published__count").countTo('toggle');
});

