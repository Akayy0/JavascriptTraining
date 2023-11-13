const { toDouble } = require('./script37');

const arraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
};

const testCases = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

testCases.forEach((testCase, index) => {
    const expected = testCase.map(val => val * 2);
    const result = toDouble(testCase);
    
    if (arraysEqual(result, expected)) {
        console.log(`Test Case ${index + 1}: Passed`);
    } else {
        console.log(`Test Case ${index + 1}: Failed`);
        console.log('Expected:', expected);
        console.log('Received:', result);
    }

    console.log(result)
});