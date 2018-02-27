(function(){
	'use strict';

//setTimeout()

function log(msg){
	console.log(msg);
}
setTimeout(function(){
	log("Hellow ! there ?")
},2000);

//setInterval

function timebreak(){
	
	console.log("Example of time break");
	count++;
	if(count===5){
		clearInterval(breakID)
	}
}

var breakID =setInterval(timebreak,1000),count =0;

}());