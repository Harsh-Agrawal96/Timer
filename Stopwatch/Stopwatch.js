const start = document.querySelector('.st');
const sto = document.querySelector('.break');
const reset = document.querySelector('.re');
const time = document.querySelector('.clock > p');

sto.classList.add('disable');

var starttime;
var currenttime;
var realtime = 0;
var intervaldata = undefined;

function showcontent(data){
    let milli = Math.floor((data%1000)/10);
    let sec = Math.floor( (data% (1000*60))/(1000) );
    let min = Math.floor( (data% (1000*60*60))/(1000*60));
    let hour = Math.floor( data/(1000*60*60) );

    time.innerHTML = ( (hour>9 ? hour : "0"+hour) + ":" + ( min>9 ? min : "0" + min ) + ":" + ( sec>9 ? sec : "0" + sec) + "." + ( milli>9 ? milli : "0" + milli));
}

function startclock() {
    starttime = Date.now() - realtime;
    intervaldata = setInterval(()=>{
        currenttime = Date.now();
        realtime = currenttime - starttime;
        showcontent(realtime)
        console.log(realtime);

    }, 10);
    start.classList.add('disable');
    sto.classList.remove('disable');
}

function stopclock(){
    clearInterval(intervaldata);
    start.classList.remove('disable');
    sto.classList.add('disable');
}

function restartclock(){
    clearInterval(intervaldata);
    time.innerHTML = "00:00:00";
    realtime = 0;
    start.classList.remove('disable');
    sto.classList.add('disable');
}

start.addEventListener('click',startclock);
sto.addEventListener('click',stopclock);
reset.addEventListener('click',restartclock);