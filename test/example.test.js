
import { add } from '../utils.js';
import { subtract } from '../utils.js';
import { multiply } from '../utils.js';
import { divide } from '../utils.js';

const test = QUnit.test;

test('add should take in 10 and 3 and return 13', (expect) => {
    
    const expected = 13;
    
    
    const actual = add(10, 3);

  
    expect.equal(actual, expected);
});

test('subtract should take in 10 and 5 and return 5', (expect) => {
    
    const expected = 5;
    
    
    const actual = subtract(10, 5);

   
    expect.equal(actual, expected);
});


test('multiply should take in 5 and 5 return 25', (expect) => {
    
    const expected = 25;
    
    
    const actual = multiply(5, 5);

    
    expect.equal(actual, expected);
});

test('divide should take in "10" and 2 return 5', (expect) => {
  
    const expected = 5;
    
    
    const actual = divide('10', 2);

    
    expect.equal(actual, expected);
});