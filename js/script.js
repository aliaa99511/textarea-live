


var inputt=document.querySelectorAll("input");
var textar=document.querySelector("textarea")

var para1=document.getElementById("para1");
var para2=document.getElementById("para2");
var para3=document.getElementById("para3");


var i;
for (i = 0; i < inputt.length; i++) {
    inputt[i].addEventListener("input",function(){

        para1.innerHTML=inputt[0].value;
        para2.innerHTML=inputt[1].value;
    })
}


textar.addEventListener("input",function(){
    
    para3.innerHTML=textar.value;
})