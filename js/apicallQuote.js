'use strict';

const connectToApiQuote = async () => {
    const quote = document.querySelector('.random-quote');
    const author = document.querySelector('.author')
      
    const response= await fetch(`https://api.quotable.io/random`)
    const quoteResult = await response.json();

  quote.innerText = quoteResult.content;
  author.innerText = quoteResult.author;
 
}
connectToApiQuote()