let uInput = document.getElementById("upperInput");
let lInput = document.getElementById("lowerInput");

let B1F = document.getElementById("B1F");
let B1S = document.getElementById("B1S");
let B1T = document.getElementById("B1T");

let B2F = document.getElementById("B2F");
let B2S = document.getElementById("B2S");
let B2T = document.getElementById("B2T");

let box1button = document.getElementById("box1button");
let box2button = document.getElementById("box2button");

let valueBox1 , valueBox2;

function convertTemperature(value, unit) {
    let floatValue = parseFloat(value.value)
    const units = {
        'Celcius': [floatValue, (floatValue * 9/5) + 32, (floatValue + 273.15) * 9/5, floatValue + 273.15],
        'Fahrenheit': [(floatValue - 32) * 5/9, floatValue, floatValue + 459.67, (floatValue + 459.67) * 5/9],
        'Romar': [(floatValue - 491.67) * 5/9, floatValue - 459.67, floatValue, floatValue * 5/9],
        'Kelvin': [floatValue - 273.15, (floatValue * 9/5) - 459.67, floatValue * 9/5, floatValue]
    };

    return units[unit]
}



// button toggling
B1F.addEventListener("click",()=>{
    let Button1Value = B1F.innerHTML;
    B1F.innerHTML = box1button.innerHTML;
    box1button.innerHTML =  Button1Value;
    InputChange1();
});
B1S.addEventListener("click",()=>{
    let Button1Value = B1S.innerHTML;
    B1S.innerHTML = box1button.innerHTML;
    box1button.innerHTML = Button1Value;
    InputChange1();
});
B1T.addEventListener("click",()=>{
    let Button1Value = B1T.innerHTML;
    B1T.innerHTML = box1button.innerHTML;
    box1button.innerHTML = Button1Value;
    InputChange1();
});

B2F.addEventListener("click",()=>{
    let Button1Value = B2F.innerHTML;
    B2F.innerHTML = box2button.innerHTML;
    box2button.innerHTML = Button1Value;
    InputChange2();
});

B2S.addEventListener("click",()=>{
    let Button1Value = B2S.innerHTML;
    B2S.innerHTML = box2button.innerHTML;
    box2button.innerHTML = Button1Value;
    InputChange2();
});

B2T.addEventListener("click",()=>{
    let Button1Value = B2T.innerHTML;
    B2T.innerHTML = box2button.innerHTML;
    box2button.innerHTML = Button1Value;
    InputChange2();
});

//oninput logic



function InputChange1(){
    if(box1button.innerHTML=="Celcius"){
        uInput.value = convertTemperature(lInput,box2button.innerHTML)[0].toFixed(4)
       
    }else if(box1button.innerHTML == "Fahrenheit"){
        uInput.value = convertTemperature(lInput,box2button.innerHTML)[1].toFixed(4)
    }else if(box1button.innerHTML == "Romar"){
        uInput.value = convertTemperature(lInput,box2button.innerHTML)[2].toFixed(4)
    }else if(box1button.innerHTML == "Kelvin"){
        uInput.value = convertTemperature(lInput,box2button.innerHTML)[3].toFixed(4)
    }

    
    if(box1button.innerHTML == box2button.innerHTML){
        let save = box1button.innerHTML
        box1button.innerHTML = box2button.innerHTML
        box2button.innerHTML = save
    }
}




function InputChange2(){
    if(box2button.innerHTML=="Celcius"){
        lInput.value = convertTemperature(uInput,box1button.innerHTML)[0].toFixed(4)
    }else if(box2button.innerHTML=="Fahrenheit"){
        lInput.value = convertTemperature(uInput,box1button.innerHTML)[1].toFixed(4)
    }else if(box2button.innerHTML=="Romar"){
        lInput.value = convertTemperature(uInput,box1button.innerHTML)[2].toFixed(4)
    }else if(box2button.innerHTML=="Kelvin"){
        lInput.value = convertTemperature(uInput,box1button.innerHTML)[3].toFixed(4)
    }

    if(box1button.innerHTML == box2button.innerHTML){
        let save = box1button.innerHTML
        box1button.innerHTML = box2button.innerHTML
        box2button.innerHTML = save
    }

}
  

  



