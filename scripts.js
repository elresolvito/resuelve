// Productos reales de El Resolvito
const products = [
    { id: 1, name: "Atún", category: "Alimentos y conservas", price: 500, image: "https://i.postimg.cc/76xHK6zt/atun_precio_500.png", description: "Lata estándar 200g" },
    { id: 2, name: "Pasta de tomate", category: "Alimentos y conservas", price: 380, image: "https://i.postimg.cc/gjjYPTNv/pasta_tomate_precio_350.png", description: "400 g" },
    { id: 3, name: "Aceitunas Verdes", category: "Alimentos y conservas", price: 750, image: "https://i.postimg.cc/4yyJTSBj/pimiento_presio_750.png", description: "Rodajas con Pimiento" },
    { id: 4, name: "Café Dualis", category: "Alimentos y conservas", price: 1450, image: "https://i.postimg.cc/WbZBX2hN/cafe_dualis_250_g_precio_1450.png", description: "Paquete 250 g" },
    { id: 5, name: "Café Dufiltro", category: "Alimentos y conservas", price: 1450, image: "https://i.postimg.cc/hG26fv31/cafe_Dufiltro_250_g_precio_1450.png", description: "Paquete 250 g" },
    { id: 6, name: "Pan rallado Enepa", category: "Alimentos y conservas", price: 450, image: "https://i.postimg.cc/qvQwHpNJ/pan-rallado.webp", description: "Paquete para empanar" },
    { id: 7, name: "Cartón de huevo", category: "Alimentos y conservas", price: 3000, image: "https://i.postimg.cc/sDWkwVvv/carton_de_huevo_30_u_precio_3100.png", description: "30 unidades" },
    { id: 8, name: "Leche condensada", category: "Alimentos y conservas", price: 520, image: "https://i.postimg.cc/tT2XwjtT/leche_condensada.png", description: "397 g" },
    { id: 9, name: "Harina blanca", category: "Alimentos y conservas", price: 600, image: "https://i.postimg.cc/3xc2NHFB/harina_blanca1_kg.png", description: "Paquete 1 Kg" },
    { id: 10, name: "Chicoticos Pelly", category: "Snacks y golosinas", price: 400, image: "https://i.postimg.cc/1zv2fXjZ/chicoticos_pelly_90_g_precio_400.png", description: "Paquete 90 g" },
    { id: 11, name: "Papitas Campesinas", category: "Snacks y golosinas", price: 690, image: "https://i.postimg.cc/cLgrDtf9/papitas_campesinas_precio_690.png", description: "Paquete papas fritas" },
    { id: 12, name: "Pelly de Jamón", category: "Snacks y golosinas", price: 580, image: "https://i.postimg.cc/pdQV7frX/pelly_jamon_precio_580.png", description: "Snack de maíz" },
    { id: 13, name: "Mayonesa Mediana", category: "Salsas", price: 850, image: "https://i.postimg.cc/KzJZw2rR/mayonesa_precio_850.png", description: "Frasco mediano" },
    { id: 14, name: "Mayonesa Grande", category: "Salsas", price: 1100, image: "https://i.postimg.cc/Px2t9jzz/mayonesa_precio1100.png", description: "Frasco grande" },
    { id: 15, name: "Cuchilla de Afeitar", category: "Higiene personal", price: 100, image: "https://i.postimg.cc/8CdkdW7x/cuchilla_de_afeitar_precio_100.png", description: "Unidad desechable" },
    { id: 16, name: "Jabón Marwa", category: "Higiene personal", price: 150, image: "https://i.postimg.cc/3RK8tRpR/jabon_marwa_precio_150.png", description: "Pastilla de tocador" },
    { id: 17, name: "Papel Sanitario", category: "Higiene personal", price: 490, image: "https://i.postimg.cc/bwW289qD/papel_sanitario_precio_490i.png", description: "Paquete suave" },
    { id: 18, name: "Toallas Sanitarias", category: "Higiene personal", price: 450, image: "https://i.postimg.cc/KjjZyH0b/toallas_sanitarias_precio_450.png", description: "Paquete con alas" },
    { id: 19, name: "Toallas Húmedas", category: "Higiene personal", price: 690, image: "https://i.postimg.cc/W4ZSP3cw/toallas_humedas_precio_690.png", description: "Paquete limpieza" },
    { id: 20, name: "Jabón de Lavar", category: "Aseo del hogar", price: 250, image: "https://i.postimg.cc/V6YfK6Mz/jabon_de_lavar_precio_250.png", description: "Pastilla de lavar" },
    { id: 21, name: "Perfume Candy", category: "Perfumes y desodorantes", price: 3100, image: "https://i.postimg.cc/vTgJRyhp/perfume_candy_precio_3100.png", description: "Frasco 50 ml" },
    { id: 22, name: "Perfume Genérico", category: "Perfumes y desodorantes", price: 3100, image: "https://i.postimg.cc/ZKrT0PPG/perfume_precio_3100.png", description: "50 ml surtido" },
    { id: 23, name: "Perfume Q", category: "Perfumes y desodorantes", price: 3100, image: "https://i.postimg.cc/CL03P3Dn/perfume_q_precio_3100.png", description: "Frasco 50 ml" },
    { id: 24, name: "Desodorante Obao", category: "Perfumes y desodorantes", price: 1100, image: "https://i.postimg.cc/PxtXSxD2/desodorante_obao_precio_1100.png", description: "Roll-on" },
    { id: 25, name: "Desodorante Rush Blanco", category: "Perfumes y desodorantes", price: 650, image: "https://i.postimg.cc/FR9rTRS8/desodorante_rush_blanco_precio_1000.png", description: "Roll-on" },
    { id: 26, name: "Desodorante Rush", category: "Perfumes y desodorantes", price: 650, image: "https://i.postimg.cc/sXVjTXSF/desodorante_rush_precio_1000.png", description: "Roll-on surtido" },
    { id: 27, name: "Colonia Niña", category: "Perfumes y desodorantes", price: 1100, image: "https://i.postimg.cc/G3v04rsM/colonia_nina.png", description: "100 ml infantil" },
    { id: 28, name: "Macarrones", category: "Pastas y fideos", price: 300, image: "https://i.postimg.cc/Hsmz1H69/macarrones_precio_300.png", description: "Bolsa 460 g" },
    { id: 29, name: "Sopas instantáneas", category: "Pastas y fideos", price: 160, image: "https://i.postimg.cc/FzNTpQqK/sopas_instantaneas_precio_160.png", description: "Paquete individual" },
    { id: 30, name: "Licor de fresa", category: "Bebidas", price: 2500, image: "https://i.postimg.cc/59YT2x5p/licor_de_fresa_precio_2500.png", description: "Botella crema fresa" },
    { id: 31, name: "Licor Cocobay", category: "Bebidas", price: 2500, image: "https://i.postimg.cc/7ZDW90Fz/locor_cocobay_precio_2500.png", description: "Botella licor coco" },
    { id: 32, name: "Whisky Spirit 200 ml", category: "Bebidas", price: 320, image: "https://i.postimg.cc/4N8W6q1t/tea_precio_320.png", description: "Botella pequeña" },
    { id: 33, name: "Whisky Sir Albin 1L", category: "Bebidas", price: 1350, image: "https://i.postimg.cc/cLyrb4T0/whisky_1L_precio_1350.png", description: "Botella grande" },
    { id: 34, name: "Whisky Sir Albin 500ml", category: "Bebidas", price: 550, image: "https://i.postimg.cc/y84kbYnC/whisky_sir_albin_precio_550.png", description: "Botella mediana" },
    { id: 35, name: "Vino Pluvium", category: "Bebidas", price: 1200, image: "https://i.postimg.cc/XNLLWmmx/vino_pluvium_precio_1200.png", description: "Botella vino tinto" },
    { id: 36, name: "Baterías Triple A", category: "Electrónicos y accesorios", price: 300, image: "https://i.postimg.cc/DZ2vxZsT/Gemini_Generated_Image_824rio824rio824r.png", description: "Pack 4 unidades" },
    { id: 37, name: "Cerveza Cristal", category: "Bebidas", price: 300, image: "https://i.postimg.cc/d1JxDCW3/cervaza-cristal-1.jpg", description: "Lata 355ml" },
    { id: 38, name: "Cerveza Holland Import", category: "Bebidas", price: 230, image: "https://i.postimg.cc/nLn8gryr/cerveza-holland-(1).png", description: "Lata cerveza importada" },
    { id: 39, name: "Refresco Pepsi", category: "Bebidas", price: 260, image: "https://i.postimg.cc/ZY7psrx7/pepsi.webp", description: "Lata refresco" },
    { id: 40, name: "Jugo YES 1L", category: "Bebidas", price: 620, image: "https://i.postimg.cc/fy2cxdBH/jugo_j.png", description: "Tetrapack mango/manzana" },
    { id: 41, name: "Agua Embotellada", category: "Bebidas", price: 650, image: "https://i.postimg.cc/m2gVtL8J/agua.png", description: "Botella 1.5L" },
    { id: 42, name: "Frijoles Negros", category: "Alimentos y conservas", price: 820, image: "https://i.postimg.cc/wvkcjZNf/frijol_negro.png", description: "Paquete granos" },
    { id: 43, name: "Avena en Hojuelas", category: "Alimentos y conservas", price: 600, image: "https://i.postimg.cc/sDHmWkNL/avena.png", description: "Paquete avena integral" },
    { id: 44, name: "Espaguetis", category: "Pastas y fideos", price: 270, image: "https://via.placeholder.com/300x300/0d3b33/ffffff?text=Espaguetis", description: "Paquete pasta larga" },
    { id: 45, name: "Patatas Fritas 1kg", category: "Congelados", price: 1200, image: "https://i.postimg.cc/rs76dmR8/patatas_fritas.png", description: "Bolsa congelada" },
    { id: 46, name: "Nuggets de Pollo", category: "Congelados", price: 550, image: "https://i.postimg.cc/KYSnrxDm/nuggets_de_pollo.webp", description: "Paquete empanado" },
    { id: 47, name: "Atole Sobre", category: "Alimentos y conservas", price: 400, image: "https://i.postimg.cc/fTqCdGPh/atole.png", description: "Mezcla en polvo" },
    { id: 48, name: "Croquetas sabor Jamón", category: "Congelados", price: 450, image: "https://i.postimg.cc/br4XGJSy/cdroquetas_sabor_jamon.png", description: "Bolsa de croquetas" },
    { id: 49, name: "Detergente Tid", category: "Aseo del hogar", price: 630, image: "https://i.postimg.cc/3RhF7YkZ/detergente.png", description: "Bolsa detergente polvo" },
    { id: 50, name: "Aceite", category: "Alimentos y conservas", price: 990, image: "https://i.postimg.cc/hPZsmk5N/aceite.png", description: "Botella de aceite vegetal" },
    { id: 51, name: "Bocaditos de Pollo", category: "Congelados", price: 550, image: "https://i.postimg.cc/GpGxZHmd/bocadito_de_pollo.png", description: "Bocaditos crujientes" },
    { id: 52, name: "Jabón de Carbón", category: "Higiene personal", price: 200, image: "https://i.postimg.cc/Y9xfCZgB/jabon_carbon.png", description: "Jabón artesanal" },
    { id: 53, name: "Ketchup", category: "Salsas", price: 450, image: "https://i.postimg.cc/15XcyWzm/ketchup.png", description: "Salsa de tomate" },
    { id: 54, name: "Mostaza", category: "Salsas", price: 450, image: "https://i.postimg.cc/L6Wk5zqs/mostaza.png", description: "Salsa de mostaza" },
    { id: 55, name: "Cerveza Parranda", category: "Bebidas", price: 250, image: "https://i.postimg.cc/d31dt1w9/parranda.webp", description: "Cerveza clara" },
    { id: 56, name: "Lomo de Res", category: "Congelados", price: 800, image: "https://i.postimg.cc/nh7mLNbw/res.webp", description: "Corte de res fresco 250g" },
    { id: 57, name: "Vinagreta", category: "Salsas", price: 350, image: "https://i.postimg.cc/g0WZL4m5/vinagret.webp", description: "Salsa para ensaladas" }
];

// Carrito
let cart = [];

// Categorías únicas
const categories = [...new Set(products.map(p => p.category))];

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
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

// Renderizar categorías en filtros
function renderCategories() {
    const container = document.getElementById('filterTags');
    
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'filter-tag';
        btn.textContent = cat;
        btn.onclick = () => filterCategory(cat);
        container.appendChild(btn);
    });
}

// Renderizar productos
function renderProducts(category = 'all') {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    
    const filtered = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/300x300/0d3b33/ffffff?text=${encodeURIComponent(product.name)}'">
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">$${product.price}</div>
                <button class="btn-add" onclick="addToCart(${product.id})">
                    Agregar al carrito
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filtrar por categoría
function filterCategory(category) {
    // Actualizar botones activos
    document.querySelectorAll('.filter-tag').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === category || (category === 'all' && btn.textContent === 'Todos')) {
            btn.classList.add('active');
        }
    });
    
    renderProducts(category);
    
    // Scroll a productos si no estamos ahí
    if (window.scrollY < 400) {
        document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
    }
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
    showNotification(`${product.name} agregado al carrito`);
}

// Actualizar contador
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// Toggle carrito
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
        container.innerHTML = '<p style="text-align:center; color:#6b7280; padding:3rem 1rem;">Tu carrito está vacío<br>¡Agrega algunos productos!</p>';
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
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/60x60/0d3b33/ffffff?text=${item.name.charAt(0)}'">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price} c/u</div>
                <div class="cart-item-quantity">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
        `;
        container.appendChild(itemDiv);
    });
    
    document.getElementById('cartTotal').textContent = total.toLocaleString();
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
    
    let message = '¡Hola! Quiero hacer un pedido de *El Resolvito*:\n\n';
    let total = 0;
    
    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        message += `• ${item.name} x${item.quantity} = $${subtotal}\n`;
        total += subtotal;
    });
    
    message += `\n*Total: $${total}*`;
    message += '\n\nMi dirección: _[Escribe tu dirección aquí]_';
    
    const phone = '5356382909';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Scroll a productos
function scrollToProducts() {
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
}

// Notificación
function showNotification(message) {
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideUp 0.3s ease;
        font-weight: 500;
    `;
    notif.textContent = message;
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => notif.remove(), 300);
    }, 2500);
}
