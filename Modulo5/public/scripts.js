const currentPage = location.pathname
const itemsMenu = document.querySelectorAll('header .container-menu a')

for(item of itemsMenu) {
  if(currentPage.includes(item.getAttribute('href'))){
    item.classList.add('active')
  }
}