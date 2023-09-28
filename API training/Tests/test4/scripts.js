const btn = document.getElementById('btn');


const fetchGet = () =>{

    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: 'GET',
        headers: {
            'Authorization' : "Bearer token"
        }
    })
    .then(response => response.json())
    .then(data =>{
        const sucessMessage = document.createElement('h1');
        const title = data.title

        console.log(title)

        sucessMessage.textContent = `O Titulo e : ${title}`;
        
        document.body.appendChild(sucessMessage)
    })



}

btn.addEventListener('click', fetchGet)