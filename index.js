$(document).ready(function () {
  var randomQuote;
  var author;

  function getQuote() {
    var quotes = ["There is a way that appears to be right, but in the end it leads to death.", "Where there is no revelation, people cast off restraint; but blessed are those who heed wisdom's instruction.", "For receiving instruction in prudent behavior, doing what is right and just and fair", "A cheerful heart is good medicine, but a crushed spirit dries up the bones.", "Pride goes before destruction, a haughty spirit before a fall.", "A gentle answer turns away wrath, but a harsh word stirs up anger."];
    var author = ["King Soloman"];

    var randomNum = Math.floor(Math.random() * quotes.length);
    randomQuote = quotes[randomNum];
    randomAuthor = author[randomNum];

    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
  }

  $("#tweet").on("click", function () {
    window.open("https://twitter.com/intent/tweet?text=" + randomQuote);
  });
  $("#newQuote").on("click", function () {
    getQuote();
  });
});