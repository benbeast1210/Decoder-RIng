const expect = require("chai").expect;
const substitutionModule = require("../src/substitution.js");

describe("substitutionModule.substitution", () => {
//  This edge case will return false if 'alphabet' is missing, if it isn't 26 characters long, or contains at least one duplicate.
  it("should return false if the input 'alphabet' is missing", () => {
    const actual = substitutionModule.substitution("mistakes were made", "", encode = true);

    expect(actual).to.be.false;
  });
  it("should return false if alphabet is an incorrect length", () => {
    const lessThan = substitutionModule.substitution("abc","plmoknijbuhvygctfxrdzeswa", encode = true);
    const moreThan = substitutionModule.substitution("", "plmoknijbuhvygctfxrdzeswaq$", encode = true);

    expect(lessThan, moreThan).to.be.false;
  }); 
  it("should return false if a duplicate character in 'alphabet' is detected.", () => {
    const actual = substitutionModule.substitution("", "plmoknijbuhvygctfxrdzeswqq", encode = true);

    expect(actual).to.be.false;
  });

//  The translation will honor spacing, non-alphabetical characters, and decapitalize while encoding and decoding. 
  it("should honor spacing, non-alphabetical characters, and decapitalize while encoding and decoding", () => {
    const expectedDecode = "i came i saw i conquered";
    const expectedEncode = "b mpyk b rps b mcgfzkxko";
    const decoding = substitutionModule.substitution("b mpyk b rps b mcgfzkxko", "plmoknijbuhvygctfxrdzeswaq", encode = false);
    const encoding = substitutionModule.substitution("I came, I saw, I conquered.", "plmoknijbuhvygctfxrdzeswaq", encode = true);
    expect(decoding, encoding).to.equal(expectedDecode, expectedEncode);
  });
});
