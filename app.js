import { UUID } from "https://unpkg.com/uuidjs@^5";

const todoObject = []
const uuid = UUID.generate()

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

function deleteTodo(current) {
    const todoIndex = todoObject.map(function(removeTodo) {
        return removeTodo.id
    }).indexOf(current)

    
    todoObject.splice(todoIndex, 1)
    const removeDiv = document.querySelector(`#todo-${current}`)
    removeDiv.remove()
}

function todoTemplate(todoObject) {
    let templateTodo = ''
    
    const inputValue = document.querySelector('input[type="text"]')
    const dateValue = document.querySelector('input[type="date"]')

    const values = [{
        textInput: inputValue.value,
        dateInput: dateValue.value,
        id: uuid
    }]

    todoObject.push(values[0])

    //const index = todoObject.length - 1
   
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

