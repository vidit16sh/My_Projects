let hr = document.getElementById('hrs') 
let mins = document.getElementById('min') 
let secs = document.getElementById('sec') 
 
function display(){ 
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();  
    console.log(hh)
    console.log(mm)
    console.log(ss)  
    let hrrt = hh*30 + mm/2 
    let mmrt = mm*6 
    let ssrt = ss*6 
    hr.style.transform = `rotate(${hrrt}deg)` 
    mins.style.transform = `rotate(${mmrt}deg)` 
    secs.style.transform = `rotate(${ssrt}deg)` 
} 
setInterval(display, 1000) 
