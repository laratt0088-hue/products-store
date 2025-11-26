// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

// Load product details
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    if (productId) {
        loadProductDetails(productId);
        loadRelatedProducts(productId);
    } else {
        window.location.href = 'index.html';
    }
    
    // Listen for language changes
    window.addEventListener('languageChanged', function() {
        if (productId) {
            loadProductDetails(productId);
            loadRelatedProducts(productId);
        }
    });
    
    // Listen for currency changes
    window.addEventListener('currencyChanged', function() {
        if (productId) {
            loadProductDetails(productId);
            loadRelatedProducts(productId);
        }
    });
    
    // Listen for favorites changes
    window.addEventListener('favoritesChanged', function() {
        if (productId) {
            loadProductDetails(productId);
            loadRelatedProducts(productId);
        }
    });
});

// Load product details
function loadProductDetails(id) {
    const product = products.find(p => p.id === id);
    if (!product) {
        window.location.href = 'index.html';
        return;
    }

    const currentLang = localStorage.getItem('language') || 'en';
    const isArabic = currentLang === 'ar';

    const isFavorite = favorites.includes(id);
    const hasSizeVariants = product.sizeVariants && Object.keys(product.sizeVariants).length > 0;
    const stock = product.stock !== undefined ? product.stock : 999;
    const hasDiscount = product.oldPrice && product.oldPrice > product.price;
    const discountPercent = product.discount || (hasDiscount ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0);
    const badge = isArabic ? (product.badgeAr || product.badge) : product.badge;
    const hasOffer = product.offerEndDate && new Date(product.offerEndDate) > new Date();
    
    // Format prices with currency conversion
    const priceFormatted = formatPrice(product.price);
    const oldPriceFormatted = hasDiscount ? formatPrice(product.oldPrice) : null;
    
    // Build size selector HTML if product has size variants
    let sizeSelectorHTML = '';
    if (hasSizeVariants) {
        const sizeLabel = isArabic ? 'اختر المقاس:' : 'Select Size:';
        sizeSelectorHTML = `
            <div class="size-selector-container">
                <label class="size-selector-label">${sizeLabel}</label>
                <div class="size-selector" id="sizeSelector-${product.id}">
                    ${Object.keys(product.sizeVariants).map(sizeKey => {
                        const sizeVariant = product.sizeVariants[sizeKey];
                        const sizeLabelText = isArabic ? sizeVariant.labelAr : sizeVariant.label;
                        const sizeStock = sizeVariant.stock;
                        const isOutOfStock = sizeStock === 0;
                        const isLowStock = sizeStock > 0 && sizeStock <= 7;
                        let stockText = '';
                        if (isOutOfStock) {
                            stockText = isArabic ? 'نفدت الكمية' : 'Out of Stock';
                        } else if (isLowStock) {
                            stockText = isArabic ? `بقي ${sizeStock} فقط!` : `Only ${sizeStock} left!`;
                        }
                        return `
                            <button 
                                class="size-option ${isOutOfStock ? 'out-of-stock' : isLowStock ? 'low-stock' : ''}" 
                                data-size="${sizeKey}"
                                data-stock="${sizeStock}"
                                onclick="selectSize('${sizeKey}', ${product.id})"
                                ${isOutOfStock ? 'disabled' : ''}
                                title="${stockText || ''}"
                            >
                                ${sizeLabelText}
                                ${stockText ? `<span class="size-stock-indicator">${stockText}</span>` : ''}
                            </button>
                        `;
                    }).join('')}
                </div>
                <div class="selected-size-info" id="selectedSizeInfo-${product.id}" style="display: none;">
                    <span id="selectedSizeText-${product.id}"></span>
                </div>
            </div>
        `;
    } else {
        // Show regular stock info if no size variants
        sizeSelectorHTML = `
            <div class="product-stock-detail ${stock === 0 ? 'out-of-stock' : stock <= 5 ? 'low-stock' : ''}">
                ${stock === 0 
                    ? `<i class="fas fa-exclamation-circle"></i> ${isArabic ? 'نفدت الكمية' : 'Out of stock'}`
                    : stock <= 5 
                    ? `<i class="fas fa-exclamation-triangle"></i> ${isArabic ? `⚠️ بقي ${stock} فقط!` : `⚠️ Only ${stock} items left!`}`
                    : ''
                }
            </div>
        `;
    }
    
    const productDetail = document.getElementById('productDetail');
    if (productDetail) {
        productDetail.innerHTML = `
            <div class="product-detail-image">
                <!-- PRODUCT DETAIL PAGE IMAGE: Displaying main product image for ${isArabic ? product.nameAr : product.name} (ID: ${product.id}) - Category: ${isArabic ? product.categoryAr : product.category} -->
                <img src="${product.image}" alt="${isArabic ? product.nameAr : product.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#f0f0f0;color:#999;font-size:1rem\'>${isArabic ? 'صورة المنتج' : 'Product Image'}</div>'">
                ${badge ? `<div class="product-badge product-badge-${badge.toLowerCase().replace(/\s+/g, '-')}">${badge}</div>` : ''}
                <button class="favorite-btn-detail ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${product.id})" title="${isArabic ? (isFavorite ? 'إزالة من المفضلة' : 'إضافة إلى المفضلة') : (isFavorite ? 'Remove from favorites' : 'Add to favorites')}">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="product-detail-info">
                <div class="product-detail-category">${isArabic ? product.categoryAr : product.category}</div>
                <h1>${isArabic ? product.nameAr : product.name}</h1>
                ${sizeSelectorHTML}
                <div class="product-detail-price-container">
                    ${oldPriceFormatted ? `<div class="product-detail-old-price">${oldPriceFormatted.formatted}</div>` : ''}
                    <div class="product-detail-price">${priceFormatted.formatted}</div>
                    ${discountPercent > 0 ? `<div class="product-detail-discount">(${discountPercent}% ${isArabic ? 'خصم' : 'OFF'})</div>` : ''}
                </div>
                ${hasOffer ? `<div class="countdown-timer" id="countdownTimer-${product.id}" data-end-date="${product.offerEndDate}">
                    <i class="fas fa-clock"></i> <span class="countdown-label">${isArabic ? 'ينتهي العرض خلال:' : 'Offer ends in:'}</span>
                    <span class="countdown-time" id="countdown-${product.id}">00:00:00</span>
                </div>` : ''}
                <div class="quantity-selector">
                    <button class="quantity-btn" onclick="decreaseQuantity(${product.id})" id="decreaseBtn-${product.id}" ${!hasSizeVariants && stock === 0 ? 'disabled' : ''}>-</button>
                    <input type="number" class="quantity-input" id="quantity-${product.id}" value="1" min="1" max="${hasSizeVariants ? 10 : Math.min(10, stock)}" ${!hasSizeVariants && stock === 0 ? 'disabled' : ''}>
                    <button class="quantity-btn" onclick="increaseQuantity(${product.id})" id="increaseBtn-${product.id}" ${!hasSizeVariants && stock === 0 ? 'disabled' : ''}>+</button>
                </div>
                <button class="add-to-cart-detail ${hasSizeVariants || stock === 0 ? 'disabled' : ''}" id="addToCartBtn-${product.id}" onclick="addToCartWithQuantity(${product.id})" ${hasSizeVariants || (!hasSizeVariants && stock === 0) ? 'disabled' : ''}>
                    <i class="fas fa-cart-plus"></i> <span data-key="addToCart">${isArabic ? 'أضف للسلة' : 'Add to Cart'}</span>
                </button>
                <div class="product-share-buttons">
                    <button class="share-btn share-whatsapp" onclick="shareProduct('whatsapp', ${product.id})" title="${isArabic ? 'مشاركة عبر واتساب' : 'Share on WhatsApp'}">
                        <i class="fab fa-whatsapp"></i> ${isArabic ? 'واتساب' : 'WhatsApp'}
                    </button>
                    <button class="share-btn share-facebook" onclick="shareProduct('facebook', ${product.id})" title="${isArabic ? 'مشاركة على فيسبوك' : 'Share on Facebook'}">
                        <i class="fab fa-facebook"></i> ${isArabic ? 'فيسبوك' : 'Facebook'}
                    </button>
                    <button class="share-btn share-instagram" onclick="shareProduct('instagram', ${product.id})" title="${isArabic ? 'مشاركة على إنستغرام' : 'Share on Instagram'}">
                        <i class="fab fa-instagram"></i> ${isArabic ? 'إنستغرام' : 'Instagram'}
                    </button>
                </div>
            </div>
        `;
        
        // Start countdown timer if offer exists
        if (hasOffer) {
            startCountdownTimer(product.id, product.offerEndDate);
        }
        
        // Load product tabs
        loadProductTabs(product, isArabic);
    }
}

// Load Product Tabs
function loadProductTabs(product, isArabic) {
    const tabsContainer = document.getElementById('productTabsContainer');
    if (!tabsContainer) return;
    
    const specifications = product.specifications || {};
    const specificationsAr = product.specificationsAr || {};
    const faq = product.faq || [];
    const faqAr = product.faqAr || [];
    const specs = isArabic ? specificationsAr : specifications;
    const faqs = isArabic ? faqAr : faq;
    
    tabsContainer.innerHTML = `
        <div class="product-tabs">
            <button class="tab-btn active" onclick="switchTab('description', ${product.id})" data-tab="description">
                <i class="fas fa-info-circle"></i> ${isArabic ? 'الوصف' : 'Description'}
            </button>
            <button class="tab-btn" onclick="switchTab('specifications', ${product.id})" data-tab="specifications">
                <i class="fas fa-list"></i> ${isArabic ? 'المواصفات' : 'Specifications'}
            </button>
            <button class="tab-btn" onclick="switchTab('reviews', ${product.id})" data-tab="reviews">
                <i class="fas fa-star"></i> ${isArabic ? 'التقييمات' : 'Reviews'}
            </button>
            <button class="tab-btn" onclick="switchTab('faq', ${product.id})" data-tab="faq">
                <i class="fas fa-question-circle"></i> ${isArabic ? 'الأسئلة الشائعة' : 'FAQ'}
            </button>
        </div>
        <div class="tab-content active" id="tab-description-${product.id}">
            <div class="tab-content-inner">
                <h3>${isArabic ? 'الوصف' : 'Description'}</h3>
                <p>${isArabic ? product.descriptionAr : product.description}</p>
            </div>
        </div>
        <div class="tab-content" id="tab-specifications-${product.id}">
            <div class="tab-content-inner">
                <h3>${isArabic ? 'المواصفات' : 'Specifications'}</h3>
                <div class="specifications-list">
                    ${Object.keys(specs).map(key => `
                        <div class="spec-item">
                            <span class="spec-label">${isArabic ? 
                                (key === 'weight' ? 'الوزن' : key === 'ingredients' ? 'المكونات' : key === 'shelfLife' ? 'مدة الصلاحية' : key === 'origin' ? 'المنشأ' : key) :
                                (key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1'))}:</span>
                            <span class="spec-value">${specs[key]}</span>
                        </div>
                    `).join('')}
                    ${product.sku ? `
                        <div class="spec-item">
                            <span class="spec-label">${isArabic ? 'رمز المنتج' : 'SKU'}:</span>
                            <span class="spec-value">${product.sku}</span>
                        </div>
                    ` : ''}
                    ${product.barcode ? `
                        <div class="spec-item">
                            <span class="spec-label">${isArabic ? 'الباركود' : 'Barcode'}:</span>
                            <span class="spec-value">${product.barcode}</span>
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
        <div class="tab-content" id="tab-reviews-${product.id}">
            <div class="tab-content-inner">
                <h3>${isArabic ? 'التقييمات' : 'Reviews'}</h3>
                <p class="reviews-note">${isArabic ? 
                    'يمكنك إضافة تقييمك للمنتج في صفحة <a href="comments.html">التعليقات</a>' :
                    'You can add your review for this product on the <a href="comments.html">Comments</a> page'}</p>
            </div>
        </div>
        <div class="tab-content" id="tab-faq-${product.id}">
            <div class="tab-content-inner">
                <h3>${isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}</h3>
                ${faqs.length > 0 ? `
                    <div class="faq-list">
                        ${faqs.map((item, index) => `
                            <div class="faq-item">
                                <div class="faq-question">
                                    <i class="fas fa-question-circle"></i>
                                    <strong>${item.q}</strong>
                                </div>
                                <div class="faq-answer">
                                    <i class="fas fa-check-circle"></i>
                                    <p>${item.a}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                ` : `<p>${isArabic ? 'لا توجد أسئلة شائعة متاحة حالياً.' : 'No frequently asked questions available at the moment.'}</p>`}
            </div>
        </div>
    `;
}

// Switch Tab Function
function switchTab(tabName, productId) {
    // Remove active class from all tabs and contents
    const tabs = document.querySelectorAll(`.tab-btn[data-tab]`);
    const contents = document.querySelectorAll(`.tab-content`);
    
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
    
    // Add active class to selected tab and content
    const selectedTab = document.querySelector(`.tab-btn[data-tab="${tabName}"]`);
    const selectedContent = document.getElementById(`tab-${tabName}-${productId}`);
    
    if (selectedTab) selectedTab.classList.add('active');
    if (selectedContent) selectedContent.classList.add('active');
}

// Load related products
function loadRelatedProducts(currentProductId) {
    const currentProduct = products.find(p => p.id === currentProductId);
    if (!currentProduct) return;

    const currentLang = localStorage.getItem('language') || 'en';
    const isArabic = currentLang === 'ar';

    const related = products
        .filter(p => p.id !== currentProductId && p.category === currentProduct.category)
        .slice(0, 4);

    const relatedProductsGrid = document.getElementById('relatedProducts');
    if (relatedProductsGrid) {
        if (related.length === 0) {
            relatedProductsGrid.innerHTML = '<p>' + (isArabic ? 'لم يتم العثور على منتجات ذات صلة.' : 'No related products found.') + '</p>';
            return;
        }

        relatedProductsGrid.innerHTML = related.map(product => {
            const isFav = favorites.includes(product.id);
            const stock = product.stock !== undefined ? product.stock : 999;
            const hasDiscount = product.oldPrice && product.oldPrice > product.price;
            const discountPercent = product.discount || (hasDiscount ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0);
            const badge = isArabic ? (product.badgeAr || product.badge) : product.badge;
            
            // Format prices with currency conversion
            const priceFormatted = formatPrice(product.price);
            const oldPriceFormatted = hasDiscount ? formatPrice(product.oldPrice) : null;
            
            return `
            <div class="product-card" onclick="viewProduct(${product.id})">
                <div class="product-image">
                    <!-- RELATED PRODUCT IMAGE: Displaying related product image for ${isArabic ? product.nameAr : product.name} (ID: ${product.id}) -->
                    <img src="${product.image}" alt="${isArabic ? product.nameAr : product.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#f0f0f0;color:#999;font-size:0.9rem\'>${isArabic ? 'صورة المنتج' : 'Product Image'}</div>'">
                    ${badge ? `<div class="product-badge product-badge-${badge.toLowerCase().replace(/\s+/g, '-')}">${badge}</div>` : ''}
                    <button class="favorite-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${product.id})" title="${isArabic ? (isFav ? 'إزالة من المفضلة' : 'إضافة إلى المفضلة') : (isFav ? 'Remove from favorites' : 'Add to favorites')}">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
                <div class="product-info">
                    <div class="product-category">${isArabic ? product.categoryAr : product.category}</div>
                    <div class="product-name">${isArabic ? product.nameAr : product.name}</div>
                    <div class="product-description">${isArabic ? product.descriptionAr : product.description}</div>
                    <div class="product-stock ${stock === 0 ? 'out-of-stock' : stock <= 5 ? 'low-stock' : ''}">
                        ${stock === 0 
                            ? `<i class="fas fa-exclamation-circle"></i> ${isArabic ? 'نفدت الكمية' : 'Out of stock'}`
                            : stock <= 5 
                            ? `<i class="fas fa-exclamation-triangle"></i> ${isArabic ? `بقي ${stock} فقط!` : `Only ${stock} items left!`}`
                            : ''
                        }
                    </div>
                    <div class="product-footer">
                        <div class="product-price-container">
                            ${oldPriceFormatted ? `<div class="product-old-price">${oldPriceFormatted.formatted}</div>` : ''}
                            <div class="product-price">${priceFormatted.formatted}</div>
                            ${discountPercent > 0 ? `<div class="product-discount">(${discountPercent}% ${isArabic ? 'خصم' : 'OFF'})</div>` : ''}
                        </div>
                        <button class="add-to-cart-btn ${stock === 0 ? 'disabled' : ''}" onclick="event.stopPropagation(); ${stock === 0 ? '' : `addToCart(${product.id})`}" ${stock === 0 ? 'disabled' : ''}>
                            <i class="fas fa-cart-plus"></i> <span data-key="addToCart">${stock === 0 ? (isArabic ? 'نفدت الكمية' : 'Out of Stock') : (isArabic ? 'أضف للسلة' : 'Add to Cart')}</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
        }).join('');
    }
}

// Store selected size per product
let selectedSizes = {};

// Size selection function
function selectSize(sizeKey, productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.sizeVariants) return;
    
    const sizeVariant = product.sizeVariants[sizeKey];
    if (!sizeVariant || sizeVariant.stock === 0) return;
    
    // Store selected size
    selectedSizes[productId] = sizeKey;
    
    // Update UI - remove active class from all size options
    const sizeSelector = document.getElementById(`sizeSelector-${productId}`);
    if (sizeSelector) {
        const allSizeOptions = sizeSelector.querySelectorAll('.size-option');
        allSizeOptions.forEach(btn => btn.classList.remove('selected'));
        
        // Add active class to selected size
        const selectedBtn = sizeSelector.querySelector(`[data-size="${sizeKey}"]`);
        if (selectedBtn) {
            selectedBtn.classList.add('selected');
        }
    }
    
    // Update selected size info
    const selectedSizeInfo = document.getElementById(`selectedSizeInfo-${productId}`);
    const selectedSizeText = document.getElementById(`selectedSizeText-${productId}`);
    if (selectedSizeInfo && selectedSizeText) {
        const currentLang = localStorage.getItem('language') || 'en';
        const isArabic = currentLang === 'ar';
        const sizeLabel = isArabic ? sizeVariant.labelAr : sizeVariant.label;
        selectedSizeText.textContent = (isArabic ? 'المقاس المحدد: ' : 'Selected Size: ') + sizeLabel;
        selectedSizeInfo.style.display = 'block';
    }
    
    // Update quantity max and enable/disable buttons
    updateQuantityControls(productId, sizeVariant.stock);
    
    // Enable add to cart button
    const addToCartBtn = document.getElementById(`addToCartBtn-${productId}`);
    if (addToCartBtn) {
        addToCartBtn.disabled = false;
        addToCartBtn.classList.remove('disabled');
    }
}

// Update quantity controls based on selected size stock
function updateQuantityControls(productId, maxStock) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const decreaseBtn = document.getElementById(`decreaseBtn-${productId}`);
    const increaseBtn = document.getElementById(`increaseBtn-${productId}`);
    
    if (quantityInput) {
        const currentValue = parseInt(quantityInput.value);
        quantityInput.max = Math.min(10, maxStock);
        
        if (currentValue > maxStock) {
            quantityInput.value = maxStock;
        }
        
        if (decreaseBtn) {
            decreaseBtn.disabled = parseInt(quantityInput.value) <= 1;
        }
        
        if (increaseBtn) {
            increaseBtn.disabled = parseInt(quantityInput.value) >= Math.min(10, maxStock);
        }
    }
}

// Quantity controls
function increaseQuantity(productId) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    if (quantityInput) {
        const current = parseInt(quantityInput.value);
        const max = parseInt(quantityInput.max) || 10;
        if (current < max) {
            quantityInput.value = current + 1;
            
            // Update button states
            const decreaseBtn = document.getElementById(`decreaseBtn-${productId}`);
            const increaseBtn = document.getElementById(`increaseBtn-${productId}`);
            if (decreaseBtn) decreaseBtn.disabled = false;
            if (increaseBtn) increaseBtn.disabled = (current + 1) >= max;
        }
    }
}

function decreaseQuantity(productId) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    if (quantityInput) {
        const current = parseInt(quantityInput.value);
        if (current > 1) {
            quantityInput.value = current - 1;
            
            // Update button states
            const decreaseBtn = document.getElementById(`decreaseBtn-${productId}`);
            const increaseBtn = document.getElementById(`increaseBtn-${productId}`);
            const max = parseInt(quantityInput.max) || 10;
            if (decreaseBtn) decreaseBtn.disabled = (current - 1) <= 1;
            if (increaseBtn) increaseBtn.disabled = false;
        }
    }
}

// Add to cart with quantity
function addToCartWithQuantity(productId) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const quantity = quantityInput ? parseInt(quantityInput.value) : 1;

    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const currentLang = localStorage.getItem('language') || 'en';
    const isArabic = currentLang === 'ar';
    
    // Check if product has size variants
    if (product.sizeVariants && Object.keys(product.sizeVariants).length > 0) {
        // Check if size is selected
        if (!selectedSizes[productId]) {
            const message = isArabic 
                ? 'الرجاء اختيار المقاس أولاً'
                : 'Please select a size first';
            showNotification(message, 'error');
            return;
        }
        
        const selectedSize = selectedSizes[productId];
        const sizeVariant = product.sizeVariants[selectedSize];
        
        // Check stock for selected size
        if (sizeVariant.stock < quantity) {
            const message = isArabic 
                ? `عذراً، الكمية المتوفرة للمقاس ${isArabic ? sizeVariant.labelAr : sizeVariant.label} هي ${sizeVariant.stock} فقط`
                : `Sorry, only ${sizeVariant.stock} items available for size ${sizeVariant.label}`;
            showNotification(message, 'error');
            return;
        }
        
        // Check if item with same size already in cart
        const existingItem = cart.find(item => 
            item.id === productId && item.selectedSize === selectedSize
        );
        
        if (existingItem) {
            if (existingItem.quantity + quantity > sizeVariant.stock) {
                const message = isArabic 
                    ? `عذراً، الكمية المتوفرة للمقاس ${isArabic ? sizeVariant.labelAr : sizeVariant.label} هي ${sizeVariant.stock} فقط`
                    : `Sorry, only ${sizeVariant.stock} items available for size ${sizeVariant.label}`;
                showNotification(message, 'error');
                return;
            }
            existingItem.quantity += quantity;
        } else {
            cart.push({
                ...product,
                quantity: quantity,
                selectedSize: selectedSize,
                sizeLabel: isArabic ? sizeVariant.labelAr : sizeVariant.label
            });
        }
    } else {
        // No size variants - use regular stock check
        if (product.stock !== undefined && product.stock < quantity) {
            const message = isArabic 
                ? `عذراً، الكمية المتوفرة ${product.stock} فقط`
                : `Sorry, only ${product.stock} items available`;
            showNotification(message, 'error');
            return;
        }

        const existingItem = cart.find(item => item.id === productId && !item.selectedSize);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                ...product,
                quantity: quantity
            });
        }
    }

    if (typeof saveUserCart === 'function') {
        saveUserCart(cart);
    } else {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    updateCartCount();
    const message = isArabic 
        ? `${quantity} ${quantity === 1 ? 'منتج' : 'منتجات'} تمت إضافتها إلى السلة!`
        : `${quantity} item(s) added to cart!`;
    showNotification(message, 'success');
}

// Countdown Timer Function
function startCountdownTimer(productId, endDate) {
    const countdownElement = document.getElementById(`countdown-${productId}`);
    if (!countdownElement) return;
    
    function updateCountdown() {
        const now = new Date().getTime();
        const end = new Date(endDate).getTime();
        const distance = end - now;
        
        if (distance < 0) {
            countdownElement.textContent = '00:00:00';
            const timerContainer = document.getElementById(`countdownTimer-${productId}`);
            if (timerContainer) {
                timerContainer.style.display = 'none';
            }
            return;
        }
        
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        countdownElement.textContent = 
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Share Product Function
function shareProduct(platform, productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const currentLang = localStorage.getItem('language') || 'en';
    const productName = currentLang === 'ar' ? product.nameAr : product.name;
    const productUrl = window.location.href;
    const shareText = `${productName} - ${product.price.toFixed(2)} JOD\n${productUrl}`;
    
    let shareUrl = '';
    
    switch(platform) {
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`;
            break;
        case 'instagram':
            // Instagram doesn't support direct URL sharing, so we'll copy to clipboard
            if (navigator.clipboard) {
                navigator.clipboard.writeText(shareText);
                const message = currentLang === 'ar' 
                    ? 'تم نسخ رابط المنتج! يمكنك لصقه في إنستغرام'
                    : 'Product link copied! You can paste it on Instagram';
                showNotification(message);
            } else {
                shareUrl = `https://www.instagram.com/`;
            }
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

