const addTask = document.querySelector('.add-task')
const overlay = document.querySelector('.blur-overlay')
const addModal = document.querySelector('.add-modal')
const submitBtn = document.querySelector('.submit-btn')
const todosWrapper = document.querySelector('.todos-wrapper')
const dateWrapper = document.querySelector('.date-render')

const todosArr = []

const date = new Date()

let day = date.getDate()
let formating = new Intl.DateTimeFormat('en-us', { month: 'long' })
let months = formating.format(new Date())
let year = date.getFullYear()

let currentDate = `${day} ${months} ${year}`

todosWrapper.addEventListener('click', deleteTodo)

addTask.addEventListener('click', openModal)
overlay.addEventListener('click', closeModal)
submitBtn.addEventListener('click', renderTodo)
document.addEventListener('DOMContentLoaded', renderDateInput)

function renderDateInput() {
 dateWrapper.innerHTML = `
 <input type="date" id="due-date-input" value="" min />`
 document.getElementById('due-date-input').valueAsDate = new Date();

}

function openModal() {
  overlay.classList.toggle('display-block')
  addModal.classList.toggle('display-block')
}

function closeModal() {
  overlay.classList.toggle('display-block')
  addModal.classList.toggle('display-block')
}

function renderTodo() {
  let theTodo = document.querySelector('input[type="text"]')
  const arrayObject = {
    todo: theTodo.value,
    date: currentDate,
  }
  todosArr.push(arrayObject)
  let index = todosArr.length - 1 // get the index of the new todo
  todosWrapper.innerHTML += `
        <div class="todo-wrapper" id="todo-${index}">
            <div class="p-wrapper">
                <h2>${currentDate}</h2>
                <p class="todo-p">
                    ${theTodo.value}
                </p>
            </div>
            <div class="delete-wrapper">
                <button class="delete" data-index="${index}">
                
                </button>
            </div>
        </div>`
  theTodo.value = ''
  closeModal()
}

function deleteTodo(e) {
  // check if the delete button was clicked
  if (e.target.classList.contains('delete')) {
    let index = e.target.dataset.index
    // remove the string from the array
    todosArr.splice(index, 1)
    //remove the corresponding div from the dom
    let todoDiv = document.querySelector(`#todo-${index}`)
    todoDiv.remove()
    console.log(todosArr)
  }
}
