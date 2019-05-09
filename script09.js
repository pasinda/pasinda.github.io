window.onload = initAll;

function initAll() {
	document.getElementById("IPLincoln").onclick = presidentsquotes; //Add my initials to all the names
	document.getElementById("IPKennedy").onclick = presidentsquotes; 
	document.getElementById("IPNixon").onclick = presidentsquotes;
    document.getElementById("IPWashington").onclick = presidentsquotes;
	document.getElementById("IPAdams").onclick = presidentsquotes;
	document.getElementById("IPJefferson").onclick = presidentsquotes;
    document.getElementById("IPMadison").onclick = presidentsquotes;
	document.getElementById("IPQuincy").onclick = presidentsquotes;
	document.getElementById("IPJackson").onclick = presidentsquotes;
    document.getElementById("IPVan_Buren").onclick = presidentsquotes;
	document.getElementById("IPHarrison").onclick = presidentsquotes;
	document.getElementById("IPTyler").onclick = presidentsquotes;
    document.getElementById("IPPolk").onclick = presidentsquotes;
    document.getElementById("IPTaylor").onclick = presidentsquotes;
	document.getElementById("IPPierce").onclick = presidentsquotes;
	document.getElementById("IPBuchanan").onclick = presidentsquotes;
    document.getElementById("IPJohnson").onclick = presidentsquotes;
    document.getElementById("IPGrant").onclick = presidentsquotes;
	document.getElementById("IPRutherford").onclick = presidentsquotes;
	document.getElementById("IPGarfield").onclick = presidentsquotes;
    
    
}
/*Change the function name ftom saySomthing to presidentsquotes*/                                                
function presidentsquotes() {
    
    //used switch statements except for last five conditions
	switch(this.id) {
		case "IPLincoln":
			alert("Four score and seven years ago...");
			break;
		case "IPKennedy":
			alert("Ask not what your country can do for you...");
			break;
		case "IPNixon":
			alert("I am not a crook!");
			break;
        case "IPWashington":
			alert("Associate yourself with men of good quality if you esteem your own reputation; for 'tis better to be alone than in bad company....");
			break;
		case "IPAdams":
			alert("To be good, and to do good, is all we have to do....");
			break;
		case "IPJefferson":
			alert("Nothing can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude..");
			break;
        case "IPMadison":
			alert("The circulation of confidence is better than the circulation of money...");
			break;
		case "IPQuincy":
			alert("If your actions inspire others to dream more, learn more, do more and become more, you are a leader...");
			break;
		case "IPJackson":
			alert("Any man worth his salt will stick up for what he believes right, but it takes a slightly better man to acknowledge instantly and without reservation that he is in error");
			break;
        case "IPVan_Buren":
			alert("It is easier to do a job right than to explain why you didn't....");
			break;
		case "IPHarrison":
			alert("Times change, and we change with them...");
			break;
		case "IPTyler":
			alert("I can never consent to being dictated to");
			break;
        case "IPPolk":
			alert("The gratitude ... should be commensurate with the boundless blessings which we enjoy...");
			break;
		case "IPTaylor":
			alert("I have always done my duty. I am ready to die. My only regret is for the friends I leave behind me...");
			break;
		case "IPPierce":
			alert("While men inhabiting different parts of this vast continent cannot be expected to hold the same opinions, they can unite in a common objective and sustain common principles");
			break;
        default:
    }
    //used if starement from this onwards
        
    if ((this.id)=="IPBuchanan")
        {
			alert("The test of leadership is not to put greatness into humanity, but to elicit it, for the greatness is already there...");
        }
    else if ((this.id)=="IPJohnson")
        
		{
			alert("If you always support the correct principles then you will never get the wrong results!");
        }
    
    else if ((this.id)=="IPGrant")
        {
			alert("Four score and seven years agoIn every battle there comes a time when both sides consider themselves beaten, then he who continues the attack wins...");
        }
    
    else if ((this.id)=="IPRutherford")
        {
			alert("Every expert was once a beginner..");
        }
      	         
    else if ((this.id)=="IPGarfield")
    {
    alert("Right reason is stronger than force..");
			
    
    }

}


