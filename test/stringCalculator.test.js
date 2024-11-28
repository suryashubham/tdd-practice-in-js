const { expect } = require('chai');
const { add } = require('../src/stringCalculator');

describe("String Calculators test suite ",()=>{
  it("Test handles empty string input",()=>{
      let input = "";
      let expectedValue = 0;
      let actualValue = add(input);
      expect(actualValue).to.equal(expectedValue);   
  });

    it("Test handles single number input ",()=>{
      let input = "1";
      let expectedValue = 1;
      let actualValue = add(input);
      expect(actualValue).to.equal(expectedValue);   
  });

  it("If the input is characters, then the returned sum is 0",()=>{
       let input = "surya";
       let expectedValue = 0;
       let actualValue = add(input);
       expect(actualValue).to.equal(expectedValue);   
  });
  
});

