export class Produtos{
    constructor(nome, valor, quantidade){
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidade;
    }

    showProduct(){

        console.log(`Nome: ${this.nome}`)
        console.log(`Valor: ${this.valor}`)
        console.log(`Quantidade: ${this.quantidade}`)
    }
}

export let masterName = "Master"