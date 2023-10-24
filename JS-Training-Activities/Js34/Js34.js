const encontrarMaiorNumero = (lista) => {
    let maior = lista[0];
    for (let i = 1; i < lista.length; i++){
        if(lista[i] > maior){
            maior = lista[i];
        }
    }

    return maior;
}

const numeros = [10,55,68,2,11,44,47,122,2,13]
const maiorNumero = encontrarMaiorNumero(numeros);

console.log("O maior numero e:", maiorNumero);