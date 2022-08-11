// div we are creating alingment
var div=document.createElement("div");
div.style.textAlign="center";

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.style.color="blue";
button.setAttribute("type","button");
button.addEventListener("click",foo);
button.innerHTML="search"

let active= document.createElement("div");
active.setAttribute("id","action");
active.style.color="red"

let recovered= document.createElement("div");
recovered.setAttribute("id","recovered");
active.style.color="green"

let deaths= document.createElement("div");
deaths.setAttribute("id","deaths");
active.style.color="blue";


div.append(input,button,active,recovered,deaths);
document.body.append(div);

 async function foo(){
    let res=document.getElementById("country").value;
    var url= `https://api.covid19api.com/dayone/country/${res}`;
    let result=await fetch(url);
    let result1=await result.json();
    var index=result1.length-1;
    

    // console.log(result1[index].active);
    // console.log(result1[index].recovered);
    // console.log(result1[index].death);
    
    active.innerHTML=`total Active cases:${result1[index].Active}`;
    recovered.innerHTML=`total recovered cases:${result1[index].Recovered}`;
    deaths.innerHTML=`total death cases:${result1[index].Deaths}`;

    
    

}
