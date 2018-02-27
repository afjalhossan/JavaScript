var object2 ={
	p1 : false,
	p2 :'True',
	p3 : 93
};

function getColor(color){
	var things ={
		red :"A red color",
		blue :"A Blue color"
	}
	return things[color] || "Not Found" ;
};

var person ={
	name :['Bob','Smith'],
	age :32,
	gender :'Male',
	interest :['Music','skiing'],
	bio:function(){
		alert(this.name[0]+' '+this.name[1]+' is '+this.age+' years old. He like '+this.interest[0]+' and '+this.interest[1]+'.');
	},
	greeting :function(){
		alert ('Hi ! I\'m '+this.name[0]+'.');
	},


};

function myFunc(){
	return true;
}

var otherFunc =function(otherFunc){
	console.log("Yahoo !");
}

console.log(newVar);

var newVar = "How are you ?";

console.log(newVar);

(function newFunc(){
	console.log('Invoke Automaticaly');
}());

!function anotherFunc(){
	console.log("Invoke Automatically Too");
}();


var world =100;

!function lfunc(){
	var local ="local value variable";

	console.log(world);
	console.log(local);
}();

(function(){
	'use strict';
	console.log(this);
	
	var obj = {
		p1 : "Hi ! I am there",
		method :function(){
			return this.p1;
		}
	}
	console.log(obj.method());

	var name ='Beau';
	var greet ="He said \" Hi!\"";
	console.log(greet);

	var firstName = 'Baue';
	console.log(firstName[firstName.length - 1]);

	var stringOne ="Freecodecamp is the best place to learn ";
	var stringTwo ="front-end and backend development.";

	console.log(stringOne.charAt(4));
	console.log(stringOne.charCodeAt(4));
	console.log(stringOne.concat(stringTwo));
	console.log(stringOne.endsWith("learn "));
	console.log(String.fromCharCode(99));
	console.log(stringTwo.replace(/end/g, "END"));
	//search
	console.log(stringTwo.search("end"));
	//slice
	console.log(stringTwo.slice(2,4));

	function addSquire(a,b){
		function square(x){
			return x*x;
		}
		return square(a)+square(b);
	}
a = addSquire(2,3);



















}());