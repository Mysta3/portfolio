var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var updateClock = function (){
var timeOfEvent = document.getElementById("timeEvent");
var lolcat = document.getElementById("lolcat");
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg"; 
if (time == partyTime){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME...";
} else if (time == lunchTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeupTime) {
    messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Good morning!";
} else if (time > evening) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good Evening!";
} else {
    messageText = "Good afternoon!";
}

timeOfEvent.innerText = messageText;
lolcat.src = image;

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds =  "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};
showCurrentTime();
};

updateClock();

var oneSecond = 1000;

setInterval(updateClock, oneSecond);



var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");
var message;
var partyEvent = function() {
   
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      // text in the button should read "Party Over"
	   message = "Party Over";
	   partyTimeButton.innerText = message;
	   partyTimeButton.style.background = "#0A8DAB";
      // color of the button should be "#0A8DAB" (bonus!)
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      // text in the button should read "PARTY TIME!"
	   message = "Party TIME!";
	   partyTimeButton.innerText = message;
	   partyTimeButton.style.background = "#222";
      // color of the button should be "#222" (bonus!)
   }
};

partyTimeButton.addEventListener("click", partyEvent);

var wakeUpTime;
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function(){
	wakeUpTime = wakeUpTimeSelector.value;
};

var lunchTime;
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var lunchEvent = function(){
	lunchTime = lunchTimeSelector.value; 
};

var napTime;
var napTimeSelector = document.getElementById("napTimeSelector");
var napTimeEvent = function(){
	napTime = napTimeSelector.value;
};