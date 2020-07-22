const currentPage = location.pathname
const itemsMenu = document.querySelectorAll('header .container-menu a')

for(item of itemsMenu) {
  if(currentPage.includes(item.getAttribute('href'))){
    item.classList.add('active')
  }
}

/* Paginação */

function paginate(selectedPage, totalPages) {

  let pages = [],
    oldPage

  for(let currentPage = 1; currentPage <= totalPages; currentPage++) {

    const firstAndLastPages = currentPage == 1 || currentPage == totalPages
    const pagesAfterSelected = currentPage <= selectedPage + 2
    const pagesBeforeSelected = currentPage >= selectedPage - 2

    if(firstAndLastPages || pagesAfterSelected && pagesBeforeSelected) {
      if (oldPage && currentPage - oldPage > 2) {
        pages.push("...")
      }

      if (oldPage && currentPage - oldPage == 2) {
        pages.push(currentPage - 1)
      }

      pages.push(currentPage)
      oldPage = currentPage
    }
  }
  return pages
}

function createPagination(pagination) {
  const page = +pagination.dataset.page
  const total = +pagination.dataset.total
  const filter = pagination.dataset.filter
  const pages = paginate(page, total)

  let elements = ""

  for (let page of pages) {
    if(String(page).includes("...")) {
      elements += `<span>${page}</span>`
    } else{
      if(filter) {
        elements += `<a href="?page=${page}&filter=${filter}">${page}</a>`
      } else {
        elements += `<a href="?page=${page}">${page}</a>`
      }
    }
  }

  pagination.innerHTML = elements
}
const pagination = document.querySelector(".pagination")

if(pagination) {
  createPagination(pagination)
}