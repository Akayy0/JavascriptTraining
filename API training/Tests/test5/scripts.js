const btn = document.getElementById('btn')


const fetchError = () => {


    fetch("https://jsonplaceholder.typicode.com/nonexistent")
    .then(response => {
        if(!response.ok){
            throw new Error('erro na rota')
        }

        return response.json()
    })
    .then(data =>{

        console.log(data)

    })
    .catch(err =>{
        console.error('Erro na requisição', err)

    })

}

btn.addEventListener('click', fetchError);