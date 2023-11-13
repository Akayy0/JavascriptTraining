const lista1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


const toPair = (array) =>{

    const pairArray = array.filter((x) => x % 2 === 0)

    return pairArray

}

module.exports = { toPair };

console.log(toPair(lista1))