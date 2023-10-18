
const array1 = [3,8,4,6,1,2,7,9,1]
const ordenarNumeros = (arr) => {

    const n = arr.length;
    for(let i = 0; i< n - 1; i++){
        for (let j = i + 1; j < n; j++){
            if(arr[i] > arr[j]){
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;

    

};

const resultado = ordenarNumeros(array1);
console.log(resultado);