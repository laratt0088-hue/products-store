// Smooth Page Transitions
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth transition to all navigation links
    const navLinks = document.querySelectorAll('a[href$=".html"], a[href="/"], a[href="./"]');
    
    navLinks.forEach(link => {
        // Skip external links and special links
        if (link.href.includes('mailto:') || 
            link.href.includes('tel:') || 
            link.hasAttribute('target') ||
            link.getAttribute('href').startsWith('#')) {
            return;
        }
        
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const currentPath = window.location.pathname;
            const currentPage = currentPath.split('/').pop() || 'index.html';
            
            // Skip if it's the same page
            if (href === currentPage || 
                (href === 'index.html' && (currentPath.endsWith('/') || currentPage === 'index.html' || currentPage === ''))) {
                return;
            }
            
            // Prevent default navigation
            e.preventDefault();
            
            // Add transition class to body
            document.body.classList.add('page-transitioning');
            
            // Navigate after fade out animation
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
    
    // Animate page sections on load with staggered delays
    setTimeout(() => {
        const sections = document.querySelectorAll('.about-section, .products-section, .cart-section, .contact-section, .comments-section');
        sections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
        });
        
        // Animate cards and items with staggered effect
        const cards = document.querySelectorAll('.product-card, .comment-card, .value-card, .contact-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 200 + (index * 50));
        });
    }, 100);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Display user in navbar
function displayUserInNavbar() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;
    
    // Remove existing user display if any
    const existingUserDisplay = document.getElementById('userDisplay');
    if (existingUserDisplay) {
        existingUserDisplay.remove();
    }
    
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const userData = JSON.parse(currentUser);
        const currentLang = localStorage.getItem('language') || 'en';
        
        const userDisplay = document.createElement('div');
        userDisplay.id = 'userDisplay';
        userDisplay.className = 'user-display';
        userDisplay.innerHTML = `
            <i class="fas fa-user"></i>
            <span>${userData.username}</span>
            <button class="logout-btn" onclick="handleLogout()" title="${currentLang === 'ar' ? 'تسجيل الخروج' : 'Logout'}">
                ${currentLang === 'ar' ? 'تسجيل الخروج' : 'Logout'}
            </button>
        `;
        
        // Insert before language switcher
        const langBtn = document.querySelector('.language-switcher');
        if (langBtn) {
            navLinks.insertBefore(userDisplay, langBtn);
        } else {
            navLinks.appendChild(userDisplay);
        }
    }
    
    // Remove any existing login link/button if present
    const existingLoginLink = document.getElementById('loginLink');
    if (existingLoginLink) {
        existingLoginLink.remove();
    }
    
    // Login functionality removed - no login button displayed
}

// Logout function
function handleLogout() {
    // Clear cart on logout
    if (typeof window.cart !== 'undefined') {
        window.cart = [];
    }
    if (typeof clearUserCart === 'function') {
        clearUserCart();
    } else {
        localStorage.removeItem('cart');
    }
    
    // Clear favorites/wishlist on logout
    if (typeof window.favorites !== 'undefined') {
        window.favorites = [];
    }
    if (typeof clearUserFavorites === 'function') {
        clearUserFavorites();
    } else {
        localStorage.removeItem('favorites');
    }
    
    // Remove user data
    localStorage.removeItem('currentUser');
    
    // Clear any guest session data
    localStorage.removeItem('cart');
    localStorage.removeItem('favorites');
    
    const currentLang = localStorage.getItem('language') || 'en';
    const message = currentLang === 'ar' 
        ? 'تم تسجيل الخروج بنجاح'
        : 'Logged out successfully';
    showNotification(message);
    
    // Refresh the page to update navbar
    setTimeout(() => {
        window.location.reload();
    }, 500);
}

// Initialize user display on page load
document.addEventListener('DOMContentLoaded', function() {
    displayUserInNavbar();
    
    // Update user display when language changes
    window.addEventListener('languageChanged', function() {
        displayUserInNavbar();
    });
});

