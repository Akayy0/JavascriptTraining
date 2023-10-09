const lista = document.getElementById('lista');
const input = document.getElementById('input');
const submit = document.getElementById('submit');


const tarefas = [];


submit.addEventListener('click', () => {

    const tasks = input.value;

    tarefas.push(tasks)

    input.value = '';

    console.log(tarefas)

})










