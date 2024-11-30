import Products from '../models/productModel';

const products = [
  // Smartphones
  {
    _id: "65a8e25602e12c44f5995501",
    category: "smartphones",
    name: "iPhone 14",
    brand: "Apple",
    price: 999,
    stock: 50,
    description: "Latest model with advanced features",
    mainImage: "https://example.com/images/iphone14/main.jpg",
    images: [
      "https://example.com/images/iphone14/angle1.jpg",
      "https://example.com/images/iphone14/angle2.jpg",
      "https://example.com/images/iphone14/angle3.jpg",
    ],
  },
  {
    _id: "65a8e25602e12c44f5995502",
    category: "smartphones",
    name: "Galaxy S23",
    brand: "Samsung",
    price: 899,
    stock: 30,
    description: "High performance with great display",
    mainImage: "https://example.com/images/iphone14/main.jpg",
    images: [
      "https://example.com/images/iphone14/angle1.jpg",
      "https://example.com/images/iphone14/angle2.jpg",
      "https://example.com/images/iphone14/angle3.jpg",
    ],
  },

  // Laptops
  {
    _id: "65a8e25602e12c44f5995503",
    category: "laptops",
    name: "MacBook Pro",
    brand: "Apple",
    price: 1999,
    stock: 20,
    description: "High-end laptop with M1 chip",
    mainImage: "https://example.com/images/iphone14/main.jpg",
    images: [
      "https://example.com/images/iphone14/angle1.jpg",
      "https://example.com/images/iphone14/angle2.jpg",
      "https://example.com/images/iphone14/angle3.jpg",
    ],
  },
  {
    _id: "65a8e25602e12c44f5995504",
    category: "laptops",
    name: "XPS 13",
    brand: "Dell",
    price: 1199,
    stock: 25,
    description: "Compact and powerful ultrabook",
    mainImage: "https://example.com/images/iphone14/main.jpg",
    images: [
      "https://example.com/images/iphone14/angle1.jpg",
      "https://example.com/images/iphone14/angle2.jpg",
      "https://example.com/images/iphone14/angle3.jpg",
    ],
  },

  // Fragrances
  {
    _id: "65a8e25602e12c44f5995505",
    category: "fragrances",
    name: "Dior Sauvage",
    brand: "Dior",
    price: 120,
    stock: 100,
    description: "A fragrance with a fresh scent",
    mainImage: "https://example.com/images/iphone14/main.jpg",
    images: [
      "https://example.com/images/iphone14/angle1.jpg",
      "https://example.com/images/iphone14/angle2.jpg",
      "https://example.com/images/iphone14/angle3.jpg",
    ],
  },
  {
    _id: "65a8e25602e12c44f5995506",
    category: "fragrances",
    name: "Chanel No. 5",
    brand: "Chanel",
    price: 150,
    stock: 75,
    description: "Classic scent for timeless elegance",
    mainImage: "https://example.com/images/iphone14/main.jpg",
    images: [
      "https://example.com/images/iphone14/angle1.jpg",
      "https://example.com/images/iphone14/angle2.jpg",
      "https://example.com/images/iphone14/angle3.jpg",
    ],
  },

  // Skincare
  {
    _id: "65a8e25602e12c44f5995507",
    category: "skincare",
    name: "Hydrating Face Cream",
    brand: "Clinique",
    price: 40,
    stock: 60,
    description: "Moisturizes and hydrates skin",
    mainImage: "https://example.com/images/iphone14/main.jpg",
    images: [
      "https://example.com/images/iphone14/angle1.jpg",
      "https://example.com/images/iphone14/angle2.jpg",
      "https://example.com/images/iphone14/angle3.jpg",
    ],
  },
  {
    _id: "65a8e25602e12c44f5995508",
    category: "skincare",
    name: "Vitamin C Serum",
    brand: "The Ordinary",
    price: 25,
    stock: 80,
    description: "Brightens and evens skin tone",
    mainImage: "https://example.com/images/iphone14/main.jpg",
    images: [
      "https://example.com/images/iphone14/angle1.jpg",
      "https://example.com/images/iphone14/angle2.jpg",
      "https://example.com/images/iphone14/angle3.jpg",
    ],
  },

  // Groceries
  {
    _id: "65a8e25602e12c44f5995509",
    category: "groceries",
    name: "Organic Almonds",
    brand: "Whole Foods",
    price: 15,
    stock: 200,
    description: "High-quality organic almonds",
    mainImage: "https://example.com/images/iphone14/main.jpg",
    images: [
      "https://example.com/images/iphone14/angle1.jpg",
      "https://example.com/images/iphone14/angle2.jpg",
      "https://example.com/images/iphone14/angle3.jpg",
    ],
  },
  {
    _id: "65a8e25602e12c44f599550a",
    category: "groceries",
    name: "Olive Oil",
    brand: "Bertolli",
    price: 12,
    stock: 150,
    description: "Extra virgin olive oil for cooking",
    mainImage: "https://example.com/images/iphone14/main.jpg",
    images: [
      "https://example.com/images/iphone14/angle1.jpg",
      "https://example.com/images/iphone14/angle2.jpg",
      "https://example.com/images/iphone14/angle3.jpg",
    ],
  },

  // Home Decoration
  {
    _id: "65a8e25602e12c44f599550b",
    category: "home-decoration",
    name: "Decorative Vase",
    brand: "IKEA",
    price: 25,
    stock: 70,
    description: "Stylish vase for home decor",
    mainImage: "https://example.com/images/iphone14/main.jpg",
    images: [
      "https://example.com/images/iphone14/angle1.jpg",
      "https://example.com/images/iphone14/angle2.jpg",
      "https://example.com/images/iphone14/angle3.jpg",
    ],
  },
  {
    _id: "65a8e25602e12c44f599550c",
    category: "home-decoration",
    name: "Wall Art",
    brand: "Wayfair",
    price: 45,
    stock: 40,
    description: "Modern art piece for wall decor",
    mainImage: "https://example.com/images/iphone14/main.jpg",
    images: [
      "https://example.com/images/iphone14/angle1.jpg",
      "https://example.com/images/iphone14/angle2.jpg",
      "https://example.com/images/iphone14/angle3.jpg",
    ],
  },

  // Furniture
  {
    _id: "65a8e25602e12c44f599550d",
    category: "furniture",
    name: "Wooden Coffee Table",
    brand: "Ashley Furniture",
    price: 120,
    stock: 30,
    description: "Classic wooden coffee table",
    mainImage: "https://example.com/images/iphone14/main.jpg",
    images: [
      "https://example.com/images/iphone14/angle1.jpg",
      "https://example.com/images/iphone14/angle2.jpg",
      "https://example.com/images/iphone14/angle3.jpg",
    ],
  },
  {
    _id: "65a8e25602e12c44f599550e",
    category: "furniture",
    name: "Office Chair",
    brand: "Herman Miller",
    price: 299,
    stock: 20,
    description: "Ergonomic office chair for comfort",
    mainImage: "https://example.com/images/iphone14/main.jpg",
    images: [
      "https://example.com/images/iphone14/angle1.jpg",
      "https://example.com/images/iphone14/angle2.jpg",
      "https://example.com/images/iphone14/angle3.jpg",
    ],
  },

  // Tops
  {
    _id: "65a8e25602e12c44f599550f",
    category: "tops",
    name: "Cotton T-Shirt",
    brand: "H&M",
    price: 10,
    stock: 100,
    description: "Soft and comfortable t-shirt",
    mainImage: "https://example.com/images/iphone14/main.jpg",
    images: [
      "https://example.com/images/iphone14/angle1.jpg",
      "https://example.com/images/iphone14/angle2.jpg",
      "https://example.com/images/iphone14/angle3.jpg",
    ],
  },
  {
    _id: "65a8e25602e12c44f5995510",
    category: "tops",
    name: "Silk Blouse",
    brand: "Zara",
    price: 30,
    stock: 50,
    description: "Elegant silk blouse",
    mainImage: "https://example.com/images/iphone14/main.jpg",
    images: [
      "https://example.com/images/iphone14/angle1.jpg",
      "https://example.com/images/iphone14/angle2.jpg",
      "https://example.com/images/iphone14/angle3.jpg",
    ],
  },

  // Women's Dresses
  {
    _id: "65a8e25602e12c44f5995511",
    category: "womens-dresses",
    name: "Floral Maxi Dress",
    brand: "Forever 21",
    price: 50,
    stock: 60,
    description: "Perfect for summer wear",
    mainImage: "https://example.com/images/iphone14/main.jpg",
    images: [
      "https://example.com/images/iphone14/angle1.jpg",
      "https://example.com/images/iphone14/angle2.jpg",
      "https://example.com/images/iphone14/angle3.jpg",
    ],
  },
  {
    _id: "65a8e25602e12c44f5995512",
    category: "womens-dresses",
    name: "Cocktail Dress",
    brand: "H&M",
    price: 80,
    stock: 40,
    description: "Great for evening events",
    mainImage: "https://example.com/images/iphone14/main.jpg",
    images: [
      "https://example.com/images/iphone14/angle1.jpg",
      "https://example.com/images/iphone14/angle2.jpg",
      "https://example.com/images/iphone14/angle3.jpg",
    ],
  },

  // Men's Shoes
  {
    _id: "65a8e25602e12c44f5995513",
    category: "mens-shoes",
    name: "Running Sneakers",
    brand: "Nike",
    price: 100,
    stock: 50,
    description: "Lightweight sneakers for running",
    mainImage: "https://example.com/images/iphone14/main.jpg",
    images: [
      "https://example.com/images/iphone14/angle1.jpg",
      "https://example.com/images/iphone14/angle2.jpg",
      "https://example.com/images/iphone14/angle3.jpg",
    ],
  },
  {
    _id: "65a8e25602e12c44f5995514",
    category: "mens-shoes",
    name: "Dress Shoes",
    brand: "Clarks",
    price: 120,
    stock: 35,
    description: "Formal shoes for men",
    mainImage: "https://example.com/images/iphone14/main.jpg",
    images: [
      "https://example.com/images/iphone14/angle1.jpg",
      "https://example.com/images/iphone14/angle2.jpg",
      "https://example.com/images/iphone14/angle3.jpg",
    ],
  },

  // women's watches
  {
    _id: "65a8e25602e12c44f5995515",
    category: "womens-watches",
    name: "Elegant Rose Gold Watch",
    brand: "Michael Kors",
    price: 150,
    stock: 25,
    description: "Stylish rose gold watch with quartz movement",
    mainImage: "https://example.com/images/womens-watch/main.jpg",
    images: [
      "https://example.com/images/womens-watch/angle1.jpg",
      "https://example.com/images/womens-watch/angle2.jpg",
      "https://example.com/images/womens-watch/angle3.jpg",
    ],
  },
  {
    _id: "65a8e25602e12c44f5995516",
    category: "womens-watches",
    name: "Classic Leather Strap Watch",
    brand: "Fossil",
    price: 110,
    stock: 40,
    description: "Elegant leather strap watch for everyday wear",
    mainImage: "https://example.com/images/womens-watch2/main.jpg",
    images: [
      "https://example.com/images/womens-watch2/angle1.jpg",
      "https://example.com/images/womens-watch2/angle2.jpg",
      "https://example.com/images/womens-watch2/angle3.jpg",
    ],
  },

  // women's jewellery
  {
    _id: "65a8e25602e12c44f5995517",
    category: "womens-jewellery",
    name: "Gold Hoop Earrings",
    brand: "Tiffany & Co.",
    price: 300,
    stock: 20,
    description: "Elegant gold hoop earrings for formal occasions",
    mainImage: "https://example.com/images/womens-jewellery/main.jpg",
    images: [
      "https://example.com/images/womens-jewellery/angle1.jpg",
      "https://example.com/images/womens-jewellery/angle2.jpg",
      "https://example.com/images/womens-jewellery/angle3.jpg",
    ],
  },
  {
    _id: "65a8e25602e12c44f5995518",
    category: "womens-jewellery",
    name: "Diamond Pendant Necklace",
    brand: "Cartier",
    price: 1200,
    stock: 10,
    description: "Exquisite diamond pendant necklace",
    mainImage: "https://example.com/images/womens-jewellery2/main.jpg",
    images: [
      "https://example.com/images/womens-jewellery2/angle1.jpg",
      "https://example.com/images/womens-jewellery2/angle2.jpg",
      "https://example.com/images/womens-jewellery2/angle3.jpg",
    ],
  },

  // men's shirts
  {
    _id: "65a8e25602e12c44f5995519",
    category: "mens-shirts",
    name: "Casual Cotton Shirt",
    brand: "Levi's",
    price: 45,
    stock: 60,
    description: "Comfortable cotton shirt for casual wear",
    mainImage: "https://example.com/images/mens-shirt/main.jpg",
    images: [
      "https://example.com/images/mens-shirt/angle1.jpg",
      "https://example.com/images/mens-shirt/angle2.jpg",
      "https://example.com/images/mens-shirt/angle3.jpg",
    ],
  },
  {
    _id: "65a8e25602e12c44f5995520",
    category: "mens-shirts",
    name: "Formal Dress Shirt",
    brand: "Calvin Klein",
    price: 60,
    stock: 45,
    description: "Classic formal dress shirt for business attire",
    mainImage: "https://example.com/images/mens-shirt2/main.jpg",
    images: [
      "https://example.com/images/mens-shirt2/angle1.jpg",
      "https://example.com/images/mens-shirt2/angle2.jpg",
      "https://example.com/images/mens-shirt2/angle3.jpg",
    ],
  },

  // sunglasses
  {
    _id: "65a8e25602e12c44f5995521",
    category: "sunglasses",
    name: "Aviator Sunglasses",
    brand: "Ray-Ban",
    price: 80,
    stock: 30,
    description: "Classic aviator sunglasses with UV protection",
    mainImage: "https://example.com/images/sunglasses/main.jpg",
    images: [
      "https://example.com/images/sunglasses/angle1.jpg",
      "https://example.com/images/sunglasses/angle2.jpg",
      "https://example.com/images/sunglasses/angle3.jpg",
    ],
  },
  {
    _id: "65a8e25602e12c44f5995522",
    category: "sunglasses",
    name: "Retro Square Sunglasses",
    brand: "Gucci",
    price: 95,
    stock: 25,
    description: "Fashionable square sunglasses for a bold look",
    mainImage: "https://example.com/images/sunglasses2/main.jpg",
    images: [
      "https://example.com/images/sunglasses2/angle1.jpg",
      "https://example.com/images/sunglasses2/angle2.jpg",
      "https://example.com/images/sunglasses2/angle3.jpg",
    ],
  },

  // womens-shoes
  {
    _id: "65a8e25602e12c44f5995523",
    category: "womens-shoes",
    name: "Running Sneakers",
    brand: "Nike",
    price: 100,
    stock: 50,
    description: "Lightweight sneakers ideal for running and everyday use.",
    mainImage:
      "https://example.com/images/womens-shoes/running-sneakers-main.jpg",
    images: [
      "https://example.com/images/womens-shoes/running-sneakers-angle1.jpg",
      "https://example.com/images/womens-shoes/running-sneakers-angle2.jpg",
      "https://example.com/images/womens-shoes/running-sneakers-angle3.jpg",
    ],
  },
  {
    _id: "65a8e25602e12c44f5995524",
    category: "womens-shoes",
    name: "Elegant Dress Shoes",
    brand: "Clarks",
    price: 120,
    stock: 35,
    description: "Stylish formal shoes perfect for special occasions.",
    mainImage: "https://example.com/images/womens-shoes/dress-shoes-main.jpg",
    images: [
      "https://example.com/images/womens-shoes/dress-shoes-angle1.jpg",
      "https://example.com/images/womens-shoes/dress-shoes-angle2.jpg",
      "https://example.com/images/womens-shoes/dress-shoes-angle3.jpg",
    ],
  },

  // lighting
  {
    _id: "65a8e25602e12c44f5995525",
    category: "lighting",
    name: "LED Ceiling Light",
    brand: "Philips",
    price: 85,
    stock: 40,
    description: "Energy-efficient ceiling light with a sleek design.",
    mainImage: "https://example.com/images/lighting/ceiling-light-main.jpg",
    images: [
      "https://example.com/images/lighting/ceiling-light-angle1.jpg",
      "https://example.com/images/lighting/ceiling-light-angle2.jpg",
      "https://example.com/images/lighting/ceiling-light-angle3.jpg",
    ],
  },
  {
    _id: "65a8e25602e12c44f5995526",
    category: "lighting",
    name: "Vintage Table Lamp",
    brand: "GE Lighting",
    price: 60,
    stock: 20,
    description: "Classic table lamp that adds warmth to any room.",
    mainImage: "https://example.com/images/lighting/table-lamp-main.jpg",
    images: [
      "https://example.com/images/lighting/table-lamp-angle1.jpg",
      "https://example.com/images/lighting/table-lamp-angle2.jpg",
      "https://example.com/images/lighting/table-lamp-angle3.jpg",
    ],
  },

  // automotive
  {
    _id: "65a8e25602e12c44f5995527",
    category: "automotive",
    name: "Car Seat Cover",
    brand: "AutoZone",
    price: 45,
    stock: 100,
    description: "Durable seat covers for all car models.",
    mainImage: "https://example.com/images/automotive/car-seat-cover-main.jpg",
    images: [
      "https://example.com/images/automotive/car-seat-cover-angle1.jpg",
      "https://example.com/images/automotive/car-seat-cover-angle2.jpg",
      "https://example.com/images/automotive/car-seat-cover-angle3.jpg",
    ],
  },
  {
    _id: "65a8e25602e12c44f5995528",
    category: "automotive",
    name: "Steering Wheel Cover",
    brand: "Goodyear",
    price: 20,
    stock: 150,
    description: "Comfortable, non-slip steering wheel cover.",
    mainImage:
      "https://example.com/images/automotive/steering-wheel-cover-main.jpg",
    images: [
      "https://example.com/images/automotive/steering-wheel-cover-angle1.jpg",
      "https://example.com/images/automotive/steering-wheel-cover-angle2.jpg",
      "https://example.com/images/automotive/steering-wheel-cover-angle3.jpg",
    ],
  },

  // womens-bags
  {
    _id: "65a8e25602e12c44f5995529",
    category: "womens-bags",
    name: "Leather Tote Bag",
    brand: "Fossil",
    price: 130,
    stock: 25,
    description: "Spacious and stylish leather tote bag.",
    mainImage: "https://example.com/images/womens-bags/tote-bag-main.jpg",
    images: [
      "https://example.com/images/womens-bags/tote-bag-angle1.jpg",
      "https://example.com/images/womens-bags/tote-bag-angle2.jpg",
      "https://example.com/images/womens-bags/tote-bag-angle3.jpg",
    ],
  },
  {
    _id: "65a8e25602e12c44f5995530",
    category: "womens-bags",
    name: "Crossbody Bag",
    brand: "Michael Kors",
    price: 110,
    stock: 40,
    description: "Compact crossbody bag with a modern design.",
    mainImage: "https://example.com/images/womens-bags/crossbody-bag-main.jpg",
    images: [
      "https://example.com/images/womens-bags/crossbody-bag-angle1.jpg",
      "https://example.com/images/womens-bags/crossbody-bag-angle2.jpg",
      "https://example.com/images/womens-bags/crossbody-bag-angle3.jpg",
    ],
  },

  // mens-watches
  {
    _id: "65a8e25602e12c44f5995531",
    category: "mens-watches",
    name: "Chronograph Watch",
    brand: "Seiko",
    price: 250,
    stock: 15,
    description: "Stylish chronograph watch with water resistance.",
    mainImage: "https://example.com/images/mens-watches/chronograph-main.jpg",
    images: [
      "https://example.com/images/mens-watches/chronograph-angle1.jpg",
      "https://example.com/images/mens-watches/chronograph-angle2.jpg",
      "https://example.com/images/mens-watches/chronograph-angle3.jpg",
    ],
  },
  {
    _id: "65a8e25602e12c44f5995532",
    category: "mens-watches",
    name: "Smart Watch",
    brand: "Apple",
    price: 399,
    stock: 25,
    description: "Advanced smartwatch with fitness tracking features.",
    mainImage: "https://example.com/images/mens-watches/smartwatch-main.jpg",
    images: [
      "https://example.com/images/mens-watches/smartwatch-angle1.jpg",
      "https://example.com/images/mens-watches/smartwatch-angle2.jpg",
      "https://example.com/images/mens-watches/smartwatch-angle3.jpg",
    ],
  },

  // motorcycle
  {
    _id: "65a8e25602e12c44f5995533",
    category: "motorcycle",
    name: "Motorcycle Helmet",
    brand: "Bell",
    price: 150,
    stock: 60,
    description: "High-quality helmet with advanced safety features.",
    mainImage: "https://example.com/images/motorcycle/helmet-main.jpg",
    images: [
      "https://example.com/images/motorcycle/helmet-angle1.jpg",
      "https://example.com/images/motorcycle/helmet-angle2.jpg",
      "https://example.com/images/motorcycle/helmet-angle3.jpg",
    ],
  },
  {
    _id: "65a8e25602e12c44f5995534",
    category: "motorcycle",
    name: "Leather Riding Gloves",
    brand: "Alpinestars",
    price: 70,
    stock: 80,
    description: "Comfortable and durable riding gloves made from leather.",
    mainImage: "https://example.com/images/motorcycle/gloves-main.jpg",
    images: [
      "https://example.com/images/motorcycle/gloves-angle1.jpg",
      "https://example.com/images/motorcycle/gloves-angle2.jpg",
      "https://example.com/images/motorcycle/gloves-angle3.jpg",
    ],
  },
];

const seedProduct  = async(req,res) =>{
  try{
     await products.insertMany(products);
     console.log('Product seed data inserted successfully');
  }catch(error){
    console.log(error);
  }
}

export default seedProduct;