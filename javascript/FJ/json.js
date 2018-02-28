(function(){
    'use strict';
    var person ={
        name :"Brad",
        age :35,
        address:{
            street :"5 main st",
            city :"boston"
        },
        children :["brianna","nicholas"]
    }

    var people =[
        {
            name :"afjal",
            age :24
        },
        {
            name:"raju",
            age :25
        },
        {
            name :"Talha",
            age :36
        }
    ]
    // person =JSON.stringify(person);
    // person =JSON.parse(person);
    //console.log(person.address.street)

    var output ='';
    for(var i =0;i<people.length;i++){
        output += '<li>'+people[i].name+'</li>'
    }
    document.getElementById('people').innerHTML = output;


}());