(function(){
	'use strict';

	//JavaScript object constructor

	function person(first,last,age,eyeClr){
		this.firstName =first;
		this.lastName =last;
		this.age =age;
		this.eye =eyeClr;
	}

	var myFather = new person('Jon','kabir','55','blue');

	document.getElementById("afjal").innerHTML =
	"My father is " + myFather.age + "."; 

	var myObject ={};
	var myArray =[];
	console.log(myObject.constructor);
	console.log(myArray.constructor);
	myObject.afjal ="Afjal Hossan";
	console.log(myObject.hasOwnProperty('afjal'));
	console.log(myObject.propertyIsEnumerable('contructor'));
	console.log(myObject.propertyIsEnumerable('afjal'));




	//concept is not clear............
}())