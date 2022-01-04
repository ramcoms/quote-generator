const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// let apiQuotes = [];

// Show New Quote
function newQuote() {
    loading();
    // Pick random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

    // Check if author is blank and replace with 'Unknown'

    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }

    // Check quote length to determine styling
    if (quote.text.length > 100) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // Set Quote, Hide Loader
    quoteText.textContent = quote.text;
    complete();
}

newQuote();

// Get quotes from API
// async function getQuotes() {
//     const apiURL = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiURL);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error) {
//         // Catch error here
//     }
// }

// On Load
// getQuotes();

// Tweet quote
function tweetQuote() {
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterURL, '_blank')
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

