const polybiusModule = (() => {
//  This array will match each letter to its corresponding letter in the Polybius square, keeping i and j in the same sub-array
  const numbers = [
    ["a", 11], ["b", 21], ["c", 31], ["d", 41], ["e", 51], ["f", 12], ["g", 22], ["h", 32], ["(i/j)", 42], ["k", 52], ["l", 13], ["m", 23], ["n", 33], ["o", 43], ["p", 53], ["q", 14], ["r", 24], ["s", 34], ["t", 44], ["u", 54], ["v", 15], ["w", 25], ["x", 35], ["y", 45], ["z", 55],
  ];
//  This array will match each letter to its corresponding letter in the Polybius square, keeping i and j in seperate sub-arrays
  const alphabet = [
    ["a", 11], ["b", 21], ["c", 31], ["d", 41], ["e", 51], ["f", 12], ["g", 22], ["h", 32], ["i", 42], ["j", 42], ["k", 52], ["l", 13], ["m", 23], ["n", 33], ["o", 43], ["p", 53], ["q", 14], ["r", 24], ["s", 34], ["t", 44], ["u", 54], ["v", 15], ["w", 25], ["x", 35], ["y", 45], ["z", 55],
  ];

  function polybius(input, encode = true) {
// Placeholder output variable, assigned an empty string value.
    let result = "";

//  Decoding scenario:
    if (!encode) {
//  I will format the input by using an empty global regex, followed by empty quotes to have them comma seperated.
const formatInput = input.replace(/ /g, "").split("");
const length = formatInput.length;

//  This bit of code will confirm whether or not the formatted input's length is evenly divisible by 2. 
      if (!(length % 2 === 0)) return false;
//  This variable will hold the numbers being returned in 'result'.
      let resultArr = [];

//  This loop will determine which characters from the input are numbers, and which are spaces. This process will 
//  correctly pair the numbers in resultArr, while also honoring the placement of spaces and non-alphabetical characters.
      for (p = 0; p < input.length; p += 2) {
        let next = input[p + 1];
        let current = input[p];

//  If the current character is a space, then the space is pushed into the 'resultArr' and the counter is pushed back 
//  one step. This will keep all the characters in the order they were presented in 'input'.
        if (current === " ") {
          resultArr.push(" ");
          p -= 1;
//  Otherwise, the correct pair of numbers is pushed into the 'resultArr'. 
        } else {
          resultArr.push(`${current}${next}`);
        }
      }
      
//  In this last part, the 'resultArr' is checked. If the element is a space, then the space is simply added to the 
//  'result' string.
      for (let element of resultArr) {
        if (element === " ") {
          result += element;
//  Otherwise, the element is passed into the filter method in order to determine the correct value to add to 'result'
        } else {
          const decodedElement = numbers.filter((subArray) => element == subArray[1]);
          result += decodedElement[0][0];
        }
      }
      return result;
    }

//  Encoding scenario:
    if (encode) {
//  Converting the input characters all to lowercase for ease of access.
      const formatInput = input.toLowerCase().split("");
//  This loop will check if the formatInput characters are also in the alphabet array, if so then they're defined to 'matched'.
      for (let char of formatInput) {
        const matched = alphabet.find((subArray) => char === subArray[0]);
//  If the character is non-alphabetical, then the character is pushed straight to the output value (honors spacing and special chars).
        if (!char.match(/[a-z]/)) {
          result += char;
//  If the char is alphabetical, then the number is added to the output value.
        } else result += matched[1];
      }
      return result;
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
