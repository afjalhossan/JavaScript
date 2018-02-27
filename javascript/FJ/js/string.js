(function(){
	'use strict';

	//working with string......
	var testString ="string text";
	console.log(testString.length);
	console.log(testString.split(' ')); //String to array convert.
	console.log(testString.indexOf('x'));
	console.log(testString.lastIndexOf('t',2)); //last index of someting

	console.log(testString.toUpperCase()) // convert to upprercase
	console.log(testString.toLowerCase()) //convert to lowercase

	console.log(testString.substring(5))
	console.log(testString.substring(2,5));

	console.log(testString.slice(2,-2));

	//working with array.........

	 
}())