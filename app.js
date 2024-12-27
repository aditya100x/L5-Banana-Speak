// Select button element using querySelector()
var btntrn = document.querySelector("#click-action");

var txtinput = document.querySelector("#txt-input");

var outputdiv = document.querySelector("#output");

function clickevent() {
      outputdiv.innerText ="aeieee  " + txtinput.value;
};

// what will happen everytime User click the button , so we use addEventListener 
btntrn.addEventListener("click", clickevent);
