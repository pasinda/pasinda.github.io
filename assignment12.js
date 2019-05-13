window.addEventListener("load",showTheTime,false);
 




function showTheTime() {
	var now = new Date();
    myMove()
	document.getElementById("showTime").innerHTML = showTheHours(now.getHours()) + showZeroFilled(now.getMinutes()) + showZeroFilled(now.getSeconds()) + showAmPm();
	setTimeout(showTheTime,1000);
    
    var sec = new Date.getSeconds
    var elem = document.getElementById("myAnimation");   
  
  }
	
	function showTheHours(theHour) {	
		if (show24Hour() || (theHour > 0 && theHour < 13)) {
			return theHour;
		}
		if (theHour == 0) {
			return 12;
		}
		return theHour-12;
	}
	
	function showZeroFilled(inValue) {
		if (inValue > 9) {
			return ":" + inValue;
		}
		return ":0" + inValue;
	}

	function show24Hour() {
		return (document.getElementById("show24").checked);
	}
	
	function showAmPm() {
		if (show24Hour()) {
			return "";
		}
		if (now.getHours() < 12) {
			return " AM";
		}
		return " PM";
	}


function myMove() {
  var elem1 = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
      pos=0;
      myMove();
    } else {
        
      pos++; 
     // elem.style.top = pos + "px"; 
     elem1.style.left = pos + "px"; 
    }
  }
}

