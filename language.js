// Language Management
let currentLanguage = localStorage.getItem('language') || 'en';

const translations = {
    en: {
        // Navigation
        home: "Home",
        about: "About Us",
        contact: "Contact Us",
        cart: "Cart",
        searchPlaceholder: "Search for products...",
        
        // Hero Section
        heroTitle: "Discover Authentic Jordanian Products",
        heroSubtitle: "Support local artisans and enjoy quality products from the heart of Jordan",
        shopNow: "Shop Now",
        
        // Categories
        allProducts: "All Products",
        food: "Food & Beverages",
        handicrafts: "Handicrafts",
        cosmetics: "Cosmetics",
        clothing: "Clothing",
        accessories: "Accessories",
        
        // Products
        featuredProducts: "Featured Products",
        addToCart: "Add to Cart",
        viewDetails: "View Details",
        
        // Cart
        shoppingCart: "Shopping Cart",
        orderSummary: "Order Summary",
        subtotal: "Subtotal",
        shipping: "Shipping",
        total: "Total",
        proceedToCheckout: "Proceed to Checkout",
        continueShopping: "Continue Shopping",
        emptyCart: "Your cart is empty",
        emptyCartMessage: "Start shopping to add items to your cart!",
        quantity: "Quantity",
        remove: "Remove",
        
        // Checkout
        checkout: "Checkout",
        shippingInfo: "Shipping Information",
        paymentInfo: "Payment Information",
        fullName: "Full Name",
        email: "Email",
        phone: "Phone Number",
        address: "Address",
        city: "City",
        postalCode: "Postal Code",
        cardNumber: "Card Number",
        expiryDate: "Expiry Date",
        cvv: "CVV",
        placeOrder: "Place Order",
        orderPlaced: "Order Placed Successfully!",
        orderMessage: "Thank you for your purchase. Your order has been confirmed.",
        backToHome: "Back to Home",
        
        // About Us
        aboutTitle: "About JoTouch by Lara",
        aboutJordan: "Jordan, a land of ancient history and rich cultural heritage, stands as a bridge between the East and West. From the rose-red city of Petra, one of the New Seven Wonders of the World, to the therapeutic waters of the Dead Sea, Jordan is a treasure trove of natural beauty and historical significance. Our country is renowned for its warm hospitality, traditional craftsmanship, and authentic products that have been passed down through generations. The Jordanian heritage encompasses exquisite handwoven textiles, intricate pottery, aromatic spices, natural cosmetics from the Dead Sea, and traditional foods that reflect the diverse cultural influences that have shaped our nation. At JoTouch by Lara, we celebrate this rich heritage by bringing you authentic Jordanian products that tell the story of our land, our people, and our traditions.",
        aboutContent: "Welcome to JoTouch by Lara, your trusted destination for authentic Jordanian products. Located in the heart of Zarqa, Jordan, we are passionate about bringing you the finest local products that showcase the rich heritage and craftsmanship of our beautiful country.",
        aboutFounder: "About the Founder",
        aboutFounderText: "JoTouch by Lara was founded by Lara Akef Al-Balawi, a dedicated student from Um Al-Darda Secondary School for Girls. Lara is part of the first generation in the BTEC system, graduating with the class of 2008. Her passion for Jordanian heritage and commitment to supporting local artisans inspired the creation of this platform to showcase and promote authentic Jordanian products.",
        aboutMission: "Our Mission",
        aboutMissionText: "At JoTouch by Lara, we are committed to supporting local artisans and businesses while providing our customers with high-quality, authentic Jordanian products. From traditional handicrafts to natural cosmetics and delicious food items, we carefully curate each product to ensure it meets our standards of excellence.",
        aboutLocation: "Location",
        aboutLocationText: "Based in Zarqa, Jordan, we are proud to be part of the local business community and contribute to the growth of Jordan's economy.",
        
        // Contact
        contactTitle: "Contact Us",
        contactSubtitle: "We'd love to hear from you! Get in touch with us.",
        contactEmail: "Email",
        contactEmailValue: "laratt0088@gmail.com",
        contactLocation: "Location",
        contactLocationValue: "Zarqa, Jordan",
        sendMessage: "Send Message",
        subject: "Subject",
        message: "Message",
        
        // Footer
        aboutUs: "About Us",
        aboutUsText: "Your trusted marketplace for authentic Jordanian products. Supporting local businesses and artisans.",
        quickLinks: "Quick Links",
        contact: "Contact",
        allRightsReserved: "All rights reserved.",
        
        // Notifications
        productAdded: "Product added to cart!",
        itemsAdded: "item(s) added to cart!",
        noProductsFound: "No products found.",
        
        // Favorites
        favorites: "Favorites",
        favoriteProducts: "Favorite Products",
        emptyFavorites: "No favorite products",
        emptyFavoritesMessage: "Start adding products to your favorites!",
        
        // Price Filter
        filterByPrice: "Filter by Price",
        minPrice: "Minimum Price (JOD)",
        maxPrice: "Maximum Price (JOD)",
        priceRange: "Price Range:",
        applyFilter: "Apply Filter",
        clearFilter: "Clear Filter",
        
        // Comments
        comments: "Comments",
        commentsTitle: "Comments & Reviews",
        overallRating: "Overall Rating",
        basedOnReviews: "Based on {count} review",
        basedOnReviewsPlural: "Based on {count} reviews",
        featuredReviews: "Featured Reviews",
        customerReviews: "Customer Reviews",
        shareExperience: "Share Your Experience",
        yourName: "Your Name",
        rating: "Rating",
        yourComment: "Your Comment",
        submitReview: "Submit Review",
        enterName: "Enter your name",
        shareThoughts: "Share your thoughts about our website...",
        noCustomerReviews: "No customer reviews yet. Be the first to share your experience!",
        editComment: "Edit comment",
        deleteComment: "Delete comment",
        commentLoaded: "Comment loaded for editing. Update and submit to save changes.",
        commentUpdated: "Comment updated successfully!",
        thankYouReview: "Thank you for your review!",
        selectRating: "Please select a rating",
        ratingHint: "Select any rating from 1 to 5 stars",
        deleteConfirm: "Are you sure you want to delete this comment?",
        commentDeleted: "Comment deleted successfully"
    },
    ar: {
        // Navigation
        home: "الرئيسية",
        about: "من نحن",
        contact: "اتصل بنا",
        cart: "السلة",
        searchPlaceholder: "ابحث عن المنتجات...",
        
        // Hero Section
        heroTitle: "اكتشف المنتجات الأردنية الأصيلة",
        heroSubtitle: "ادعم الحرفيين المحليين واستمتع بمنتجات عالية الجودة من قلب الأردن",
        shopNow: "تسوق الآن",
        
        // Categories
        allProducts: "جميع المنتجات",
        food: "طعام ومشروبات",
        handicrafts: "حرف يدوية",
        cosmetics: "مستحضرات تجميل",
        clothing: "ملابس",
        accessories: "إكسسوارات",
        
        // Products
        featuredProducts: "منتجات مميزة",
        addToCart: "أضف للسلة",
        viewDetails: "عرض التفاصيل",
        
        // Cart
        shoppingCart: "سلة التسوق",
        orderSummary: "ملخص الطلب",
        subtotal: "المجموع الفرعي",
        shipping: "الشحن",
        total: "الإجمالي",
        proceedToCheckout: "المتابعة للدفع",
        continueShopping: "متابعة التسوق",
        emptyCart: "سلة التسوق فارغة",
        emptyCartMessage: "ابدأ التسوق لإضافة منتجات إلى سلة التسوق!",
        quantity: "الكمية",
        remove: "إزالة",
        
        // Checkout
        checkout: "الدفع",
        shippingInfo: "معلومات الشحن",
        paymentInfo: "معلومات الدفع",
        fullName: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        address: "العنوان",
        city: "المدينة",
        postalCode: "الرمز البريدي",
        cardNumber: "رقم البطاقة",
        expiryDate: "تاريخ الانتهاء",
        cvv: "رمز الأمان",
        placeOrder: "تأكيد الطلب",
        orderPlaced: "تم تأكيد الطلب بنجاح!",
        orderMessage: "شكراً لشرائك. تم تأكيد طلبك.",
        backToHome: "العودة للرئيسية",
        
        // About Us
        aboutTitle: "من نحن - JoTouch by Lara",
        aboutJordan: "الأردن، أرض التاريخ القديم والتراث الثقافي الغني، تقف كجسر بين الشرق والغرب. من مدينة البتراء الوردية، إحدى عجائب الدنيا السبع الجديدة، إلى مياه البحر الميت العلاجية، الأردن كنز من الجمال الطبيعي والأهمية التاريخية. تشتهر بلادنا بكرم الضيافة، والحرفية التقليدية، والمنتجات الأصيلة التي تم تناقلها عبر الأجيال. يشمل التراث الأردني المنسوجات اليدوية الرائعة، والفخار المعقد، والتوابل العطرية، ومستحضرات التجميل الطبيعية من البحر الميت، والأطعمة التقليدية التي تعكس التأثيرات الثقافية المتنوعة التي شكلت أمتنا. في JoTouch by Lara، نحتفل بهذا التراث الغني من خلال جلب منتجات أردنية أصيلة تحكي قصة أرضنا وشعبنا وتقاليدنا.",
        aboutContent: "مرحباً بكم في JoTouch by Lara، وجهتكم الموثوقة للمنتجات الأردنية الأصيلة. تقع في قلب الزرقاء، الأردن، نحن متحمسون لجلب أفضل المنتجات المحلية التي تعرض التراث الغني والحرفية لبلدنا الجميل.",
        aboutFounder: "عن المؤسسة",
        aboutFounderText: "تأسست JoTouch by Lara على يد لارا عاكف البلوي، طالبة ملتزمة من مدرسة أم الدرداء الثانوية للبنات. لارا هي جزء من الجيل الأول في نظام BTEC، وتخرجت مع دفعة 2008. شغفها بالتراث الأردني والتزامها بدعم الحرفيين المحليين ألهم إنشاء هذه المنصة لعرض وتعزيز المنتجات الأردنية الأصيلة.",
        aboutMission: "مهمتنا",
        aboutMissionText: "في JoTouch by Lara، نحن ملتزمون بدعم الحرفيين والشركات المحلية مع تزويد عملائنا بمنتجات أردنية عالية الجودة وأصيلة. من الحرف اليدوية التقليدية إلى مستحضرات التجميل الطبيعية والمنتجات الغذائية اللذيذة، نقوم بتجميع كل منتج بعناية لضمان استيفائه لمعايير التميز لدينا.",
        aboutLocation: "الموقع",
        aboutLocationText: "مقرنا في الزرقاء، الأردن، ونفخر بأن نكون جزءاً من مجتمع الأعمال المحلي ونساهم في نمو اقتصاد الأردن.",
        
        // Contact
        contactTitle: "اتصل بنا",
        contactSubtitle: "نحب أن نسمع منك! تواصل معنا.",
        contactEmail: "البريد الإلكتروني",
        contactEmailValue: "laratt0088@gmail.com",
        contactLocation: "الموقع",
        contactLocationValue: "الزرقاء، الأردن",
        sendMessage: "إرسال رسالة",
        subject: "الموضوع",
        message: "الرسالة",
        
        // Footer
        aboutUs: "من نحن",
        aboutUsText: "وجهتكم الموثوقة للمنتجات الأردنية الأصيلة. ندعم الشركات والحرفيين المحليين.",
        quickLinks: "روابط سريعة",
        contact: "اتصل بنا",
        allRightsReserved: "جميع الحقوق محفوظة.",
        
        // Notifications
        productAdded: "تمت إضافة المنتج إلى السلة!",
        itemsAdded: "تمت إضافة المنتجات إلى السلة!",
        noProductsFound: "لم يتم العثور على منتجات.",
        
        // Favorites
        favorites: "المفضلة",
        favoriteProducts: "المنتجات المفضلة",
        emptyFavorites: "لا توجد منتجات مفضلة",
        emptyFavoritesMessage: "ابدأ بإضافة منتجات إلى قائمة المفضلة!",
        
        // Price Filter
        filterByPrice: "تصفية حسب السعر",
        minPrice: "الحد الأدنى للسعر (دينار)",
        maxPrice: "الحد الأقصى للسعر (دينار)",
        priceRange: "نطاق السعر:",
        applyFilter: "تطبيق التصفية",
        clearFilter: "مسح التصفية",
        
        // Comments
        comments: "التعليقات",
        commentsTitle: "التعليقات والمراجعات",
        overallRating: "التقييم العام",
        basedOnReviews: "بناءً على {count} مراجعة",
        basedOnReviewsPlural: "بناءً على {count} مراجعة",
        featuredReviews: "مراجعات مميزة",
        customerReviews: "مراجعات العملاء",
        shareExperience: "شارك تجربتك",
        yourName: "اسمك",
        rating: "التقييم",
        yourComment: "تعليقك",
        submitReview: "إرسال المراجعة",
        enterName: "أدخل اسمك",
        shareThoughts: "شاركنا أفكارك حول موقعنا...",
        noCustomerReviews: "لا توجد مراجعات للعملاء بعد. كن أول من يشارك تجربته!",
        editComment: "تعديل التعليق",
        deleteComment: "حذف التعليق",
        commentLoaded: "تم تحميل التعليق للتعديل. قم بالتحديث وإرسال للحفظ.",
        commentUpdated: "تم تحديث التعليق بنجاح!",
        thankYouReview: "شكراً لمراجعتك!",
        selectRating: "الرجاء اختيار تقييم",
        ratingHint: "اختر أي تقييم من 1 إلى 5 نجوم",
        deleteConfirm: "هل أنت متأكد من حذف هذا التعليق؟",
        commentDeleted: "تم حذف التعليق بنجاح"
    }
};

// Get translation
function t(key) {
    return translations[currentLanguage][key] || key;
}

// Switch language
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update language button text
    const langText = document.getElementById('langText');
    if (langText) {
        langText.textContent = lang === 'ar' ? 'English' : 'العربية';
    }
    
    updatePageLanguage();
}

// Update page language
function updatePageLanguage() {
    // Update all elements with data-key attribute
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLanguage][key]) {
            el.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update placeholders
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.placeholder = t('searchPlaceholder');
    }
    
    // Update comment form placeholders if on comments page
    if (window.location.pathname.includes('comments')) {
        const userNameInput = document.getElementById('userName');
        const userCommentTextarea = document.getElementById('userComment');
        
        if (userNameInput) {
            userNameInput.placeholder = t('enterName');
        }
        
        if (userCommentTextarea) {
            userCommentTextarea.placeholder = t('shareThoughts');
        }
    }
    
    // Update page title
    const pageTitle = document.querySelector('title');
    if (pageTitle) {
        if (window.location.pathname.includes('about')) {
            pageTitle.textContent = t('about') + ' - JoTouch by Lara';
        } else if (window.location.pathname.includes('contact')) {
            pageTitle.textContent = t('contact') + ' - JoTouch by Lara';
        } else if (window.location.pathname.includes('cart')) {
            pageTitle.textContent = t('shoppingCart') + ' - JoTouch by Lara';
        } else if (window.location.pathname.includes('checkout')) {
            pageTitle.textContent = t('checkout') + ' - JoTouch by Lara';
        } else if (window.location.pathname.includes('product')) {
            pageTitle.textContent = t('viewDetails') + ' - JoTouch by Lara';
        } else if (window.location.pathname.includes('comments')) {
            pageTitle.textContent = t('comments') + ' - JoTouch by Lara';
        } else {
            pageTitle.textContent = 'JoTouch by Lara - ' + t('heroTitle');
        }
    }
    
    // Trigger custom event for page-specific updates
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: currentLanguage }));
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    currentLanguage = localStorage.getItem('language') || 'en';
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    
    // Update language button text
    const langText = document.getElementById('langText');
    if (langText) {
        langText.textContent = currentLanguage === 'ar' ? 'English' : 'العربية';
    }
    
    updatePageLanguage();
});

