//console.log(this) //window Object

function sayHi(){
	console.log(this);
}

//sayHi();

var userMsg ={
	sayHi :function(){
		console.log(this);
	}
}


//console.log(userMsg);
var showMsg =userMsg.sayHi;
console.log(showMsg());