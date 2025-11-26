// Product Data - Jordanian Products
// 
// ============================================
// IMAGE GUIDE - HOW TO CHANGE PRODUCT IMAGES:
// ============================================
// Each product uses a local image file in the "images" folder.
// Image naming: images/product-[id].jpg (e.g., images/product-1.jpg)
// 
// TO CHANGE AN IMAGE:
// 1. Find the product by its ID or Arabic name in the comment
// 2. Replace the path in the "image" property (e.g., "images/product-1.jpg")
// 3. Make sure your image file exists in the "images" folder
//
// Each image has a detailed comment showing:
// - Product ID
// - Arabic product name
// - English product name
// - Category
// ============================================
//
const products = [
    {
        id: 1,
        name: "Za'atar Spice Blend",
        nameAr: "خليط الزعتر",
        category: "food",
        categoryAr: "طعام ومشروبات",
        price: 8.50,
        oldPrice: 12.00,
        discount: 29,
        stock: 15,
        badge: "Best Seller",
        badgeAr: "الأكثر مبيعاً",
        offerEndDate: null,
        sku: "JTP-001",
        barcode: "6281001001001",
        specifications: {
            weight: "200g",
            ingredients: "Thyme, Sumac, Sesame Seeds, Salt",
            shelfLife: "24 months",
            origin: "Jordan"
        },
        specificationsAr: {
            weight: "200 جرام",
            ingredients: "زعتر، سماق، بذور سمسم، ملح",
            shelfLife: "24 شهر",
            origin: "الأردن"
        },
        faq: [
            { q: "How should I store za'atar?", a: "Store in a cool, dry place away from direct sunlight." },
            { q: "Is this product gluten-free?", a: "Yes, our za'atar blend is naturally gluten-free." }
        ],
        faqAr: [
            { q: "كيف يجب أن أحفظ الزعتر؟", a: "احفظه في مكان بارد وجاف بعيداً عن أشعة الشمس المباشرة." },
            { q: "هل هذا المنتج خالٍ من الغلوتين؟", a: "نعم، خليط الزعتر لدينا خالٍ من الغلوتين بشكل طبيعي." }
        ],
        description: "Experience the authentic taste of Jordan with our premium Za'atar Spice Blend. Carefully crafted using traditional methods, this aromatic blend combines wild thyme, tangy sumac, toasted sesame seeds, and sea salt. Perfect for sprinkling over fresh bread with olive oil for a classic Middle Eastern breakfast, or as a flavorful seasoning for meats, vegetables, and salads. Our za'atar is sourced directly from Jordanian farms, ensuring the highest quality and authentic flavor that has been cherished for generations.",
        descriptionAr: "اختبر الطعم الأصيل للأردن مع خليط الزعتر المميز لدينا. مصنوع بعناية باستخدام الطرق التقليدية، يجمع هذا الخليط العطري بين الزعتر البري، السماق الحامض، بذور السمسم المحمصة، وملح البحر. مثالي للرش على الخبز الطازج مع زيت الزيتون لإفطار شرق أوسطي كلاسيكي، أو كتوابل لذيذة للحوم والخضروات والسلطات. زعترنا مصدر مباشرة من المزارع الأردنية، مما يضمن أعلى جودة ونكهة أصيلة تم تقديرها لأجيال.",
        image: "images/product-1.jpg" // IMAGE FOR: Product ID 1 - خليط الزعتر (Za'atar Spice Blend) - Category: Food & Beverages - Change this path to update the image
    },
    {
        id: 2,
        name: "Olive Oil (500ml)",
        nameAr: "زيت الزيتون (500 مل)",
        category: "food",
        categoryAr: "طعام ومشروبات",
        price: 12.00,
        oldPrice: null,
        discount: 0,
        stock: 8,
        badge: "Featured Product",
        badgeAr: "منتج مميز",
        offerEndDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days from now
        sku: "JTP-002",
        barcode: "6281001001002",
        specifications: {
            weight: "500ml",
            ingredients: "100% Extra Virgin Olive Oil",
            shelfLife: "24 months",
            origin: "Jordan"
        },
        specificationsAr: {
            weight: "500 مل",
            ingredients: "100% زيت زيتون بكر ممتاز",
            shelfLife: "24 شهر",
            origin: "الأردن"
        },
        description: "Indulge in the rich, fruity flavor of our premium Extra Virgin Olive Oil, extracted from the finest olives grown in the fertile valleys of Jordan. Cold-pressed using traditional methods to preserve all natural antioxidants and vitamins, this unfiltered oil maintains its authentic taste and nutritional benefits. Perfect for drizzling over salads, dipping with bread, or enhancing your favorite dishes. Rich in monounsaturated fats and antioxidants, this olive oil is not just a cooking ingredient but a health-promoting superfood that brings the essence of Mediterranean cuisine to your table.",
        descriptionAr: "استمتع بالنكهة الغنية والفاكهية لزيت الزيتون البكر الممتاز لدينا، المستخرج من أجود الزيتون المزروع في الوديان الخصبة في الأردن. معصور على البارد باستخدام الطرق التقليدية للحفاظ على جميع مضادات الأكسدة والفيتامينات الطبيعية، يحافظ هذا الزيت غير المصفى على مذاقه الأصيل وفوائده الغذائية. مثالي للرش على السلطات، التغميس مع الخبز، أو تحسين أطباقك المفضلة. غني بالدهون الأحادية غير المشبعة ومضادات الأكسدة، هذا الزيت ليس مجرد مكون للطبخ بل غذاء خارق يعزز الصحة ويجلب جوهر المطبخ المتوسطي إلى مائدتك.",
        faq: [
            { q: "What makes this olive oil extra virgin?", a: "Extra virgin olive oil is the highest grade, made from the first cold pressing of olives without any chemical processing. Our oil has an acidity level below 0.8%." },
            { q: "How should I store olive oil?", a: "Store in a cool, dark place away from heat and light. Keep the bottle tightly sealed to prevent oxidation." },
            { q: "What is the shelf life?", a: "When stored properly, our olive oil maintains its quality for up to 24 months from the production date." }
        ],
        faqAr: [
            { q: "ما الذي يجعل هذا الزيت بكر ممتاز؟", a: "زيت الزيتون البكر الممتاز هو أعلى درجة، مصنوع من أول عصر بارد للزيتون دون أي معالجة كيميائية. زيتنا لديه مستوى حموضة أقل من 0.8٪." },
            { q: "كيف يجب أن أحفظ زيت الزيتون؟", a: "احفظه في مكان بارد ومظلم بعيداً عن الحرارة والضوء. أبق الزجاجة محكمة الإغلاق لمنع الأكسدة." },
            { q: "ما هي مدة الصلاحية؟", a: "عند التخزين بشكل صحيح، يحافظ زيتنا على جودته لمدة تصل إلى 24 شهراً من تاريخ الإنتاج." }
        ],
        image: "images/product-2.jpg" // IMAGE FOR: Product ID 2 - زيت الزيتون (500 مل) (Olive Oil) - Category: Food & Beverages - Change this path to update the image
    },
    {
        id: 3,
        name: "Handwoven Keffiyeh",
        nameAr: "كوفية منسوجة يدوياً",
        category: "accessories",
        categoryAr: "إكسسوارات",
        price: 15.00,
        oldPrice: null,
        discount: 0,
        stock: 3,
        badge: "Limited Edition",
        badgeAr: "إصدار محدود",
        offerEndDate: null,
        sku: "JTP-003",
        barcode: "6281001001003",
        specifications: {
            material: "100% Cotton",
            dimensions: "110cm x 110cm",
            weight: "150g",
            origin: "Jordan",
            care: "Hand wash, air dry"
        },
        specificationsAr: {
            material: "100% قطن",
            dimensions: "110 سم × 110 سم",
            weight: "150 جرام",
            origin: "الأردن",
            care: "غسيل يدوي، تجفيف بالهواء"
        },
        faq: [
            { q: "How do I wear a keffiyeh?", a: "The keffiyeh can be worn as a headscarf, neck scarf, or draped over the shoulders. There are various traditional and modern styling methods." },
            { q: "Is it suitable for all seasons?", a: "Yes, the cotton material makes it breathable for summer while providing warmth when needed in cooler weather." },
            { q: "How do I care for my keffiyeh?", a: "Hand wash in cold water with mild detergent and air dry. Avoid using bleach or harsh chemicals." }
        ],
        faqAr: [
            { q: "كيف أرتدي الكوفية؟", a: "يمكن ارتداء الكوفية كغطاء للرأس، وشاح للرقبة، أو إلقاؤها على الكتفين. هناك طرق مختلفة للتصميم التقليدي والحديث." },
            { q: "هل مناسبة لجميع الفصول؟", a: "نعم، المادة القطنية تجعلها قابلة للتنفس في الصيف مع توفير الدفء عند الحاجة في الطقس البارد." },
            { q: "كيف أعتني بكوفيتي؟", a: "اغسل يدوياً في ماء بارد مع منظف خفيف وجفف بالهواء. تجنب استخدام المبيض أو المواد الكيميائية القاسية." }
        ],
        description: "Embrace the timeless elegance of our authentic Handwoven Keffiyeh, a symbol of Jordanian heritage and culture. Each piece is meticulously crafted by skilled artisans using traditional weaving techniques passed down through generations. Made from premium 100% cotton, this versatile accessory features the iconic checkered pattern in classic black and white. Whether worn as a headscarf, neck wrap, or draped elegantly over your shoulders, this keffiyeh adds a touch of Middle Eastern sophistication to any outfit. A perfect blend of tradition and style, it makes an ideal gift or personal statement piece.",
        descriptionAr: "استمتع بأناقة خالدة مع كوفيتنا المنسوجة يدوياً الأصيلة، رمز التراث والثقافة الأردنية. كل قطعة مصنوعة بعناية من قبل الحرفيين المهرة باستخدام تقنيات النسيج التقليدية التي تم تناقلها عبر الأجيال. مصنوعة من قطن ممتاز 100٪، هذا الإكسسوار متعدد الاستخدامات يتميز بالنمط المربع الأيقوني باللونين الأسود والأبيض الكلاسيكيين. سواء ارتديتها كغطاء للرأس، أو وشاح للرقبة، أو ألقيته بأناقة على كتفيك، تضيف هذه الكوفية لمسة من الأناقة الشرق أوسطية إلى أي زي. مزيج مثالي من التقاليد والأناقة، تجعلها هدية مثالية أو قطعة بيان شخصي.",
        image: "images/product-3.jpg" // IMAGE FOR: Product ID 3 - كوفية منسوجة يدوياً (Handwoven Keffiyeh) - Category: Accessories - Change this path to update the image
    },
    {
        id: 4,
        name: "Dead Sea Mud Mask",
        nameAr: "قناع طين البحر الميت",
        category: "cosmetics",
        categoryAr: "مستحضرات تجميل",
        price: 17.00,
        oldPrice: 25.00,
        discount: 32,
        stock: 12,
        badge: "New Arrival",
        badgeAr: "وصل حديثاً",
        offerEndDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days from now
        sku: "JTP-004",
        barcode: "6281001001004",
        specifications: {
            weight: "200g",
            ingredients: "Dead Sea Mud, Magnesium, Calcium, Potassium, Sodium",
            skinType: "All skin types",
            shelfLife: "36 months",
            origin: "Dead Sea, Jordan"
        },
        specificationsAr: {
            weight: "200 جرام",
            ingredients: "طين البحر الميت، المغنيسيوم، الكالسيوم، البوتاسيوم، الصوديوم",
            skinType: "جميع أنواع البشرة",
            shelfLife: "36 شهر",
            origin: "البحر الميت، الأردن"
        },
        faq: [
            { q: "How often should I use this mask?", a: "For best results, use 2-3 times per week. Apply a thin layer, leave for 10-15 minutes, then rinse with warm water." },
            { q: "Is it suitable for sensitive skin?", a: "Yes, our Dead Sea mud is naturally gentle and suitable for all skin types. However, we recommend doing a patch test first if you have very sensitive skin." },
            { q: "What are the benefits of Dead Sea mud?", a: "Dead Sea mud is rich in minerals that help detoxify, exfoliate, and nourish the skin. It can help reduce acne, improve skin texture, and provide a natural glow." }
        ],
        faqAr: [
            { q: "كم مرة يجب أن أستخدم هذا القناع؟", a: "للحصول على أفضل النتائج، استخدم 2-3 مرات في الأسبوع. ضع طبقة رقيقة، اتركها لمدة 10-15 دقيقة، ثم اشطفها بالماء الدافئ." },
            { q: "هل مناسب للبشرة الحساسة؟", a: "نعم، طين البحر الميت لدينا لطيف بشكل طبيعي ومناسب لجميع أنواع البشرة. ومع ذلك، نوصي بإجراء اختبار رقعة أولاً إذا كان لديك بشرة حساسة جداً." },
            { q: "ما هي فوائد طين البحر الميت؟", a: "طين البحر الميت غني بالمعادن التي تساعد على إزالة السموم، التقشير، وتغذية البشرة. يمكن أن يساعد في تقليل حب الشباب، تحسين ملمس البشرة، وتوفير توهج طبيعي." }
        ],
        description: "Transform your skincare routine with our premium Dead Sea Mud Mask, sourced directly from the mineral-rich depths of the Dead Sea in Jordan. This therapeutic mask is packed with essential minerals including magnesium, calcium, potassium, and sodium, which work together to deeply cleanse, detoxify, and rejuvenate your skin. The natural mud helps draw out impurities, unclog pores, and absorb excess oil while providing essential nutrients. Regular use leaves your skin feeling refreshed, smooth, and radiant. Suitable for all skin types, this mask is a natural solution for achieving a healthy, glowing complexion.",
        descriptionAr: "حوّل روتين العناية ببشرتك مع قناع طين البحر الميت المميز لدينا، المستخرج مباشرة من أعماق البحر الميت الغنية بالمعادن في الأردن. هذا القناع العلاجي مليء بالمعادن الأساسية بما في ذلك المغنيسيوم والكالسيوم والبوتاسيوم والصوديوم، والتي تعمل معاً لتنظيف البشرة بعمق وإزالة السموم وتجديدها. الطين الطبيعي يساعد على سحب الشوائب، فتح المسام، وامتصاص الزيت الزائد مع توفير العناصر الغذائية الأساسية. الاستخدام المنتظم يترك بشرتك منعشة وناعمة ومتوهجة. مناسب لجميع أنواع البشرة، هذا القناع هو حل طبيعي لتحقيق بشرة صحية ومتوهجة.",
        image: "images/product-4.jpg" // IMAGE FOR: Product ID 4 - قناع طين البحر الميت (Dead Sea Mud Mask) - Category: Cosmetics - Change this path to update the image
    },
    {
        id: 5,
        name: "Handmade Ceramic Pottery",
        nameAr: "فخار يدوي الصنع",
        category: "handicrafts",
        categoryAr: "حرف يدوية",
        price: 25.00,
        oldPrice: null,
        discount: 0,
        stock: 20,
        badge: null,
        badgeAr: null,
        offerEndDate: null,
        sku: "JTP-005",
        barcode: "6281001001005",
        specifications: {
            material: "Ceramic Clay",
            dimensions: "Diameter: 25cm, Height: 12cm",
            weight: "800g",
            origin: "Jordan",
            care: "Dishwasher safe, microwave safe"
        },
        specificationsAr: {
            material: "طين خزفي",
            dimensions: "القطر: 25 سم، الارتفاع: 12 سم",
            weight: "800 جرام",
            origin: "الأردن",
            care: "آمن لغسالة الصحون، آمن للميكروويف"
        },
        faq: [
            { q: "Is this pottery dishwasher safe?", a: "Yes, our ceramic pottery is glazed and fired at high temperatures, making it safe for dishwasher use." },
            { q: "Can I use it in the microwave?", a: "Yes, the pottery is microwave safe. However, avoid sudden temperature changes to prevent cracking." },
            { q: "How is the pottery made?", a: "Each piece is handcrafted by skilled Jordanian artisans using traditional techniques, then glazed and fired in kilns to ensure durability." }
        ],
        faqAr: [
            { q: "هل هذا الفخار آمن لغسالة الصحون؟", a: "نعم، فخارنا الخزفي مطلي ومخبوز في درجات حرارة عالية، مما يجعله آمناً للاستخدام في غسالة الصحون." },
            { q: "هل يمكنني استخدامه في الميكروويف؟", a: "نعم، الفخار آمن للميكروويف. ومع ذلك، تجنب التغيرات المفاجئة في درجة الحرارة لمنع التشقق." },
            { q: "كيف يتم صنع الفخار؟", a: "كل قطعة مصنوعة يدوياً من قبل الحرفيين الأردنيين المهرة باستخدام التقنيات التقليدية، ثم يتم طلاؤها وحرقها في الأفران لضمان المتانة." }
        ],
        description: "Discover the artistry of traditional Jordanian craftsmanship with our exquisite Handmade Ceramic Pottery. Each piece is lovingly created by master artisans who have honed their skills over generations, using time-honored techniques to shape and decorate these beautiful bowls. The intricate patterns and designs reflect the rich cultural heritage of Jordan, featuring geometric motifs and traditional symbols. Made from high-quality ceramic clay and finished with a durable glaze, these pieces are both functional and decorative. Perfect for serving traditional dishes, displaying as art, or gifting to someone special. Each piece is unique, carrying the mark of the artisan who created it.",
        descriptionAr: "اكتشف فن الحرف اليدوية الأردنية التقليدية مع فخارنا الخزفي اليدوي الرائع. كل قطعة مصنوعة بحب من قبل الحرفيين المهرة الذين صقلوا مهاراتهم عبر الأجيال، مستخدمين التقنيات التقليدية لتشكيل وتزيين هذه الأوعية الجميلة. الأنماط والتصاميم المعقدة تعكس التراث الثقافي الغني للأردن، وتتميز بزخارف هندسية ورموز تقليدية. مصنوعة من طين خزفي عالي الجودة ومكتملة بطلاء متين، هذه القطع وظيفية وزخرفية. مثالية لتقديم الأطباق التقليدية، العرض كفن، أو إهدائها لشخص خاص. كل قطعة فريدة، تحمل علامة الحرفي الذي صنعها.",
        image: "images/product-5.jpg" // IMAGE FOR: Product ID 5 - فخار يدوي الصنع (Handmade Ceramic Pottery) - Category: Handicrafts - Change this path to update the image
    },
    {
        id: 6,
        name: "Jordanian Dates (1kg)",
        nameAr: "تمر أردني (1 كيلو)",
        category: "food",
        categoryAr: "طعام ومشروبات",
        price: 10.00,
        oldPrice: null,
        discount: 0,
        stock: 0,
        badge: "Best Seller",
        badgeAr: "الأكثر مبيعاً",
        offerEndDate: null,
        sku: "JTP-006",
        barcode: "6281001001006",
        specifications: {
            weight: "1kg",
            variety: "Medjool Dates",
            ingredients: "100% Natural Dates",
            shelfLife: "12 months",
            origin: "Jordan Valley, Jordan"
        },
        specificationsAr: {
            weight: "1 كيلو",
            variety: "تمر مجهول",
            ingredients: "100% تمر طبيعي",
            shelfLife: "12 شهر",
            origin: "وادي الأردن، الأردن"
        },
        faq: [
            { q: "Are these dates organic?", a: "Our dates are naturally grown in the Jordan Valley without the use of harmful pesticides, making them a healthy, natural choice." },
            { q: "How should I store dates?", a: "Store in a cool, dry place. For longer storage, keep in an airtight container in the refrigerator." },
            { q: "What are the health benefits of dates?", a: "Dates are rich in fiber, potassium, magnesium, and antioxidants. They provide natural energy and support digestive health." }
        ],
        faqAr: [
            { q: "هل هذه التمور عضوية؟", a: "تمورنا تزرع بشكل طبيعي في وادي الأردن دون استخدام المبيدات الضارة، مما يجعلها خياراً صحياً وطبيعياً." },
            { q: "كيف يجب أن أحفظ التمور؟", a: "احفظها في مكان بارد وجاف. للتخزين الأطول، احفظها في وعاء محكم الإغلاق في الثلاجة." },
            { q: "ما هي الفوائد الصحية للتمور؟", a: "التمور غنية بالألياف والبوتاسيوم والمغنيسيوم ومضادات الأكسدة. توفر طاقة طبيعية وتدعم صحة الجهاز الهضمي." }
        ],
        description: "Savor the natural sweetness and exceptional quality of our Premium Jordanian Medjool Dates, harvested from the sun-drenched groves of the Jordan Valley. These plump, succulent dates are known as the 'king of dates' for their large size, soft texture, and rich, caramel-like flavor. Grown in the ideal climate of the Jordan Valley, these dates are naturally sweet without any added sugars or preservatives. Rich in essential nutrients including fiber, potassium, magnesium, and antioxidants, they make a perfect healthy snack or natural sweetener. Whether enjoyed on their own, stuffed with nuts, or used in cooking and baking, these dates bring the authentic taste of the Middle East to your table.",
        descriptionAr: "استمتع بالحلاوة الطبيعية والجودة الاستثنائية لتمور المجهول الأردنية المميزة لدينا، المحصودة من بساتين وادي الأردن المشمسة. هذه التمور الممتلئة والعصارية معروفة باسم 'ملك التمور' لحجمها الكبير، ملمسها الناعم، ونكهتها الغنية الشبيهة بالكراميل. مزروعة في المناخ المثالي لوادي الأردن، هذه التمور حلوة بشكل طبيعي دون أي سكريات أو مواد حافظة مضافة. غنية بالعناصر الغذائية الأساسية بما في ذلك الألياف والبوتاسيوم والمغنيسيوم ومضادات الأكسدة، تجعلها وجبة خفيفة صحية مثالية أو محلي طبيعي. سواء استمتعت بها وحدها، أو محشوة بالمكسرات، أو مستخدمة في الطهي والخبز، تجلب هذه التمور الطعم الأصيل للشرق الأوسط إلى مائدتك.",
        image: "images/product-6.jpg" // IMAGE FOR: Product ID 6 - تمر أردني (1 كيلو) (Jordanian Dates) - Category: Food & Beverages - Change this path to update the image
    },
    {
        id: 7,
        name: "Traditional Embroidery Shawl",
        nameAr: "شال مطرز تقليدي",
        category: "clothing",
        categoryAr: "ملابس",
        price: 35.00,
        oldPrice: null,
        discount: 0,
        stock: 10,
        badge: "Featured Product",
        badgeAr: "منتج مميز",
        offerEndDate: null,
        sku: "JTP-007",
        barcode: "6281001001007",
        specifications: {
            material: "Silk and Cotton Blend",
            dimensions: "180cm x 70cm",
            weight: "200g",
            origin: "Jordan",
            care: "Dry clean recommended"
        },
        specificationsAr: {
            material: "مزيج حرير وقطن",
            dimensions: "180 سم × 70 سم",
            weight: "200 جرام",
            origin: "الأردن",
            care: "ينصح بالتنظيف الجاف"
        },
        faq: [
            { q: "How is the embroidery done?", a: "Each shawl is hand-embroidered by skilled artisans using traditional techniques and patterns that have been passed down through generations." },
            { q: "Can I machine wash this shawl?", a: "We recommend dry cleaning to preserve the delicate embroidery and maintain the fabric's quality and colors." },
            { q: "What makes this shawl special?", a: "Each piece is unique, featuring intricate hand-embroidered patterns that reflect Jordanian cultural heritage. No two shawls are exactly alike." }
        ],
        faqAr: [
            { q: "كيف يتم التطريز؟", a: "كل شال مطرز يدوياً من قبل الحرفيين المهرة باستخدام التقنيات والأنماط التقليدية التي تم تناقلها عبر الأجيال." },
            { q: "هل يمكنني غسل هذا الشال في الغسالة؟", a: "نوصي بالتنظيف الجاف للحفاظ على التطريز الدقيق والحفاظ على جودة الأقمشة والألوان." },
            { q: "ما الذي يجعل هذا الشال مميزاً؟", a: "كل قطعة فريدة، تتميز بأنماط مطرزة يدوياً معقدة تعكس التراث الثقافي الأردني. لا يوجد شالان متطابقان تماماً." }
        ],
        description: "Adorn yourself with the timeless beauty of our Traditional Embroidery Shawl, a masterpiece of Jordanian textile artistry. Each shawl is meticulously hand-embroidered by skilled artisans who dedicate hours to creating intricate patterns and motifs that tell the story of Jordan's rich cultural heritage. Made from a luxurious blend of silk and cotton, this shawl offers both elegance and comfort. The delicate embroidery features traditional geometric patterns, floral designs, and symbolic motifs that have been cherished for centuries. Whether draped over your shoulders for a formal occasion or worn as an elegant accessory, this shawl is a statement piece that celebrates the artistry and craftsmanship of Jordanian culture.",
        descriptionAr: "تزيني بجمال خالد مع شال التطريز التقليدي لدينا، تحفة فنية من فنون النسيج الأردنية. كل شال مطرز يدوياً بعناية من قبل الحرفيين المهرة الذين يكرسون ساعات لإنشاء أنماط وزخارف معقدة تحكي قصة التراث الثقافي الغني للأردن. مصنوع من مزيج فاخر من الحرير والقطن، يوفر هذا الشال الأناقة والراحة. التطريز الدقيق يتميز بأنماط هندسية تقليدية وتصاميم زهرية وزخارف رمزية تم تقديرها لقرون. سواء ألقيته على كتفيك لمناسبة رسمية أو ارتديتيه كإكسسوار أنيق، هذا الشال هو قطعة بيان تحتفل بفن وحرفية الثقافة الأردنية.",
        image: "images/product-7.jpg" // IMAGE FOR: Product ID 7 - شال مطرز تقليدي (Traditional Embroidery Shawl) - Category: Clothing - Change this path to update the image
    },
    {
        id: 8,
        name: "Dead Sea Salt Scrub",
        nameAr: "مقشر ملح البحر الميت",
        category: "cosmetics",
        categoryAr: "مستحضرات تجميل",
        price: 16.00,
        oldPrice: null,
        discount: 0,
        stock: 18,
        badge: null,
        badgeAr: null,
        offerEndDate: null,
        sku: "JTP-008",
        barcode: "6281001001008",
        specifications: {
            weight: "300g",
            ingredients: "Dead Sea Salt, Almond Oil, Jojoba Oil, Vitamin E",
            skinType: "All skin types",
            shelfLife: "36 months",
            origin: "Dead Sea, Jordan"
        },
        specificationsAr: {
            weight: "300 جرام",
            ingredients: "ملح البحر الميت، زيت اللوز، زيت الجوجوبا، فيتامين E",
            skinType: "جميع أنواع البشرة",
            shelfLife: "36 شهر",
            origin: "البحر الميت، الأردن"
        },
        faq: [
            { q: "How do I use the salt scrub?", a: "Apply to wet skin in circular motions, focusing on rough areas. Rinse thoroughly with warm water. Use 2-3 times per week for best results." },
            { q: "Can I use it on my face?", a: "This scrub is designed for body use. For facial exfoliation, we recommend using a gentler product specifically formulated for the face." },
            { q: "What are the benefits of Dead Sea salt?", a: "Dead Sea salt contains high concentrations of minerals that help exfoliate dead skin cells, improve circulation, and leave skin feeling smooth and rejuvenated." }
        ],
        faqAr: [
            { q: "كيف أستخدم مقشر الملح؟", a: "ضع على البشرة الرطبة بحركات دائرية، مع التركيز على المناطق الخشنة. اشطف جيداً بالماء الدافئ. استخدم 2-3 مرات في الأسبوع للحصول على أفضل النتائج." },
            { q: "هل يمكنني استخدامه على وجهي؟", a: "هذا المقشر مصمم للاستخدام على الجسم. لتقشير الوجه، نوصي باستخدام منتج أكثر لطفاً مصمم خصيصاً للوجه." },
            { q: "ما هي فوائد ملح البحر الميت؟", a: "ملح البحر الميت يحتوي على تركيزات عالية من المعادن التي تساعد على تقشير خلايا الجلد الميتة، وتحسين الدورة الدموية، وترك البشرة ناعمة ومجددة." }
        ],
        description: "Reveal smoother, softer skin with our luxurious Dead Sea Salt Scrub, a spa-quality exfoliating treatment that combines the therapeutic benefits of Dead Sea salt with nourishing natural oils. This invigorating scrub features coarse Dead Sea salt crystals that effectively remove dead skin cells and unclog pores, while almond oil, jojoba oil, and vitamin E work together to moisturize and protect your skin. The mineral-rich salt helps improve skin texture, reduce the appearance of rough patches, and leave your skin feeling silky smooth and refreshed. Perfect for use on elbows, knees, feet, and all over your body, this scrub transforms your shower routine into a rejuvenating spa experience.",
        descriptionAr: "اكتشفي بشرة أكثر نعومة ونعومة مع مقشر ملح البحر الميت الفاخر لدينا، علاج تقشير بجودة منتجع صحي يجمع بين الفوائد العلاجية لملح البحر الميت والزيوت الطبيعية المغذية. هذا المقشر المنعش يتميز ببلورات ملح البحر الميت الخشنة التي تزيل خلايا الجلد الميتة بفعالية وتفتح المسام، بينما يعمل زيت اللوز وزيت الجوجوبا وفيتامين E معاً لترطيب وحماية بشرتك. الملح الغني بالمعادن يساعد على تحسين ملمس البشرة، وتقليل مظهر البقع الخشنة، وترك بشرتك ناعمة كالحرير ومنعشة. مثالي للاستخدام على المرفقين والركبتين والقدمين وعلى كامل جسمك، يحول هذا المقشر روتين الاستحمام إلى تجربة منتجع صحي مجددة.",
        image: "images/product-8.jpg" // IMAGE FOR: Product ID 8 - مقشر ملح البحر الميت (Dead Sea Salt Scrub) - Category: Cosmetics - Change this path to update the image
    },
    {
        id: 9,
        name: "Handwoven Basket",
        nameAr: "سلة منسوجة يدوياً",
        category: "handicrafts",
        categoryAr: "حرف يدوية",
        price: 20.00,
        oldPrice: null,
        discount: 0,
        stock: 7,
        badge: null,
        badgeAr: null,
        offerEndDate: null,
        sku: "JTP-009",
        barcode: "6281001001009",
        specifications: {
            material: "Natural Palm Fronds and Reeds",
            dimensions: "Diameter: 30cm, Height: 20cm",
            weight: "400g",
            origin: "Jordan",
            care: "Wipe clean with damp cloth"
        },
        specificationsAr: {
            material: "سعف النخيل الطبيعي والقصب",
            dimensions: "القطر: 30 سم، الارتفاع: 20 سم",
            weight: "400 جرام",
            origin: "الأردن",
            care: "امسح بالمنظف بقطعة قماش مبللة"
        },
        faq: [
            { q: "What materials are used?", a: "Our baskets are made from natural palm fronds and reeds, sustainably sourced and woven by skilled artisans." },
            { q: "How durable are these baskets?", a: "When cared for properly, these handwoven baskets can last for many years. They are sturdy and designed for both decorative and functional use." },
            { q: "Can I use it for food storage?", a: "Yes, these baskets are perfect for storing bread, fruits, and other dry foods. The natural materials allow for air circulation." }
        ],
        faqAr: [
            { q: "ما هي المواد المستخدمة؟", a: "سلالنا مصنوعة من سعف النخيل الطبيعي والقصب، مصدرة بشكل مستدام ومنسوجة من قبل الحرفيين المهرة." },
            { q: "كم هي متانة هذه السلال؟", a: "عند العناية بها بشكل صحيح، يمكن أن تدوم هذه السلال المنسوجة يدوياً لسنوات عديدة. إنها قوية ومصممة للاستخدام الزخرفي والوظيفي." },
            { q: "هل يمكنني استخدامها لتخزين الطعام؟", a: "نعم، هذه السلال مثالية لتخزين الخبز والفواكه والأطعمة الجافة الأخرى. المواد الطبيعية تسمح بتدوير الهواء." }
        ],
        description: "Bring rustic charm and natural beauty to your home with our authentic Handwoven Basket, crafted by skilled Jordanian artisans using traditional weaving techniques. Each basket is carefully woven from natural palm fronds and reeds, creating a unique piece that combines functionality with artistic appeal. The intricate weaving pattern showcases the artisan's skill and attention to detail, while the natural materials ensure durability and eco-friendliness. Perfect for storing fruits, bread, or other household items, or simply displayed as a decorative accent, this basket adds warmth and character to any space. Each piece is one-of-a-kind, reflecting the individual craftsmanship of its maker.",
        descriptionAr: "أضفي سحراً ريفياً وجمالاً طبيعياً إلى منزلك مع سلتنا المنسوجة يدوياً الأصيلة، المصنوعة من قبل الحرفيين الأردنيين المهرة باستخدام تقنيات النسيج التقليدية. كل سلة منسوجة بعناية من سعف النخيل الطبيعي والقصب، مما يخلق قطعة فريدة تجمع بين الوظائف والجاذبية الفنية. نمط النسيج المعقد يعرض مهارة الحرفي والاهتمام بالتفاصيل، بينما المواد الطبيعية تضمن المتانة والصداقة البيئية. مثالية لتخزين الفواكه والخبز أو غيرها من الأغراض المنزلية، أو ببساطة معروضة كلمسة زخرفية، تضيف هذه السلة الدفء والشخصية إلى أي مساحة. كل قطعة فريدة من نوعها، تعكس الحرفية الفردية لصانعها.",
        image: "images/product-9.jpg" // IMAGE FOR: Product ID 9 - سلة منسوجة يدوياً (Handwoven Basket) - Category: Handicrafts - Change this path to update the image
    },
    {
        id: 10,
        name: "Jordanian Honey (500g)",
        nameAr: "عسل أردني (500 جرام)",
        category: "food",
        categoryAr: "طعام ومشروبات",
        price: 14.00,
        oldPrice: null,
        discount: 0,
        stock: 25,
        badge: "Best Seller",
        badgeAr: "الأكثر مبيعاً",
        offerEndDate: null,
        sku: "JTP-010",
        barcode: "6281001001010",
        specifications: {
            weight: "500g",
            type: "Wildflower Honey",
            ingredients: "100% Pure Natural Honey",
            shelfLife: "Indefinite (if stored properly)",
            origin: "Jordan"
        },
        specificationsAr: {
            weight: "500 جرام",
            type: "عسل زهور برية",
            ingredients: "100% عسل طبيعي نقي",
            shelfLife: "غير محدود (إذا تم تخزينه بشكل صحيح)",
            origin: "الأردن"
        },
        faq: [
            { q: "Is this honey raw and unfiltered?", a: "Yes, our honey is raw and unfiltered, preserving all natural enzymes, pollen, and health benefits." },
            { q: "Why does honey crystallize?", a: "Crystallization is a natural process that occurs in pure honey. Simply place the jar in warm water to return it to liquid form." },
            { q: "What are the health benefits of honey?", a: "Honey is rich in antioxidants, has antibacterial properties, can soothe sore throats, and provides natural energy. It's also a natural cough suppressant." }
        ],
        faqAr: [
            { q: "هل هذا العسل خام وغير مصفى؟", a: "نعم، عسلنا خام وغير مصفى، مما يحافظ على جميع الإنزيمات الطبيعية وحبوب اللقاح والفوائد الصحية." },
            { q: "لماذا يتبلور العسل؟", a: "التبلور هو عملية طبيعية تحدث في العسل النقي. ببساطة ضع الجرة في ماء دافئ لإعادته إلى الحالة السائلة." },
            { q: "ما هي الفوائد الصحية للعسل؟", a: "العسل غني بمضادات الأكسدة، له خصائص مضادة للبكتيريا، يمكن أن يهدئ التهاب الحلق، ويوفر طاقة طبيعية. كما أنه مثبط طبيعي للسعال." }
        ],
        description: "Experience the pure, unadulterated taste of nature with our Premium Jordanian Wildflower Honey, harvested by local beekeepers from the diverse floral landscapes of Jordan. This raw, unfiltered honey captures the essence of wildflowers, creating a complex flavor profile that ranges from delicate and floral to rich and robust. Each batch is unique, reflecting the seasonal blooms and regional characteristics of where the bees collected their nectar. Rich in natural enzymes, antioxidants, and beneficial compounds, this honey offers more than just sweetness—it's a natural health elixir. Perfect for drizzling over yogurt, adding to tea, or simply enjoying by the spoonful, this honey brings the authentic taste of Jordan's natural bounty to your table.",
        descriptionAr: "اختبر الطعم النقي وغير الملوث للطبيعة مع عسل زهور البرية الأردني المميز لدينا، المحصود من قبل مربي النحل المحليين من المناظر الطبيعية المتنوعة في الأردن. هذا العسل الخام وغير المصفى يلتقط جوهر زهور البرية، مما يخلق ملف نكهة معقد يتراوح من الرقيق والزهري إلى الغني والقوي. كل دفعة فريدة، تعكس الأزهار الموسمية والخصائص الإقليمية حيث جمع النحل رحيقه. غني بالإنزيمات الطبيعية ومضادات الأكسدة والمركبات المفيدة، يقدم هذا العسل أكثر من مجرد الحلاوة—إنه إكسير صحي طبيعي. مثالي للرش على الزبادي، إضافته إلى الشاي، أو ببساطة الاستمتاع به بالملعقة، يجلب هذا العسل الطعم الأصيل لخيرات الأردن الطبيعية إلى مائدتك.",
        image: "images/product-10.jpg" // IMAGE FOR: Product ID 10 - عسل أردني (500 جرام) (Jordanian Honey) - Category: Food & Beverages - Change this path to update the image
    },
    {
        id: 11,
        name: "Traditional Abaya",
        nameAr: "عباية تقليدية",
        category: "clothing",
        categoryAr: "ملابس",
        price: 45.00,
        oldPrice: null,
        discount: 0,
        stock: 5,
        badge: "New Arrival",
        badgeAr: "وصل حديثاً",
        offerEndDate: null,
        sku: "JTP-011",
        barcode: "6281001001011",
        sizeVariants: {
            "S": { stock: 20, label: "S (Small)", labelAr: "صغير (S)" },
            "M": { stock: 7, label: "M (Medium)", labelAr: "متوسط (M)" },
            "L": { stock: 0, label: "L (Large)", labelAr: "كبير (L)" },
            "XL": { stock: 25, label: "XL (Extra Large)", labelAr: "كبير جداً (XL)" }
        },
        specifications: {
            material: "Premium Polyester and Viscose Blend",
            sizes: "S (Small), M (Medium), L (Large), XL (Extra Large)",
            weight: "350g",
            origin: "Jordan",
            care: "Machine washable, low temperature"
        },
        specificationsAr: {
            material: "مزيج بوليستر وفيسكوز ممتاز",
            sizes: "صغير (S)، متوسط (M)، كبير (L)، كبير جداً (XL)",
            weight: "350 جرام",
            origin: "الأردن",
            care: "قابل للغسيل في الغسالة، درجة حرارة منخفضة"
        },
        faq: [
            { q: "What sizes are available?", a: "Our abayas are available in sizes S, M, L, and XL. Please refer to our size chart for measurements." },
            { q: "Is the abaya suitable for all occasions?", a: "Yes, this elegant abaya is versatile and suitable for both formal and casual occasions. It combines traditional elegance with modern comfort." },
            { q: "How should I care for my abaya?", a: "Machine wash on a gentle cycle with cold water. Hang to dry or use low heat in the dryer. Iron on low heat if needed." }
        ],
        faqAr: [
            { q: "ما هي المقاسات المتوفرة؟", a: "عباياتنا متوفرة بمقاسات صغير، متوسط، كبير، وكبير جداً. يرجى الرجوع إلى جدول المقاسات لدينا." },
            { q: "هل العباية مناسبة لجميع المناسبات؟", a: "نعم، هذه العباية الأنيقة متعددة الاستخدامات ومناسبة للمناسبات الرسمية والعادية. تجمع بين الأناقة التقليدية والراحة العصرية." },
            { q: "كيف يجب أن أعتني بعبايتي؟", a: "اغسلي في الغسالة على دورة لطيفة بماء بارد. علقي لتجف أو استخدمي حرارة منخفضة في المجفف. كوي على حرارة منخفضة إذا لزم الأمر." }
        ],
        description: "Embrace elegance and modesty with our exquisite Traditional Abaya, a perfect fusion of timeless tradition and contemporary style. Crafted from premium quality fabric that combines durability with comfort, this abaya features a flowing silhouette that gracefully drapes the body. The design incorporates subtle modern touches while maintaining the classic elegance that has made the abaya a beloved garment for generations. Whether worn for daily activities, special occasions, or religious observances, this abaya offers both style and comfort. The high-quality fabric ensures it maintains its shape and appearance wash after wash, making it a valuable addition to any wardrobe.",
        descriptionAr: "استمتعي بالأناقة والحياء مع عبابتنا التقليدية الرائعة، مزيج مثالي من التقاليد الخالدة والأناقة المعاصرة. مصنوعة من قماش عالي الجودة يجمع بين المتانة والراحة، تتميز هذه العباية بقصة متدفقة تتدلى بأناقة على الجسم. التصميم يدمج لمسات عصرية خفيفة مع الحفاظ على الأناقة الكلاسيكية التي جعلت العباية ثوباً محبوباً عبر الأجيال. سواء ارتديتها للأنشطة اليومية، أو المناسبات الخاصة، أو الشعائر الدينية، توفر هذه العباية الأناقة والراحة. القماش عالي الجودة يضمن الحفاظ على شكلها ومظهرها بعد كل غسلة، مما يجعلها إضافة قيمة لأي خزانة ملابس.",
        image: "images/product-11.jpg" // IMAGE FOR: Product ID 11 - عباية تقليدية (Traditional Abaya) - Category: Clothing - Change this path to update the image
    },
    {
        id: 12,
        name: "Rose Water (250ml)",
        nameAr: "ماء الورد (250 مل)",
        category: "cosmetics",
        categoryAr: "مستحضرات تجميل",
        price: 9.00,
        oldPrice: null,
        discount: 0,
        stock: 30,
        badge: null,
        badgeAr: null,
        offerEndDate: null,
        sku: "JTP-012",
        barcode: "6281001001012",
        specifications: {
            volume: "250ml",
            ingredients: "100% Pure Rose Water",
            skinType: "All skin types",
            shelfLife: "24 months",
            origin: "Jordan Valley, Jordan"
        },
        specificationsAr: {
            volume: "250 مل",
            ingredients: "100% ماء ورد نقي",
            skinType: "جميع أنواع البشرة",
            shelfLife: "24 شهر",
            origin: "وادي الأردن، الأردن"
        },
        faq: [
            { q: "How do I use rose water?", a: "Rose water can be used as a facial toner after cleansing, as a refreshing mist throughout the day, or as a natural makeup setting spray. It's also great for soothing irritated skin." },
            { q: "Is rose water suitable for sensitive skin?", a: "Yes, pure rose water is gentle and suitable for all skin types, including sensitive skin. It has natural anti-inflammatory properties." },
            { q: "Can I use it in cooking?", a: "Yes, rose water is also used in Middle Eastern cuisine as a flavoring agent in desserts and beverages. Our rose water is food-grade quality." }
        ],
        faqAr: [
            { q: "كيف أستخدم ماء الورد؟", a: "يمكن استخدام ماء الورد كمنشط للوجه بعد التنظيف، كرذاذ منعش طوال اليوم، أو كرذاذ تثبيت طبيعي للمكياج. كما أنه رائع لتهدئة البشرة المتهيجة." },
            { q: "هل ماء الورد مناسب للبشرة الحساسة؟", a: "نعم، ماء الورد النقي لطيف ومناسب لجميع أنواع البشرة، بما في ذلك البشرة الحساسة. له خصائص مضادة للالتهابات الطبيعية." },
            { q: "هل يمكنني استخدامه في الطهي؟", a: "نعم، ماء الورد يستخدم أيضاً في المطبخ الشرقي كعامل نكهة في الحلويات والمشروبات. ماء الورد لدينا بجودة صالحة للطعام." }
        ],
        description: "Indulge in the delicate, aromatic essence of our Pure Rose Water, distilled from the finest Damask roses grown in the fertile Jordan Valley. This time-honored beauty elixir has been cherished for centuries for its gentle, hydrating, and soothing properties. Our rose water is 100% pure, containing no alcohol, additives, or artificial fragrances—just the natural essence of roses. Perfect as a facial toner to balance pH levels, as a refreshing mist to hydrate throughout the day, or as a natural makeup setting spray. Rich in antioxidants and anti-inflammatory compounds, it helps soothe irritated skin, reduce redness, and provide a natural, healthy glow. A versatile beauty staple that brings the luxury of a spa treatment to your daily skincare routine.",
        descriptionAr: "استمتعي بالجوهر العطري الرقيق لماء الورد النقي لدينا، المقطر من أجود ورد دمشق المزروع في وادي الأردن الخصيب. هذا الإكسير الجمالي الخالد تم تقديره لقرون لخصائصه اللطيفة والمرطبة والمهدئة. ماء الورد لدينا نقي 100٪، لا يحتوي على كحول أو إضافات أو عطور اصطناعية—فقط الجوهر الطبيعي للورد. مثالي كمنشط للوجه لموازنة مستويات الأس الهيدروجيني، كرذاذ منعش للترطيب طوال اليوم، أو كرذاذ تثبيت طبيعي للمكياج. غني بمضادات الأكسدة والمركبات المضادة للالتهابات، يساعد على تهدئة البشرة المتهيجة، وتقليل الاحمرار، وتوفير توهج طبيعي وصحي. عنصر جمالي متعدد الاستخدامات يجلب رفاهية علاج المنتجع الصحي إلى روتين العناية ببشرتك اليومي.",
        image: "images/product-12.jpg" // IMAGE FOR: Product ID 12 - ماء الورد (250 مل) (Rose Water) - Category: Cosmetics - Change this path to update the image
    },
    {
        id: 13,
        name: "Handmade Leather Bag",
        nameAr: "حقيبة جلدية يدوية الصنع",
        category: "accessories",
        categoryAr: "إكسسوارات",
        price: 55.00,
        oldPrice: null,
        discount: 0,
        stock: 4,
        badge: "Limited Edition",
        badgeAr: "إصدار محدود",
        offerEndDate: null,
        sku: "JTP-013",
        barcode: "6281001001013",
        specifications: {
            material: "Genuine Leather",
            dimensions: "35cm x 28cm x 12cm",
            weight: "800g",
            origin: "Jordan",
            care: "Clean with leather conditioner"
        },
        specificationsAr: {
            material: "جلد أصلي",
            dimensions: "35 سم × 28 سم × 12 سم",
            weight: "800 جرام",
            origin: "الأردن",
            care: "نظف بمنظف الجلود"
        },
        faq: [
            { q: "Is this real leather?", a: "Yes, our bags are made from 100% genuine leather, handcrafted by skilled Jordanian artisans using traditional techniques." },
            { q: "How do I care for my leather bag?", a: "Clean regularly with a soft cloth and use a leather conditioner to maintain its suppleness and appearance. Avoid exposure to excessive moisture." },
            { q: "What makes this bag special?", a: "Each bag is handcrafted, making it unique. The traditional craftsmanship ensures durability and timeless style that improves with age." }
        ],
        faqAr: [
            { q: "هل هذا جلد حقيقي؟", a: "نعم، حقائبنا مصنوعة من جلد أصلي 100٪، مصنوعة يدوياً من قبل الحرفيين الأردنيين المهرة باستخدام التقنيات التقليدية." },
            { q: "كيف أعتني بحقيبتي الجلدية؟", a: "نظف بانتظام بقطعة قماش ناعمة واستخدم منظف الجلود للحفاظ على مرونتها ومظهرها. تجنب التعرض للرطوبة المفرطة." },
            { q: "ما الذي يجعل هذه الحقيبة مميزة؟", a: "كل حقيبة مصنوعة يدوياً، مما يجعلها فريدة. الحرفية التقليدية تضمن المتانة والأناقة الخالدة التي تتحسن مع العمر." }
        ],
        description: "Carry a piece of Jordanian craftsmanship with our exquisite Handmade Leather Bag, a testament to traditional artistry and timeless elegance. Each bag is meticulously crafted by master leatherworkers who have perfected their skills over decades, using time-honored techniques to create a bag that is both beautiful and functional. Made from premium genuine leather that develops a rich patina over time, this bag features classic design elements combined with practical functionality. The spacious interior and well-organized compartments make it perfect for daily use, while the hand-stitched details and quality hardware ensure durability. A limited edition piece that reflects the dedication and skill of Jordanian artisans, this bag is an investment in both style and heritage.",
        descriptionAr: "احملي قطعة من الحرفية الأردنية مع حقيبتنا الجلدية اليدوية الرائعة، شهادة على الفن التقليدي والأناقة الخالدة. كل حقيبة مصنوعة بعناية من قبل عمال الجلود المهرة الذين أتقنوا مهاراتهم على مدى عقود، مستخدمين التقنيات التقليدية لإنشاء حقيبة جميلة ووظيفية. مصنوعة من جلد أصلي ممتاز يطور لمعاناً غنياً مع مرور الوقت، تتميز هذه الحقيبة بعناصر تصميم كلاسيكية مجتمعة مع وظائف عملية. الداخلية الواسعة والأقسام المنظمة جيداً تجعلها مثالية للاستخدام اليومي، بينما التفاصيل المخيطة يدوياً والأجهزة عالية الجودة تضمن المتانة. قطعة إصدار محدود تعكس التفاني ومهارة الحرفيين الأردنيين، هذه الحقيبة استثمار في الأناقة والتراث.",
        image: "images/product-13.jpg" // IMAGE FOR: Product ID 13 - حقيبة جلدية يدوية الصنع (Handmade Leather Bag) - Category: Accessories - Change this path to update the image
    },
    {
        id: 14,
        name: "Jordanian Coffee Blend",
        nameAr: "مزيج القهوة الأردنية",
        category: "food",
        categoryAr: "طعام ومشروبات",
        price: 11.00,
        oldPrice: null,
        discount: 0,
        stock: 22,
        badge: null,
        badgeAr: null,
        offerEndDate: null,
        sku: "JTP-014",
        barcode: "6281001001014",
        specifications: {
            weight: "500g",
            type: "Arabic Coffee Blend",
            ingredients: "Arabica Coffee Beans, Cardamom",
            roast: "Medium-Dark Roast",
            origin: "Jordan"
        },
        specificationsAr: {
            weight: "500 جرام",
            type: "مزيج قهوة عربية",
            ingredients: "حبوب قهوة أرابيكا، هيل",
            roast: "تحميص متوسط-داكن",
            origin: "الأردن"
        },
        faq: [
            { q: "How do I prepare Arabic coffee?", a: "Arabic coffee is traditionally prepared in a dallah (coffee pot). Add coffee and cardamom to water, bring to a boil, then simmer for 10-15 minutes. Serve in small cups." },
            { q: "Is this coffee caffeinated?", a: "Yes, this is a caffeinated coffee blend. The caffeine content is moderate, typical of Arabica beans." },
            { q: "How should I store coffee?", a: "Store in an airtight container in a cool, dark place. For best flavor, grind just before brewing." }
        ],
        faqAr: [
            { q: "كيف أعد القهوة العربية؟", a: "القهوة العربية تُعد تقليدياً في الدلة (إبريق القهوة). أضف القهوة والهيل إلى الماء، اغلِ، ثم اتركه على نار هادئة لمدة 10-15 دقيقة. قدم في أكواب صغيرة." },
            { q: "هل هذه القهوة تحتوي على كافيين؟", a: "نعم، هذا مزيج قهوة يحتوي على كافيين. محتوى الكافيين معتدل، نموذجي لحبوب الأرابيكا." },
            { q: "كيف يجب أن أحفظ القهوة؟", a: "احفظ في وعاء محكم الإغلاق في مكان بارد ومظلم. للحصول على أفضل نكهة، اطحن قبل التخمير مباشرة." }
        ],
        description: "Awaken your senses with our authentic Jordanian Coffee Blend, a carefully crafted combination of premium Arabica coffee beans and aromatic cardamom that captures the essence of traditional Middle Eastern hospitality. This distinctive blend has been perfected over generations, creating a rich, full-bodied coffee with a unique flavor profile that balances the boldness of coffee with the warm, slightly sweet notes of cardamom. The medium-dark roast brings out the coffee's natural complexity while preserving its smooth finish. Whether enjoyed during a traditional coffee ceremony, shared with guests, or savored as a morning ritual, this coffee blend offers an authentic taste of Jordanian culture. Each cup tells a story of tradition, warmth, and the art of hospitality that Jordan is known for.",
        descriptionAr: "أيقظ حواسك مع مزيج القهوة الأردنية الأصيل لدينا، مزيج مصنوع بعناية من حبوب قهوة الأرابيكا المميزة والهيل العطري الذي يلتقط جوهر الضيافة الشرق أوسطية التقليدية. هذا المزيج المميز تم تحسينه عبر الأجيال، مما يخلق قهوة غنية وكاملة الجسم بملف نكهة فريد يوازن بين جرأة القهوة ونوتات الهيل الدافئة والحلوة قليلاً. التحميص المتوسط-الداكن يبرز التعقيد الطبيعي للقهوة مع الحفاظ على نهايتها الناعمة. سواء استمتعت بها خلال مراسم القهوة التقليدية، أو شاركتها مع الضيوف، أو تذوقتها كطقوس صباحية، يقدم هذا المزيج طعماً أصيلاً للثقافة الأردنية. كل فنجان يحكي قصة التقاليد والدفء وفن الضيافة الذي تشتهر به الأردن.",
        image: "images/product-14.jpg" // IMAGE FOR: Product ID 14 - مزيج القهوة الأردنية (Jordanian Coffee Blend) - Category: Food & Beverages - Change this path to update the image
    },
    {
        id: 15,
        name: "Mosaic Art Piece",
        nameAr: "قطعة فسيفساء فنية",
        category: "handicrafts",
        categoryAr: "حرف يدوية",
        price: 40.00,
        oldPrice: null,
        discount: 0,
        stock: 6,
        badge: "Featured Product",
        badgeAr: "منتج مميز",
        offerEndDate: null,
        sku: "JTP-015",
        barcode: "6281001001015",
        specifications: {
            material: "Glass and Ceramic Tiles",
            dimensions: "30cm x 30cm",
            weight: "1.2kg",
            origin: "Jordan",
            care: "Dust with soft cloth, avoid harsh chemicals"
        },
        specificationsAr: {
            material: "بلاط زجاجي وخزفي",
            dimensions: "30 سم × 30 سم",
            weight: "1.2 كيلو",
            origin: "الأردن",
            care: "امسح بقطعة قماش ناعمة، تجنب المواد الكيميائية القاسية"
        },
        faq: [
            { q: "How is the mosaic made?", a: "Each piece is handcrafted by skilled artisans who carefully cut and arrange individual tiles to create intricate patterns. The process requires precision and artistic skill." },
            { q: "Can I hang it on the wall?", a: "Yes, our mosaic pieces come with hanging hardware and are designed to be displayed as wall art. They make stunning focal points in any room." },
            { q: "Is each piece unique?", a: "Yes, while following traditional patterns, each mosaic is handcrafted, making every piece slightly unique and a true work of art." }
        ],
        faqAr: [
            { q: "كيف يتم صنع الفسيفساء؟", a: "كل قطعة مصنوعة يدوياً من قبل الحرفيين المهرة الذين يقطعون ويرتبون البلاط الفردي بعناية لإنشاء أنماط معقدة. العملية تتطلب الدقة والمهارة الفنية." },
            { q: "هل يمكنني تعليقها على الحائط؟", a: "نعم، قطع الفسيفساء لدينا تأتي مع أجهزة تعليق ومصممة للعرض كفن جدار. تجعل نقاط محورية مذهلة في أي غرفة." },
            { q: "هل كل قطعة فريدة؟", a: "نعم، بينما تتبع الأنماط التقليدية، كل فسيفساء مصنوعة يدوياً، مما يجعل كل قطعة فريدة قليلاً وعملاً فنياً حقيقياً." }
        ],
        description: "Transform your living space into a gallery of cultural artistry with our stunning Mosaic Art Piece, a masterpiece of traditional Jordanian craftsmanship. This exquisite artwork showcases the ancient art of mosaic-making, where skilled artisans meticulously hand-cut and arrange colorful glass and ceramic tiles to create intricate geometric patterns and designs inspired by Jordan's rich historical heritage. Each piece is a labor of love, requiring hours of careful work to achieve the perfect alignment and color harmony. The vibrant colors and detailed patterns make this mosaic a captivating focal point that adds elegance and cultural depth to any room. Whether displayed in your living room, hallway, or as a statement piece in your office, this mosaic art celebrates the timeless beauty of Middle Eastern artistic traditions.",
        descriptionAr: "حوّل مساحة معيشتك إلى معرض للفن الثقافي مع قطعة الفسيفساء الفنية المذهلة لدينا، تحفة من الحرفية الأردنية التقليدية. هذا العمل الفني الرائع يعرض الفن القديم لصنع الفسيفساء، حيث يقطع الحرفيون المهرة ويرتبون بعناية البلاط الزجاجي والخزفي الملون لإنشاء أنماط هندسية وتصاميم معقدة مستوحاة من التراث التاريخي الغني للأردن. كل قطعة هي عمل من الحب، تتطلب ساعات من العمل الدقيق لتحقيق المحاذاة المثالية وتناغم الألوان. الألوان النابضة بالحياة والأنماط التفصيلية تجعل هذه الفسيفساء نقطة محورية آسرة تضيف الأناقة والعمق الثقافي إلى أي غرفة. سواء معروضة في غرفة المعيشة، الممر، أو كقطعة بيان في مكتبك، تحتفل هذه الفسيفساء بجمال التقاليد الفنية الشرق أوسطية الخالدة.",
        image: "images/product-15.jpg" // IMAGE FOR: Product ID 15 - قطعة فسيفساء فنية (Mosaic Art Piece) - Category: Handicrafts - Change this path to update the image
    },
    {
        id: 16,
        name: "Traditional Sandals",
        nameAr: "صنادل تقليدية",
        category: "accessories",
        categoryAr: "إكسسوارات",
        price: 22.00,
        oldPrice: null,
        discount: 0,
        stock: 14,
        badge: null,
        badgeAr: null,
        offerEndDate: null,
        sku: "JTP-016",
        barcode: "6281001001016",
        sizeVariants: {
            "36": { stock: 15, label: "36", labelAr: "36" },
            "37": { stock: 20, label: "37", labelAr: "37" },
            "38": { stock: 18, label: "38", labelAr: "38" },
            "39": { stock: 7, label: "39", labelAr: "39" },
            "40": { stock: 22, label: "40", labelAr: "40" },
            "41": { stock: 19, label: "41", labelAr: "41" },
            "42": { stock: 0, label: "42", labelAr: "42" },
            "43": { stock: 16, label: "43", labelAr: "43" },
            "44": { stock: 21, label: "44", labelAr: "44" }
        },
        specifications: {
            material: "Genuine Leather",
            sizes: "EU Sizes: 36, 37, 38, 39, 40, 41, 42, 43, 44",
            weight: "300g per pair",
            origin: "Jordan",
            care: "Clean with leather cleaner, condition regularly"
        },
        specificationsAr: {
            material: "جلد أصلي",
            sizes: "المقاسات الأوروبية: 36، 37، 38، 39، 40، 41، 42، 43، 44",
            weight: "300 جرام للزوج",
            origin: "الأردن",
            care: "نظف بمنظف الجلود، قم بالترطيب بانتظام"
        },
        faq: [
            { q: "What sizes are available?", a: "Our sandals are available in European sizes 36-44. Please refer to our size chart to find your perfect fit." },
            { q: "Are these sandals comfortable for walking?", a: "Yes, these sandals are designed for comfort with a flexible sole and adjustable straps. They mold to your feet over time for a custom fit." },
            { q: "How do I break in new leather sandals?", a: "Wear them for short periods initially to allow the leather to soften and conform to your feet. The leather will become more comfortable with each wear." }
        ],
        faqAr: [
            { q: "ما هي المقاسات المتوفرة؟", a: "صنادلنا متوفرة بالمقاسات الأوروبية 36-44. يرجى الرجوع إلى جدول المقاسات لدينا للعثور على المقاس المثالي." },
            { q: "هل هذه الصنادل مريحة للمشي؟", a: "نعم، هذه الصنادل مصممة للراحة مع نعل مرن وأشرطة قابلة للتعديل. تتكيف مع قدميك مع مرور الوقت للحصول على ملاءمة مخصصة." },
            { q: "كيف أرتدي الصنادل الجلدية الجديدة؟", a: "ارتديها لفترات قصيرة في البداية للسماح للجلد باللين والتكيف مع قدميك. الجلد سيصبح أكثر راحة مع كل ارتداء." }
        ],
        description: "Step into comfort and style with our authentic Traditional Sandals, handcrafted by skilled Jordanian artisans using time-honored techniques passed down through generations. Made from premium genuine leather, these sandals feature a classic design that combines durability with timeless elegance. The flexible sole provides excellent support and comfort for all-day wear, while the adjustable straps ensure a perfect, customized fit. The natural leather develops a beautiful patina over time, making each pair uniquely yours. Whether strolling through the city, exploring local markets, or simply enjoying a casual day out, these sandals offer the perfect blend of traditional craftsmanship and modern comfort. A versatile footwear choice that celebrates Jordanian heritage while providing everyday practicality.",
        descriptionAr: "خطو إلى الراحة والأناقة مع صنادلنا التقليدية الأصيلة، المصنوعة يدوياً من قبل الحرفيين الأردنيين المهرة باستخدام التقنيات التقليدية التي تم تناقلها عبر الأجيال. مصنوعة من جلد أصلي ممتاز، تتميز هذه الصنادل بتصميم كلاسيكي يجمع بين المتانة والأناقة الخالدة. النعل المرن يوفر دعماً وراحة ممتازة للارتداء طوال اليوم، بينما الأشرطة القابلة للتعديل تضمن ملاءمة مثالية ومخصصة. الجلد الطبيعي يطور لمعاناً جميلاً مع مرور الوقت، مما يجعل كل زوج فريداً لك. سواء كنت تتجول في المدينة، تستكشف الأسواق المحلية، أو ببساطة تستمتع بيوم عادي، توفر هذه الصنادل المزيج المثالي من الحرفية التقليدية والراحة العصرية. خيار أحذية متعدد الاستخدامات يحتفل بالتراث الأردني مع توفير الجوانب العملية اليومية.",
        image: "images/product-16.jpg" // IMAGE FOR: Product ID 16 - صنادل تقليدية (Traditional Sandals) - Category: Accessories - Change this path to update the image
    }
];

// User-specific storage helper functions
function getUserEmail() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const userData = JSON.parse(currentUser);
        return userData.email;
    }
    return null;
}

function getUserStorageKey(type) {
    const email = getUserEmail();
    if (email) {
        return `${type}_${email}`;
    }
    return type; // Fallback to global storage if not logged in
}

function getUserCart() {
    const key = getUserStorageKey('cart');
    return JSON.parse(localStorage.getItem(key)) || [];
}

function saveUserCart(cartData) {
    const email = getUserEmail();
    if (email) {
        // User is logged in - save to user-specific storage
        const key = `cart_${email}`;
        localStorage.setItem(key, JSON.stringify(cartData));
        // Also update global cart for current session
        localStorage.setItem('cart', JSON.stringify(cartData));
    } else {
        // Guest user - only save to session (temporary)
        localStorage.setItem('cart', JSON.stringify(cartData));
    }
}

function getUserFavorites() {
    // Favorites are always session-only (temporary), never persisted
    return JSON.parse(localStorage.getItem('favorites')) || [];
}

function saveUserFavorites(favoritesData) {
    // Favorites are always session-only (temporary), never persisted to user account
    // They will be cleared on logout
    localStorage.setItem('favorites', JSON.stringify(favoritesData));
}

function clearUserCart() {
    const email = getUserEmail();
    if (email) {
        const key = `cart_${email}`;
        localStorage.removeItem(key);
    }
    // Always clear global cart on logout
    localStorage.removeItem('cart');
}

function clearUserFavorites() {
    // Clear session favorites on logout
    localStorage.removeItem('favorites');
}

// Cart Management
let cart = getUserCart();

// Favorites Management
let favorites = getUserFavorites();

// Price Filter Management
let currentPriceFilter = {
    min: null,
    max: null
};

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Reload cart and favorites from user storage if logged in
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        cart = getUserCart();
        favorites = getUserFavorites();
    }
    
    updateCartCount();
    updateFavoritesCount();
    
    // Load products on index page
    if (document.getElementById('productsGrid')) {
        displayProducts(products);
        setupCategoryFilters();
        setupSearch();
        setupPriceFilter();
        setupScrollToTop();
    }
    
    // Listen for language changes
    window.addEventListener('languageChanged', function() {
        if (document.getElementById('productsGrid')) {
            displayProducts(products);
            setupCategoryFilters();
        }
    });
    
    // Listen for currency changes
    window.addEventListener('currencyChanged', function() {
        if (document.getElementById('productsGrid')) {
            displayProducts(products);
        }
    });
});

// Display Products
function displayProducts(productsToShow) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    if (productsToShow.length === 0) {
        productsGrid.innerHTML = '<p class="empty-cart">No products found.</p>';
        return;
    }

    const currentLang = localStorage.getItem('language') || 'en';
    const isArabic = currentLang === 'ar';
    
    productsGrid.innerHTML = productsToShow.map(product => {
        const isFavorite = favorites.includes(product.id);
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
                <!-- Displaying image for: ${isArabic ? product.nameAr : product.name} (Product ID: ${product.id}) -->
                <img src="${product.image}" alt="${isArabic ? product.nameAr : product.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#f0f0f0;color:#999;font-size:0.9rem\'>${isArabic ? 'صورة المنتج' : 'Product Image'}</div>'">
                ${badge ? `<div class="product-badge product-badge-${badge.toLowerCase().replace(/\s+/g, '-')}">${badge}</div>` : ''}
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${product.id})" title="${isArabic ? (isFavorite ? 'إزالة من المفضلة' : 'إضافة إلى المفضلة') : (isFavorite ? 'Remove from favorites' : 'Add to favorites')}">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <div class="product-category" data-key="category">${isArabic ? product.categoryAr : product.category}</div>
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

// Category Filter
function setupCategoryFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const currentLang = localStorage.getItem('language') || 'en';
    const isArabic = currentLang === 'ar';
    
    // Update category button text
    categoryButtons.forEach(btn => {
        const category = btn.dataset.category;
        if (category === 'all') {
            btn.textContent = isArabic ? 'جميع المنتجات' : 'All Products';
        } else if (category === 'food') {
            btn.textContent = isArabic ? 'طعام ومشروبات' : 'Food & Beverages';
        } else if (category === 'handicrafts') {
            btn.textContent = isArabic ? 'حرف يدوية' : 'Handicrafts';
        } else if (category === 'cosmetics') {
            btn.textContent = isArabic ? 'مستحضرات تجميل' : 'Cosmetics';
        } else if (category === 'clothing') {
            btn.textContent = isArabic ? 'ملابس' : 'Clothing';
        } else if (category === 'accessories') {
            btn.textContent = isArabic ? 'إكسسوارات' : 'Accessories';
        }
    });
    
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Apply all filters (category, search, price)
            applyFilters();
        });
    });
}

// Live Search Functionality
let searchTimeout;
let liveSearchResults = [];

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        // Create live search dropdown
        const searchContainer = searchInput.parentElement;
        const liveSearchDropdown = document.createElement('div');
        liveSearchDropdown.id = 'liveSearchDropdown';
        liveSearchDropdown.className = 'live-search-dropdown';
        searchContainer.appendChild(liveSearchDropdown);
        
        searchInput.addEventListener('input', function() {
            const query = this.value.trim();
            
            // Clear previous timeout
            clearTimeout(searchTimeout);
            
            if (query.length === 0) {
                hideLiveSearch();
                // Apply filters without search query
                applyFilters();
                return;
            }
            
            // Debounce search
            searchTimeout = setTimeout(() => {
                performLiveSearch(query);
            }, 300);
        });
        
        // Hide dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchContainer.contains(e.target)) {
                hideLiveSearch();
            }
        });
        
        // Hide dropdown on escape key
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                hideLiveSearch();
            } else if (e.key === 'Enter') {
                e.preventDefault();
                hideLiveSearch();
                applyFilters();
            }
        });
        
        // Search button click
        const searchButton = searchContainer.querySelector('button');
        if (searchButton) {
            searchButton.addEventListener('click', function(e) {
                e.preventDefault();
                hideLiveSearch();
                applyFilters();
            });
        }
    }
}

function performLiveSearch(query) {
    const searchLower = query.toLowerCase();
    const currentLang = localStorage.getItem('language') || 'en';
    const isArabic = currentLang === 'ar';
    
    // Search in name, description, category, SKU, and barcode
    liveSearchResults = products.filter(product => {
        const nameMatch = (isArabic ? product.nameAr : product.name).toLowerCase().includes(searchLower);
        const descMatch = (isArabic ? product.descriptionAr : product.description).toLowerCase().includes(searchLower);
        const categoryMatch = (isArabic ? product.categoryAr : product.category).toLowerCase().includes(searchLower);
        const skuMatch = product.sku && product.sku.toLowerCase().includes(searchLower);
        const barcodeMatch = product.barcode && product.barcode.includes(searchLower);
        
        return nameMatch || descMatch || categoryMatch || skuMatch || barcodeMatch;
    }).slice(0, 5); // Limit to 5 results
    
    displayLiveSearchResults(liveSearchResults, query, isArabic);
}

function displayLiveSearchResults(results, query, isArabic) {
    const dropdown = document.getElementById('liveSearchDropdown');
    if (!dropdown) return;
    
    if (results.length === 0) {
        dropdown.innerHTML = `
            <div class="live-search-item no-results">
                <i class="fas fa-search"></i>
                <span>${isArabic ? 'لم يتم العثور على نتائج' : 'No results found'}</span>
            </div>
        `;
        dropdown.classList.add('show');
        return;
    }
    
    dropdown.innerHTML = results.map(product => {
        const productName = isArabic ? product.nameAr : product.name;
        const productPrice = product.price.toFixed(2);
        const productImage = product.image;
        
        return `
            <div class="live-search-item" onclick="viewProduct(${product.id}); hideLiveSearch();">
                <img src="${productImage}" alt="${productName}" onerror="this.style.display='none'">
                <div class="live-search-item-info">
                    <div class="live-search-item-name">${productName}</div>
                    <div class="live-search-item-price">${productPrice} ${isArabic ? 'دينار' : 'JOD'}</div>
                    ${product.sku ? `<div class="live-search-item-sku">${isArabic ? 'رمز المنتج' : 'SKU'}: ${product.sku}</div>` : ''}
                </div>
            </div>
        `;
    }).join('');
    
    dropdown.classList.add('show');
}

function hideLiveSearch() {
    const dropdown = document.getElementById('liveSearchDropdown');
    if (dropdown) {
        dropdown.classList.remove('show');
    }
}

// Price Filter Setup
function setupPriceFilter() {
    const priceFilterBtn = document.getElementById('priceFilterBtn');
    const priceFilterModal = document.getElementById('priceFilterModal');
    const closePriceFilter = document.getElementById('closePriceFilter');
    const applyPriceFilter = document.getElementById('applyPriceFilter');
    const clearPriceFilter = document.getElementById('clearPriceFilter');
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');

    if (!priceFilterBtn || !priceFilterModal) return;

    // Open modal
    priceFilterBtn.addEventListener('click', function() {
        priceFilterModal.classList.add('active');
        // Set max price placeholder to highest product price
        const maxPrice = Math.max(...products.map(p => p.price));
        if (maxPriceInput && !maxPriceInput.value) {
            maxPriceInput.placeholder = maxPrice.toFixed(2);
        }
    });

    // Close modal
    if (closePriceFilter) {
        closePriceFilter.addEventListener('click', function() {
            priceFilterModal.classList.remove('active');
        });
    }

    // Close modal when clicking outside
    priceFilterModal.addEventListener('click', function(e) {
        if (e.target === priceFilterModal) {
            priceFilterModal.classList.remove('active');
        }
    });

    // Apply filter
    if (applyPriceFilter) {
        applyPriceFilter.addEventListener('click', function() {
            const minPrice = parseFloat(minPriceInput.value) || 0;
            const maxPrice = parseFloat(maxPriceInput.value) || Infinity;

            if (minPrice > maxPrice) {
                const currentLang = localStorage.getItem('language') || 'en';
                const message = currentLang === 'ar' 
                    ? 'الحد الأدنى للأسعار يجب أن يكون أقل من الحد الأقصى'
                    : 'Minimum price must be less than maximum price';
                alert(message);
                return;
            }

            currentPriceFilter.min = minPrice > 0 ? minPrice : null;
            currentPriceFilter.max = maxPrice < Infinity ? maxPrice : null;

            updatePriceRangeDisplay();
            applyFilters();
            priceFilterModal.classList.remove('active');
        });
    }

    // Clear filter
    if (clearPriceFilter) {
        clearPriceFilter.addEventListener('click', function() {
            currentPriceFilter.min = null;
            currentPriceFilter.max = null;
            if (minPriceInput) minPriceInput.value = '';
            if (maxPriceInput) maxPriceInput.value = '';
            updatePriceRangeDisplay();
            applyFilters();
            priceFilterModal.classList.remove('active');
        });
    }
}

// Apply price filter to products
function applyPriceFilter(productsToFilter) {
    if (!currentPriceFilter.min && !currentPriceFilter.max) {
        return productsToFilter;
    }

    return productsToFilter.filter(product => {
        const price = product.price;
        const minMatch = currentPriceFilter.min === null || price >= currentPriceFilter.min;
        const maxMatch = currentPriceFilter.max === null || price <= currentPriceFilter.max;
        return minMatch && maxMatch;
    });
}

// Update price range display
function updatePriceRangeDisplay() {
    const priceRangeDisplay = document.getElementById('currentPriceRange');
    if (!priceRangeDisplay) return;

    const currentLang = localStorage.getItem('language') || 'en';
    
    if (!currentPriceFilter.min && !currentPriceFilter.max) {
        priceRangeDisplay.textContent = currentLang === 'ar' ? 'جميع الأسعار' : 'All Prices';
    } else {
        const min = currentPriceFilter.min !== null ? currentPriceFilter.min.toFixed(2) : '0.00';
        const max = currentPriceFilter.max !== null ? currentPriceFilter.max.toFixed(2) : '∞';
        priceRangeDisplay.textContent = `${min} - ${max} JOD`;
    }
}

// Apply all filters (category, search, price)
function applyFilters() {
    const searchInput = document.getElementById('searchInput');
    const activeCategory = document.querySelector('.category-btn.active');
    const category = activeCategory ? activeCategory.dataset.category : 'all';

    let filtered = products;

    // Apply category filter
    if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
    }

    // Apply search filter (including SKU and barcode)
    if (searchInput && searchInput.value) {
        const query = searchInput.value.toLowerCase();
        filtered = filtered.filter(p => {
            const nameMatch = p.name.toLowerCase().includes(query);
            const descMatch = p.description.toLowerCase().includes(query);
            const categoryMatch = p.category.toLowerCase().includes(query);
            const skuMatch = p.sku && p.sku.toLowerCase().includes(query);
            const barcodeMatch = p.barcode && p.barcode.includes(query);
            
            return nameMatch || descMatch || categoryMatch || skuMatch || barcodeMatch;
        });
    }

    // Apply price filter
    filtered = applyPriceFilter(filtered);

    displayProducts(filtered);
}

// Scroll to Top Setup
function setupScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (!scrollToTopBtn) return;

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    // Scroll to top when clicked
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Check stock
    if (product.stock !== undefined && product.stock === 0) {
        const currentLang = localStorage.getItem('language') || 'en';
        const message = currentLang === 'ar' 
            ? 'عذراً، هذا المنتج غير متوفر حالياً'
            : 'Sorry, this product is currently out of stock';
        showNotification(message);
        return;
    }

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        // Check if adding one more would exceed stock
        if (product.stock !== undefined && existingItem.quantity >= product.stock) {
            const currentLang = localStorage.getItem('language') || 'en';
            const message = currentLang === 'ar' 
                ? `عذراً، الكمية المتوفرة ${product.stock} فقط`
                : `Sorry, only ${product.stock} items available`;
            showNotification(message);
            return;
        }
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveUserCart(cart);
    updateCartCount();
    const currentLang = localStorage.getItem('language') || 'en';
    showNotification(currentLang === 'ar' ? 'تمت إضافة المنتج إلى السلة!' : 'Product added to cart!');
}

// Update Cart Count
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// View Product
function viewProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// Toggle Favorite
function toggleFavorite(productId) {
    const index = favorites.indexOf(productId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(productId);
    }
    saveUserFavorites(favorites);
    updateFavoritesCount();
    
    // Refresh product display if on products page
    if (document.getElementById('productsGrid')) {
        displayProducts(products);
    }
    
    // Trigger favorites changed event
    window.dispatchEvent(new CustomEvent('favoritesChanged', { detail: productId }));
    
    // Show notification
    const currentLang = localStorage.getItem('language') || 'en';
    const isFavorite = favorites.includes(productId);
    const message = isFavorite 
        ? (currentLang === 'ar' ? 'تمت إضافة المنتج إلى المفضلة!' : 'Product added to favorites!')
        : (currentLang === 'ar' ? 'تمت إزالة المنتج من المفضلة!' : 'Product removed from favorites!');
    showNotification(message);
}

// Update Favorites Count
function updateFavoritesCount() {
    const favoritesCount = document.getElementById('favoritesCount');
    if (favoritesCount) {
        favoritesCount.textContent = favorites.length;
    }
}

// Scroll to Products
function scrollToProducts() {
    const productsSection = document.getElementById('productsSection');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Show Notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideInRight 0.3s;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

