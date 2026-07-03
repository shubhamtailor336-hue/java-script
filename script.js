// ✅ Quotes array
const quotes = [
  "Believe in yourself.",
  "Every moment is a fresh beginning.",
  "Do what you can with what you have.",
  "You are stronger than you think.",
  "Never stop learning.",
  "Push yourself, because no one else is going to do it for you."
];

// ✅ Anonymous function example: used in event listener
document.getElementById("newQuoteBtn").addEventListener("click", function () {
  displayRandomQuote(getRandomQuote);
});

// ✅ IIFE: Runs immediately when the page loads to show the first quote
(function () {
  console.log("Page Loaded. Showing initial quote...");
  displayRandomQuote(getRandomQuote);
})();

// ✅ Higher-Order Function: Takes a function (callback) as argument
function displayRandomQuote(callbackFn) {
  const quote = callbackFn();
  document.getElementById("quoteBox").textContent = `"${quote}"`;
}

// ✅ Function to get a random quote (returned by HOF callback)
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
