// Pre-written admin reviews
const adminReviews = {
    en: [
        {
            id: 'admin-1',
            name: 'Lara Akef Alblwi',
            rating: 5,
            comment: 'Hello! I am Lara Akef Alblwi, the manager and founder of this website. I designed this site with the goal of providing original and reliable products to our valued customers. Our commitment is to bring you authentic Jordanian products that you can trust, sourced directly from local artisans and verified suppliers. Thank you for being part of our journey!',
            date: '2024-01-15',
            isAdmin: true
        },
        {
            id: 'admin-2',
            name: 'Malak Aljbour',
            rating: 5,
            comment: 'I specialize in inspecting products before they reach our customers. Every item goes through a thorough quality check to ensure it meets our high standards. Your satisfaction and trust are our top priorities, and I take great care in verifying that each product is authentic, well-crafted, and ready for delivery.',
            date: '2024-02-01',
            isAdmin: true
        },
        {
            id: 'admin-3',
            name: 'Samer Alblwi',
            rating: 5,
            comment: 'I am responsible for financial management and ensuring that all payment processes are secure and reliable. Your transactions are protected with the latest security measures, and we guarantee safe and transparent payment handling. Your financial information is always secure with us.',
            date: '2024-02-20',
            isAdmin: true
        }
    ],
    ar: [
        {
            id: 'admin-1',
            name: 'لارا عاكف البلوي',
            rating: 5,
            comment: 'مرحباً! أنا لارا عاكف البلوي، المديرة ومؤسسة هذا الموقع. قمت بتصميم هذا الموقع بهدف تقديم منتجات أصلية وموثوقة لعملائنا الكرام. التزامنا هو جلب منتجات أردنية أصيلة يمكنك الوثوق بها، مصدرة مباشرة من الحرفيين المحليين والموردين المعتمدين. شكراً لكونك جزءاً من رحلتنا!',
            date: '2024-01-15',
            isAdmin: true
        },
        {
            id: 'admin-2',
            name: 'ملاك الجبور',
            rating: 5,
            comment: 'أتخصص في فحص المنتجات قبل وصولها إلى عملائنا. كل منتج يخضع لفحص جودة شامل لضمان أنه يلبي معاييرنا العالية. رضاك وثقتك هما أولويتنا القصوى، وأحرص على التحقق من أن كل منتج أصيل ومصنوع بعناية وجاهز للتسليم.',
            date: '2024-02-01',
            isAdmin: true
        },
        {
            id: 'admin-3',
            name: 'سامر البلوي',
            rating: 5,
            comment: 'أنا مسؤول عن الإدارة المالية وضمان أن جميع عمليات الدفع آمنة وموثوقة. معاملاتك محمية بأحدث إجراءات الأمان، ونضمن معالجة آمنة وشفافة للمدفوعات. معلوماتك المالية دائماً آمنة معنا.',
            date: '2024-02-20',
            isAdmin: true
        }
    ]
};

// User comments storage
let userComments = JSON.parse(localStorage.getItem('userComments')) || [];

// Track comment being edited
let editingCommentId = null;

// Store uploaded image data
let imageData = null;

// Translation cache to avoid repeated API calls
const translationCache = {};

// Detect if text is Arabic
function isArabic(text) {
    if (!text) return false;
    const arabicRegex = /[\u0600-\u06FF]/;
    return arabicRegex.test(text);
}

// Detect comment language
function detectCommentLanguage(commentText) {
    return isArabic(commentText) ? 'ar' : 'en';
}

// Translate text using Google Translate API (free method via CORS proxy)
async function translateText(text, targetLang) {
    // Check cache first
    const cacheKey = `${text}_${targetLang}`;
    if (translationCache[cacheKey]) {
        return translationCache[cacheKey];
    }

    // If text is already in target language, return as is
    const sourceLang = detectCommentLanguage(text);
    if (sourceLang === targetLang) {
        translationCache[cacheKey] = text;
        return text;
    }

    try {
        // Use Google Translate API via a CORS proxy
        // Note: This uses a free CORS proxy, for production use your own backend or API key
        const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`;
        
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.responseData && data.responseData.translatedText) {
            const translated = data.responseData.translatedText;
            // Cache the translation
            translationCache[cacheKey] = translated;
            return translated;
        }
        
        // Fallback: return original text if translation fails
        return text;
    } catch (error) {
        console.error('Translation error:', error);
        // Return original text on error
        return text;
    }
}

// Translate all comments when language changes
async function translateComments(targetLang) {
    if (!targetLang) {
        targetLang = localStorage.getItem('language') || 'en';
    }
    
    // Translate user comments
    for (let i = 0; i < userComments.length; i++) {
        const comment = userComments[i];
        if (comment.comment && comment.comment.trim()) {
            const commentLang = detectCommentLanguage(comment.comment);
            if (commentLang !== targetLang) {
                // Only translate if not already translated for this language
                if (!comment.translatedComment || comment.translatedLang !== targetLang) {
                    comment.translatedComment = await translateText(comment.comment, targetLang);
                    comment.translatedLang = targetLang;
                    // Small delay to avoid rate limiting
                    await new Promise(resolve => setTimeout(resolve, 100));
                }
            } else {
                // If comment is already in target language, clear translation
                comment.translatedComment = null;
                comment.translatedLang = null;
            }
        }
    }
    
    // Save updated comments with translations
    localStorage.setItem('userComments', JSON.stringify(userComments));
}

// Initialize page
document.addEventListener('DOMContentLoaded', async function() {
    updateCartCount();
    updateFavoritesCount();
    setupCommentForm();
    
    // Load and translate comments on page load
    const currentLang = localStorage.getItem('language') || 'en';
    await translateComments(currentLang);
    loadAdminReviews();
    loadUserComments();
    
    // Listen for language changes
    window.addEventListener('languageChanged', async function(event) {
        const targetLang = event.detail || localStorage.getItem('language') || 'en';
        // Translate comments to the new language
        await translateComments(targetLang);
        loadAdminReviews();
        loadUserComments();
    });
});

// Load admin reviews
function loadAdminReviews() {
    const adminReviewsContainer = document.getElementById('adminReviews');
    if (!adminReviewsContainer) return;

    const currentLang = localStorage.getItem('language') || 'en';
    const reviews = adminReviews[currentLang] || adminReviews.en;
    adminReviewsContainer.innerHTML = reviews.map(review => createCommentCard(review)).join('');
}

// Load user comments
function loadUserComments() {
    const userCommentsContainer = document.getElementById('userComments');
    if (!userCommentsContainer) return;

    const currentLang = localStorage.getItem('language') || 'en';
    const noCommentsText = currentLang === 'ar' 
        ? 'لا توجد مراجعات للعملاء بعد. كن أول من يشارك تجربته!'
        : 'No customer reviews yet. Be the first to share your experience!';

    if (userComments.length === 0) {
        userCommentsContainer.innerHTML = `<p class="no-comments">${noCommentsText}</p>`;
        return;
    }

    // Sort by date (newest first)
    const sortedComments = [...userComments].sort((a, b) => new Date(b.date) - new Date(a.date));
    userCommentsContainer.innerHTML = sortedComments.map(comment => createCommentCard(comment)).join('');
}

// Create comment card HTML
function createCommentCard(comment) {
    const formattedDate = formatDate(comment.date);
    const isUserComment = !comment.isAdmin;
    const currentLang = localStorage.getItem('language') || 'en';
    
    const editTitle = currentLang === 'ar' ? 'تعديل التعليق' : 'Edit comment';
    const deleteTitle = currentLang === 'ar' ? 'حذف التعليق' : 'Delete comment';
    const adminBadge = currentLang === 'ar' ? 'مدير' : 'Admin';
    
    const editDeleteButtons = isUserComment ? `
        <div class="comment-actions">
            <button class="edit-btn" onclick="editComment('${comment.id}')" title="${editTitle}">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete-btn" onclick="deleteComment('${comment.id}')" title="${deleteTitle}">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    ` : '';

    return `
        <div class="comment-card ${comment.isAdmin ? 'admin-review' : ''}" data-comment-id="${comment.id}">
            <div class="comment-header">
                <div class="comment-author">
                    <div class="author-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="author-info">
                        <h3 class="author-name">${escapeHtml(comment.name)}</h3>
                        <span class="comment-date">${formattedDate}</span>
                    </div>
                </div>
                ${comment.isAdmin ? `<span class="admin-badge"><i class="fas fa-crown"></i> ${adminBadge}</span>` : ''}
            </div>
            <div class="comment-text">
                ${comment.comment ? `<p>${escapeHtml(getDisplayComment(comment))}</p>` : ''}
            </div>
            ${comment.image ? `
                <div class="comment-image">
                    <img src="${comment.image}" alt="Comment image" onclick="openImageModal('${comment.image}')">
                </div>
            ` : ''}
            ${editDeleteButtons}
        </div>
    `;
}

// Get display comment (translated if available)
function getDisplayComment(comment) {
    const currentLang = localStorage.getItem('language') || 'en';
    const commentLang = detectCommentLanguage(comment.comment || '');
    
    // If comment is in the same language as current, show original
    if (commentLang === currentLang) {
        return comment.comment;
    }
    
    // If translation exists and is for current language, show translation
    if (comment.translatedComment && comment.translatedLang === currentLang) {
        return comment.translatedComment;
    }
    
    // Otherwise return original (translation may be in progress)
    return comment.comment;
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const currentLang = localStorage.getItem('language') || 'en';
    const locale = currentLang === 'ar' ? 'ar-JO' : 'en-US';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(locale, options);
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Setup comment form
function setupCommentForm() {
    const form = document.getElementById('commentForm');
    if (!form) return;

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        submitComment();
    });
}

// Submit comment
function submitComment() {
    const form = document.getElementById('commentForm');
    const userName = document.getElementById('userName').value.trim();
    const userComment = document.getElementById('userComment').value.trim();

    // Require at least name and either comment or image
    if (!userName) {
        const currentLang = localStorage.getItem('language') || 'en';
        const message = currentLang === 'ar' ? 'الرجاء إدخال الاسم' : 'Please enter your name';
        showNotification(message, 'error');
        return;
    }

    if (!userComment && !imageData) {
        const currentLang = localStorage.getItem('language') || 'en';
        const message = currentLang === 'ar' ? 'الرجاء إدخال تعليق أو صورة' : 'Please enter a comment or upload an image';
        showNotification(message, 'error');
        return;
    }

    const wasEditing = editingCommentId !== null;

    if (editingCommentId) {
        // Update existing comment
        const commentIndex = userComments.findIndex(c => c.id === editingCommentId);
        if (commentIndex !== -1) {
            userComments[commentIndex].name = userName;
            userComments[commentIndex].comment = userComment;
            userComments[commentIndex].date = new Date().toISOString().split('T')[0];
            // Update image if a new one was uploaded
            if (imageData) {
                userComments[commentIndex].image = imageData;
            }
        }
    } else {
        // Create new comment
        const newComment = {
            id: 'user-' + Date.now(),
            name: userName,
            comment: userComment,
            date: new Date().toISOString().split('T')[0],
            isAdmin: false,
            image: imageData || null
        };
        userComments.push(newComment);
    }
    
    localStorage.setItem('userComments', JSON.stringify(userComments));

    // Reset form
    form.reset();
    imageData = null;
    removeImagePreview();
    editingCommentId = null;

    // Reload comments
    loadUserComments();

    const currentLang = localStorage.getItem('language') || 'en';
    const successMessage = wasEditing 
        ? (currentLang === 'ar' ? 'تم تحديث التعليق بنجاح!' : 'Comment updated successfully!')
        : (currentLang === 'ar' ? 'شكراً لمراجعتك!' : 'Thank you for your review!');
    showNotification(successMessage, 'success');
    
    // Scroll to user comments section
    document.querySelector('.user-comments-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function editComment(commentId) {
    const comment = userComments.find(c => c.id === commentId);
    if (!comment) return;

    // Store the comment ID being edited
    editingCommentId = commentId;

    // Populate form with comment data
    document.getElementById('userName').value = comment.name;
    document.getElementById('userComment').value = comment.comment || '';
    
    // Restore image if exists
    if (comment.image) {
        imageData = comment.image;
        const previewContainer = document.getElementById('imagePreviewContainer');
        const previewImg = document.getElementById('imagePreview');
        if (previewContainer && previewImg) {
            previewImg.src = imageData;
            previewContainer.style.display = 'block';
        }
    } else {
        imageData = null;
        removeImagePreview();
    }

    // Scroll to form
    document.querySelector('.comment-form-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    const currentLang = localStorage.getItem('language') || 'en';
    const message = currentLang === 'ar' 
        ? 'تم تحميل التعليق للتعديل. قم بالتحديث وإرسال للحفظ.'
        : 'Comment loaded for editing. Update and submit to save changes.';
    showNotification(message, 'info');
}

// Delete comment
function deleteComment(commentId, showNotification = true) {
    const currentLang = localStorage.getItem('language') || 'en';
    const confirmMessage = currentLang === 'ar' 
        ? 'هل أنت متأكد من حذف هذا التعليق؟'
        : 'Are you sure you want to delete this comment?';
    
    if (!confirm(confirmMessage)) {
        return;
    }

    userComments = userComments.filter(c => c.id !== commentId);
    localStorage.setItem('userComments', JSON.stringify(userComments));

    loadUserComments();

    if (showNotification) {
        const message = currentLang === 'ar' ? 'تم حذف التعليق بنجاح' : 'Comment deleted successfully';
        showNotification(message, 'success');
    }
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Preview review image
function previewReviewImage(event) {
    const file = event.target.files[0];
    if (!file) return;

    // Check if file is an image
    if (!file.type.startsWith('image/')) {
        const currentLang = localStorage.getItem('language') || 'en';
        const message = currentLang === 'ar' ? 'الرجاء اختيار ملف صورة' : 'Please select an image file';
        showNotification(message, 'error');
        event.target.value = '';
        return;
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
        const currentLang = localStorage.getItem('language') || 'en';
        const message = currentLang === 'ar' ? 'حجم الصورة كبير جداً (الحد الأقصى 5 ميجابايت)' : 'Image size is too large (max 5MB)';
        showNotification(message, 'error');
        event.target.value = '';
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        imageData = e.target.result;
        const previewContainer = document.getElementById('imagePreviewContainer');
        const previewImg = document.getElementById('imagePreview');
        
        if (previewContainer && previewImg) {
            previewImg.src = imageData;
            previewContainer.style.display = 'block';
        }
    };
    reader.readAsDataURL(file);
}

// Remove image preview
function removeImagePreview() {
    imageData = null;
    const previewContainer = document.getElementById('imagePreviewContainer');
    const previewImg = document.getElementById('imagePreview');
    const fileInput = document.getElementById('reviewImage');
    
    if (previewContainer) {
        previewContainer.style.display = 'none';
    }
    if (previewImg) {
        previewImg.src = '';
    }
    if (fileInput) {
        fileInput.value = '';
    }
}

// Open image modal for full view
function openImageModal(imageSrc) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="image-modal-content">
            <button class="image-modal-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
            <img src="${imageSrc}" alt="Full size image">
        </div>
    `;
    
    // Close on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    document.body.appendChild(modal);
}

