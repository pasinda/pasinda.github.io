window.onload = initAll;

function initAll() {
	document.getElementById("Lincoln").onclick = presidentsquotes;
	document.getElementById("Kennedy").onclick = presidentsquotes;
	document.getElementById("Nixon").onclick = presidentsquotes;
    document.getElementById("Washington").onclick = presidentsquotes;
	document.getElementById("Adams").onclick = presidentsquotes;
	document.getElementById("Jefferson").onclick = presidentsquotes;
    document.getElementById("Madison").onclick = presidentsquotes;
	document.getElementById("Quincy").onclick = presidentsquotes;
	document.getElementById("Jackson").onclick = presidentsquotes;
    document.getElementById("Van_Buren").onclick = presidentsquotes;
	document.getElementById("Harrison").onclick = presidentsquotes;
	document.getElementById("Tyler").onclick = presidentsquotes;
    document.getElementById("Polk").onclick = presidentsquotes;
    document.getElementById("Taylor").onclick = presidentsquotes;
	document.getElementById("Pierce").onclick = presidentsquotes;
	document.getElementById("Buchanan").onclick = presidentsquotes;
    document.getElementById("Johnson").onclick = presidentsquotes;
    document.getElementById("Grant").onclick = presidentsquotes;
	document.getElementById("Rutherford").onclick = presidentsquotes;
	document.getElementById("Garfield").onclick = presidentsquotes;
    
    
}

function presidentsquotes() {
    
    //used switch statements except for last five conditions
	switch(this.id) {
		case "Lincoln":
			alert("Four score and seven years ago...");
			break;
		case "Kennedy":
			alert("Ask not what your country can do for you...");
			break;
		case "Nixon":
			alert("I am not a crook!");
			break;
        case "Washington":
			alert("Associate yourself with men of good quality if you esteem your own reputation; for 'tis better to be alone than in bad company....");
			break;
		case "Adams":
			alert("To be good, and to do good, is all we have to do....");
			break;
		case "Jefferson":
			alert("Nothing can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude..");
			break;
        case "Madison":
			alert("The circulation of confidence is better than the circulation of money...");
			break;
		case "Quincy":
			alert("If your actions inspire others to dream more, learn more, do more and become more, you are a leader...");
			break;
		case "Jackson":
			alert("Any man worth his salt will stick up for what he believes right, but it takes a slightly better man to acknowledge instantly and without reservation that he is in error");
			break;
        case "Van_Buren":
			alert("It is easier to do a job right than to explain why you didn't....");
			break;
		case "Harrison":
			alert("Times change, and we change with them...");
			break;
		case "Tyler":
			alert("I can never consent to being dictated to");
			break;
        case "Polk":
			alert("The gratitude ... should be commensurate with the boundless blessings which we enjoy...");
			break;
		case "Taylor":
			alert("I have always done my duty. I am ready to die. My only regret is for the friends I leave behind me...");
			break;
		case "Pierce":
			alert("While men inhabiting different parts of this vast continent cannot be expected to hold the same opinions, they can unite in a common objective and sustain common principles");
			break;
        default:
    }
        
    if ((this.id)=="Buchanan")
        {
			alert("The test of leadership is not to put greatness into humanity, but to elicit it, for the greatness is already there...");
        }
    else if ((this.id)=="Johnson")
        
		{
			alert("If you always support the correct principles then you will never get the wrong results!");
        }
    
    else if ((this.id)=="Grant")
        {
			alert("Four score and seven years agoIn every battle there comes a time when both sides consider themselves beaten, then he who continues the attack wins...");
        }
    
    else if ((this.id)=="Rutherford")
        {
			alert("Every expert was once a beginner..");
        }
      	         
    else if ((this.id)=="Garfield")
    {
    alert("Right reason is stronger than force..");
			
    
    }

}


