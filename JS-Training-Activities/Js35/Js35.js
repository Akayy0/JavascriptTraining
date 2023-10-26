const contarVogais = (texto) => {
    const vogais = "aeiouAEIOU";
    let contador = 0;
    for(let letra of texto){
        if(vogais.includes(letra)){
            contador++;
        }

    }
    return contador;
}

const frase = "Ola, mundo!";

const quantidadeVogais = contarVogais(frase);
console.log("Numero de vogais na frase:" , quantidadeVogais);
