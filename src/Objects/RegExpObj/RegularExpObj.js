import React from 'react'

function RegularExpObj() {

  //  regexp, are sequences of characters that define a search pattern. They are used to match patterns within strings

  //Regular expressions can contain literal characters that match themselves. For example, the regex hello matches the string "hello" in a text.
// we have some special characters with reserved meanings in regular expressions. 


//   ^: Matches the start of a string.
// $: Matches the end of a string.
// .: Matches any character except a newline.
// /a.c/ matches any string that starts with 'a', followed by any character (represented by the dot), and ends with 'c'. 
// So, it would match strings like "abc", "axc", and "a123c"
// *: Matches 0 or more occurrences of the preceding character.
// +: Matches 1 or more occurrences of the preceding character.
// ?: Matches 0 or 1 occurrence of the preceding character.
// \d: Matches any digit (equivalent to [0-9]).
// \w: Matches any word character (equivalent to [a-zA-Z0-9_]). \w matches:
// Letters (both uppercase and lowercase)
// Digits (0-9)
// Underscores (_)

//   \W will match any character that is not a letter, digit, or underscore.

// What \W Includes
// Punctuation: ., ,, !, ?, @, #, $, %, ^, &, *, (, ), -, =, {, }, [, ], |, \, :, ;, ', ", <, >, /, ~, `
// Whitespace: Space, tab, newline, etc.
// Special Characters: Any characters that don’t fall under letters, digits, or underscores.


// Character Classes: These match any one of a set of characters. For example:
// [abc]: Matches 'a', 'b', or 'c'.
// [a-z]: Matches any lowercase letter.
 // [^0-9]: Matches any character except digits.

 // Quantifiers:
 // a{3}: Matches exactly three 'a's.
// a{2,4}: Matches between two and four 'a's.
// a{2,}: Matches two or more 'a's.
                                                              
const pattern = /React/

const text = 'learn React with ReactJs';

console.log(pattern.test(text));

console.log(pattern.exec(text))

console.log(text.match(pattern))

console.log(text.replace(pattern,'angular'))

const regex = /^hello/m;
const str = "ssdd world\nhello universe";
console.log(str.match(regex)); // ["hello", "hello"]

const input = "123-456-7890";
const regexp = /(?<areaCode>\d{3})-(?<exchangeCode>\d{3})-(?<lineNumber>\d{4})/;
const result = input.match(regexp);

if (result) {
  console.log(result.groups.areaCode); 
} else {
  console.log("No match found.");
}

// Output: { areaCode: '123', exchangeCode: '456', lineNumber: '7890' }
let p=/^.{5,}$/
console.log(p.test("kkkk@7A")) 






  return (
    <div>
      
    </div>
  )
}

export default RegularExpObj;
