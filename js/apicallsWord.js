'use strict';

const connectToApi = async () => {
    const section = document.querySelector('.random-word');
      
    const response= await fetch('https://api.adviceslip.com/advice')
       const wordResult= await response.json();
       const words=wordResult.slip.advice.split(" ");
       const number= Math.floor(words.length*Math.random());
       const word= words[number].replace(/[ ,.]/g, "");
       const oneWord= word.split(/[ ,.]+/);

       section.innerText = oneWord;
}
connectToApi()