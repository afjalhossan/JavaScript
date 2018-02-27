(function(){
	'use strict';

	var array1 =['one','two','three','four'];


	console.log(array1.length);
	array1.push('five');
	array1.unshift('zero');

	array1.pop();
	array1.shift();

	array1.splice(0,4,'a','b','c','d');
	array1.reverse();
	array1.sort();
	console.log(array1);


	var num =[100,29,10,39,30];

	num.sort(function(a,b){
		if(a>b){
			return 0;
		} else if(a==b){
			return -1;
		}else{
			return 1
		}
	});
	console.log(num);

	console.log(array1.join(''));

	var arr2 =['afjal','simon','shakil','raju'];

	arr2.forEach(function(value,index){
		console.log("This is value : "+ value+" and Its index is : "+index);
	});

	console.log(arr2.every(function(value){
		return typeof(value ==='string');
	}));

	arr2.push('five',3,6,90,87);
	console.log(arr2);

	console.log(arr2.filter(function(value){
		return typeof value !== 'number' ;
	}));

	console.log(array1);

	console.log(array1.map(function(value){
		return value.toUpperCase();
	}));
	console.log(array1);

	var sum =[1,2,3,4];
	console.log(sum.reduce(function(a,b){
		return a + b;
	},0))







}())