// Dada uma expressão qualquer com parênteses, indique se a quantidade de parênteses está correta ou não, sem levar em conta o restante da expressão. Por exemplo:

// a+(b*c)-2-a        está correto
// (a+b*(2-c)-2+a)*2  está correto

// enquanto

// (a*b-(2+c)         está incorreto
// 2*(3-a))           está incorreto
// )3+b*(2-c)(        está incorreto

// Ou seja, todo parênteses que fecha deve ter um outro parênteses que abre correspondente e não pode haver parênteses que fecha sem um previo parenteses que abre e a quantidade total de parenteses que abre e fecha deve ser igual.

// Entrada
// Como entrada, haverá N expressões (1 <= N <= 10000), cada uma delas com até 1000 caracteres.

// Saída
// O arquivo de saída deverá ter a quantidade de linhas correspondente ao arquivo de entrada, cada uma delas contendo as palavras correct ou incorrect de acordo com as regras acima fornecidas.


// Resposta ==

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

while(lines.length){
    let expressao = lines.shift().trim();

    let i = 0;
    let parenteses = 0;

    for(i = 0; i < expressao.length; ++i){
        if(expressao[i] === '('){
            parenteses += 1;
        }else if(expressao[i] === ')'){
            if(parenteses > 0)  parenteses -= 1;
            else                break;
        }
    }

    if(i === expressao.length && parenteses === 0){
        console.log("correct");
    }else{
        console.log("incorrect");
    }
}