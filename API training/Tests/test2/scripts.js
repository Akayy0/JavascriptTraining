const formSelect = document.querySelector('form');



const fetchPost = (e) =>{

    e.preventDefault();

    const formData = {
        name: document.getElementById('inputName').value,
        email: document.getElementById('inputEmail').value
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })

    .then(Response => {
        if(!Response.ok){
            throw new Error('Erro de rede ou servidor')
        }

        return Response.json();
    })
    .then(data =>{
        const sucessMessage = document.createElement('h4');
        sucessMessage.textContent = `Cadastro realizado com sucesso!! ID do usuario: ${data.id}`;
        document.body.appendChild(sucessMessage);
        console.log('Cadastro realizado com sucesso', data);
    })

    .catch(error =>{
        console.error('Erro ao cadastrar', error);
    })

}

formSelect.addEventListener('submit', fetchPost)

