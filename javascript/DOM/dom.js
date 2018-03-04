



// var div1 =document.getElementById('div1');

// var unicycle =document.getElementsByClassName('unicycle');
// var unicycle =document.getElementsByClassName('unicycle');

// var paragraph =document.getElementsByTagName("p");
// var querySelect =document.querySelector('.unicycle');
// var qeuryAll =document.querySelectorAll('.unicycle,#div2');

// var text ="<h1>Hello world</h1>";


// for(var i=0;i<unicycle.length; i++){
//     unicycle[i].innnerHTML = text;
// }

// var line =document.getElementById('line');
// var attribute =document.getElementById('attribute');


// line.style.color ='red';
// attribute.style.boxShadow ="2px 2px 5px 1px blue";
// line.style.cssText ="color:blue;border:1px solid black";
// attribute.setAttribute("style","color:red")
// //console.log(line.style);
// //console.log(window.getComputedStyle(line));

// function changeColor(obj){
//     obj.style.color ="peru";
// }

// document.getElementById("myBtn").onclick = changeBgClr;
// function changeBgClr(){
//     document.querySelector('body').style.background ='MediumOrchid';
// }
// document.getElementById("myBtn").ondblclick = removeClor;

// function removeClor(){
//     document.querySelector('body').style.background ='white';
// }

// function rmletterFrmH1(){
//     var h1 =document.querySelector('h1');
//     h1.textContent =h1.textContent.slice(0,-1);
// }
// function mOver(obj){
//     obj.innerHTML ="Get off me !"
// }
// function mOut(x){
//     x.style.cssText ="color:red;font-size:30px;background:MediumOrchid";
// }



// //Lecture  Three

// //Syntex: element.addEventListenner(event,function,useCapture)

// var myP =document.getElementById('myP');
// var myDiv =document.getElementById('myDiv');
// var myP2 =document.getElementById('myP2');
// var myDiv2 =document.getElementById('myDiv2');

// myDiv.addEventListener("click", function(){
//     myDiv.style.background ="lightblue";
//     myP.style.color="red"

// });




// var para =document.createElement("p");
// var node =document.createTextNode("Up above the world so high");
// para.appendChild(node);

// var parent =document.getElementById('div1');

// parent.appendChild(para);

// var para2 =document.createElement("p");
// para2.innerHTML ="Like a diamond in the sky";

// var child =document.getElementById('p1');
// //parent.insertBefore(para2,child);


// var para3 =document.createElement("p");
// para3.innerHTML ="When the blazing sun is gone";

// //parent.replaceChild(para3,child);

// parent.removeChild(para3);

function myMove(){
    var elem =document.getElementById("myAnimation");
    var pos = 0;
    var id =setInterval(frame,10);
    function frame(){
        if(pos==350){
            clearInterval(id);
            elem.style.backgroundColor = 'red';
        }else{
            pos++;
            elem.style.top = pos+'px';
            elem.style.left = pos+'px';
        }
    }
}


var item =document.getElementById('item');
item.animate([

        {transform :'scale(1)',background:'red',opacity:1,offset:0},
        {transform:'scale(.5) rotate(270deg)',background:'blue',opacity:.5,offset:.2},
        {transform:'scale(1) rotate(0deg)',background:'red',opacity:1,offset:1}
    ],
        {
        duration:2000,
        iterations:Infinity,
        easing: 'ease-in-out',
        direction:'alternate',
        fill:'forwards',
        delay:10
});

//Window Object :Size,open,close,move

window.addEventListener('resize',update);
    var x=window.document.getElementById('demo');
    update();

function update(){
    x.innerHTML ="Borwer inner window widht :"+window.innerWidth+"px ,Height:"+window.innerHeight +"px.";
}
//var newWindowObj =window.open("","newWindow","menubar =true,location=true,resizeable =false,scrollbars=false,width=400,height=300,top =200,left=200");
function move(){
    newWindowObj.moveBy(50,0);
    newWindowObj.focus();
}

//Pop up

//alert(I am ok !)

// if(confirm("Press Ok !")){
//     console.log("You press ok")
// }else{
//     console.log("You press cancell")
// }

var person =prompt("Please enter your name :","Beau Carnes");

if(person ==null || person == ""){
    console.log('user cancelled the prompt');
}else{
    console.log("Hello  "+person+ " ! How are you today?");
}


alert(window.history.length);