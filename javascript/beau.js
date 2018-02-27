(function(){
	'use strict';

	//function
	function square(num){
		return (num * num);
	}
	console.log(square(5));

	//Variable Scope

	var someVar ="Hat";
	function myFunc(){
		someVar= "Cap";
		console.log(someVar);
	}

	myFunc();

	//nesting function

	function addSquares(a,b){
		function square(x){
			return (x*x);
		}
		return square(a)+square(b);
	}

	console.log(addSquares(2,3));

	//hoisting

	(function() {
	  var foo = 1;
	  

	  console.log(foo + " " + bar + " " + baz);

	  var bar = 2;
	  var baz = 3;
	})();

	var afjal ="afjal";

	console.log(afjal);

	var afjal ="afjal";//declare undefined;

	//comparison operator

	var isFCC =true;

	if(isFCC){
		console.log("This is fine");
	}else{
		console.log("This is horrible");
	}

	var age = 28;

	if(age < 20){
		console.log("You already metured");
	} else if(age < 30){
		console.log("Your are near metured");
	}else if(age <15){
		console.log("you are able to go meturity")
	}else{
		console.log("May be you are baby");
	}

	//abstract equality va strict equality


	console.log(3=='3') //true
	console.log(3==='3') //false

	console.log("This is a string" ==new String("This is a string"));  // true
	console.log("This is a string" ===new String("This is a string")); // false


	//Null vs Undefined


	console.log(typeof null) //object
	console.log(typeof undefined) // undefined
	console.log(null === undefined) //false
	console.log(null == undefined) // true
	console.log(null === null) // true
	console.log(null == null) // true
	console.log(!null) // true
	console.log(1 + null) // 1
	console.log(1 + undefined) // Nan

	//logical operator && short circuit evaluaton

	var test =false;
	var isTrue =function(){
		console.log('Test is True');
	}
	var isFalse =function(){
		console.log('Test is False');
	};

	//(test && isTrue());
	(test || isFalse());

	function theSameOld(name){  //.........................................nclr
		name = name || 'Bar';
		console.log("My Best friend's name is " +name);
	}
	theSameOld();
	theSameOld('afjal');

	//Ternary Operator

	var age =19;

	console.log((age <=20) ? "Your are adult" : "Your are not. !");

	var stop;

	age <18 ?(
		console.log("Ok, you can go..."),
		stop = false
		) :(
			console.log("Sorry, you are mucth too young!"),
			stop =true
		);

		var firstCheck =true,
			secondCheck =false,
			access =firstCheck ? "Access allow" : secondCheck?"Access denied":"Access Granted";

			console.log(access);
//Array Basics
	
	var sandwitch =["peanut butter","jelly","bread"];
	var team =[["Bulls",23],["White Sox"],45];
	console.log(sandwitch[1]);
	console.log(sandwitch[0][1]);

	sandwitch[1] ="Bananass";
	console.log(sandwitch);


//Common Array Method

	var arr =["a","b","c"];

	arr.push("d")
	console.log(arr);
	arr.pop();
	console.log(arr);

	var arr2 =["g","h"];

	console.log(arr.concat(arr2));

	console.log(arr.join(" ! "));
	console.log(arr.reverse());

	console.log(arr.shift());
	console.log(arr.unshift("c"));
	console.log(arr);
	console.log(arr.slice(1,3));
	arr.push("i");
	arr.push("g");
	console.log(arr);
	console.log(arr.sort());

	console.log(arr.splice(2,2,"Js Nuggets"));
	console.log(arr);


	//Copy Array (Deep and shadow)

	var original =["afjal","raju","faisal"];

	var copy1 = original.slice(0);
	var copy2 =[...original];
	console.log(copy1,copy2);

//Profile Lookup.............Fcc
	

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
  for(var i= 0;i< contacts.length;i++){
    if(contacts[i].firstName ===firstName){
      if(contacts[i].hasOwnProperty(prop)){
        return contacts[i][prop];
      }else{
        return "No such property";
      }
    }
  }
  return "No such contact";
// Only change code above this line
}

// Change these values to test your function
console.log(lookUpProfile("Kristian", "likes"));

	// Deep copy .............................................(nclr)

	/*var deepArray =[["freeCodeCamp"]];
	var shallowCopy = deepArray.slice(0);
	var deepCopy =JSON.parse(JSON.stringify(deepCopy));
	deepCopy[0].push(" is great");
	console.log(deepArray[0], deepCopy[0]);
*/

	//Random numbers & parseInt...

	//console.log(Math.floor(Math.random()*20));

	function randomRange(max,min){
		return Math.floor(Math.random()*(max-min+1))+min;
	}

	console.log(randomRange(45,10));

	console.log(parseInt("007"));

//For loops
	var ourArray=[];

	for(var i=0;i<5;i++){
		if(i>2) break;
		ourArray.push(i);
	}
	console.log(ourArray);

	var arr =[20,39,10,6,9];

	for(var i=0;i<arr.length;i++){
		console.log(arr[i]);
	}

	var arrn =[[1,2],[3,4],[5,6]];
	for(var i=0;i<arrn.length;i++){
		for (var n=0;n<arrn[i].length;n++){
			console.log(arrn[i][n]);
		}
	}
//While & Do while loop

	var n = 0;
	while(n < 5){
		n++;
		if(n===3) continue;
		console.log("n = "+n);
	}
	var i =5;
	do{
		i++;
		console.log("i = "+i);
	}while( i <5);
//For in & For of

	let person ={fname:"Beau ",lname:"Carners ",arms:2};

	let text ="";

	for(let x in person){
		text +=person[x];
		console.log(x);
	}
	console.log(text);


//Array iteration : 8 Method

	//forEach

	[4,2,3].forEach(function(item,index){
		console.log(item,index);
	})

	//map
	const three =[1,2,3];
	const double =three.map(function(item){
		return item *2;
	})

	console.log(double);


	//filter

	const ints =[1,3,4];
	const evens =ints.filter(function(item){
		return item % 2 ===0;
	});
	console.log(evens);

	//reduce

	const sum =[1,2,3].reduce(function(result,item){
		return result + item;
	},0);
	console.log(sum);


	//some
	const hasNegativeNum =[1,2,3,-1,4].some(function(item){
		return item <0;
	});
	console.log(hasNegativeNum);

	//every
	 const allPositiveNumbers =[1,2,3,-4].every(function(item){
	 	return item <0;
	 })
	 console.log(allPositiveNumbers);


	 var myCar = new Object();//.......................nclr

	 myCar["Do I like ?"] ="I hate my car";

	 function showProps(obj,objName){
	 	var result ="";
	 	for(var i in obj){
	 		if(obj.hasOwnProperty(i)){
	 			result += objName +" . "+i+" = "+obj[i]+"\n";
	 		}
	 	}
	 	return result;
	 }
	var animal ={
		type:"Invertebrates",
		displayType :function(){
			console.log(this.type);
		}
	}

	var animal1 =Object.create(animal);
		animal1.displayType();
	var fish =Object.create(animal);
		fish.type=("Fishes");
		fish.displayType();


//Accessing and modifying Nested Object

	var ourStorage ={
		"desk" : {
			"drawer" :"stapler"
		},
		"cabinet":{
			"top drawer":{
				"folder1" :"a file",
				"folder2":"secrets"
			},
			"bottom drawer":"soda"
		}
	};
	console.log(ourStorage.cabinet["top drawer"].folder1);
	console.log(ourStorage.desk.drawer);

//Generate an array of all Object keys
	console.log(Object.keys(ourStorage));


	//closures

	function makeFunc(){
		var name ="JS Nuggets";
		function displayName(){
			console.log(name);
		}
		return displayName;
	}
	var myFunc =makeFunc();
	myFunc();

var myJson ={
	"name" :{
		"first" :"Afjal",
		"last"	:"Hossan"
	},
	"age" :33,
	"skill" :["Juggling","coding","walking"],
	"married" :false,
	"superpower" :null
}

//stringify method.......

var stringifeid =JSON.stringify(myJson);
console.log(stringifeid);



//This.........

//console.log(this.document === document);
//console.log(this ===  window);
//this.a = 37;
//Sconsole.log(window.a);


function f1(){
	return this;
}
console.log(f1() === window);

function add(c,d){
	return this.a+this.b+c+d;
}

var o={a:1,b:2};
console.log(add.call(o,7,6));
console.log(add.apply(o,[10,13]));



var o ={
	prop :32,
	f:function(){
		return this.prop;
	}
};

console.log(o.f());

var o ={prop :23}
function independent(){
	return this.prop;
}
o.f =independent;
console.log(o.f());

// Notification.requestPermission().then(function(result){
// 	alert('this is alert');
// });

function notifyMe(){
	if(!("Notification" in window)){
		alert("This brower does not support system notifications");
	}
	else if(Notification.permission === "Granted"){
		notify();
	}
	else if(Notification.permission !=='denied'){
		Notification.requestPermission(function(permission){
			if(permission==="granted"){
				notify();
			}
		});
	}

	function notify(){
		
		var notification =new Notification('Title of Notification',{
			icon :'http://carnes.cc/jsnuggets_avatar.jpg',
			body:"Hey ! You are on notice ",
		});
		notification.onClick =function(){
			window.open("hppt://facebook.com");
		};setTimeout(notification.close.bind(notification),3000); 

	}

}

//notifyMe();

//IIFE-immediately Invoked Function Express
var  a =2;

(function(){
	var a =3;
	console.log(a);
});
console.log(a);

let  b =4;

{
	let b =5;
	console.log(b);
}
console.log(b);
//"use strict".............

function myFuction(){
	"use strict";
	y =3.14;
}





















})();
