const { expect } = require('@jest/globals');
const { describe } = require('@jest/globals');
const mathFunction = require('./exercise2');

describe('mathFunction function: ', () => {
    const n = 32;
    const arr1 = [...Array(Math.ceil(Math.sqrt(n) + 1)).keys()];
    const arr2 = [...Array(Math.ceil(Math.sqrt(n) + 1)).keys()];
    test('should return array in array with elements(in this case "4, 4")', () => {
        expect(mathFunction(arr1, arr2, n)).toEqual([[4, 4]]);
    })
    test('should return TRUE value', () => {
        expect(mathFunction(arr1, arr2, n)).toBeTruthy();
    })
})



