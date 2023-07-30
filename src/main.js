// Filtro Pesquisa
const filterElement = document.querySelector('#search-filter');

const cards = document.querySelectorAll('.home_content-articles-section .article-box-content')

filterElement.addEventListener('input', filterCards)

function filterCards() {
    if (filterElement.value != '') {
        for (let card of cards) {
            let title = card.querySelector('h1')
            title = title.textContent.toLowerCase()
            
            let filterText = filterElement.value.toLowerCase()

            if (!title.includes(filterText)) {
                card.style.display = "none"
            } else {
                card.style.display = "flex"
            }
        }
    } else {
        for (let card of cards) {
            card.style.display = "flex"
        }
    }     
}

// Filtro Categoria
const selectCategory = document.querySelector('#select-filter');
selectCategory.addEventListener("change", filterArticlesForCategory);

function filterArticlesForCategory() {
    const CategoriaSelecionada = selectCategory.value;

    const articles = document.querySelectorAll('.article-box-content')

    articles.forEach((articles) => {
        if (CategoriaSelecionada === "op-0" || articles.dataset.category === CategoriaSelecionada) {
            articles.style.display = "flex";
        } else {
            articles.style.display = "none";
        }
    });
}