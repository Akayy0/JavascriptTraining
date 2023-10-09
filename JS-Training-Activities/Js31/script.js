const lista = document.getElementById('lista');
const input = document.getElementById('input');


const tarefas = [];

console.log()

const addTask = (e) => {

    e.preventDefault();

    const tasks = input.value.trim();

    tarefas.push(tasks)

    input.value = '';

    console.log(tarefas)


}









