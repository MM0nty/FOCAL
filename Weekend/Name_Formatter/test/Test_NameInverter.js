const chai = require('chai');
const assert = chai.assert;
const nameInverter = require('../NameInverter');

describe('NameInverter', function()
{
  it("return an empty string when passed an empty string", function()
  {
   const input = "";
   const output = "";
   assert.equal(nameInverter(input), output);
  });
  it("return a single name when passed a single name", function()
  {
    const input = "name";
    const output = "name";
    assert.equal(nameInverter(input), output);
  });
  it("return a single name when passed a single name with extra spaces", function()
  {
    const input = "name";
    const output = "name";
    assert.equal(nameInverter(input), output);
  });
  it("return last name, firstname when passed a first and last name", function()
  {
    const input = "first last";
    const output = "last, first";
    assert.equal(nameInverter(input), output);
  });
  it("return a empty string when passed a single honorific", function()
  {
    const input = "Dr.";
    const output = "";
    assert.equal(nameInverter(input), output);
  });
  it("return a honorific first-name when passed a honorific first name", function()
  {
    const input = "Dr. first";
    const output = "Dr. first";
    assert.equal(nameInverter(input), output);
  });
  it("return honorific last name, first name when passed a honorific first name last name", function()
  {
    const input = "Dr. first last";
    const output = "Dr. last, first";
    assert.equal(nameInverter(input), output);
  });
  it("return a honorific last name, first name when passed a honorific first name, last name with extra spaces", function()
  {
    const input = "Dr. first last";
    const output = "Dr. last, first";
    assert.equal(nameInverter(input), output);
  });
  it("thow an error when name is undefined", function()
  {
    const input = undefined;
    const output = undefined;
    assert.equal(nameInverter(input), output);
  });
});