export const restaurants = [
    {
      "id": 1,
      "name": "The Rustic Spoon",
      "image_url": "https://assets.simpleviewinc.com/simpleview/image/upload/crm/virginiabeachva/The-Rustic-Spoon-552ec28c5056a36_552ec3d5-5056-a36a-08a6d983c46bbde2.jpg",
      "description": "A cozy cafe serving hearty breakfast and brunch dishes with a rustic twist.",
      "star_rating": 4.5,
      "people_rating": 325,
      "food_types": ["Breakfast", "Brunch", "American"],
      "menu": [
        {
          "type": "breakfast",
          "items": [
            { "item": "Classic Pancakes", "price": 9.99 },
            { "item": "Avocado Toast", "price": 12.99 },
            { "item": "Eggs Benedict", "price": 11.99 },
            { "item": "French Toast", "price": 10.99 }
          ]
        },
        {
          "type": "lunch",
          "items": [
            { "item": "Club Sandwich", "price": 13.99 },
            { "item": "Caesar Salad", "price": 11.99 },
            { "item": "Soup of the Day", "price": 8.99 }
          ]
        },
        {
          "type": "dinner",
          "items": [
            { "item": "Grilled Salmon", "price": 22.99 },
            { "item": "Ribeye Steak", "price": 24.99 },
            { "item": "Vegetable Lasagna", "price": 18.99 }
          ]
        }
      ],
      "address": "123 Main St, Cityville, USA",
      "opening_time": "7:00 AM - 10:00 PM",
      "services": ["Dine-in", "Takeout", "Delivery"],
      "year_of_establishment": 2005,
      "timings": [
        { "day": "Monday - Friday", "hours": "7:00 AM - 10:00 PM" },
        { "day": "Saturday - Sunday", "hours": "8:00 AM - 11:00 PM" }
      ]
    },
    {
      "id": 2,
      "name": "Casa Italiana",
      "image_url": "https://images.otstatic.com/prod/24876191/1/large.jpg",
      "description": "Authentic Italian cuisine with a modern flair, featuring handmade pasta and wood-fired pizzas.",
      "star_rating": 4.7,
      "people_rating": 498,
      "food_types": ["Italian", "Pasta", "Pizza"],
      "menu": [
        {
          "type": "lunch",
          "items": [
            { "item": "Margherita Pizza", "price": 13.99 },
            { "item": "Spaghetti Carbonara", "price": 15.99 },
            { "item": "Chicken Alfredo", "price": 17.99 }
          ]
        },
        {
          "type": "dinner",
          "items": [
            { "item": "Ravioli Di Zucca", "price": 19.99 },
            { "item": "Lasagna al Forno", "price": 21.99 },
            { "item": "Tiramisu", "price": 8.99 }
          ]
        }
      ],
      "address": "456 Oak St, Townsville, USA",
      "opening_time": "11:00 AM - 11:00 PM",
      "services": ["Dine-in", "Takeout"],
      "year_of_establishment": 1998,
      "timings": [
        { "day": "Monday - Sunday", "hours": "11:00 AM - 11:00 PM" }
      ]
    },
    {
      "id": 3,
      "name": "Mizuki Lounge",
      "image_url": "https://qul.imgix.net/14f064ab-badb-414a-aebe-d295140f0f34/635311_sld.jpg",
      "description": "Experience the fusion of Japanese and Western flavors with our creative sushi rolls.",
      "star_rating": 4.3,
      "people_rating": 276,
      "food_types": ["Japanese", "Sushi", "Fusion"],
      "menu": [
        {
          "type": "lunch",
          "items": [
            { "item": "Sashimi Platter", "price": 25.99 },
            { "item": "Tempura Udon", "price": 18.99 },
            { "item": "California Roll", "price": 12.99 }
          ]
        },
        {
          "type": "dinner",
          "items": [
            { "item": "Dragon Roll", "price": 16.99 },
            { "item": "Beef Teriyaki", "price": 21.99 },
            { "item": "Miso Soup", "price": 4.99 }
          ]
        }
      ],
      "address": "789 Elm St, Villagetown, USA",
      "opening_time": "12:00 PM - 10:00 PM",
      "services": ["Dine-in", "Takeout"],
      "year_of_establishment": 2010,
      "timings": [
        { "day": "Monday - Saturday", "hours": "12:00 PM - 10:00 PM" },
        { "day": "Sunday", "hours": "Closed" }
      ]
    },
    {
      "id": 4,
      "name": "The Smokehouse",
      "image_url": "https://media-cdn.tripadvisor.com/media/photo-s/12/b2/64/82/outdoor-dining-with-open.jpg",
      "description": "Savor the rich flavors of smoked meats and BBQ classics at our family-friendly restaurant.",
      "star_rating": 4.6,
      "people_rating": 410,
      "food_types": ["BBQ", "American", "Grill"],
      "menu": [
        {
          "type": "lunch",
          "items": [
            { "item": "Pulled Pork Sandwich", "price": 14.99 },
            { "item": "Smoked Brisket", "price": 17.99 },
            { "item": "Grilled Chicken Salad", "price": 12.99 }
          ]
        },
        {
          "type": "dinner",
          "items": [
            { "item": "Full Rack of Ribs", "price": 25.99 },
            { "item": "BBQ Platter", "price": 29.99 },
            { "item": "Cornbread with Honey Butter", "price": 6.99 }
          ]
        }
      ],
      "address": "567 Maple St, Hamletville, USA",
      "opening_time": "11:00 AM - 9:00 PM",
      "services": ["Dine-in", "Takeout"],
      "year_of_establishment": 2012,
      "timings": [
        { "day": "Monday - Sunday", "hours": "11:00 AM - 9:00 PM" }
      ]
    },
    {
      "id": 5,
      "name": "Mediterranea",
      "image_url": "https://www.archpaper.com/wp-content/uploads/2022/10/ZAYTINYA_VIEW-TO-NICHE_162-FINAL-Credit-Jason-Varney.jpeg",
      "description": "Transport yourself to the Mediterranean with our fresh seafood, salads, and grilled specialties.",
      "star_rating": 4.4,
      "people_rating": 361,
      "food_types": ["Mediterranean", "Seafood", "Salads"],
      "menu": [
        {
          "type": "lunch",
          "items": [
            { "item": "Greek Salad", "price": 12.99 },
            { "item": "Grilled Octopus", "price": 18.99 },
            { "item": "Seafood Paella", "price": 22.99 }
          ]
        },
        {
          "type": "dinner",
          "items": [
            { "item": "Lamb Kebabs", "price": 19.99 },
            { "item": "Shrimp Scampi", "price": 24.99 },
            { "item": "Baklava", "price": 8.99 }
          ]
        }
      ],
      "address": "890 Pine St, Mountainview, USA",
      "opening_time": "11:30 AM - 10:00 PM",
      "services": ["Dine-in", "Takeout", "Delivery"],
      "year_of_establishment": 2008,
      "timings": [
        { "day": "Monday - Saturday", "hours": "11:30 AM - 10:00 PM" },
        { "day": "Sunday", "hours": "Closed" }
      ]
    },
    {
      "id": 6,
      "name": "Taste of India",
      "image_url": "https://media-cdn.tripadvisor.com/media/photo-s/1a/5f/1b/c7/restaurant.jpg",
      "description": "Embark on a culinary journey through India with our diverse menu of authentic dishes.",
      "star_rating": 4.9,
      "people_rating": 732,
      "food_types": ["Indian", "Curry", "Vegetarian"],
      "menu": [
        {
          "type": "lunch",
          "items": [
            { "item": "Butter Chicken", "price": 15.99 },
            { "item": "Vegetable Biryani", "price": 13.99 },
            { "item": "Garlic Naan", "price": 3.99 }
          ]
        },
        {
          "type": "dinner",
          "items": [
            { "item": "Lamb Vindaloo", "price": 18.99 },
            { "item": "Palak Paneer", "price": 14.99 },
            { "item": "Mango Lassi", "price": 5.99 }
          ]
        }
      ],
      "address": "345 Cedar St, Riverside, USA",
      "opening_time": "11:00 AM - 10:30 PM",
      "services": ["Dine-in", "Takeout", "Delivery"],
      "year_of_establishment": 2003,
      "timings": [
        { "day": "Monday - Sunday", "hours": "11:00 AM - 10:30 PM" }
      ]
    },
    {
      "id": 7,
      "name": "Street Tacos",
      "image_url": "https://media-cdn.tripadvisor.com/media/photo-s/09/b9/8a/8c/great-food-decided-to.jpg",
      "description": "Enjoy the vibrant flavors of Mexico with our delicious street-style tacos and homemade salsas.",
      "star_rating": 4.2,
      "people_rating": 248,
      "food_types": ["Mexican", "Tacos", "Street Food"],
      "menu": [
        {
          "type": "lunch",
          "items": [
            { "item": "Carne Asada Tacos", "price": 9.99 },
            { "item": "Al Pastor Tacos", "price": 8.99 },
            { "item": "Quesadillas", "price": 7.99 }
          ]
        },
        {
          "type": "dinner",
          "items": [
            { "item": "Enchiladas Suizas", "price": 12.99 },
            { "item": "Chiles Rellenos", "price": 14.99 },
            { "item": "Guacamole and Chips", "price": 6.99 }
          ]
        }
      ],
      "address": "901 Walnut St, Beachtown, USA",
      "opening_time": "10:00 AM - 9:00 PM",
      "services": ["Dine-in", "Takeout", "Delivery"],
      "year_of_establishment": 2015,
      "timings": [
        { "day": "Monday - Sunday", "hours": "10:00 AM - 9:00 PM" }
      ]
    },
    {
      "id": 8,
      "name": "The Brew House",
      "image_url": "https://b.zmtcdn.com/data/reviews_photos/e6f/3548b3bcf46a5b7321472348b25e8e6f_1580896886.jpg",
      "description": "A cozy pub serving craft beers, comfort food, and a warm atmosphere perfect for gatherings.",
      "star_rating": 4.5,
      "people_rating": 382,
      "food_types": ["Beers", "Wine", "Whisky"],
      "menu": [
        {
          "type": "lunch",
          "items": [
            { "item": "Brew House Burger", "price": 14.99 },
            { "item": "Fish and Chips", "price": 16.99 },
            { "item": "Caesar Wrap", "price": 12.99 }
          ]
        },
        {
          "type": "dinner",
          "items": [
            { "item": "Steak Frites", "price": 24.99 },
            { "item": "Bourbon Glazed Salmon", "price": 21.99 },
            { "item": "Beer-Battered Onion Rings", "price": 8.99 }
          ]
        }
      ],
      "address": "678 Pineapple St, Grovetown, USA",
      "opening_time": "4:00 PM - 11:00 PM",
      "services": ["Dine-in", "Takeout"],
      "year_of_establishment": 2007,
      "timings": [
        { "day": "Monday - Friday", "hours": "4:00 PM - 11:00 PM" },
        { "day": "Saturday", "hours": "12:00 PM - 12:00 AM" },
        { "day": "Sunday", "hours": "Closed" }
      ]
    }
  ];
  