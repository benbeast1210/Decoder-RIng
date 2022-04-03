const substitutionModule = (() => {
  function substitution(input, alphabet, encode = true) {
//  Guard clause protects against invalid input.
    if (!alphabet || alphabet.length !== 26) return false;
//  Formatted alphabet reference
    const alphabetRef = "abcdefghijklmnopqrstuvwxyz";
    formatInput = input.toLowerCase();
//  This loop will check the input 'alphabet' for duplicate characters, and returns false if so.
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet.indexOf(alphabet[i]) !== alphabet.lastIndexOf(alphabet[i])) {
        return false;
      }}
//  Placeholder variable for output value.
    let result = "";

//  Decoding scenario:
    if (!encode) {
//  This loop will check if the input characters can be found in the 'alphabet' input.
      for (let char of formatInput) {
        if (alphabet.includes(char)) {
//  This statement will add the correctly substituted character to my result variable.
          result += alphabetRef[alphabet.indexOf(char)];
        } else if (char === " ") {
            result += char;
          }
        }
      return result;
    }
    
// Encoding scenario:
    if (encode) {
//  This loop will check if the input characters can be found in the 'alphabetRef' string. If so, the correctly
//  substituted character is added to the result variable. Otherwise, if the 'char' is an empty space it is simply added
//  to the result variable.
      for (let char of formatInput) {
        if (alphabetRef.includes(char)) {
          result += alphabet[alphabetRef.indexOf(char)];
        } else if (char === " ") {
            result += char;
        }
      }
      return result;
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
