var count=1;
function removeAds(){
	console.log("Removing ads");
	ads = document.getElementsByClassName('ego_column');
	if(ads == null){
		setTimeout(arguments.callee,count * 500);
		count++;
		if (count > 1000000) 
			count = 100;
		return;
	}	
	for(var i=0;i<ads.length;i++){
		var ad = ads[i];
		if(ad.className == 'ego_column'){
			var baap = ads[i].parentNode; //baap means Father in Marathi
			baap.removeChild(ads[i]);	//Baap to Child : You are banished forever, GET LOST YOU BASTARD
		}
	}
	document.addEventListener("DOMNodeInserted",removeAgain , false) //I have my eyes on you. If you DARE come back, I will KICK YOUR ASS again.
}

function removeAgain(){
	if(typeof timeoutID == "number") {
		window.clearTimeout(timeoutID);
		timeoutID = null;
	}
	timeoutID = window.setTimeout(removeAds , 700);
}

removeAds(); 
