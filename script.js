var products = [
    { productId: 1, productName: 'Товар 1', categoryId: 1 },
    { productId: 2, productName: 'Товар 2', categoryId: 2 },
    { productId: 3, productName: 'Товар 3', categoryId: 3 },
    { productId: 4, productName: 'Товар 4', categoryId: 4 },
    { productId: 5, productName: 'Товар 5', categoryId: 5 },
    { productId: 6, productName: 'Товар 6', categoryId: 1 },
    { productId: 7, productName: 'Товар 7', categoryId: 2 },
    { productId: 8, productName: 'Товар 8', categoryId: 3 },
    { productId: 9, productName: 'Товар 9', categoryId: 4 },
    { productId: 10, productName: 'Товар 10', categoryId: 5 },
    { productId: 11, productName: 'Товар 11', categoryId: 1 },
    { productId: 12, productName: 'Товар 12', categoryId: 2 },
    { productId: 13, productName: 'Товар 13', categoryId: 3 },
    { productId: 14, productName: 'Товар 14', categoryId: 4 },
    { productId: 15, productName: 'Товар 15', categoryId: 5 },
    { productId: 16, productName: 'Товар 16', categoryId: 1 },
    { productId: 17, productName: 'Товар 17', categoryId: 2 },
    { productId: 18, productName: 'Товар 18', categoryId: 3 },
    { productId: 19, productName: 'Товар 19', categoryId: 4 },
    { productId: 20, productName: 'Товар 20', categoryId: 5 },
    { productId: 21, productName: 'Товар 21', categoryId: 1 },
    { productId: 22, productName: 'Товар 22', categoryId: 2 },
    { productId: 23, productName: 'Товар 23', categoryId: 3 },
    { productId: 24, productName: 'Товар 24', categoryId: 4 },
    { productId: 25, productName: 'Товар 25', categoryId: 5 },
];
var categories = [
    { categoryId: 1, categoryName: 'Футболки' },
    { categoryId: 2, categoryName: 'Майки' },
    { categoryId: 3, categoryName: 'Носки' },
    { categoryId: 4, categoryName: 'Джинсы' },
    { categoryId: 5, categoryName: 'Брюки' },
];
//Создание элементов в разметке
var main = document.querySelector('.main');
var container = document.createElement('div');
var tabs = document.createElement('div');
var btnsCreate = document.createElement('div');
var itemsCreate = document.createElement('div');
var btns = btnsCreate.childNodes;
var items = itemsCreate.childNodes;
container.className = 'container';
tabs.className = 'tabs';
btnsCreate.className = 'tabs__btns';
itemsCreate.className = 'tabs__content';
main.insertAdjacentElement('afterbegin', container);
container.insertAdjacentElement('afterbegin', tabs);
tabs.insertAdjacentElement('beforeend', itemsCreate);
tabs.insertAdjacentElement('afterbegin', btnsCreate);
for (i = 0; i < categories.length; i++) {
    var btn = document.createElement('button');
    btn.className = 'tabs__btn'
    btn.type = 'button'
    btnsCreate.insertAdjacentElement('afterbegin', btn);
}
for(i = 0; i < categories.length; i++) {
    var item = document.createElement('div');
    item.className = 'tabs__item'
    itemsCreate.insertAdjacentElement('afterbegin', item);
}

// Код для отображения товаров после прогрузки страницы
document.addEventListener("DOMContentLoaded", (event) => {
    btns[1].className = 'tabs__btn is-active';
    items[1].className = 'tabs__item is-active';
    categoryFilter(1)
})

//Код для переключения табов и их взаимодействия с контентом
function change(arr, i) {
    items[i].innerHTML = '';
    arr.forEach(item => {
        item.forEach(i => { i.classList.remove('is-active') })
        item[i].classList.add('is-active')
    })
    categoryFilter(i)
    return;
}
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        change([btns, items], i)
    })
}

// Код для именования табов
for (i = 0, j = 0; i <= btns.length; i++, j++) {
    btns[i].innerHTML = categories[j].categoryName;
}

// Функции для фильтрации и добавления товаров на страницу
function categoryFilter(i) {
    var data = products.filter(function (e) {
        return e.categoryId === categories[i].categoryId;
    })
    createProducts(data, i)
    return;
}
function createProducts(data, i) {
    for (j = 0; j < data.length; j++) {
        var product = document.createElement('div');
        var productImgWrap = document.createElement('div')
        var productImg = document.createElement('img');
        var productTitle = document.createElement('h3');
        product.className = 'tabs__product-wrapper'
        productImgWrap.className = 'tabs__img-wrapper'
        productTitle.className = 'tabs__product-title'
        productTitle.innerHTML = data[j].productName;
        productImg.setAttribute('src', 'tovar.jpg')
        items[i].insertAdjacentElement('beforeend', product);
        product.insertAdjacentElement('afterbegin', productTitle);
        product.insertAdjacentElement('afterbegin', productImgWrap);
        productImgWrap.insertAdjacentElement('afterbegin', productImg);
    }
    return;
}