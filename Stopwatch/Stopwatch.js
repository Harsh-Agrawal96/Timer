const start = document.querySelector('.st');
const sto = document.querySelector('.break');
const reset = document.querySelector('.re');
const time = document.querySelector('.clock > p');

sto.classList.add('disable');

let starttime = 0;
let currenttime = 0;
let realtime = 0;
let intervaldata = undefined;

function showcontent(data){
    let milli = Math.floor((data%1000)/10);
    let sec = Math.floor( (data% (1000*60))/(1000) );
    let min = Math.floor( (data% (1000*60*60))/(1000*60));
    let hour = Math.floor( data/(1000*60*60) );

    return ( (hour>9 ? hour : "0"+hour) + ":" + ( min>9 ? min : "0" + min ) + ":" + ( sec>9 ? sec : "0" + sec) + "." + ( milli>9 ? milli : "0" + milli));
}

function startclock() {
    starttime = Date.now() - realtime;
    intervaldata = setInterval(()=>{
        currenttime = Date.now();
        realtime = currenttime - starttime;
        time.innerHTML = showcontent(realtime);
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


// below code is for the showing lapse on click flag type button ( which will we add soon )
var clickcount = 0;
var newlapseleft;
var newlapsemid;
var newlapseright;

let last_time = 0;

const lapse = document.querySelector('.lap');

lapse.addEventListener('click',function() {
    console.log("je");
    if( clickcount == 0){
        clickcount = 1;
        create_first_lapse();
    }else{
        clickcount++;
        add_new_lapse();
    }
})

function add_new_lapse(){

    const leftinitial = document.createElement('div');// make divs for lapse
    const midinitial = document.createElement('div');
    const rightinitial = document.createElement('div');

    const leftdata = document.createElement('p');// make paragraph for lapse
    leftdata.textContent = clickcount;
    const middata = document.createElement('p');
    let data = realtime - last_time;
    last_time = realtime;
    middata.textContent = showcontent(data);
    const rightdata = document.createElement('p');
    rightdata.textContent = showcontent(realtime);

    leftinitial.appendChild(leftdata); // attach para to div 
    midinitial.appendChild(middata);
    rightinitial.appendChild(rightdata);

    newlapseleft.appendChild(leftinitial);// attach div to main div which content all lapse
    newlapsemid.appendChild(midinitial);
    newlapseright.appendChild(rightinitial);
}

function create_first_lapse(){
    const main = document.createElement('div');

    const left = document.createElement('div');
    const mid = document.createElement('div');
    const right = document.createElement('div');

    const lefthead = document.createElement('div');
    const midhead = document.createElement('div');
    const righthead = document.createElement('div');

    const leftheadcontent = document.createElement('p'); // make paragraph for head contents
    leftheadcontent.textContent = "Laps";
    const midheadcontent = document.createElement('p');
    midheadcontent.textContent = "Time";
    const rightheadcontent = document.createElement('p');
    rightheadcontent.textContent = "Total";

    lefthead.appendChild(leftheadcontent);
    midhead.appendChild(midheadcontent);
    righthead.appendChild(rightheadcontent);

    newlapseleft = document.createElement('div');
    newlapsemid = document.createElement('div');
    newlapseright = document.createElement('div');


//  code for first lapse
    const leftinitial = document.createElement('div');// make first divs for lapse
    const midinitial = document.createElement('div');
    const rightinitial = document.createElement('div');

    const leftdata = document.createElement('p'); // make paragraph for first lapse
    leftdata.textContent = clickcount;
    const middata = document.createElement('p');
    let data = realtime - last_time;
    last_time = realtime;
    middata.textContent = showcontent(data);
    const rightdata = document.createElement('p');
    rightdata.textContent = showcontent(realtime);

    leftinitial.appendChild(leftdata); // attach para to div
    midinitial.appendChild(middata);
    rightinitial.appendChild(rightdata);

// maked divs for first lapse
    newlapseleft.appendChild(leftinitial);  // attach div to main div which content all lapse
    newlapsemid.appendChild(midinitial);
    newlapseright.appendChild(rightinitial);

    left.appendChild(lefthead);
    left.appendChild(newlapseleft);

    mid.appendChild(midhead);
    mid.appendChild(newlapsemid);

    right.appendChild(righthead);
    right.appendChild(newlapseright);

    main.appendChild(left);
    main.appendChild(mid);
    main.appendChild(right);

//  adding styles for this 
    main.classList.add('base');

    left.classList.add('inner1');
    mid.classList.add('inner1');
    right.classList.add('inner1');

    lefthead.classList.add('head');
    midhead.classList.add('head');
    righthead.classList.add('head');

    newlapseleft.classList.add('content');
    newlapsemid.classList.add('content');
    newlapseright.classList.add('content');
// added all css

// now add it to main body
    const divforappend = document.querySelector('.full')
    divforappend.appendChild(main);

}

