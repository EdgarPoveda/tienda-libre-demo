const deals = [
  {id:1, title:'Tablet 10″', price:450000, discount:20},
  {id:2, title:'Laptop Ryzen 5', price:2400000, discount:15},
  {id:3, title:'Audífonos Gamer', price:320000, discount:25}
];
const recommended = [
  {id:4, title:'Zapatos deportivos', price:180000},
  {id:5, title:'Smartwatch', price:280000},
  {id:6, title:'Camiseta 2025', price:120000}
];

let cart = [];

function renderProducts(list, containerId, isDeal=false) {
  const cont = document.getElementById(containerId);
  cont.innerHTML = '';
  list.forEach(p => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="https://via.placeholder.com/200" alt="${p.title}">
      <h3>${p.title}</h3>
      <p class="price">$${(p.price / 1000).toLocaleString()} ${isDeal && p.discount ? `<span class="discount">-${p.discount}%</span>` : ''}</p>
      <button data-id="${p.id}">Agregar al carrito</button>
    `;
    cont.appendChild(card);
  });
}

function setupCartButtons() {
  document.querySelectorAll('.product-card button').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      cart.push(id);
      document.getElementById('cartCount').textContent = cart.length;
    });
  });
}

function searchProducts() {
  const term = document.getElementById('searchInput').value.toLowerCase();
  const filtered = [...deals, ...recommended].filter(p =>
    p.title.toLowerCase().includes(term)
  );
  renderProducts(filtered, 'recommendedContainer', false);
  setupCartButtons();
}

function init() {
  renderProducts(deals, 'dealsContainer', true);
  renderProducts(recommended, 'recommendedContainer', false);
  setupCartButtons();
  document.getElementById('searchBtn').addEventListener('click', searchProducts);
}
init();
