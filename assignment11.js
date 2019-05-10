window.onload = IPnewWinLinks;      // Change function names by adding my initials as IP
                                    //loading event initialize the steps required foe the popup windows

function IPnewWinLinks() {
	for (var i=0; i<document.links.length; i++) {   /* as long as “i” is less than the number of elements in the array, the statements inside the                                             for loop are executed) and an Updation statement (that adds 1 to the variable “i”). */
		if (document.links[i].className == "newWin") {
			document.links[i].onclick = IPnewWindow; // the instructions to load the pop up windows
		}                                            // allow you to open multiple windows from multiple links 
	}
}

function IPnewWindow() {
	var catWindow = window.open(this.href,"catWin","width=100,height=100");/* define the pop up window size. all the pop-up windows has the same                                                                        window size when openning.this say waht the new window look like */
	catWindow.focus();   // make sure the new pop-up window got the focus instead of the main site or the link
	return false;
}

window.addEventListener("load",initPage,false);

function initPage() {
	var now = new Date();
	var expireDate = new Date();
	expireDate.setMonth(expireDate.getMonth()+6);
   
	var hitCt = parseInt(cookieVal("pageHit"));
	hitCt++;
	
	var lastVisit = cookieVal("pageVisit");
	if (lastVisit == 0) {
		lastVisit = "";
	}
	
	document.cookie = "pageHit=" + hitCt + ";expires=" + expireDate.toGMTString();
	document.cookie = "pageVisit=" + now + ";expires=" + expireDate.toGMTString();
	
	var outMsg = "You have visited this page " + hitCt + " times.";
	if (lastVisit != "") {
		outMsg += "<br>Your last visit was " + lastVisit;
	}
	document.getElementById("cookieData").innerHTML = outMsg;
}

function cookieVal(cookieName) {
	var thisCookie = document.cookie.split("; ");
	
	for (var i=0; i<thisCookie.length; i++) {
		if (cookieName == thisCookie[i].split("=")[0]) {
			return thisCookie[i].split("=")[1];
		}
	}
	return 0;
}
