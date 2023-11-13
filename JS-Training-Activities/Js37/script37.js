
const lista1 = [1,2,3,4,5,6,7,8]

const toDouble = (array) =>{
    const doubleArray = array.map((x) => x * 2)

    return doubleArray

}

module.exports = { toDouble };

console.log(toDouble(lista1))