const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for(let card of cards) {
  card.addEventListener("click", function () {
    const modalTitle = card.querySelector('.card-info').querySelector('h3').textContent;
    const modalDescription = card.querySelector('.card-info').querySelector('p').textContent;

    modalOverlay.classList.add("active")
    modalOverlay.querySelector("img").src = `/assets/${card.id}.png`
    modalOverlay.querySelector("#modal-title").textContent = modalTitle
    modalOverlay.querySelector("#modal-description").textContent = modalDescription
  })
}

document.querySelector(".modal-close").addEventListener("click", function () {
  modalOverlay.classList.remove("active")
  //modalOverlay.querySelector("iframe").src = ""
})
