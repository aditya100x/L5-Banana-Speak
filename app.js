var btntrn=document.querySelector("#click-action");
var txtinput=document.querySelector("#txt-input");
var outputdiv=document.querySelector("#output");
var serverurl="https://api.funtranslations.com/translate/minion.json";

function transURL(text){
      return serverurl + "?" + "text=" + text ;
}
function errorhandler(error){
      console.log("some error occured ", error);
      alert("Something went wrong, Server is down");
}

function clickhandler(){
      var inputtext=txtinput.value ;
      fetch(transURL(inputtext)) 
            .then(response => response.json())
            .then(json => {
                  var translatedtext=json.contents.translated;
                  outputdiv.innerText=translatedtext;
            })
            .catch(errorhandler);
      
};

btntrn.addEventListener("click",clickhandler);

