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
    return true; 
  }
  
  const palindrome1 = "madam";
  const palindrome2 = "nurses run";
  const notPalindrome = "hello";
  
  console.log(isPalindrome(palindrome1));  
  console.log(isPalindrome(palindrome2));  
  console.log(isPalindrome(notPalindrome)); 
  