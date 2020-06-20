const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for(let card of cards) {
  card.addEventListener("click", function () {
    modalOverlay.classList.add("active")
  })
}

document.querySelector(".modal-close").addEventListener("click", function () {
  modalOverlay.classList.remove("active")
})
