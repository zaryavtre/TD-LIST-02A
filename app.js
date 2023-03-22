const addTask = document.querySelector('.add-task')
const overlay = document.querySelector('.blur-overlay')
const addModal = document.querySelector('.add-modal')

addTask.addEventListener('click', openModal)
overlay.addEventListener('click', closeModal)

function openModal() {
  overlay.classList.toggle('display-block')
  addModal.classList.toggle('display-block')
}

function closeModal() {
  overlay.classList.toggle('display-block')
  addModal.classList.toggle('display-block')
}
