//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
//The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  
    //g = global, match all instances of the pattern in a string, not just one
    //i = case-insensitive (so, for example, /a/i will match the string "a" or "A".
    return (str.match(/[aeiou]/gi)||[]).length;
    
  }

