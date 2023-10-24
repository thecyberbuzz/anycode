let increase=document.getElementById('increament_btn');
let decrease=document.getElementById('decreament_btn');

let int = document.getElementById('counter');
var integer=78;
increase.addEventListener('click',function(){
    integer+=1;
    int.innerHTML=integer;
})
decrease.addEventListener('click',function(){
    integer-=1;
    int.innerHTML=integer;
})