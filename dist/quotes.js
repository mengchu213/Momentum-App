// Define an asynchronous function to fetch a random quote from an API
async function fetchQuote() {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  return data;
}

// function to display the quote
function displayQuote() {
  fetchQuote()
    .then(data => {
      const quoteText = document.getElementById('quote-text');
      const quoteAuthor = document.getElementById('quote-author');
      quoteText.textContent = `"${data.content}"`;
      quoteAuthor.textContent = `- ${data.author}`;
    })
    .catch(error => {
      console.error(error);
    });
}

displayQuote();
setInterval(displayQuote, 60000);