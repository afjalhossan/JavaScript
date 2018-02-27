(function(){
	'use strict';

	//Call method....................

	var newFunc = function newFunc(arg1,arg2,arg3){
		return arg1+arg2;
	}
	console.log(newFunc.length);

	var person= {
		'name' :"Afjal Hossan",
		'prfession':"web developer"
	};

	function hello(user1){
		console.log(user1+' My name is '+this.name +' and My profession is '+this.prfession);

	}
	hello.call(person,'Hi');

	 function introduce(us1,us2){
	 	return console.log('Hi '+us1+' , '+us2 +" and "+this.name+' ,do you feel good as a '+this.prfession);
	 }

	function declare(mode,object,argu){
		mode.apply(object,argu);
	}

	declare(hello,person,['Fahad']);
	declare(introduce,person,['Fahad','Bahad']);

	//bind method..........

	function addToCart(fee,price){
		if(!this.total){
			this.total =0
		}
		console.log('your fee is : '+fee);
		this.total +=price +=fee || 0 ;
		return this.name +', you bill is $'+this.total;
	}

	var afjalCart =addToCart.bind(person,3);

	console.log(afjalCart(50));
	console.log(afjalCart(100));
	console.log(afjalCart(120));

	var bob ={
		name :"raju"
	}

	var rajuCart =addToCart.bind(bob,10)

	console.log(rajuCart(50));
	console.log(rajuCart(100));
	console.log(rajuCart(120));
	 

	 /*this tutorial I learn about some method of function.Generally threr mostly three kind of method are
	 use for function , one is call(), second-typed() and last is bind() method; */











	}())
