# 🇯🇴 Jordanian Marketplace - E-Commerce Website

A modern, fully-functional e-commerce website for selling authentic Jordanian products, inspired by Shein's user experience but focused on local products.

## Features

### 🛍️ Shopping Experience
- **Product Catalog**: Browse through a wide selection of Jordanian products
- **Category Filtering**: Filter products by category (Food, Handicrafts, Cosmetics, Clothing, Accessories)
- **Search Functionality**: Search for products by name, description, or category
- **Product Details**: Detailed product pages with descriptions and quantity selection
- **Shopping Cart**: Add, remove, and update quantities in your cart
- **Checkout Process**: Secure checkout with form validation

### 🎨 Design Features
- **Modern UI**: Clean, modern design with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **User-Friendly Navigation**: Easy-to-use navigation with cart counter
- **Beautiful Color Scheme**: Green and earth tones reflecting Jordanian heritage

### 💼 Product Categories
1. **Food & Beverages**: Za'atar, Olive Oil, Dates, Honey, Coffee
2. **Handicrafts**: Ceramic Pottery, Handwoven Baskets, Mosaic Art
3. **Cosmetics**: Dead Sea products, Rose Water, Natural skincare
4. **Clothing**: Traditional Abaya, Embroidery Shawls
5. **Accessories**: Keffiyeh, Leather Bags, Traditional Sandals

## File Structure

```
├── index.html          # Main homepage with product listing
├── product.html        # Individual product detail page
├── cart.html           # Shopping cart page
├── checkout.html       # Checkout and payment page
├── styles.css          # Main stylesheet
├── script.js           # Main JavaScript (product listing, cart management)
├── product.js          # Product detail page functionality
├── cart.js             # Shopping cart functionality
├── checkout.js         # Checkout form validation and processing
└── README.md           # This file
```

## How to Use

1. **Open the Website**: Simply open `index.html` in your web browser
2. **Browse Products**: Use category filters or search to find products
3. **View Details**: Click on any product to see detailed information
4. **Add to Cart**: Click "Add to Cart" button on any product
5. **Manage Cart**: Go to cart page to update quantities or remove items
6. **Checkout**: Fill in shipping and payment information to complete purchase

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **LocalStorage**: Cart persistence
- **Font Awesome**: Icons
- **No Framework**: Pure vanilla JavaScript for fast performance

## Key Features Implementation

### Shopping Cart
- Cart data persists using browser's localStorage
- Real-time cart count updates
- Quantity management (increase/decrease)
- Item removal functionality

### Product Management
- 16 pre-loaded Jordanian products
- Category-based filtering
- Search functionality
- Related products suggestions

### Checkout Process
- Form validation for all fields
- Card number formatting
- Expiry date validation (MM/YY format)
- CVV validation
- Order confirmation modal

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Adding Products
Edit the `products` array in `script.js`:

```javascript
{
    id: 17,
    name: "Product Name",
    category: "food",
    price: 10.00,
    description: "Product description",
    emoji: "🛍️"
}
```

### Changing Colors
Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2c5f2d;
    --secondary-color: #97bc62;
    --accent-color: #f4a261;
}
```

## Future Enhancements

- User authentication and accounts
- Product reviews and ratings
- Payment gateway integration
- Order tracking
- Wishlist functionality
- Product images (currently using emojis)
- Admin panel for product management

## License

This project is open source and available for educational purposes.

---

**Made with ❤️ for Jordanian products**

