// Load checkout page
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    loadOrderSummary();
    setupFormValidation();
    
    // Check if cart is empty
    if (cart.length === 0) {
        const currentLang = localStorage.getItem('language') || 'en';
        const message = currentLang === 'ar' 
            ? 'سلة التسوق فارغة. إعادة التوجيه إلى الصفحة الرئيسية...'
            : 'Your cart is empty. Redirecting to home page...';
        alert(message);
        window.location.href = 'index.html';
    }
    
    // Listen for language changes
    window.addEventListener('languageChanged', function() {
        loadOrderSummary();
    });
    
    // Listen for currency changes
    window.addEventListener('currencyChanged', function() {
        loadOrderSummary();
    });
});

// Load order summary
function loadOrderSummary() {
    const orderItems = document.getElementById('orderItems');
    if (!orderItems) return;

    const currentLang = localStorage.getItem('language') || 'en';
    const isArabic = currentLang === 'ar';
    const qtyText = isArabic ? 'الكمية' : 'Qty';

    orderItems.innerHTML = cart.map(item => `
        <div class="order-item">
            <div class="order-item-image">
                <!-- CHECKOUT ORDER ITEM IMAGE: Displaying order summary image for ${isArabic ? (item.nameAr || item.name) : item.name} (Product ID: ${item.id}) - Quantity: ${item.quantity} -->
                <img src="${item.image || 'images/product-' + item.id + '.jpg'}" alt="${isArabic ? (item.nameAr || item.name) : item.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#f0f0f0;color:#999;font-size:0.6rem\'>${isArabic ? 'صورة' : 'Img'}</div>'">
            </div>
            <div class="order-item-info">
                <div class="order-item-name">${isArabic ? (item.nameAr || item.name) : item.name}</div>
                <div class="order-item-details">${qtyText}: ${item.quantity} × ${formatPrice(item.price).formatted}</div>
            </div>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 5.00;
    const total = subtotal + shipping;

    const subtotalEl = document.getElementById('checkoutSubtotal');
    const shippingEl = document.getElementById('checkoutShipping');
    const totalEl = document.getElementById('checkoutTotal');

    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal).formatted;
    if (shippingEl) shippingEl.textContent = formatPrice(shipping).formatted;
    if (totalEl) totalEl.textContent = formatPrice(total).formatted;
}

// Setup form validation
function setupFormValidation() {
    const form = document.getElementById('checkoutForm');
    if (!form) return;

    // Card number formatting
    const cardNumber = document.getElementById('cardNumber');
    if (cardNumber) {
        cardNumber.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });
    }

    // Expiry date formatting
    const expiryDate = document.getElementById('expiryDate');
    if (expiryDate) {
        expiryDate.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }

    // CVV formatting
    const cvv = document.getElementById('cvv');
    if (cvv) {
        cvv.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    }

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            processOrder();
        }
    });
}

// Validate form
function validateForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const postalCode = document.getElementById('postalCode').value.trim();
    const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    const currentLang = localStorage.getItem('language') || 'en';
    const isArabic = currentLang === 'ar';

    if (!fullName || !email || !phone || !address || !city || !postalCode) {
        alert(isArabic ? 'يرجى ملء جميع الحقول المطلوبة.' : 'Please fill in all required fields.');
        return false;
    }

    if (!validateEmail(email)) {
        alert(isArabic ? 'يرجى إدخال عنوان بريد إلكتروني صحيح.' : 'Please enter a valid email address.');
        return false;
    }

    if (cardNumber.length < 13 || cardNumber.length > 19) {
        alert(isArabic ? 'يرجى إدخال رقم بطاقة صحيح.' : 'Please enter a valid card number.');
        return false;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        alert(isArabic ? 'يرجى إدخال تاريخ انتهاء صحيح (MM/YY).' : 'Please enter a valid expiry date (MM/YY).');
        return false;
    }

    if (cvv.length !== 3) {
        alert(isArabic ? 'يرجى إدخال رمز الأمان صحيح.' : 'Please enter a valid CVV.');
        return false;
    }

    return true;
}

// Validate email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Process order
function processOrder() {
    // Simulate order processing
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'block';
        
        // Clear cart
        cart = [];
        if (typeof saveUserCart === 'function') {
            saveUserCart(cart);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        updateCartCount();
    }

    // Close modal on X click
    const closeModal = document.querySelector('.close-modal');
    if (closeModal) {
        closeModal.onclick = function() {
            modal.style.display = 'none';
            window.location.href = 'index.html';
        };
    }

    // Close modal on outside click
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            window.location.href = 'index.html';
        }
    };
}

