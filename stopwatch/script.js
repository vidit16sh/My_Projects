let display = document.getElementById("displayw");
let startb = document.getElementById("b1");
let stopb = document.getElementById("b2");
let resetb = document.getElementById("b3");
let switchb = document.getElementById("switch");
console.log(display.innerHTML)
let min = 0;
let secs = 0;
let msecs = 0;
let hh = 0;
let mm = 0;
let ss = 0;
let timerid = null;
function stopwatch() {
    msecs++;
    if (msecs == 100) {
        msecs = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            min++;
        }
    }
    let msstring = msecs < 10 ? `0${msecs}` : msecs;
    let sstring = secs < 10 ? `0${secs}` : secs;
    let mstring = min < 10 ? `0${min}` : min;
    display.innerHTML = `${mstring}:${sstring}:${msstring}`;
}

startb.addEventListener('click', () => {    
    if(timerid != null){
        clearInterval(timerid)
        }
    timerid = setInterval(stopwatch, 10);
})
stopb.addEventListener('click', () => {
    clearInterval(timerid)
})
resetb.addEventListener('click', () => {
    clearInterval(timerid);
    display.innerHTML = `00:00:00`;
    min = 0;
    secs = 0;
    msecs = 0;
})

