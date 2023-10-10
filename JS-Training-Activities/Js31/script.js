const lista = document.getElementById('lista');
const input = document.getElementById('input');
const submit = document.getElementById('submit');


const tarefas = [];


submit.addEventListener('click', () => {

    const tasks = {
        name: input.value,
        completa : false
    };

    tarefas.push(tasks)

 
    input.value = '';

    console.log(tarefas)

})

const listarTarefas = () =>{

    lista.innerHTML = "";

    tarefas.forEach((task) => {

        const novoItem = document.createElement('li');
        novoItem.textContent = task.name;
        lista.appendChild(novoItem);
    })

}

const atualizarTarefas = (array, i) => {

    if(i >= 0 && i < array.length) {

        array[i].completa = true

    }

    listarTarefas();
}

const removerTarefas = (array, i) =>{
    array.splice(i, 1);

    listarTarefas();
}













