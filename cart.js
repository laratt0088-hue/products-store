// Load cart items
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    loadCartItems();
    updateCartSummary();
});

// Load cart items
function loadCartItems() {
    const cartItems = document.getElementById('cartItems');
    if (!cartItems) return;

    const currentLang = localStorage.getItem('language') || 'en';
    const isArabic = currentLang === 'ar';

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3 data-key="emptyCart">${isArabic ? 'سلة التسوق فارغة' : 'Your cart is empty'}</h3>
                <p data-key="emptyCartMessage">${isArabic ? 'ابدأ التسوق لإضافة منتجات إلى سلة التسوق!' : 'Start shopping to add items to your cart!'}</p>
                <a href="index.html" class="continue-shopping" style="display: inline-block; margin-top: 1rem; padding: 0.75rem 1.5rem; background: var(--primary-color); color: white; border-radius: 5px; text-decoration: none;" data-key="continueShopping">${isArabic ? 'متابعة التسوق' : 'Continue Shopping'}</a>
            </div>
        `;
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <!-- CART ITEM IMAGE: Displaying cart item image for ${isArabic ? (item.nameAr || item.name) : item.name} (Product ID: ${item.id}) - Quantity: ${item.quantity} -->
                <img src="${item.image || 'images/product-' + item.id + '.jpg'}" alt="${isArabic ? (item.nameAr || item.name) : item.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#f0f0f0;color:#999;font-size:0.7rem\'>${isArabic ? 'صورة' : 'Image'}</div>'">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${isArabic ? (item.nameAr || item.name) : item.name}</div>
                <div class="cart-item-category">${isArabic ? (item.categoryAr || item.category) : item.category}</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span style="padding: 0 1rem; font-weight: 600;">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-item-btn" onclick="removeItem(${item.id})">
                        <i class="fas fa-trash"></i> <span data-key="remove">${isArabic ? 'إزالة' : 'Remove'}</span>
                    </button>
                </div>
            </div>
            <div class="cart-item-price">${formatPrice(item.price * item.quantity).formatted}</div>
        </div>
    `).join('');
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        removeItem(productId);
        return;
    }

    if (typeof saveUserCart === 'function') {
        saveUserCart(cart);
    } else {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    loadCartItems();
    updateCartSummary();
    updateCartCount();
}

// Remove item
function removeItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    if (typeof saveUserCart === 'function') {
        saveUserCart(cart);
    } else {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    loadCartItems();
    updateCartSummary();
    updateCartCount();
}

// Update cart summary
function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 5.00 : 0;
    const total = subtotal + shipping;

    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const totalEl = document.getElementById('total');

    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal).formatted;
    if (shippingEl) shippingEl.textContent = formatPrice(shipping).formatted;
    if (totalEl) totalEl.textContent = formatPrice(total).formatted;
}

// Listen for language and currency changes
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('languageChanged', function() {
        loadCartItems();
        updateCartSummary();
    });
    
    window.addEventListener('currencyChanged', function() {
        loadCartItems();
        updateCartSummary();
    });
});

