const { expect } = require('@jest/globals');
const { describe } = require('@jest/globals');
const {sumOfNumbers, amountOfNumbers} =  require('./exercise1');

describe('sumOfNumbers function: ', () => {
        const n1 = 6;
        const arr1 = [...Array(n1).keys()];
   
    test('should return value >= 0', () => {
        expect(sumOfNumbers(arr1)).toBeGreaterThanOrEqual(0); 
    })
    test('should return sum of numbers which passed all statements(in this case should return "5")', () => {
        expect(sumOfNumbers(arr1)).toBe(5);
    })
    test('should be defined', () => {
        expect(sumOfNumbers(arr1)).toBeDefined();
    })
    
})
    
describe('amountOfNumbers function', () => {
    const n1 = 6;
    const arr1 = [...Array(n1).keys()];
    test('should return value >=0', () => {
        expect(amountOfNumbers(arr1)).toBeDefined();
    })
    test('should return amount of numbers which passed all statements(in this case "1")', () => {
        expect(amountOfNumbers(arr1)).toBe(1);
    })
})
