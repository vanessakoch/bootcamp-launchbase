const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for(let card of cards) {
  card.addEventListener("click", function () {
    modalOverlay.classList.add("active")
    modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${card.getAttribute("id")}`
  })
}

document.querySelector(".modal-close").addEventListener("click", function () {
  if(modal.classList.contains("maximize")) {
    modal.classList.remove("maximize")
  }
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector("iframe").src = ""
})

document.querySelector(".modal-maximize").addEventListener("click", function () {
  modal.classList.add("maximize")
})

document.querySelector(".modal-minimize").addEventListener("click", function () {
  modal.classList.remove("maximize")
})