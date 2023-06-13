import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

const todoObject = []
const completedTodo = []
const app = document.querySelector('.app')

const date = new Date()
let day = date.getDate()
let formating = new Intl.DateTimeFormat('en-us', { month: 'long' })
let months = formating.format(new Date())
let year = date.getFullYear()
let currentDate = `${day} ${months} ${year}`

document.addEventListener('click', function(e) {
    if(e.target.dataset.add) {
        openOverlay()
    } else if (e.target.matches('.blur-overlay')) {
       closeOverlay()
    } else if (e.target.matches('.submit-btn')) {
        closeOverlay()
        renderTodo()
    } else if(e.target.dataset.getid) {
        deleteTodo(e.target.dataset.getid)
    }else if(e.target.checked) {
        renderCompleted(e.target.checked)
    }
})

function openOverlay() {
    document.querySelector('.blur-overlay').classList.toggle('display-block')
    document.querySelector('.add-modal').classList.toggle('display-block')
    renderDateInput()
}

function closeOverlay() {
    document.querySelector('.blur-overlay').classList.toggle('display-block')
    document.querySelector('.add-modal').classList.toggle('display-block')
}

function renderDateInput() {
    const dateWrapper = document.querySelector('.date-render')
    dateWrapper.innerHTML = `
   <input type="date" id="due-date-input" value="" min />`
    document.getElementById('due-date-input').valueAsDate = new Date()
}

function renderCompleted(completedObj) {
    const getCompletedObj = todoObject.map(function(getCompleted) {
        return getCompleted.id === completedObj
    })

    getCompletedObj.completed = !getCompletedObj.completed

    if(getCompletedObj.completed) {
        todoObject[0].completed = !todoObject[0].completed
    }

}

function deleteTodo(deleted) {
    const todoIndex = todoObject.map(function(removeTodo) {
        return removeTodo.id
    }).indexOf(deleted)

    
    todoObject.splice(todoIndex, 1)
    const removeDiv = document.querySelector(`#todo-${deleted}`)
    removeDiv.remove()
}

function todoTemplate(todoObject) {

    let templateTodo = ''
    
    const inputValue = document.querySelector('input[type="text"]')
    const dateValue = document.querySelector('input[type="date"]')

    const values = [{
        textInput: inputValue.value,
        dateInput: dateValue.value,
        id: uuidv4(),
        completed: false
    }]

    todoObject.push(values[0])
   
    todoObject.forEach((todo) => {
        templateTodo += `
        <div class="todo-wrapper" id="todo-${todo.id}"  data-todonum="${todo.id}">
            <div class="todo-content">
                <div class="round">
                    <input type="checkbox" id="${todo.textInput}" class="completed">
                    <label for="${todo.textInput}"></label>
                </div>  
            <div class="p-wrapper">
                <h2>${todo.dateInput}</h2>
                <p class="todo-p">${todo.textInput}</p>
            </div>
        </div>
        <div class="delete-wrapper">
            <button class="delete" data-getid="${todo.id}"></button>
        </div>
    </div>`
    })

    inputValue.value = ''
    
    return templateTodo
}

function renderTodo() {
    document.querySelector('.todos-wrapper').innerHTML = todoTemplate(todoObject)
}

