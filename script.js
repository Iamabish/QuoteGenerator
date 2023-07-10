const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";



async function getQuote(){

    try {
        btnEl.innerText = "Loading...";
        btnEl.disabled = true;
        const data = await fetch(apiURL);
        const response = await data.json();
        const quote = response.content;
        const author = response.author;
        quoteEl.innerText = quote;
        authorEl.innerText = "~ " + author;
        console.log(response);
        btnEl.innerText = "Get a quote";
        btnEl.disabled = false;
    } catch (error) {
        console.log(error);
        quoteEl.innerText = "An error occured, Try again laater"

        authorEl.innerText = ""
    }
    
}

btnEl.addEventListener("click", getQuote);

