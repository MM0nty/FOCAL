var chai = require('chai');
var assert = chai.assert;

var className = require('../js/Class-Name.js');
var addClass = className.addClass;

describe('addClass', function()
{
  it('should add class to element', function()
  {
    var element = { className: '' };
    addClass(element, 'Test-Class');
    assert.equal(element.className, 'Test-Class');
  });
  it('should not add a class which already exists');
});
