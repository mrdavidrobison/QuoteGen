$(document).ready(function() {
  var randomQuote;
  var author;
  function getQuote() {
    var quotes = ["Hello, John", "Hello, Sea", "Hello Land", "Hello Sky"];
    var author = ["author1", "author2", "author3", "author4"];

    var randomNum = Math.floor(Math.random() * quotes.length);
    randomQuote = quotes[randomNum];
    randomAuthor = author[randomNum];

    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
  }

  $("#tweet").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" + randomQuote);
  });
  $("#newQuote").on("click", function() {
    getQuote();
  });
});
