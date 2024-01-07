function countWords(passage) {
  // Remove leading and trailing whitespaces
  let trimmedPassage = passage.trim();
  
  // Check for empty string
  if (trimmedPassage === "") {
      return 0;
  }

  // Split the passage into words using space as a delimiter
  let words = trimmedPassage.split(/\s+/);

  // Count the number of words
  return words.length;
}

// Example usage:
let passage = "This is a sample passage.";
let wordCount = countWords(passage);
console.log("Word count:", wordCount);