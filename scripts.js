// Datos de productos
const products = [
    {
        id: 1,
        name: "Arroz Premium 1kg",
        price: 120,
        category: "food",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
        description: "Arroz de alta calidad"
    },
    {
        id: 2,
        name: "Frijoles Negros 500g",
        price: 85,
        category: "food",
        image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=400",
        description: "Frijoles selectos"
    },
    {
        id: 3,
        name: "Aceite Vegetal 1L",
        price: 250,
        category: "food",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
        description: "Aceite refinado"
    },
    {
        id: 4,
        name: "Jabón de Lavar",
        price: 45,
        category: "home",
        image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=400",
        description: "Jabón multiusos"
    },
    {
        id: 5,
        name: "Detergente Líquido",
        price: 180,
        category: "home",
        image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400",
        description: "Para ropa delicada"
    },
    {
        id: 6,
        name: "Pasta Dental",
        price: 95,
        category: "personal",
        image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=400",
        description: "Protección total"
    },
    {
        id: 7,
        name: "Shampoo 400ml",
        price: 220,
        category: "personal",
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400",
        description: "Para todo tipo de cabello"
    },
    {
        id: 8,
        name: "Reparación de Plomería",
        price: 500,
        category: "services",
        image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400",
        description: "Servicio a domicilio"
    }
];

// Carrito
let cart = [];

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// Renderizar productos
function renderProducts(filter = 'all') {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    
    const filtered = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);
    
    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">$${product.price}</div>
                <div class="product-actions">
                    <button class="btn-add" onclick="addToCart(${product.id})">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filtrar productos
function filterProducts(category) {
    // Actualizar botones activos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderProducts(category);
}

// Agregar al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartCount();
    showNotification('Producto agregado al carrito');
}

// Actualizar contador del carrito
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// Abrir/cerrar carrito
function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.classList.toggle('active');
    
    if (modal.classList.contains('active')) {
        renderCartItems();
    }
}

// Renderizar items del carrito
function renderCartItems() {
    const container = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#6b7280; padding:2rem;">Tu carrito está vacío</p>';
        document.getElementById('cartTotal').textContent = '0';
        return;
    }
    
    container.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price}</div>
                <div class="cart-item-quantity">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
        `;
        container.appendChild(itemDiv);
    });
    
    document.getElementById('cartTotal').textContent = total;
}

// Actualizar cantidad
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
        updateCartCount();
        renderCartItems();
    }
}

// Enviar a WhatsApp
function sendToWhatsApp() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    let message = '¡Hola! Quiero hacer un pedido de El Resolvito:\n\n';
    let total = 0;
    
    cart.forEach(item => {
        message += `• ${item.name} x${item.quantity} - $${item.price * item.quantity}\n`;
        total += item.price * item.quantity;
    });
    
    message += `\nTotal: $${total}`;
    message += '\n\nMi dirección: [Escribe tu dirección aquí]';
    
    const phone = '5356382909';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Scroll a productos
function scrollToProducts() {
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
}

// Scroll a servicios
function scrollToServices() {
    filterProducts('services');
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
}

// Notificación simple
function showNotification(message) {
    // Crear elemento de notificación
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #0d3b33;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
        z-index: 3000;
        animation: slideUp 0.3s;
    `;
    notif.textContent = message;
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.remove();
    }, 3000);
}