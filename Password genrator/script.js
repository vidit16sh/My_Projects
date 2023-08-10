let input = document.getElementById("display") 
let sld = document.getElementById("slider") 
let lower = document.getElementById("l")
let upper= document.getElementById("u")
let sp = document.getElementById("*")
let num  = document.getElementById("8")   
let sv = document.getElementById("sv") 
let output = document.getElementById("b")  
let cp = document.getElementsByTagName("i") 
sld.addEventListener("input",()=>{  
    sv.textContent = sld.value
})        
output.addEventListener("click",()=>{  
input.value = genrate_output() 
}) 
function genrate_output(){ 
let allchar=""  
let display_output=""
let lowercase = "abcdefghijklmnopqrstuvwxyz" 
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
let numbers ="1234567890" 
let sep ="!@#$%&*"   
allchar += lower.checked ? lowercase :""; 
allchar += upper.checked ? uppercase :""; 
allchar += sp.checked ? sep :""; 
allchar += num.checked ? numbers :""; 
if(allchar == "" || allchar.length==0){  
    return allchar
} 
console.log(allchar)
let i = 1 
while(i <= sld.value){  
display_output += allchar.charAt(Math.floor(Math.random()*allchar.length+1))  
i++
}     
return display_output 
} 
cp.addEventListener('click',()=>{  
    document.cp.execCommand("copy");
}) 