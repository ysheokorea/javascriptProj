const daysEl =document.querySelector('#days'); 
const hoursEL =document.querySelector('#hours');
const minsEl =document.querySelector('#mins'); 
const secondsEl =document.querySelector('#seconds');  


const newYears = '1 Jan 2022';

function countDown(){
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalseconds = (newYearDate - currentDate)/1000;

    const days = Math.floor(totalseconds / 3600 /24 );
    const hours = Math.floor(totalseconds / 3600)%24;
    const mins = Math.floor(totalseconds/60)%60;
    const seconds = Math.floor(totalseconds)%60;

    console.log(days, hours, mins, seconds);

    daysEl.innerHTML = days;
    hoursEL.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

//Initial Call
countDown();

setInterval(countDown, 1000);
