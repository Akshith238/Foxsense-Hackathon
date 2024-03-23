const cafeteriaMenu = {
    "Cafeteria A": {
        description: "Serving a variety of sandwiches, wraps, and salads.",
        menuItems: [
            {
                name: "Chicken Sandwich",
                description: "Grilled chicken sandwich with lettuce and tomato",
                price: 6.99,
                dietaryInfo: "Contains gluten, dairy"
            },
            {
                name: "Vegetable Wrap",
                description: "Fresh vegetable wrap with hummus",
                price: 5.49,
                dietaryInfo: "Vegetarian, vegan"
            },
            {
                name: "Pasta Salad",
                description: "Cold pasta salad with mixed vegetables",
                price: 4.99,
                dietaryInfo: "Vegetarian"
            }
        ]
    },
    "Cafeteria B": {
        description: "Offering burgers, salads, and refreshing smoothies.",
        menuItems: [
            {
                name: "Beef Burger",
                description: "Juicy beef burger with cheese and bacon",
                price: 7.99,
                dietaryInfo: "Contains gluten, dairy"
            },
            {
                name: "Caesar Salad",
                description: "Classic Caesar salad with grilled chicken",
                price: 8.49,
                dietaryInfo: "Contains dairy"
            },
            {
                name: "Fruit Smoothie",
                description: "Refreshing fruit smoothie with mixed berries",
                price: 4.49,
                dietaryInfo: "Vegetarian, vegan"
            }
        ]
    },
    "Cafeteria C": {
        description: "Offering a variety of pizzas, grilled fish, and soups.",
        menuItems: [
            {
                name: "Margherita Pizza",
                description: "Classic margherita pizza with tomato and basil",
                price: 9.99,
                dietaryInfo: "Vegetarian"
            },
            {
                name: "Grilled Fish",
                description: "Fresh grilled fish with lemon and herbs",
                price: 10.99,
                dietaryInfo: "Gluten-free"
            },
            {
                name: "Vegetable Soup",
                description: "Homemade vegetable soup with seasonal vegetables",
                price: 3.99,
                dietaryInfo: "Vegetarian, vegan"
            }
        ]
    },
    "Cafeteria D": {
        description: "Providing a variety of sandwiches, salads, and healthy bowls.",
        menuItems: [
            {
                name: "Club Sandwich",
                description: "Classic club sandwich with turkey, bacon, and lettuce",
                price: 8.99,
                dietaryInfo: "Contains gluten, dairy"
            },
            {
                name: "Greek Salad",
                description: "Fresh Greek salad with feta cheese and olives",
                price: 7.49,
                dietaryInfo: "Vegetarian"
            },
            {
                name: "Smoothie Bowl",
                description: "Healthy smoothie bowl with granola and fresh fruit",
                price: 6.99,
                dietaryInfo: "Vegetarian, vegan"
            }
        ]
    },
    "Cafeteria E": {
        description: "Offering BBQ items, salads, and fresh fruit options.",
        menuItems: [
            {
                name: "BBQ Ribs",
                description: "Tender BBQ ribs with coleslaw and fries",
                price: 12.99,
                dietaryInfo: "Contains gluten, dairy"
            },
            {
                name: "Caprese Salad",
                description: "Caprese salad with fresh mozzarella, tomato, and basil",
                price: 9.49,
                dietaryInfo: "Vegetarian"
            },
            {
                name: "Fruit Salad",
                description: "Fresh fruit salad with seasonal fruits",
                price: 4.99,
                dietaryInfo: "Vegetarian, vegan"
            }
        ]
    },
    "Cafeteria F": {
        description: "Serving sushi, stir-fries, and traditional Japanese dishes.",
        menuItems: [
            {
                name: "Sushi Roll",
                description: "Assorted sushi roll with soy sauce and wasabi",
                price: 11.99,
                dietaryInfo: "Contains seafood, gluten"
            },
            {
                name: "Tofu Stir-fry",
                description: "Tofu stir-fry with mixed vegetables and rice",
                price: 8.99,
                dietaryInfo: "Vegetarian, vegan"
            },
            {
                name: "Miso Soup",
                description: "Traditional Japanese miso soup with tofu and seaweed",
                price: 3.49,
                dietaryInfo: "Vegetarian, vegan"
            }
        ]
    },
    "Cafeteria G": {
        description: "Offering a variety of grilled items, salads, and curry dishes.",
        menuItems: [
            {
                name: "Steak Frites",
                description: "Grilled steak with French fries and garlic aioli",
                price: 14.99,
                dietaryInfo: "Contains gluten, dairy"
            },
            {
                name: "Quinoa Salad",
                description: "Quinoa salad with roasted vegetables and balsamic vinaigrette",
                price: 9.99,
                dietaryInfo: "Vegetarian, vegan"
            },
            {
                name: "Vegetable Curry",
                description: "Spicy vegetable curry with rice and naan bread",
                price: 10.49,
                dietaryInfo: "Vegetarian, vegan"
            }
        ]
    },
    "Cafeteria H": {
        description: "Serving Vietnamese cuisine including soups, spring rolls, and sandwiches.",
        menuItems: [
            {
                name: "Pho Soup",
                description: "Vietnamese pho soup with beef and rice noodles",
                price: 9.99,
                dietaryInfo: "Contains gluten"
            },
            {
                name: "Spring Rolls",
                description: "Fresh Vietnamese spring rolls with peanut dipping sauce",
                price: 6.99,
                dietaryInfo: "Vegetarian, vegan"
            },
            {
                name: "Banh Mi Sandwich",
                description: "Classic Vietnamese banh mi sandwich with pork and pickled vegetables",
                price: 8.49,
                dietaryInfo: "Contains gluten"
            }
        ]
    },
    "Cafeteria I": {
        description: "Offering Italian dishes including lasagna, wraps, and fruit parfaits.",
        menuItems: [
            {
                name: "Lasagna",
                description: "Homemade lasagna with layers of pasta, meat, and cheese",
                price: 10.99,
                dietaryInfo: "Contains gluten, dairy"
            },
            {
                name: "Caesar Wrap",
                description: "Caesar wrap with grilled chicken and Caesar dressing",
                price: 7.99,
                dietaryInfo: "Contains gluten, dairy"
            },
            {
                name: "Fruit Parfait",
                description: "Delicious fruit parfait with yogurt and granola",
                price: 5.49,
                dietaryInfo: "Vegetarian"
            }
        ]
    },
    "Cafeteria J": {
        description: "Serving Mexican cuisine including tacos, burrito bowls, and churros.",
        menuItems: [
            {
                name: "Tacos",
                description: "Authentic tacos with choice of meat, salsa, and toppings",
                price: 9.49,
                dietaryInfo: "Contains gluten"
            },
            {
                name: "Burrito Bowl",
                description: "Burrito bowl with rice, beans, veggies, and choice of protein",
                price: 8.99,
                dietaryInfo: "Vegetarian, vegan"
            },
            {
                name: "Churros",
                description: "Freshly made churros with cinnamon sugar",
                price: 4.99,
                dietaryInfo: "Vegetarian"
            }
        ]
    }
};

export default cafeteriaMenu;
