// =============== find the elements ===============
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const overlay = document.getElementById('overlay');

const searchBtn = document.getElementById('search-btn');
const searchBox = document.getElementById('search-box');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

const cartBtn = document.getElementById('cart-btn');
const cartBox = document.getElementById('cart');
const cartClose = document.getElementById('cart-close');
const cartItemsBox = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const cartCountEl = document.getElementById('cart-count');
const checkoutBtn = document.getElementById('checkout-btn');

// =============== menu (mobile) ===============
function openMenu(){
    navMenu.classList.add('show-menu');
    overlay.classList.add('show');
}

function closeAll(){
    navMenu.classList.remove('show-menu');
    cartBox.classList.remove('show-cart');
    searchBox.classList.remove('show-search');
    overlay.classList.remove('show');
}

navToggle.addEventListener('click', openMenu);
navClose.addEventListener('click', closeAll);
overlay.addEventListener('click', closeAll);

// close with the Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
});

// =============== search ===============
searchBtn.addEventListener('click', () => {
    searchBox.classList.toggle('show-search');
    if (searchBox.classList.contains('show-search')) searchInput.focus();
});

// go to the home page and show the results there
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const word = searchInput.value.trim();
    window.location.href = 'home.html?search=' + encodeURIComponent(word) + '#products';
});

// =============== cart ===============
// the cart is saved in the browser, so it stays when you change pages
let cart = JSON.parse(localStorage.getItem('umber-rose-cart')) || [];

function saveCart(){
    localStorage.setItem('umber-rose-cart', JSON.stringify(cart));
    renderCart();
}

function addToCart(id){
    const item = cart.find(i => i.id === id);

    if (item){
        item.qty += 1;
    } else {
        cart.push({ id: id, qty: 1 });
    }

    saveCart();
    showToast(getProduct(id).name + ' added to cart');
}

function changeQty(id, amount){
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.qty += amount;

    // if the number goes to 0, remove it
    if (item.qty <= 0){
        removeFromCart(id);
        return;
    }
    saveCart();
}

function removeFromCart(id){
    cart = cart.filter(i => i.id !== id);
    saveCart();
}

function renderCart(){
    let total = 0;
    let count = 0;

    if (cart.length === 0){
        cartItemsBox.innerHTML = '<p class="cart-empty">Your cart is empty.<br>Add something you like!</p>';
    } else {
        cartItemsBox.innerHTML = cart.map(item => {
            const p = getProduct(item.id);
            total += p.price * item.qty;
            count += item.qty;

            return `
                <div class="cart-item">
                    <img src="${p.img}" alt="${p.name}">
                    <div>
                        <h3>${p.name}</h3>
                        <span class="price">$${p.price.toFixed(2)}</span>
                        <div class="qty">
                            <button data-qty="-1" data-id="${p.id}" aria-label="Less">-</button>
                            <span>${item.qty}</span>
                            <button data-qty="1" data-id="${p.id}" aria-label="More">+</button>
                        </div>
                    </div>
                    <button class="remove-btn" data-remove="${p.id}" aria-label="Remove">
                        <i class="ri-delete-bin-line"></i>
                    </button>
                </div>`;
        }).join('');
    }

    cartTotalEl.textContent = '$' + total.toFixed(2);
    cartCountEl.textContent = count;
}

// open and close the cart
cartBtn.addEventListener('click', () => {
    cartBox.classList.add('show-cart');
    overlay.classList.add('show');
});
cartClose.addEventListener('click', closeAll);

// one listener for all the buttons inside the cart
cartItemsBox.addEventListener('click', (e) => {
    const qtyBtn = e.target.closest('[data-qty]');
    const removeBtn = e.target.closest('[data-remove]');

    if (qtyBtn) changeQty(Number(qtyBtn.dataset.id), Number(qtyBtn.dataset.qty));
    if (removeBtn) removeFromCart(Number(removeBtn.dataset.remove));
});

// every button with data-add="ID" adds that product (works for buttons made later too)
document.addEventListener('click', (e) => {
    const addBtn = e.target.closest('[data-add]');
    if (addBtn) addToCart(Number(addBtn.dataset.add));
});

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0){
        showToast('Add a product first');
    } else {
        showToast('This is a demo store, so there is no payment');
    }
});

// =============== small message (toast) ===============
const toast = document.createElement('div');
toast.className = 'toast';
document.body.appendChild(toast);

let toastTimer;
function showToast(text){
    toast.textContent = text;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

// =============== if a photo does not load, show a pink box ===============
const placeholder = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000">' +
    '<rect width="100%" height="100%" fill="#D6ADAD"/>' +
    '<text x="50%" y="50%" fill="#5F4E4A" font-size="36" text-anchor="middle" font-family="sans-serif">Photo not loaded</text></svg>'
);

document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG' && !e.target.dataset.fallback){
        e.target.dataset.fallback = 'true';
        e.target.src = placeholder;
    }
}, true);

// show the saved cart when the page opens
renderCart();
