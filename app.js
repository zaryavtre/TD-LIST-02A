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
if (todosArr >= 1) {
  deleteTodo.addEventListener('click', function (e) {
    e.todosWrapper.innerHTML = ''
  })
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
  let theTodo = document.querySelector('.input-add').value
  todosArr.push(theTodo)
  console.log(theTodo)
  todosWrapper.innerHTML += `
        <div class="todo-wrapper">
            <div class="p-wrapper">
                <p class="todo-p">
                    ${todosArr.slice(-1)}
                </p>
            </div>
            <div class="delete-wrapper">
                <button class="delete">
                    <img src="/images/delete-icon.svg" alt="delete-todo">
                </button>
            </div>
        </div>`
  closeModal()
}
