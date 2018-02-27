(function(){
	'use strict';

console.log(document.getElementById('heading_one'));
//console.log(document.getElementsByClassName('paragraph'));
console.log(document.getElementsByTagName('h4'));

var firstHeading = document.getElementById('heading_one');
var ptext =document.getElementsByClassName('paragraph');
var secondHeading =document.getElementById('second-heading');

//console.log(firstHeading.id);
//firstHeading.id ="changedId";
//console.log(firstHeading.id);
firstHeading.classList.add('newClassAdd');
firstHeading.classList.remove('newClassAdd');
console.log(firstHeading.className);
console.log(firstHeading.classList.contains('special'));
console.log(firstHeading.tagName);


//nclr.......................................
console.log(firstHeading.nodeName);
console.log(firstHeading.childNodes[0].nodeName);


firstHeading.innerHTML ='<span>'+firstHeading.innerHTML +'</span>';
//firstHeading.outerHTML ='<p>' +firstHeading.innerHTML +'<p>';

ptext.textContent = "I Love JavaScript";

firstHeading.setAttribute('contenteditable',true);
//firstHeading.removeAttribute('contenteditable');
console.log(firstHeading.hasAttribute('contenteditable'));


var para = document.getElementsByTagName("p");

//document.getElementById("test").innerHTML = para[0].innerHTML;

var section = document.getElementById('newSection');
console.log(section.childNodes.length);

var x,length;

for(x=0,length =section.childNodes.length; x < length;x+=1){
	if(section.childNodes[x].nodeType === 1){
		console.log('I am a '+section.childNodes[x].tagName);
	}
}
console.log(section.children);
console.log(section.childNodes[0].nodeName);
console.log(section.children[0].nodeName);
console.log(section.firstChild.nodeName);
console.log(section.firstChild.parentNode.nodeName);
console.log(section.children[0].nextSibling.nodeName);



var talha =document.getElementById('secNewHead');
var header =document.getElementsByTagName('header')[0];
/*
section.appendChild(secondHeading);
section.insertBefore(secondHeading,talha);
if(newSection.contains(secNewHead)){
	section.removeChild(secNewHead);
}

var subtitle =document.createElement("b");
subtitle.textContent ="This Bold text added by Javascript";

document.body.appendChild(subtitle);
document.body.replaceChild(subtitle,firstHeading);
*/


talha.addEventListener('click',function(){
	console.log('It\'s clicked');
});

header.addEventListener('click',function(e){
	console.log("The " +e.target.nodeName+" is click");
	e.stopPropagation();
});

document.addEventListener('click',function(e){
	console.log('something was click');
})


var anchor =document.createElement("a");
anchor.textContent ="google mama";
anchor.setAttribute('href','http://google.com.bd');

document.body.appendChild(anchor);

anchor.addEventListener('click',function(e){
	e.preventDefault();
	console.log('navigation prevented');
});

function me(){
	console.log('Mouse has intersed');
}

header.addEventListener('mouseenter', me);
header.removeEventListener('mouseenter', me);














}());