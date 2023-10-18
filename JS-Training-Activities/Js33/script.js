const inverterString = (string) => {
    let stringInvertida = '';

    for(let i = string.length -1; i >=0; i--){
        stringInvertida += string[i];
    }

    return stringInvertida;
}

const minhaString = "Hello, world!";
const invertida = inverterString(minhaString);

console.log(invertida);