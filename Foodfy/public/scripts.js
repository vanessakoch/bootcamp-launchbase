const cards = document.querySelectorAll('.card');
const ingredients = document.querySelector('#ingredient-content');
const preparation = document.querySelector('#preparation-content');
const information = document.querySelector('#information-content');
const btnIngredients = document.querySelector('#ingredients-btn');
const btnPreparation = document.querySelector('#preparation-btn');
const btnInformation = document.querySelector('#information-btn');

for(let card of cards) {
  card.addEventListener("click", function () {
    window.location.href = `/recipes/${card.id}`
  })
}

const hideAndShow = function(botao, container) {
  if(botao.textContent === 'ESCONDER') {
    botao.textContent = 'MOSTRAR'
    container.classList.add("hide")
  } else {
    botao.textContent = 'ESCONDER'
    container.classList.remove("hide")
  }
}

btnIngredients.addEventListener("click", function () {
  hideAndShow(btnIngredients, ingredients)
})

btnPreparation.addEventListener("click", function () {
  hideAndShow(btnPreparation, preparation)
})

btnInformation.addEventListener("click", function () {
  hideAndShow(btnInformation, information)
})

