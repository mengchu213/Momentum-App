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

// display the initial quote
displayQuote();

// change the quote every minute
setInterval(displayQuote, 60000);