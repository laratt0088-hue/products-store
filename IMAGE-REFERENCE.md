# Product Image Reference Guide

This document lists all product images and where they are used in the code.

## Image Locations in Code

### Main Product Definitions (script.js)
All product images are defined in the `products` array in `script.js`. Each image has a detailed comment showing:
- Product ID
- Arabic product name
- English product name  
- Category
- Instructions to change the image

### Where Images Are Displayed

1. **Homepage Product Grid** (`script.js` - `displayProducts()` function)
   - Shows product images in the main product listing
   - Comment: `<!-- Displaying image for: [Product Name] (Product ID: [ID]) -->`

2. **Product Detail Page** (`product.js` - `loadProductDetails()` function)
   - Shows the main large product image
   - Comment: `<!-- PRODUCT DETAIL PAGE IMAGE: Displaying main product image for [Product Name] -->`

3. **Related Products** (`product.js` - `loadRelatedProducts()` function)
   - Shows related product images on the product detail page
   - Comment: `<!-- RELATED PRODUCT IMAGE: Displaying related product image for [Product Name] -->`

4. **Shopping Cart** (`cart.js` - `loadCartItems()` function)
   - Shows product images in the cart items list
   - Comment: `<!-- CART ITEM IMAGE: Displaying cart item image for [Product Name] -->`

5. **Checkout Page** (`checkout.js` - `loadOrderSummary()` function)
   - Shows product images in the order summary
   - Comment: `<!-- CHECKOUT ORDER ITEM IMAGE: Displaying order summary image for [Product Name] -->`

## Complete Product Image List

| ID | Image File | Arabic Name | English Name | Category | Used In |
|----|-----------|-------------|--------------|----------|---------|
| 1 | `images/product-1.jpg` | خليط الزعتر | Za'atar Spice Blend | Food & Beverages | Homepage, Product Page, Cart, Checkout |
| 2 | `images/product-2.jpg` | زيت الزيتون (500 مل) | Olive Oil (500ml) | Food & Beverages | Homepage, Product Page, Cart, Checkout |
| 3 | `images/product-3.jpg` | كوفية منسوجة يدوياً | Handwoven Keffiyeh | Accessories | Homepage, Product Page, Cart, Checkout |
| 4 | `images/product-4.jpg` | قناع طين البحر الميت | Dead Sea Mud Mask | Cosmetics | Homepage, Product Page, Cart, Checkout |
| 5 | `images/product-5.jpg` | فخار يدوي الصنع | Handmade Ceramic Pottery | Handicrafts | Homepage, Product Page, Cart, Checkout |
| 6 | `images/product-6.jpg` | تمر أردني (1 كيلو) | Jordanian Dates (1kg) | Food & Beverages | Homepage, Product Page, Cart, Checkout |
| 7 | `images/product-7.jpg` | شال مطرز تقليدي | Traditional Embroidery Shawl | Clothing | Homepage, Product Page, Cart, Checkout |
| 8 | `images/product-8.jpg` | مقشر ملح البحر الميت | Dead Sea Salt Scrub | Cosmetics | Homepage, Product Page, Cart, Checkout |
| 9 | `images/product-9.jpg` | سلة منسوجة يدوياً | Handwoven Basket | Handicrafts | Homepage, Product Page, Cart, Checkout |
| 10 | `images/product-10.jpg` | عسل أردني (500 جرام) | Jordanian Honey (500g) | Food & Beverages | Homepage, Product Page, Cart, Checkout |
| 11 | `images/product-11.jpg` | عباية تقليدية | Traditional Abaya | Clothing | Homepage, Product Page, Cart, Checkout |
| 12 | `images/product-12.jpg` | ماء الورد (250 مل) | Rose Water (250ml) | Cosmetics | Homepage, Product Page, Cart, Checkout |
| 13 | `images/product-13.jpg` | حقيبة جلدية يدوية الصنع | Handmade Leather Bag | Accessories | Homepage, Product Page, Cart, Checkout |
| 14 | `images/product-14.jpg` | مزيج القهوة الأردنية | Jordanian Coffee Blend | Food & Beverages | Homepage, Product Page, Cart, Checkout |
| 15 | `images/product-15.jpg` | قطعة فسيفساء فنية | Mosaic Art Piece | Handicrafts | Homepage, Product Page, Cart, Checkout |
| 16 | `images/product-16.jpg` | صنادل تقليدية | Traditional Sandals | Accessories | Homepage, Product Page, Cart, Checkout |

## How to Change an Image

1. **Find the product** in `script.js` by:
   - Product ID (1-16)
   - Arabic name in the comment
   - English name in the comment

2. **Locate the image property** - it looks like:
   ```javascript
   image: "images/product-1.jpg" // IMAGE FOR: Product ID 1 - خليط الزعتر (Za'atar Spice Blend) - Category: Food & Beverages - Change this path to update the image
   ```

3. **Change the path** to your new image file:
   ```javascript
   image: "images/my-new-image.jpg" // IMAGE FOR: Product ID 1 - خليط الزعتر (Za'atar Spice Blend) - Category: Food & Beverages - Change this path to update the image
   ```

4. **Make sure the image file exists** in the `images` folder

## Image Specifications

- **Format**: JPG, PNG, or WebP
- **Recommended Size**: 400x400 pixels (square)
- **Aspect Ratio**: 1:1 (square) for best display
- **File Size**: Under 200KB recommended for fast loading

## Notes

- All images are referenced from the `images` folder
- Images are used in multiple places (homepage, product pages, cart, checkout)
- Changing the image path in `script.js` will update it everywhere
- Each image has detailed comments in the code for easy identification

