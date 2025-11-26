// Load favorites page
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    updateFavoritesCount();
    loadFavorites();
    
    // Listen for language changes
    window.addEventListener('languageChanged', function() {
        loadFavorites();
    });
    
    // Listen for favorites changes
    window.addEventListener('favoritesChanged', function() {
        loadFavorites();
        updateFavoritesCount();
    });
});

// Load favorites
function loadFavorites() {
    const favoritesGrid = document.getElementById('favoritesGrid');
    if (!favoritesGrid) return;

    const currentLang = localStorage.getItem('language') || 'en';
    const isArabic = currentLang === 'ar';

    if (favorites.length === 0) {
        favoritesGrid.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-heart"></i>
                <h3 data-key="emptyFavorites">${isArabic ? 'لا توجد منتجات مفضلة' : 'No favorite products'}</h3>
                <p data-key="emptyFavoritesMessage">${isArabic ? 'ابدأ بإضافة منتجات إلى قائمة المفضلة!' : 'Start adding products to your favorites!'}</p>
                <a href="index.html" class="continue-shopping" style="display: inline-block; margin-top: 1rem; padding: 0.75rem 1.5rem; background: var(--primary-color); color: white; border-radius: 5px; text-decoration: none;" data-key="continueShopping">${isArabic ? 'متابعة التسوق' : 'Continue Shopping'}</a>
            </div>
        `;
        return;
    }

    const favoriteProducts = products.filter(p => favorites.includes(p.id));
    
    favoritesGrid.innerHTML = favoriteProducts.map(product => {
        return `
        <div class="product-card" onclick="viewProduct(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${isArabic ? product.nameAr : product.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#f0f0f0;color:#999;font-size:0.9rem\'>${isArabic ? 'صورة المنتج' : 'Product Image'}</div>'">
                <button class="favorite-btn active" onclick="event.stopPropagation(); toggleFavorite(${product.id})" title="${isArabic ? 'إزالة من المفضلة' : 'Remove from favorites'}">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <div class="product-category">${isArabic ? product.categoryAr : product.category}</div>
                <div class="product-name">${isArabic ? product.nameAr : product.name}</div>
                <div class="product-description">${isArabic ? product.descriptionAr : product.description}</div>
                <div class="product-footer">
                    <div class="product-price">${product.price.toFixed(2)} ${isArabic ? 'دينار' : 'JOD'}</div>
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> <span data-key="addToCart">${isArabic ? 'أضف للسلة' : 'Add to Cart'}</span>
                    </button>
                </div>
            </div>
        </div>
    `;
    }).join('');
}

