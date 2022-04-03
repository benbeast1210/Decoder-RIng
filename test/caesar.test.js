const expect = require("chai").expect;
const caesarModule = require("../src/caesar.js");

describe("caesar", () => {

//  This test will cover failing cases, 'shift' === <25, 0, or >25. It should also catch an empty 'input' string.
  it("should handle the following failing cases, 'shift' === <25, 0, or >25. It should also catch an empty 'input' string", () => {
//  'actuals'
    const blank = caesarModule.caesar("", 26, true);
    const under = caesarModule.caesar("under", -26, true);
    const zero = caesarModule.caesar("mistakes were made", 0, true);
    const over = caesarModule.caesar("over", 26, true);

    expect(blank, under, zero, over).to.be.false;
  });

//  This test will check if the code can handle a 'charShift' value forcing the index to reach beyond or behind the 
//  beginning or the end of the 'alphabet' string for the correct caesar shifted character to be added to 'result'.
  it("should handle input/shift forcing 'charShift' to index from the end of 'alphabet', to the beginning of 'alphabet'", () => {
    const expectedNeg = "z";
    const expectedPos = "a";

    const negative = caesarModule.caesar("a", -1, true);
    const positive = caesarModule.caesar("z", 1, true);

    expect(negative).to.equal(expectedNeg);
    expect(positive).to.equal(expectedPos);
  });

/*  
    This comprehensive test will determine if the code can perform the following tasks:

    1. Honor proper spacing
    2. Honor non-alphabetical characters
    3. Decapiatalize alphabetical characters
    4. Properly encode and decode messages

    (Using italian for variable naming and input value, thought I'd have a bit of fun with it given the theme.)
*/
  it("should honor non-alphabetical characters & spacing, decapitalize all alphabetical characters, and properly encode/decode messages", () => {
// Encoding
//  expected
    const previstoUno = "bwf, gfefmf b dftbsf.";
//  actual
    const effettivoUno = caesarModule.caesar("Ave, fedele a Cesare.", 1, true);
    expect(effettivoUno).to.equal(previstoUno);
    
//  Decoding
//  expected
const previstoDue = "ave, fedele a cesare.";
//  actual
    const effettivoDue = caesarModule.caesar("bwf, gfefmf b dftbsf.", 1, false);
    expect(effettivoDue).to.equal(previstoDue);
  });
});