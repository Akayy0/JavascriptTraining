
const fetchResult = () => {

    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(data => {

            const title = data.title;



            console.log(`Titulo: ${title}`);
            document.getElementById("result").innerHTML = `Titulo: ${title}`;

        })

        .catch(error =>{
            console.error("erro ao buscar dados:", error);
        });


} 

const fetchButton = document.getElementById("fetchBtn");

fetchButton.addEventListener("click", fetchResult);



