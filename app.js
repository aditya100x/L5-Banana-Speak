// // Select button element using querySelector()
// var btntrn = document.querySelector("#click-action");

// var txtinput = document.querySelector("#txt-input");

// var outputdiv = document.querySelector("#output");

// function clickevent() {
//       outputdiv.innerText ="aeieee  " + txtinput.value;
// };

// // what will happen everytime User click the button , so we use addEventListener 
// btntrn.addEventListener("click", clickevent);


var btntrn=document.querySelector("#click-action");
var txtinput=document.querySelector("#txt-input");
var outputdiv=document.querySelector("#output");

function transURL(text){
      return "https://api.funtranslations.com/translate/minion.json" + "?" + "text=" + text ;
}

function clickhandler(){
      var inputtext=txtinput.value ;
      fetch(transURL(text)) {
            .then(response => response.json);
            .then(json => console.log(json));
      }

}

btntrn.addEventListener("click",clickhandler)