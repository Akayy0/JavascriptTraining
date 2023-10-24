const gerarNumerosPares = (numero) =>{
    const numerosPares = [];
    for(let i = 0; i<= numero; i += 2){
        numerosPares.push(i);
    }
    return numerosPares;
}

module.exports = {
    gerarNumerosPares,
};