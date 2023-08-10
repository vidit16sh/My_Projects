let string = "";
let a = document.querySelectorAll("button");
let b = Array.from(a).forEach((button) => {
    button.addEventListener("click", (c) => { 
    if (c.target.innerHTML =="AC") {
        string = "";
    } 
    else if (c.target.innerHTML =="=") {
      string = eval(string);
    } 
    else if (c.target.innerHTML =="Del") {
    string = string.slice(0,string.length - 1)
    }
    else {string = string + c.target.innerHTML;} 
    document.querySelector("input").value = string;
    })
})