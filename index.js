function isPalindrome(word) {
  // Write your algorithm here

   // initialize pointers
   let start = 0;
   let end = word.length - 1;
 
   // loop until pointers meet
   while (start < end) {
     // if characters don't match, return false
       if (word[start] !== word[end]) {
       return false;
      }
 
     // move pointers towards each other
     start++;
     end--;
    }
 
   // if loop completes without returning false, string is a palindrome
   return true;
}

/* 
  Add your pseudocode here



1. Convert the input string to all lowercase to ignore case sensitivity.
2. Initialize two pointers left and right pointing to the first and last index of the string respectively.
3. While the left pointer is less than or equal to the right pointer:
    a. Check if the character at the left pointer is equal to the character at the right pointer.
    b. If they are not equal, return false since the string is not a palindrome.
    c. If they are equal, move the left pointer to the right by 1 and move the right pointer to the left by 1.
4. If the loop completes without returning false, then the string is a palindrome, return true.



*/

/*
  Add written explanation of your solution here


The isPalindrome function takes a string as input and determines whether the string is a palindrome or not. 
The function first removes any spaces or special characters from the input string using a regular expression, 
and then converts the string to lowercase for easier comparison.

The function then uses a for loop to iterate through the string, comparing the first character with the last character,
 the second character with the second to last character, and so on, until the loop reaches the middle of the string. 
 If any of the character pairs do not match, the function immediately returns false, indicating that the string is not a palindrome.
  If all character pairs match, the function returns true, indicating that the string is a palindrome.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
