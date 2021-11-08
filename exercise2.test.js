const { expect } = require('@jest/globals');
const { describe } = require('@jest/globals');
const mathFunction = require('./exercise2');

describe('mathFunction function: ', () => {
    const n = 32;
    test('should return array in array with elements(in this case "4, 4")', () => {
        expect(mathFunction(n)).toEqual([[4, 4]]);
    })
    test('should return TRUE value', () => {
        expect(mathFunction(n)).toBeTruthy();
    })
})



