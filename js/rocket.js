var timer = null;

var changeState = function (nextState){

	clearInterval(timer);
	document.body.className = "body-state" + nextState;

	if(nextState == 2){
		var countdown = 10;
		document.getElementById("countdown").innerHTML = countdown;
		countdown--;
		timer = setInterval(function (){
			if(countdown <= 0){
				changeState(3);
			}

			document.getElementById("countdown").innerHTML = countdown;
			countdown--;

		}, 600);
	}
	else if (nextState == 3) {
		var outcome = Math.round(Math.random()*10);
		console.log("outcome: ", outcome);
		var timeout = setTimeout(function(){
			if(outcome <= 5){ //failure
			changeState(5);
			}
			else{ //success
				changeState(4);
			}
		}, 2000);
	}
}