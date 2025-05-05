var a=document.getElementById("num1");
var b=document.getElementById("num2");
var r=document.getElementById("result");
function add()
{
   
   let c =Number(a.value)+Number(b.value);
   r.innerText=c;
}
function sub(){
   
   let d =Number(a.value)-Number(b.value);
   r.innerText=d;
}
function mul(){
    let e=(Number(a.value)) *( Number(b.value));
    r.innerText=e;
}
function div(){
    let f=Number(a.value)/Number(b.value);
    r.innerText=f;
}
