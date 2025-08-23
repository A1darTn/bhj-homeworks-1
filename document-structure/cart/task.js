
// Функция для обновления видимости корзины
function updateCartVisibility() {
    const cart = document.querySelector('.cart');
    const cartProducts = document.querySelector('.cart__products');

    if (cartProducts.children.length === 0) {
        cart.classList.add('hidden');
    } else {
        cart.classList.remove('hidden');
    }
}

// Обработчики для кнопок изменения количества
document.querySelectorAll('.product__quantity-control').forEach(control => {
    control.addEventListener('click', function () {
        const controlsContainer = this.closest('.product__quantity-controls');
        const valueElement = controlsContainer.querySelector('.product__quantity-value');
        let value = parseInt(valueElement.textContent);

        if (this.classList.contains('product__quantity-control_dec')) {
            if (value > 1) {
                value--;
            }
        } else if (this.classList.contains('product__quantity-control_inc')) {
            value++;
        }

        valueElement.textContent = value;
    });
});

// Обработчики для кнопок добавления в корзину
document.querySelectorAll('.product__add').forEach(button => {
    button.addEventListener('click', function () {
        const product = this.closest('.product');
        const id = product.dataset.id;
        const imageSrc = product.querySelector('.product__image').src;
        const count = parseInt(product.querySelector('.product__quantity-value').textContent);

        // Показываем корзину, если она скрыта
        const cart = document.querySelector('.cart');
        cart.classList.remove('hidden');

        // Проверяем, есть ли уже такой товар в корзине
        const existingProduct = document.querySelector(`.cart__product[data-id="${id}"]`);

        if (existingProduct) {
            // Если товар уже есть, увеличиваем количество
            const countElement = existingProduct.querySelector('.cart__product-count');
            const currentCount = parseInt(countElement.textContent);
            countElement.textContent = currentCount + count;
        } else {
            const cartProduct = `<div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${imageSrc}">
                <div class="cart__product-count">${count}</div>
            </div>`

            document.querySelector('.cart__products').insertAdjacentHTML("beforeend", cartProduct)
        }

        updateCartVisibility();
    });
});

// Инициализация видимости корзины
updateCartVisibility();
