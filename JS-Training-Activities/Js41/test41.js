const findSmallestInt = require('./script41.js');
const assert = require('assert');

// Teste 1: Deve retornar o menor número em um array ordenado
assert.strictEqual(findSmallestInt([1, 2, 3, 4, 5]), 1);

// Teste 2: Deve retornar o menor número em um array desordenado
assert.strictEqual(findSmallestInt([5, 3, 1, 4, 2]), 1);

// Teste 3: Deve retornar o único número em um array de um elemento
assert.strictEqual(findSmallestInt([42]), 42);

// Teste 4: Deve retornar undefined para um array vazio
assert.strictEqual(findSmallestInt([]), undefined);

// Teste 5: Deve retornar o menor número quando há números negativos
assert.strictEqual(findSmallestInt([-5, 0, 2, -3, 8]), -5);

// Teste 6: Deve falhar se o array contiver strings
assert.throws(
    () => findSmallestInt([1, 2, '3', 4, 5]),
    (error) => {
      return error instanceof TypeError && error.message === 'Input must contain only numbers';
    },
    'Teste falhou: o array contém strings.'
  );

console.log('Todos os testes passaram!');