var daysEl = document.querySelector('#days');
var hoursEl = document.querySelector('#hours');
var minsEl = document.querySelector('#mins');
var secondsEl = document.querySelector('#seconds');
var timer;


function setTimer(form){
    clearInterval(timer);
    var totalSeconds = form.tempInput.value;

    function countDown(){
        const countEnd = new Date(totalSeconds);
        const currentTime = new Date();
        const count = (countEnd-currentTime)/1000;

        const daysValue = Math.floor(count/3600/24);
        var hoursValue = Math.floor(count/3600)%24;
        var minsValue  = Math.floor(count/60)%60;
        var secondsValue = Math.floor(count)%60;
        
        
        daysEl.innerHTML = daysValue;
        hoursEl.innerHTML = timeFormat(hoursValue);
        minsEl.innerHTML = timeFormat(minsValue);
        secondsEl.innerHTML = timeFormat(secondsValue);
    }
    timer = setInterval(countDown , 1000);
    
}
//initial call
function timeFormat(time){
    return time<10 ? `0${time}` : time;
}

