// Currency and Country Management
// Exchange rates are approximate and should be updated regularly
// Base currency: JOD (Jordanian Dinar)

const currencyData = {
    countries: [
        { code: 'JO', name: 'Jordan', nameAr: 'الأردن', currency: 'JOD', symbol: 'دينار', symbolEn: 'JOD', rate: 1.0 },
        { code: 'AE', name: 'United Arab Emirates', nameAr: 'الإمارات العربية المتحدة', currency: 'AED', symbol: 'درهم', symbolEn: 'AED', rate: 5.2 },
        { code: 'SA', name: 'Saudi Arabia', nameAr: 'المملكة العربية السعودية', currency: 'SAR', symbol: 'ريال', symbolEn: 'SAR', rate: 5.3 },
        { code: 'KW', name: 'Kuwait', nameAr: 'الكويت', currency: 'KWD', symbol: 'دينار', symbolEn: 'KWD', rate: 0.8 },
        { code: 'QA', name: 'Qatar', nameAr: 'قطر', currency: 'QAR', symbol: 'ريال', symbolEn: 'QAR', rate: 5.4 },
        { code: 'BH', name: 'Bahrain', nameAr: 'البحرين', currency: 'BHD', symbol: 'دينار', symbolEn: 'BHD', rate: 1.3 },
        { code: 'OM', name: 'Oman', nameAr: 'عُمان', currency: 'OMR', symbol: 'ريال', symbolEn: 'OMR', rate: 1.4 },
        { code: 'EG', name: 'Egypt', nameAr: 'مصر', currency: 'EGP', symbol: 'جنيه', symbolEn: 'EGP', rate: 24.0 },
        { code: 'LB', name: 'Lebanon', nameAr: 'لبنان', currency: 'LBP', symbol: 'ليرة', symbolEn: 'LBP', rate: 7500.0 },
        { code: 'US', name: 'United States', nameAr: 'الولايات المتحدة', currency: 'USD', symbol: 'دولار', symbolEn: 'USD', rate: 1.41 },
        { code: 'GB', name: 'United Kingdom', nameAr: 'المملكة المتحدة', currency: 'GBP', symbol: 'جنيه', symbolEn: 'GBP', rate: 1.12 },
        { code: 'EU', name: 'European Union', nameAr: 'الاتحاد الأوروبي', currency: 'EUR', symbol: 'يورو', symbolEn: 'EUR', rate: 1.30 }
    ]
};

// Get current currency from localStorage
function getCurrentCurrency() {
    const savedCountry = localStorage.getItem('selectedCountry') || 'JO';
    const country = currencyData.countries.find(c => c.code === savedCountry) || currencyData.countries[0];
    return country;
}

// Set selected country
function setSelectedCountry(countryCode) {
    localStorage.setItem('selectedCountry', countryCode);
    // Trigger currency change event
    window.dispatchEvent(new CustomEvent('currencyChanged'));
}

// Convert price from JOD to selected currency
function convertPrice(priceInJOD) {
    const currency = getCurrentCurrency();
    return priceInJOD * currency.rate;
}

// Format price with currency symbol
function formatPrice(priceInJOD) {
    const currency = getCurrentCurrency();
    const currentLang = localStorage.getItem('language') || 'en';
    const isArabic = currentLang === 'ar';
    const convertedPrice = convertPrice(priceInJOD);
    const symbol = isArabic ? currency.symbol : currency.symbolEn;
    return {
        amount: convertedPrice.toFixed(2),
        symbol: symbol,
        formatted: `${convertedPrice.toFixed(2)} ${symbol}`
    };
}

// Get currency symbol only
function getCurrencySymbol() {
    const currency = getCurrentCurrency();
    const currentLang = localStorage.getItem('language') || 'en';
    const isArabic = currentLang === 'ar';
    return isArabic ? currency.symbol : currency.symbolEn;
}

// Initialize currency selector in navigation
function initializeCurrencySelector() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;
    
    // Remove existing currency selector if any
    const existingSelector = document.getElementById('currencySelector');
    if (existingSelector) {
        existingSelector.remove();
    }
    
    const currentLang = localStorage.getItem('language') || 'en';
    const isArabic = currentLang === 'ar';
    const currentCurrency = getCurrentCurrency();
    
    const currencySelector = document.createElement('div');
    currencySelector.id = 'currencySelector';
    currencySelector.className = 'currency-selector-container';
    currencySelector.innerHTML = `
        <button class="currency-selector-btn" id="currencyBtn" title="${isArabic ? 'اختر العملة' : 'Select Currency'}">
            <i class="fas fa-globe"></i>
            <span id="currencyDisplay">${currentCurrency.code}</span>
            <i class="fas fa-chevron-down"></i>
        </button>
        <div class="currency-dropdown" id="currencyDropdown">
            ${currencyData.countries.map(country => `
                <div class="currency-option ${country.code === currentCurrency.code ? 'active' : ''}" 
                     onclick="setSelectedCountry('${country.code}')" 
                     data-country="${country.code}">
                    <span class="currency-flag">${getCountryFlag(country.code)}</span>
                    <span class="currency-name">${isArabic ? country.nameAr : country.name}</span>
                    <span class="currency-code">${country.currency}</span>
                </div>
            `).join('')}
        </div>
    `;
    
    // Insert before language switcher
    const langBtn = document.querySelector('.language-switcher');
    if (langBtn) {
        navLinks.insertBefore(currencySelector, langBtn);
    } else {
        navLinks.appendChild(currencySelector);
    }
    
    // Toggle dropdown
    const currencyBtn = document.getElementById('currencyBtn');
    const currencyDropdown = document.getElementById('currencyDropdown');
    
    if (currencyBtn && currencyDropdown) {
        currencyBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            currencyDropdown.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!currencySelector.contains(e.target)) {
                currencyDropdown.classList.remove('show');
            }
        });
    }
}

// Get country flag emoji (simplified)
function getCountryFlag(countryCode) {
    const flags = {
        'JO': '🇯🇴',
        'AE': '🇦🇪',
        'SA': '🇸🇦',
        'KW': '🇰🇼',
        'QA': '🇶🇦',
        'BH': '🇧🇭',
        'OM': '🇴🇲',
        'EG': '🇪🇬',
        'LB': '🇱🇧',
        'US': '🇺🇸',
        'GB': '🇬🇧',
        'EU': '🇪🇺'
    };
    return flags[countryCode] || '🌍';
}

// Update currency display
function updateCurrencyDisplay() {
    const currencyDisplay = document.getElementById('currencyDisplay');
    if (currencyDisplay) {
        const currentCurrency = getCurrentCurrency();
        currencyDisplay.textContent = currentCurrency.code;
    }
    
    // Update dropdown active state
    const currencyOptions = document.querySelectorAll('.currency-option');
    const currentCurrency = getCurrentCurrency();
    currencyOptions.forEach(option => {
        if (option.dataset.country === currentCurrency.code) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeCurrencySelector();
    updateCurrencyDisplay();
    
    // Update when language changes
    window.addEventListener('languageChanged', function() {
        initializeCurrencySelector();
        updateCurrencyDisplay();
    });
    
    // Update when currency changes
    window.addEventListener('currencyChanged', function() {
        updateCurrencyDisplay();
        // Reload page content to update prices
        if (typeof displayProducts === 'function') {
            const productsGrid = document.getElementById('productsGrid');
            if (productsGrid) {
                displayProducts(products);
            }
        }
        if (typeof loadProductDetails === 'function') {
            const urlParams = new URLSearchParams(window.location.search);
            const productId = parseInt(urlParams.get('id'));
            if (productId) {
                loadProductDetails(productId);
                loadRelatedProducts(productId);
            }
        }
        if (typeof loadCartItems === 'function') {
            loadCartItems();
            updateCartSummary();
        }
        if (typeof loadOrderSummary === 'function') {
            loadOrderSummary();
        }
    });
});

