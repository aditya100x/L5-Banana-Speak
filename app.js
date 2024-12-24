var btntrn = document.querySelector("#click-action");

var txtinput=document.querySelector("#txt-input");


function clickevent() {
      console.log(" Clicked! ");
      console.log("input", txtinput.value);
};

btntrn.addEventListener("click", clickevent);

  