(function(){
	'use strict';

var option = {
	timeout :0
}

function currentPosition(position){
	console.log(position);
}
function positionError(posError){
	console.log("Opps ! time out Error");
}
function changePosition(position){
	console.log("Your new position "+position.coords.latitude+', '+position.coords.longitude +" and your max range is "+position.coords.accuracy);
}

	if(navigator.geolocation){
	navigator.geolocation.getCurrentPosition(currentPosition,positionError,option);
	//navigator.geolocation.watchPosition(changePosition,positionError);
	}else{
			console.log("THis browser dont support geolocation services");
	}






}());