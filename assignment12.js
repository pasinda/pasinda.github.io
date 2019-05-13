window.addEventListener("load",showTheTime,false);
 
function showTheTime() {
	var now = new Date();              // ge the current date and time using built in Date object
    myMove()
	document.getElementById("showTime").innerHTML = showTheHours(now.getHours()) + showZeroFilled(now.getMinutes()) + showZeroFilled(now.getSeconds()) + showAmPm();
	setTimeout(showTheTime,1000);     // get the seconds , miutes and hourse from calling assosicated methodes from the date object
    
    var sec = new Date.getSeconds        
    var elem = document.getElementById("myAnimation");   // calling the element on page for display the animation
  
  }
	
	function showTheHours(theHour) {	
		if (show24Hour() || (theHour > 0 && theHour < 13)) { // show the hourse if it not 0 or if it called 24 hourse then the same 
			return theHour;                              // or if 24 not called then check the hour is less thank the 13 and send
		}
		if (theHour == 0) {                               // if the our is 0 ("noon or mid night ") then show 12
			return 12;
		}
		return theHour-12;                                //if the show24hour not called send the hours by as 12 hours time format
	}
	
	function showZeroFilled(inValue) {                     // check the values for single digit value, in minutes and seconds
		if (inValue > 9) {
			return ":" + inValue;                 // if the vluses are not single digit (or grater than 9) send the value as it is
		}
		return ":0" + inValue;                        //if the values are single digit then add 0 for the dispaly to make it perfect
	}

	function show24Hour() {
		return (document.getElementById("show24").checked); // check whether user called for 24 hours time, then call the same funstion name to show
	}                                                           // the values in 24 hour time
	
	function showAmPm() {
		if (show24Hour()) {                    // if is 24 time request then show it as it is 
			return "";
		}
		if (now.getHours() < 12) {            // if the Date.getHours is less than the 12 then send AM
			return " AM";
		}
		return " PM";                        //   if the Date.getHours is grater than the 12 then send PM
	}


function myMove() {
  var elem1 = document.getElementById("animate");   // initiate the moving object
  var pos = 0;
  var id = setInterval(frame,100); // call the function frame in each 100 milisecond 
  function frame() {
    if (pos == 300) {        // if the possition variable (pos) reach 300 clear the interval and make the possition 0 to start again
      clearInterval(id);
      pos=0;
      myMove();            // start the function again
    } else {
        
      pos=pos+.01;        // increase the possition by 0.01
     
     elem1.style.left = pos + "px"; // move the animation
    }
  }
}

