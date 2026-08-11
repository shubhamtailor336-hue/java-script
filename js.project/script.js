// E-commerce script: fetch products from fakestoreapi and implement cart with add/remove and + / - quantity
const API = 'https://fakestoreapi.com/products';
const productsEl = document.getElementById('products');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const clearCartBtn = document.getElementById('clearCartBtn');

let products = [];
let cart = {}; // { [id]: { product, qty } }

// Fetch products from provided API
fetch(API)
  .then((res) => res.json())
  .then((data) => {
    products = data;
    renderProducts();
  })
  .catch((err) => {
    console.error('Failed to load products', err);
    productsEl.textContent = 'Failed to load products.';
  });

function renderProducts() {
  if (!products.length) {
    productsEl.textContent = 'No products found.';
    return;
  }

  productsEl.innerHTML = '';
  products.forEach((p) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.image}" alt="${escapeHtml(p.title)}" />
      <h3 title="${escapeHtml(p.title)}">${escapeHtml(truncate(p.title, 60))}</h3>
      <p class="price">$${p.price.toFixed(2)}</p>
      <div class="actions">
        <button class="add-btn" data-id="${p.id}">Add to cart</button>
      </div>
    `;
    productsEl.appendChild(card);
  });
}

// Simple utilities
function truncate(str, n) {
  return str.length > n ? str.slice(0, n - 1) + '…' : str;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Add product to cart (or increase qty)
function addToCart(id) {
  const prod = products.find((p) => p.id === Number(id));
  if (!prod) return;
  if (!cart[id]) cart[id] = { product: prod, qty: 0 };
  cart[id].qty += 1;
  renderCart();
}

// Remove entirely from cart
function removeFromCart(id) {
  delete cart[id];
  renderCart();
}

// Change quantity by delta (+1 or -1)
function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) delete cart[id];
  renderCart();
} 

// Render cart list and totals
function renderCart() {
  const ids = Object.keys(cart);
  if (!ids.length) {
    cartItemsEl.innerHTML = '<p>Your cart is empty</p>';
    cartTotalEl.textContent = '0.00';
    return;
  }

  cartItemsEl.innerHTML = '';
  let total = 0;

  ids.forEach((id) => {
    const { product, qty } = cart[id];
    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    const lineTotal = product.price * qty;
    total += lineTotal;

    itemEl.innerHTML = `
      <div class="cart-item-left">
        <img src="${product.image}" alt="${escapeHtml(product.title)}" />
        <div>
          <div class="cart-title">${escapeHtml(truncate(product.title, 40))}</div>
          <div class="cart-price">$${product.price.toFixed(2)} x ${qty} = $${lineTotal.toFixed(2)}</div>
        </div>
      </div>
      <div class="cart-item-actions">
        <button class="qty-btn" data-action="decrease" data-id="${id}">-</button>
        <span class="qty">${qty}</span>
        <button class="qty-btn" data-action="increase" data-id="${id}">+</button>
        <button class="remove-btn" data-id="${id}">Remove</button>
      </div>
    `;

    cartItemsEl.appendChild(itemEl);
  });

  cartTotalEl.textContent = total.toFixed(2);
}

// Event delegation for product "Add to cart" buttons
productsEl.addEventListener('click', (e) => {
  const btn = e.target.closest('.add-btn');
  if (!btn) return;
  const id = btn.dataset.id;
  addToCart(id);
});

// Event delegation for cart actions (+ - remove)
cartItemsEl.addEventListener('click', (e) => {
  const inc = e.target.closest('.qty-btn');
  if (inc) {
    const id = inc.dataset.id;
    const action = inc.dataset.action;
    changeQty(id, action === 'increase' ? 1 : -1);
    return;
  }

  const rem = e.target.closest('.remove-btn');
  if (rem) {
    const id = rem.dataset.id;
    removeFromCart(id);
  }
});

clearCartBtn.addEventListener('click', () => {
  cart = {};
  renderCart();
});

// Initial render for empty cart
renderCart();
