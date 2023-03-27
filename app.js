const addTask = document.querySelector('.add-task')
const overlay = document.querySelector('.blur-overlay')
const addModal = document.querySelector('.add-modal')
const submitBtn = document.querySelector('.submit-btn')
const todosWrapper = document.querySelector('.todos-wrapper')
const todosArr = []

todosWrapper.addEventListener('click', deleteTodo)

addTask.addEventListener('click', openModal)
overlay.addEventListener('click', closeModal)
submitBtn.addEventListener('click', renderTodo)

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
  todosArr.push(theTodo.value)
  let index = todosArr.length - 1 // get the index of the new todo
  todosWrapper.innerHTML += `
        <div class="todo-wrapper" id="todo-${index}">
            <div class="p-wrapper">
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
