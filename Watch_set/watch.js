// make default behaviour
document.querySelector('.runtime').classList.add('hide');
document.querySelector('.timerbtn').classList.add('hide');


var val1 = 0;
var val2 = 0;
var val3 = 0;

const part1 = document.querySelectorAll('.s1').length;
const part2 = document.querySelectorAll('.s2').length;
const part3 = document.querySelectorAll('.s3').length;

for( let i = 0;i<part1;i++){
    document.querySelectorAll('.s1')[i].addEventListener('click',() => {
        document.querySelector('.f1s > p').classList.add('whileclick');
        document.querySelector('.f2s > p').classList.remove('whileclick');
        document.querySelector('.f3s > p').classList.remove('whileclick');
    })
}
document.querySelectorAll('.s1')[0].addEventListener('click',() => {
    val1++;
    if( val1 == 100){
        val1 = 0;
    }
    document.querySelector('.f1s > p').textContent = ( val1 > 9) ? val1 : "0" + val1;
})
document.querySelectorAll('.s1')[1].addEventListener('click',() => {
    val1--;
    if( val1 == -1){
        val1 = 99;
    }
    document.querySelector('.f1s > p').textContent = ( val1 > 9) ? val1 : "0" + val1;
})
for( let i = 0;i<part2 ;i++){
    document.querySelectorAll('.s2')[i].addEventListener('click',() => {
        document.querySelector('.f2s > p').classList.add('whileclick');
        document.querySelector('.f1s > p').classList.remove('whileclick');
        document.querySelector('.f3s > p').classList.remove('whileclick');
    })
}
document.querySelectorAll('.s2')[0].addEventListener('click',() => {
    val2++;
    if( val2 == 100){
        val2 = 0;
    }
    document.querySelector('.f2s > p').textContent = ( val2 > 9) ?val2 : "0" + val2;
})
document.querySelectorAll('.s2')[1].addEventListener('click',() => {
    val2--;
    if( val2 == -1){
        val2 = 99;
    }
    document.querySelector('.f2s > p').textContent = ( val2 > 9) ?val2 : "0" + val2;
})
for( let i = 0;i<part3;i++){
    document.querySelectorAll('.s3')[i].addEventListener('click',() => {
        document.querySelector('.f3s > p').classList.add('whileclick');
        document.querySelector('.f1s > p').classList.remove('whileclick');
        document.querySelector('.f2s > p').classList.remove('whileclick');
    })
}
document.querySelectorAll('.s3')[0].addEventListener('click',() => {
    val3++;
    if( val3 == 100){
        val3 = 0;
    }
    document.querySelector('.f3s > p').textContent = ( val3 > 9) ?val3 : "0" + val3;
})
document.querySelectorAll('.s3')[1].addEventListener('click',() => {
    val3--;
    if( val3 == -1){
        val3 = 99;
    }
    document.querySelector('.f3s > p').textContent = ( val3 > 9) ?val3 : "0" + val3;
})



// btn of start the timer

document.querySelector('.enter > button').addEventListener('click',function(){
    document.querySelector('.settimer').classList.add('hide');
    document.querySelector('.enter').classList.add('hide');
    document.querySelector('.runtime').classList.remove('hide');
    document.querySelector('.timerbtn').classList.remove('hide');
    initialtime = val1*60*60*1000 + val2*60*1000 + val3*1000;
    startclock();
})



// now runing timer

const reset = document.querySelectorAll('.timerbtn > button')[2];
const start = document.querySelectorAll('.timerbtn > button')[0];
const sto = document.querySelectorAll('.timerbtn > button')[1];

// default behaviour
start.classList.add('untouched');
sto.classList.add('untouched');
reset.classList.add('untouched');


// code while runing timer
var starttime;
var realtime = 0;
var intervaldata = undefined;
var initialtime;

function showcontent(data){
    if( data >= 0 && data <= 9){
        console.log( "no");
        document.querySelector('.runtime > p').textContent = "00:00:00";
        start.classList.add('untouched');
        sto.classList.add('untouched');
    }
    let milli = Math.floor((data%1000)/10);
    let sec = Math.floor( (data% (1000*60))/(1000) );
    let min = Math.floor( (data% (1000*60*60))/(1000*60));
    let hour = Math.floor( data/(1000*60*60) );

    document.querySelector('.runtime > p').textContent = ( (hour>9 ? hour : "0"+hour) + ":" + ( min>9 ? min : "0" + min ) + ":" + ( sec>9 ? sec : "0" + sec) + "." + ( milli>9 ? milli : "0" + milli));
}

function startclock() {
    starttime = Date.now() - realtime;
    intervaldata = setInterval(()=>{
        let currenttime = Date.now();
        realtime = currenttime - starttime;
        let initial = initialtime - realtime;
        showcontent(initial);

    }, 10);
    start.classList.add('untouched');
    reset.classList.remove('untouched');
    sto.classList.remove('untouched');
}

function stopclock(){
    clearInterval(intervaldata);
    start.classList.remove('untouched');
    sto.classList.add('untouched');

}

function restartclock(){
    clearInterval(intervaldata);
    document.querySelector('.settimer').classList.remove('hide');
    document.querySelector('.enter').classList.remove('hide');
    document.querySelector('.runtime').classList.add('hide');
    document.querySelector('.timerbtn').classList.add('hide');
    start.classList.add('untouched');
    sto.classList.add('untouched');
    reset.classList.add('untouched');
    realtime = 0;
}

start.addEventListener('click',function(){
    startclock();
});
sto.addEventListener('click',function(){
    stopclock();
});
reset.addEventListener('click',function(){
    restartclock();
});