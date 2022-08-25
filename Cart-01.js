
const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function(event) { 

    if(event.target.hasAttribute('data-cart')) { 

        //надодим целую карточку
       const card =  event.target.closest('.card'); 

        const productInfo = { 
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };

        //проверяем есть ли такой товар в корзине
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        //если товар в корзине 
        if (itemInCart){ 
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter)
        } else {
            //если товарра нет в корзине
        const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}" style ="border: 1px solid black; padding: 2px;  background-color: white">
           <div class="cart-item__top"> 
               <div class="cart-item__img">
               <img src="${productInfo.imgSrc}" alt="${productInfo.title}" style="width:130px; height:200px;"> 
                    </div>
                    <div class = "cart-item__desc">
                       <div style="margin: 12px" class="cart-item__title">${productInfo.title}</div> 
    
                       <!-- детали корзины-->
                       <div class = "cart-item__details">
                           <div class="items items--small counter-wrapper">
                           </div> 
                           <div class="price"> 
                           </div>
                           <div style="margin-bottom: 7px" class="items counter-wrapper"> 
                           <button class="minus items__control" data-action="minus">-</button>
                           <div class="items__current" data-counter>${productInfo.counter}</div>
                           <button class="plus items__control" data-action="plus"> +</button>
                       </div>
                   </div>

                       </div>
                       <!-- детали корзины-->
                    </div>
           </div> 

        </div>`
        //отображаем товар в корзине
        cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        card.querySelector('[data-counter]').innerText = '1';
    }

    }

} );








