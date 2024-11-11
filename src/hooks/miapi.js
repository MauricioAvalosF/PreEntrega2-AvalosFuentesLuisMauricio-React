
    const products = [
        {
          "id": 1,
          "name": "Smartphone X100",
          "category": "Electronics",
          "price": 699.99,
          "currency": "USD",
          "brand": "TechCorp",
          "stock": 50,
          "description": "A high-performance smartphone with a 6.5-inch display and 128GB of storage.",
          "image_url": "https://example.com/images/smartphone-x100.jpg"
        },
        {
          "id": 2,
          "name": "Laptop Pro 15",
          "category": "Electronics",
          "price": 1299.99,
          "currency": "USD",
          "brand": "TechCorp",
          "stock": 30,
          "description": "A powerful laptop with an Intel i7 processor and 16GB RAM.",
          "image_url": "https://example.com/images/laptop-pro-15.jpg"
        },
        {
          "id": 3,
          "name": "Wireless Headphones",
          "category": "Audio",
          "price": 199.99,
          "currency": "USD",
          "brand": "SoundWave",
          "stock": 150,
          "description": "Noise-cancelling wireless headphones with 30-hour battery life.",
          "image_url": "https://example.com/images/wireless-headphones.jpg"
        },
        {
          "id": 4,
          "name": "Smartwatch Z1",
          "category": "Wearables",
          "price": 249.99,
          "currency": "USD",
          "brand": "FitTech",
          "stock": 80,
          "description": "A stylish smartwatch with heart rate monitoring and fitness tracking.",
          "image_url": "https://example.com/images/smartwatch-z1.jpg"
        },
        {
          "id": 5,
          "name": "4K TV 55\"",
          "category": "Electronics",
          "price": 899.99,
          "currency": "USD",
          "brand": "Visionary",
          "stock": 20,
          "description": "A 55-inch 4K Ultra HD smart TV with built-in streaming apps.",
          "image_url": "https://example.com/images/4k-tv-55.jpg"
        },
        {
          "id": 6,
          "name": "Bluetooth Speaker",
          "category": "Audio",
          "price": 79.99,
          "currency": "USD",
          "brand": "SoundWave",
          "stock": 200,
          "description": "Portable Bluetooth speaker with 10-hour battery and waterproof design.",
          "image_url": "https://example.com/images/bluetooth-speaker.jpg"
        },
        {
          "id": 7,
          "name": "Gaming Chair",
          "category": "Furniture",
          "price": 199.99,
          "currency": "USD",
          "brand": "GameSeat",
          "stock": 40,
          "description": "Ergonomic gaming chair with adjustable armrests and lumbar support.",
          "image_url": "https://example.com/images/gaming-chair.jpg"
        },
        {
          "id": 8,
          "name": "Digital Camera Z500",
          "category": "Photography",
          "price": 499.99,
          "currency": "USD",
          "brand": "PixPro",
          "stock": 25,
          "description": "A high-quality digital camera with 20MP resolution and 4K video recording.",
          "image_url": "https://example.com/images/digital-camera-z500.jpg"
        },
        {
          "id": 9,
          "name": "Electric Toothbrush",
          "category": "Health & Beauty",
          "price": 59.99,
          "currency": "USD",
          "brand": "CleanSmile",
          "stock": 120,
          "description": "A smart electric toothbrush with multiple cleaning modes and long battery life.",
          "image_url": "https://example.com/images/electric-toothbrush.jpg"
        },
        {
          "id": 10,
          "name": "Air Purifier",
          "category": "Home Appliances",
          "price": 149.99,
          "currency": "USD",
          "brand": "BreatheFresh",
          "stock": 60,
          "description": "A compact air purifier for cleaner air in rooms up to 500 sq. ft.",
          "image_url": "https://example.com/images/air-purifier.jpg"
        },
        {
          "id": 11,
          "name": "Smartphone X200",
          "category": "Electronics",
          "price": 799.99,
          "currency": "USD",
          "brand": "TechCorp",
          "stock": 45,
          "description": "An upgraded version with a faster processor and enhanced camera features.",
          "image_url": "https://example.com/images/smartphone-x200.jpg"
        },
        {
          "id": 12,
          "name": "Laptop Ultra 17",
          "category": "Electronics",
          "price": 1599.99,
          "currency": "USD",
          "brand": "TechCorp",
          "stock": 15,
          "description": "A high-end laptop with a 17-inch display and a powerful GPU for gaming.",
          "image_url": "https://example.com/images/laptop-ultra-17.jpg"
        },
        {
          "id": 13,
          "name": "Noise Cancelling Headphones",
          "category": "Audio",
          "price": 249.99,
          "currency": "USD",
          "brand": "SoundWave",
          "stock": 100,
          "description": "Over-ear headphones with active noise cancellation and 40-hour battery life.",
          "image_url": "https://example.com/images/noise-cancelling-headphones.jpg"
        },
        {
          "id": 14,
          "name": "Fitness Tracker",
          "category": "Wearables",
          "price": 129.99,
          "currency": "USD",
          "brand": "FitTech",
          "stock": 90,
          "description": "A fitness tracker with sleep monitoring and heart rate tracking.",
          "image_url": "https://example.com/images/fitness-tracker.jpg"
        },
        {
          "id": 15,
          "name": "Smart TV 50\"",
          "category": "Electronics",
          "price": 699.99,
          "currency": "USD",
          "brand": "Visionary",
          "stock": 30,
          "description": "A 50-inch smart TV with HDR support and voice control.",
          "image_url": "https://example.com/images/smart-tv-50.jpg"
        },
        {
          "id": 16,
          "name": "Wireless Charging Pad",
          "category": "Accessories",
          "price": 39.99,
          "currency": "USD",
          "brand": "PowerTech",
          "stock": 180,
          "description": "A wireless charging pad compatible with Qi-enabled devices.",
          "image_url": "https://example.com/images/wireless-charging-pad.jpg"
        },
        {
          "id": 17,
          "name": "Home Robot Vacuum",
          "category": "Home Appliances",
          "price": 249.99,
          "currency": "USD",
          "brand": "CleanBot",
          "stock": 55,
          "description": "A robotic vacuum with smart mapping and auto-recharge features.",
          "image_url": "https://example.com/images/home-robot-vacuum.jpg"
        },
        {
          "id": 18,
          "name": "Electric Kettle",
          "category": "Home Appliances",
          "price": 59.99,
          "currency": "USD",
          "brand": "QuickBoil",
          "stock": 100,
          "description": "A fast-boiling electric kettle with automatic shut-off feature.",
          "image_url": "https://example.com/images/electric-kettle.jpg"
        },
        {
          "id": 19,
          "name": "Portable Air Conditioner",
          "category": "Home Appliances",
          "price": 349.99,
          "currency": "USD",
          "brand": "CoolBreeze",
          "stock": 40,
          "description": "A portable air conditioner with multiple cooling modes.",
          "image_url": "https://example.com/images/portable-air-conditioner.jpg"
        },
        {
          "id": 20,
          "name": "Smartphone X300",
          "category": "Electronics",
          "price": 899.99,
          "currency": "USD",
          "brand": "TechCorp",
          "stock": 25,
          "description": "A flagship smartphone with 5G support and ultra-fast charging.",
          "image_url": "https://example.com/images/smartphone-x300.jpg"
        },
        {
          "id": 21,
          "name": "Gaming Headset",
          "category": "Audio",
          "price": 129.99,
          "currency": "USD",
          "brand": "SoundWave",
          "stock": 110,
          "description": "A gaming headset with surround sound and a noise-cancelling microphone.",
          "image_url": "https://example.com/images/gaming-headset.jpg"
        },
        {
          "id": 22,
          "name": "Electric Grill",
          "category": "Home Appliances",
          "price": 129.99,
          "currency": "USD",
          "brand": "GrillMaster",
          "stock": 70,
          "description": "A compact electric grill perfect for indoor cooking.",
          "image_url": "https://example.com/images/electric-grill.jpg"
        },
        {
          "id": 23,
          "name": "Coffee Maker",
          "category": "Home Appliances",
          "price": 79.99,
          "currency": "USD",
          "brand": "BrewTech",
          "stock": 120,
          "description": "A programmable coffee maker with a built-in grinder and thermal carafe.",
          "image_url": "https://example.com/images/coffee-maker.jpg"
        },
        {
          "id": 24,
          "name": "Electric Bike",
          "category": "Sports & Outdoors",
          "price": 999.99,
          "currency": "USD",
          "brand": "EcoRide",
          "stock": 10,
          "description": "An electric bike with a 30-mile range and 20mph top speed.",
          "image_url": "https://example.com/images/electric-bike.jpg"
        },
        {
          "id": 25,
          "name": "Portable Power Bank",
          "category": "Accessories",
          "price": 49.99,
          "currency": "USD",
          "brand": "PowerTech",
          "stock": 150,
          "description": "A portable power bank with 10000mAh capacity and quick charge feature.",
          "image_url": "https://example.com/images/portable-power-bank.jpg"
        },
        {
          "id": 26,
          "name": "Smart Coffee Mug",
          "category": "Home Appliances",
          "price": 39.99,
          "currency": "USD",
          "brand": "BrewTech",
          "stock": 200,
          "description": "A coffee mug that keeps your drink at the perfect temperature.",
          "image_url": "https://example.com/images/smart-coffee-mug.jpg"
        },
        {
          "id": 27,
          "name": "Smart Home Security Camera",
          "category": "Home Appliances",
          "price": 179.99,
          "currency": "USD",
          "brand": "SafeHome",
          "stock": 40,
          "description": "A smart security camera with motion detection and cloud storage.",
          "image_url": "https://example.com/images/security-camera.jpg"
        },
        {
          "id": 28,
          "name": "Cordless Vacuum Cleaner",
          "category": "Home Appliances",
          "price": 199.99,
          "currency": "USD",
          "brand": "CleanSweep",
          "stock": 80,
          "description": "A powerful cordless vacuum cleaner with long battery life.",
          "image_url": "https://example.com/images/cordless-vacuum-cleaner.jpg"
        },
        {
          "id": 29,
          "name": "Smart Refrigerator",
          "category": "Home Appliances",
          "price": 2299.99,
          "currency": "USD",
          "brand": "CoolTech",
          "stock": 5,
          "description": "A smart refrigerator with touchscreen control and automatic inventory tracking.",
          "image_url": "https://example.com/images/smart-refrigerator.jpg"
        },
        {
          "id": 30,
          "name": "Electric Skateboard",
          "category": "Sports & Outdoors",
          "price": 399.99,
          "currency": "USD",
          "brand": "UrbanRide",
          "stock": 25,
          "description": "An electric skateboard with a 15-mile range and 20mph top speed.",
          "image_url": "https://example.com/images/electric-skateboard.jpg"
        }
      ];

    export const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products)
            },500)
        })
    }

    export const getProductsByCategory = (categoryId) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products.filter((prod) => prod.category === categoryId))
            },500)
        })
    }

    export const getProductById = (productId) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products.find((prod) => prod.id === Number(productId)));
        }, 500);
      })
    }
  
  