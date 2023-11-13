const { toPair } = require('./script38');


const arraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
};


const testCases = [
    [1, 2, 3, 4, 5],
    [10, 20, 30, 40, 50],
    [11, 15, 17, 19, 21],
    [16, 18, 22, 24, 26]
];

testCases.forEach((testCase, index) => {
    const expected = testCase.filter(val => val % 2 === 0);
    const result = toPair(testCase);
    
    if (arraysEqual(result, expected)) {
        console.log(`Test Case ${index + 1}: Passed`);
    } else {
        console.log(`Test Case ${index + 1}: Failed`);
        console.log('Expected:', expected);
        console.log('Received:', result);
    }

    console.log(result);
});