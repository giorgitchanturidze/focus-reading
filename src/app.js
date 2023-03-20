// Get the paragraph element using jQuery
var paragraph = $("#paragraph");
// Get the text content of the paragraph
var text = paragraph.text();
// Split the text into words using spaces
var words = text.split(" ");
// Create an empty array to store the styled words
var styledWords = [];
// Loop through each word
words.forEach(function(word) {
  // Create an empty string to store the styled word
  var styledWord = "";
  // Check if the word is longer than one letter
  if (word.length > 1) {
    // Get the first letter of the word
    var firstLetter = word[0];
    // Wrap it with a span element with a red color style
    var styledFirstLetter = "<span style='color: red;'>" + firstLetter + "</span>";
    // Append it to the styled word
    styledWord += styledFirstLetter;
    // Get the rest of the word without the first letter
    var restOfWord = word.slice(1);
    // Append it to the styled word without any style
    styledWord += restOfWord;
  } else {
    // If the word is only one letter, append it to the styled word without any style
    styledWord += word;
  }
  // Add a space after each word except for punctuation marks
  if (word !== "." && word !== "," && word !== "?" && word !== "!") {
    styledWord += " ";
  }
  // Push the styled word into the array
  styledWords.push(styledWord);
});
// Join all elements in array into one string using spaces 
var finalText = "<p>" +styledWords.join("") + "</p>";
// Replace original paragraph with finalText using jQuery html() method 
paragraph.html(finalText);
// print it on my page
document.getElementById("paragraph").innerHTML = finalText;