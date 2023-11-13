const lista1 = [10,5,20,30,8];
const limite1 = 15;


const limitSum = (array, limite) => {
    

    const soma = array.reduce((accumulator, currentValue) =>{
        if(currentValue > limite){
            return accumulator + currentValue;
        }
        return accumulator;
    }, 0);

    return soma;
}

console.log(limitSum(lista1, limite1));
