// =============== 1. hero slider ===============
const heroIds = [1, 5, 2];   // which products appear in the hero
const slidesBox = document.getElementById('hero-slides');
const dotsBox = document.getElementById('hero-dots');

slidesBox.innerHTML = heroIds.map((id, i) => {
    const p = getProduct(id);
    return `
        <article class="slide container ${i === 0 ? 'active' : ''}">
            <div class="slide-text">
                <h1>${p.name}</h1>
                <p>${p.desc}</p>
                <button class="btn" data-more="${p.id}">Read more</button>
            </div>
            <div class="slide-img">
                <img src="${p.img}" alt="${p.name}">
            </div>
        </article>`;
}).join('');

dotsBox.innerHTML = heroIds.map((id, i) =>
    `<button class="dot ${i === 0 ? 'active' : ''}" data-dot="${i}" aria-label="Slide ${i + 1}"></button>`
).join('');

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let current = 0;
let timer;

function showSlide(n){
    // go around: after the last comes the first
    current = (n + slides.length) % slides.length;

    slides.forEach((s, i) => s.classList.toggle('active', i === current));
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
}

// the slider moves by itself every 5 seconds
function startTimer(){
    clearInterval(timer);
    timer = setInterval(() => showSlide(current + 1), 5000);
}

document.getElementById('hero-next').addEventListener('click', () => { showSlide(current + 1); startTimer(); });
document.getElementById('hero-prev').addEventListener('click', () => { showSlide(current - 1); startTimer(); });
dotsBox.addEventListener('click', (e) => {
    const dot = e.target.closest('[data-dot]');
    if (dot){ showSlide(Number(dot.dataset.dot)); startTimer(); }
});

startTimer();

// =============== 2. products ===============
const productsGrid = document.getElementById('products-grid');
const productsTitle = document.getElementById('products-title');

function showProducts(list){
    if (list.length === 0){
        productsGrid.innerHTML = '<p class="no-result">No product found. Try another word.</p>';
        return;
    }

    productsGrid.innerHTML = list.map(p => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}" loading="lazy">
            <div class="product-info">
                <small>${p.category}</small>
                <h3>${p.name}</h3>
                <span class="price">$${p.price.toFixed(2)}</span>
                <button class="btn" data-add="${p.id}">Add to cart</button>
            </div>
        </div>`).join('');
}

// if the user searched, show only matching products
const searchWord = (new URLSearchParams(window.location.search).get('search') || '').toLowerCase();

if (searchWord){
    productsTitle.textContent = 'Results for "' + searchWord + '"';
    showProducts(products.filter(p =>
        p.name.toLowerCase().includes(searchWord) ||
        p.category.toLowerCase().includes(searchWord)
    ));
} else {
    showProducts(products);
}

// =============== 3. product details window ===============
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalPrice = document.getElementById('modal-price');
const modalText = document.getElementById('modal-text');
const modalAdd = document.getElementById('modal-add');

function openModal(id){
    const p = getProduct(id);
    modalImg.src = p.img;
    modalImg.dataset.fallback = '';
    modalName.textContent = p.name;
    modalPrice.textContent = '$' + p.price.toFixed(2);
    modalText.textContent = p.details;
    modalAdd.dataset.add = p.id;
    modal.classList.add('open');
}

function closeModal(){
    modal.classList.remove('open');
}

slidesBox.addEventListener('click', (e) => {
    const more = e.target.closest('[data-more]');
    if (more) openModal(Number(more.dataset.more));
});

document.getElementById('modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// =============== 4. color slider ===============
const colorImg = document.getElementById('color-img');
const colorName = document.getElementById('color-name');
const colorPrice = document.getElementById('color-price');
const colorAdd = document.getElementById('color-add');
const swatchesBox = document.getElementById('swatches');

let colorIndex = 0;

swatchesBox.innerHTML = colorProducts.map((c, i) =>
    `<button class="swatch" data-swatch="${i}" style="background:${c.color}" aria-label="${c.colorName}"></button>`
).join('');

const swatches = document.querySelectorAll('.swatch');

function showColor(n){
    colorIndex = (n + colorProducts.length) % colorProducts.length;
    const c = colorProducts[colorIndex];

    colorImg.dataset.fallback = '';
    colorImg.src = c.img;
    colorImg.alt = c.name;
    colorName.textContent = c.colorName;
    colorPrice.textContent = '$' + c.price.toFixed(2);
    colorAdd.dataset.add = c.id;

    swatches.forEach((s, i) => s.classList.toggle('active', i === colorIndex));
}

document.getElementById('color-next').addEventListener('click', () => showColor(colorIndex + 1));
document.getElementById('color-prev').addEventListener('click', () => showColor(colorIndex - 1));
swatchesBox.addEventListener('click', (e) => {
    const s = e.target.closest('[data-swatch]');
    if (s) showColor(Number(s.dataset.swatch));
});

showColor(0);
