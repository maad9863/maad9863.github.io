const newQuoteButton = document.querySelector("#js-new-quote");

newQuoteButton.addEventListener("click", getQuote);

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

function getQuote() {
    console.log("Getting a new question!");

    fetch(endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error("API error");
            }
            return response.json();
        })
        .then(data => {
            console.log(data.question);
            displayQuote(data.question);
        })
        .catch(error => {
            console.log("Error:", error);
            alert("Could not get a question.");
        });
}

function displayQuote(quote) {
    document.querySelector("#js-quote-text").textContent = quote;
}

getQuote();