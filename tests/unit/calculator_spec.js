var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('has a runningTotal that starts at 0', function() {
    assert.equal(calculator.runningTotal, 0);
  });

  it('can add two numbers', function() {
    calculator.previousTotal = 2;
    calculator.add(3);
    assert.equal(calculator.runningTotal, 5);
  });

  it('can subtract two numbers', function() {
    calculator.previousTotal = 15;
    calculator.subtract(8);
    assert.equal(calculator.runningTotal, 7);
  });

  it('can multiply two numbers', function() {
    calculator.previousTotal = 6;
    calculator.multiply(5); 
    assert.equal(calculator.runningTotal, 30);
  });

  it('can divide two numbers', function() {
    calculator.previousTotal = 24;
    calculator.divide(4);
    assert.equal(calculator.runningTotal, 6);
  });

  it('can have a number clicked', function() {
    calculator.numberClick(5);
    assert.equal(calculator.runningTotal, 5);
  })

  it('can have an operator clicked', function() {
    calculator.numberClick(5);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 25);
  })

});
