// Example 1.

function reverseNumber(num) {
    let reversed = 0;
    for (let digit of num.toString()) {  
      reversed = reversed * 10 + parseInt(digit); 
    }
    return reversed;
  }
  
  const x = 3224993;
  const reversedX = reverseNumber(x);
  console.log(reversedX);  
  


  //2nd Question
  function isPalindrome(str) {
    const cleanStr = str.replace(/\W/g, "").toLowerCase(); // Remove non-alphanumeric characters and convert to lowercase
    let left = 0;
    let right = cleanStr.length - 1;
  
    while (left < right) {
      if (cleanStr[left] !== cleanStr[right]) {
        return false;
      }
      left++;
      right--;
    }
    return  true; 
  }
  
  const palindrome1 = "madam";
  const palindrome2 = "nurses run";
  const notPalindrome = "hello";
  
  console.log(isPalindrome(palindrome1));  
  console.log(isPalindrome(palindrome2));  
  console.log(isPalindrome(notPalindrome)); 
  

  //3
  function generateCombinations(str) {
    const results = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i; j < str.length; j++) {
        results.push(str.slice(i, j + 1)); // Include substrings from i to j (inclusive)
      }
    }
    return results.join(", "); // Join results for output
  }
  
  const string = "dog";
  const combinations = generateCombinations(string);
  console.log(combinations); // Output: d,do,dog,o,og,g
  

  //4
  function sortString(str) {
    return str.split("").sort().join(""); // Split to array, sort, join back
  }
  
  const string = "webmaster";
  const sortedString = sortString(string);
  console.log(sortedString); // Output: abeemrstw
  

  //5
  function capitalizeFirstLetters(str) {
    const words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(" "); // Join words back with spaces
  }
  
  const string = "the quick brown fox";
  const capitalizedString = capitalizeFirstLetters(string);
  console.log(capitalizedString); // Output: The Quick Brown Fox

  //6
  function findLongestWord(str) {
    const words = str.split(" ");
    let longestWord = "";
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
  
  const string = "Web Development Tutorial";
  const longestWord = findLongestWord(string);
  console.log(longestWord); // Output: Development
  