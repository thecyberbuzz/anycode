const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minE1 = document.getElementById('min');
const secE1 = document.getElementById('sec');

const new1 = '1 feb 2024';

function countdown(){
    const new1Date= new Date(new1);
    const currDate = new Date();

    const totalSeconds = (new1Date-currDate)/1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const min = Math.floor(totalSeconds/60)%60;
    const sec = Math.floor(totalSeconds)%60;
    
    daysE1.innerHTML = days;
    hoursE1.innerHTML = formatTime(hours);
    minE1.innerHTML = formatTime(min);
    secE1.innerHTML = formatTime(sec);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);