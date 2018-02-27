(function(){
	'use strict';

	if(true ===false){
		console.log('This is from truthy value');
	}else{
		console.log('This is from falsy value');
	}

	var afjal =['alam','small'];

	(afjal.lenght >= 1)? console.log(afjal[0]):console.log(afjal[1]);
 
	// switch
 
	var switcher ='Three';
 
	switch (switcher) {
		case 'one' :
			console.log("one");
			break;
		case 'two':
			console.log("two");
			break;
		case 'Three' :
			console.log("Three");
	};
	
	 //for loop
	 
	var anArray =['afjal','raju','tanvir'];

	for(var x=0,y=anArray.length; x<y;x+=1){
		console.log(anArray[x]);
	}
	//for in loop
	var anObject ={
		prop1 :"property one",
		prop2 :"property two",
		prop3 :"property three"
	}
	for(var prop in anObject){
		console.log(anObject[prop]);
	}
	//forEach
	var numbers =[33,36,65,4,6];
	numbers.reverse();
	for(var i=0;i<numbers.length;i++){

		if(i===6){
			continue;
		}
		console.log(numbers[i]);
		if(i===33){
			break;
		}
	}

	console.log("I have broke the loop");

	//if statement

	var var1 =4;
	var var2 =4;
	if(var1 ==var2 && var1 != var2){
		console.log('this is true')
	}else{
		console.log('This is not true');
	}

	//switch statement

	var fruits ='lichi';
	switch(fruits){
		case "banana":
			console.log("I hate banana");
			break;
		case "apple":
			console.log("I love apple");
			break;
		case "orange":
			console.log("Orange is ok");
			break;
		default:
			console.log("Other has no problem");
			break;
	}
//Object

	var person ={
		firstName : 'Brad',
		lastName :'Traversy',
		age		 :34,
		children :['Nichole','Medila'],
		address :{
			street:'55, something st',
			city :'Boston',
			state :'MA'
		},
		fullName :function(){
			return this.firstName+" "+this.lastName+" "+"& age is "+this.age;
		}
	}
	console.log(person.fullName());

//Object Contructtor
	
	var apple = new Object();

	apple.color ='red';
	apple.shape ='round';

	apple.discribe =function(){
		return 'An apple color is the '+this.color+" & is the shape "+this.shape
	}
	console.log(apple.color);


//for in loop

	var anOject ={
		prob1 :'problem one',
		prob2:'problem two',
		prob3:'problem three'
	}

	for(var prop in anObject){
		if(anObject.hasOwnProperty){
			console.log(anObject[prop]);
		}
		
	}
//while loop

	var limit = 0;
	while(limit < 5){
		if(limit ===3){
			break;
		}
		console.log(limit+=1);
	}
//Do while loop
	var name ='Samia Rahman';
	 do{
	 	console.log(name);
	 	break;
	 }while(name ==name.length)








	
	
}());