const chai = require('chai');
const assert = chai.assert;
const buyCar = require('../BuyCar.js');

describe("#BuyCar()", function()
{
  it("should return false if it's a hatchback", function()
  {
    const car =
    {
      type: "hatchback"
    };
    const shouldBuy = buyCar(car);
    assert.isFalse(shouldBuy);
  });
  it("should return true if it's blue", function()
  {
    const car =
    {
      color: "blue"
    };
    const shouldBuy = buyCar(car);
    assert.isTrue(shouldBuy);
  });
  it("should return false if it's a hatchback and blue", function()
  {
    const car =
    {
      type: "hatchback",
      color: "blue"
    };
    const shouldBuy = buyCar(car);
    assert.isFalse(shouldBuy);
  });
  it("should return true if it has 6 litres/100km and is under $5,000", function()
  {
    const car =
    {
      color: "blue"
    };
    const shouldBuy = buyCar(car);
    assert.isTrue(shouldBuy);
  });
  it("should return true if it has 11 litres/100km and is under $5,000", function()
  {
    const car =
    {
      color: "blue"
    };
    const shouldBuy = buyCar(car);
    assert.isTrue(shouldBuy);
  });
  it("should return false if it has 6 litres/100km and is over $5,000", function()
  {
    const car =
    {
      goodLitres: "6 litres/100km",
      goodPrice: "$6,000"
    };
    const shouldBuy = buyCar(car);
    assert.isFalse(shouldBuy);
  });
  it("should return false if it has 11 litres/100km and is over $5,000", function()
  {
    const car =
    {
      goodLitres: "11 litres/100km",
      goodPrice: "$6,000"
    };
    const shouldBuy = buyCar(car);
    assert.isFalse(shouldBuy);
  });
  it("should return false if it has 5 litres/100km and is under $5,000", function()
  {
    const car =
    {
      goodLitres: "5 litres/100km",
      goodPrice: "$5,000"
    };
    const shouldBuy = buyCar(car);
    assert.isFalse(shouldBuy);
  });
  it("should return false if it has 12 litres/100km and is under $5,000", function()
  {
    const car =
    {
      goodLitres: "12 litres/100km",
      goodPrice: "$5,000"
    };
    const shouldBuy = buyCar(car);
    assert.isFalse(shouldBuy);
  });
  it("should return undefined if there's no car", function()
  {
    const car =
    {
    };
    const shouldBuy = buyCar(car);
    assert.isFalse(shouldBuy);
  });
  
});