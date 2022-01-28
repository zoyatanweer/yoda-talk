const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");
const outputDiv= document.querySelector("#output");
const serverURL = "https://api.funtranslations.com/translate/yoda.json";

const getTranslationURL = (text) => serverURL + "?" + "text=" + text

const errorHandler = (error) => {
   console.log("error occured",error);
   alert("something wrong with the server, try again next time");
}

function clickHandler(){
   const inputText= txtInput.value    /**taking input**/
   fetch(getTranslationURL(inputText))
      .then (response => response.json())
      .then (json => {
         const translatedText=json.contents.translated;
         outputDiv.innerText = translatedText;
      })
      .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler)
