const addTask = document.querySelector('.add-task')
const overlay = document.querySelector('.blur-overlay')
const addModal = document.querySelector('.add-modal')
const submitBtn = document.querySelector('.submit-btn')
const todosWrapper = document.querySelector('.todos-wrapper')
const deleteTodo = document.querySelector('.delete')
const todosArr = []

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
  todosWrapper.innerHTML += `
        <div class="todo-wrapper">
            <div class="p-wrapper">
                <p class="todo-p">
                    ${theTodo.value}
                </p>
            </div>
            <div class="delete-wrapper">
                <button class="delete">
                    <img id="btn-delete" src="/images/delete-icon.svg" alt="delete-todo">
                </button>
            </div>
        </div>`
  theTodo.value = ''
  closeModal()
}
