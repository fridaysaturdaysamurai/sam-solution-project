const ul = document.querySelector('.price-list');

const items = [
    {
        id: 1,
        imgSrc: "./assets/img/corona.jpg",
        alt: "corona",
        title: 'Corona Extra',
        cl: 0.33,
        price: 3,
        counter: 1,
    },
    {
        id: 2,
        imgSrc: "./assets/img/garage.jpg",
        alt: "garage",
        title: 'Garage',
        cl: 0.5,
        price: 1,
        counter: 1,
    }
    ,
    {
        id: 3,
        imgSrc: "./assets/img/grolls.png",
        alt: "grolls",
        title: 'Grolls',
        cl: 0.35,
        price: 3,
        counter: 1,
    }
    ,    {
        id: 4,
        imgSrc: "./assets/img/guinnes.jpg",
        alt: "guinnes",
        title: 'Guinnes',
        cl: 0.5,
        price: 5,
        counter: 1,
    }
    ,
    {
        id: 5,
        imgSrc: "./assets/img/obolon.jpg",
        alt: "obolon",
        title: 'Obolon',
        cl: 0.5,
        price: 2,
        counter: 1,
    },
    {
        id: 6,
        imgSrc: "./assets/img/paulaner.jpg",
        alt: "Paulaner",
        title: 'Paulaner',
        cl: 0.5,
        price: 4,
        counter: 1,
    }
]

window.addEventListener('DOMContentLoaded', () => {
    const lol = items.map((i) => {
        return getCardTemplate(i);
    }).join('')
    ul.insertAdjacentHTML('beforeend', lol);
})

function getCardTemplate(obj) {
    return `
    <li class="item" data-id="${obj.id}">
        <img src="${obj.imgSrc}" alt="${obj.alt}" class="item-img">
        <h2 class="item-name">${obj.title}</h2>
        <p class="cl">${obj.cl}cl</p>
        <div class="details">
            <div class="price">${obj.price}$</div>
        </div>
        <button data-cart>Добавить в корзину</button>
    </li>
            `
}

function calculateResault() {
    let result = 0;
    basketItems.forEach((item) => {
        result += item.price * item.counter;
    })
    document.getElementById('result').innerHTML = `Итого: ${result}$`;
}

function renderBasket() {
    cartWrapper.innerHTML = "";
    function basketItemHTML(basketItem) {
        return `
            <div class="basket-item">
            <div class="top-content">
                <h2 class="item-name">${basketItem.title}</h2>
                <p class="cl">${basketItem.cl}</p>
            </div>
            <div class="bottom-content">
                <div class="price">Цена: ${basketItem.price} $</div>
                <div class="counter-wrapper">
                    <div class="counter-control" data-action="minus" data-item-id="${basketItem.id}">-</div>
                    <div class="counter-current" data-counter>${basketItem.counter}</div>
                    <div class="counter-control" data-action="plus" data-item-id="${basketItem.id}">+</div>
                </div>
                <button class="delete-product" data-action="delete" data-item-id="${basketItem.id}">Удалить товар</button>
            </div>
        </div>
            `;
      }
    const lolo = basketItems.map((i) => {
        return basketItemHTML(i);
      }).join("");
    cartWrapper.insertAdjacentHTML("beforeend", lolo);
    calculateResault()
  }

window.addEventListener('click', function(event) {
    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterWrapper = event.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
    }

    if (event.target.dataset.action === 'plus') {
        const elementoPlus = basketItems.find((item) => {
            return event.target.dataset.itemId == item.id;
        })
        elementoPlus.counter = elementoPlus.counter + 1;
        renderBasket();
    }

    if (event.target.dataset.action === 'minus') {
        const elementoPlus = basketItems.find((item) => {
            return event.target.dataset.itemId == item.id;
        })
        elementoPlus.counter = elementoPlus.counter - 1;
        if(elementoPlus.counter < 1) {
            basketItems = basketItems.filter(item => item.id != event.target.dataset.itemId);
            renderBasket();
        }
        renderBasket();  
    }

    if (event.target.dataset.action === 'delete') {
        basketItems = basketItems.filter(item => item.id != event.target.dataset.itemId);
        basketItems.counter = 0;
        renderBasket();
    }
})

let cartWrapper = document.querySelector('.cart-wrapper');
const basket = document.querySelector('.basket');
let basketItems = [];

ul.addEventListener('click', function(event) {
    if(event.target.hasAttribute('data-cart')) {
      const id = event.target.parentElement.getAttribute("data-id");
      const foundEl = items.find((i) => {
        return +id === i.id;
      });

      const existingBacketItem = basketItems.find(item => foundEl.id === item.id) 
      if (existingBacketItem) {
          // todo: increase counter
      } else {
        basketItems.push(foundEl);
      }
      const cartWrapper = document.querySelector(".cart-wrapper");
    }
      renderBasket();
})



const clearBasket = document.querySelector('.clear-basket').addEventListener('click', () => {
    basketItems = [];
    renderBasket();
})

const checkout = document.querySelector('.buy-beer').addEventListener('click', () => {
    if (basketItems.length > 0) {
        alert('thank you for the purchase')
    }
        basketItems = [];
        renderBasket();
})