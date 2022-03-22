//seleçao de DOM!!!
const todoInput = document.querySelector('.todo-input')

const todoButton = document.querySelector('.todo-button')

const todoList = document.querySelector('.todo-list')
//Eventos de escuta
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteAndCheck)


//funções

function addTodo(event) {
    event.preventDefault()  

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    const todoLi = document.createElement('li')
    todoLi.classList.add('todo-list')
    todoLi.innerText = todoInput.value;
    todoInput.value = ' ';

    todoDiv.appendChild(todoLi)

    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    completedButton.classList.add('completed-btn')
    todoDiv.appendChild(completedButton)

    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)


    todoList.appendChild(todoDiv)
}

//delete
function deleteAndCheck(e) {
    
    const item = e.target

    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement
        todo.remove()
    }

    if(item.classList[0] === 'completed-btn') {

        const todo = item.parentElement
        todo.classList.toggle('completed')

    }
}