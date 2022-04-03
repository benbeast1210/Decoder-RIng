const caesarModule = (() => {
  function caesar(input, shift, encode = true) {
// The guard clause fulfills a requirement within the assignment guidelines, to return false if the 'shift' input is invalid
    if (!shift || shift < -25 || shift > 25) return false;
// This conditional adjusts the shift value according to the decoding/encoding scenario  
    if (!encode) shift *= -1;
// Final 'result' placeholder string value 
    let result = "";
// Unshifted reference alphabet
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
//  Formatting the input for ease of access
    let formatInput = input.toLowerCase();
/*  
  The loop will check each character in the input. 
    (If) If the character isn't in the "alphabet" string, then the 'char' is added to 'result' 
    (indicating that the character is non-alphabetical). 
    
    (Else) If it is an alphabetical, then its shift is assigned (char index += shift).
    The shifted character's index (charShift) will be used to determine the correct shift value to pull from 'alphabet'
    Then, the result is given the character from the reference 'alphabet' at the index of the shift.
*/
    for (let char of formatInput)
      if (!alphabet.includes(char)) result += char;
      else {
        let charShift = alphabet.indexOf(char) + shift;
        charShift = charShift > 25 ? charShift -= 26 : charShift < 0 ? charShift += 26 : charShift;
        result += alphabet[charShift];
      }
//  The 'result' value is then assigned to 'caesar' and returned.
    return result;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
