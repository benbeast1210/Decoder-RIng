const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");

describe("polybius", () => {

//  edge cases to protect against invalid input and output
  it("should return false if an input of odd length is received while decoding", () => {
    const actual = polybiusModule.polybius("12 11212", false);
    expect(actual).to.be.false;
  });
  it("should output a string while encoding", () => {
    const expected = "3251131343, 2543241341.";
    const actual = polybiusModule.polybius("Hello, world.", true);
    expect(actual).to.equal(expected);
  });

//  Handles the case of i/j while decoding.
  it("should handle i/j", () => {
    const expected = "(i/j)";
    const actual = polybiusModule.polybius("42", false);
    expect(actual).to.equal(expected);
  });

//  Confirms that capitalization and spacing is correctly translated while encoding.
  it("should ignore capital letters and honor spacing", () => {
    const expected = "3251131343, 2543241341.";
    const actual = polybiusModule.polybius("Hello, world.", true);
    expect(actual).to.equal(expected);
  });
});
