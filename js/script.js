/**
 * @author Vinit Shahdeo <vinitshahdeo@gmail.com>
 */
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);


// $(document).on('click', function(){
//     document.getElementById("my_audio").play();
//     console.log('Kalyanathinu varane');
// });








(function () {
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    birthdayDate = "04/21/2024",
    birthdayTime = "12:00:00"; // Specify the time in HH:MM:SS format
    birthday = birthdayDate + " " + birthdayTime;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
    birthday = dayMonth + nextYear;
    }
    //end
    const countDown = new Date(birthday).getTime(),
    x = setInterval(function() {
    const now = new Date().getTime(),
    distance = countDown - now;
    document.getElementById("days").innerText = Math.floor(distance / (day)),
    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
    //do something later when date is reached
    if (distance < 0) {
    document.getElementById("headline").innerText = "It's my birthday!";
    document.getElementById("countdown").style.display = "none";
    document.getElementById("content").style.display = "block";
    clearInterval(x);
    }
    //seconds
    }, 0)
    }());









// // Set the date we're counting down to
// var countDownDate = new Date("April 24, 2025 12:30:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//     // Get todays date and time
//     var now = new Date().getTime();
    
//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;
    
//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//     // Output the result in an element with id="demo"
//     document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    
//     // If the count down is over, write some text 
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
//     }
// }, 1000);

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: 24th Apr, 2021!', styles);

console.log('%cYour presence is requested!%c\n\nRegards: Arun Gopinath', styles1, styles2);

console.log(
    `%cKalyanathinu varane!\n\n`,
    'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
)


