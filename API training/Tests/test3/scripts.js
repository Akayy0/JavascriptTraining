const form = document.querySelector('form');
const textInput = document.getElementById('textInput');


const fetchGet = (e) =>{
    e.preventDefault();

    const valorDigitado = textInput.value
    fetch(`https://jsonplaceholder.typicode.com/posts/${valorDigitado}`)
    .then(response =>{
        if(!response.ok){
            throw new Error("erro de rede ou servidor")
        }
        return response.json();
    })
    .then(data =>{
        const title = data.title;
        console.log(data);
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `Titulo do post: ${title}`;
    })

    .catch(err => {
        console.error('Erro ao buscar dados', err)

    })
}

form.addEventListener('submit',fetchGet);