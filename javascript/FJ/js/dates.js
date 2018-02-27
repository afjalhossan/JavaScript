(function(){
	'use strict';

var newDate = new Date();
console.log(newDate);
console.log(typeof(newDate));
var bob =new Date('january,1,23');
console.log(bob);

var anotherDate=new Date('2002,1,23');
console.log(anotherDate);

console.log(bob.getDate());
console.log(bob.getDay());
console.log(bob.getMonth());
console.log(bob.getFullYear());

console.log(bob.getUTCDate());
console.log(bob.getUTCDay());
console.log(bob.getUTCMonth());
console.log(bob.getUTCFullYear());

console.log(bob.toString());
console.log(bob.toUTCString());
console.log(bob.toDateString());
console.log(bob.toISOString());
console.log(bob.toTimeString());
console.log(bob.toLocaleString());


}());