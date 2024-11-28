const { expect } = require('chai');
const { add } = require('../src/stringCalculator');

describe("String Calculators test suite ",()=>{
  it("Test handles empty string input",()=>{
      let input = "";
      let expectedValue = 0;
      let actualValue = add(input);
      expect(actualValue).to.equal(expectedValue);   
  })

    it("Test handles single number input ",()=>{
      let input = "25";
      let expectedValue = 25;
      let actualValue = add(input);
      expect(actualValue).to.equal(expectedValue);   
  })
  
});

