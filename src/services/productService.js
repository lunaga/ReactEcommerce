const products = [
    {
    id: "1",
    name: "God of War",
    description: "Action-adventure game",
    price: 59.99,
    category: "ps5",
    image: "/src/assets/God of War Ragnarok.webp",
    },
    {
    id: "2",
    name: "EldenRing",
    description: "Open-world game",
    price: 49.99,
    category: "ps4",
    image: "/src/assets/Elden Ring PS4 Platinum Trophy Service.webp",
    },
    {
    id: "3",
    name: "Dark Souls 2",
    description: "Action role-playing game",
    price: 69.99,
    category: "ps3",
    image: "/src/assets/Dark Souls II PS3 Platinum Trophy Service.webp",
    },
    {
    id: "4",
    name: "Detroit Become Human",
    description: "history and adventure",
    price: 69.99,
    category: "ps4",
    image: "/src/assets/Detroit Become Human PS4 Platinum Trophy Service.webp",
    },
    {
    id: "5",
    name: "Sekiro Shadow Die Twice",
    description: "Action-adventure survival horror game",
    price: 49.99,
    category: "ps4",
    image: "/src/assets/Sekiro Shadows Die Twice PS4 Platinum Trophy.webp",
    },
    {
    id: "6",
    name: "Alice Madness Returns",
    description: "Action-adventure game",
    price: 14.99,
    category: "ps3",
    image: "/src/assets/Alice Madness Returns PS3 (+DLC) Platinum Trophy Service.webp",
    },
    {
    id: "7",
    name: "Hollow Knight",
    description: "Action-adventure game",
    price: 24.99,
    category: "ps4",
    image: "/src/assets/Hollow knight.webp",
    },
    {
    id: "8",
    name: "BloodBorne",
    description: "Action-adventure horror game",
    price: 50.99,
    category: "ps4",
    image: "/src/assets/BloodBorne PS4 (+DLC) Platinum Trophy Service.webp",
    },
    {
    id: "9",
    name: "Devil May Cry 5",
    description: "Action-adventure game",
    price: 74.99,
    category: "ps5",
    image: "/src/assets/Devil May Cry 5 PS5 Platinum Trophy Service.webp",
    },
    {
    id: "10",
    name: "Final Fantasy VII Remake",
    description: "Action-adventure game",
    price: 54.99,
    category: "ps5",
    image: "/src/assets/Final Fantasy VII Remake (+DLC) PS5 Platinum Trophy Service.webp",
    },
];

export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(
        categoryId
            ? products.filter((product) => product.category === categoryId)
            : products
        );
    }, 500);
    });
};

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.find((product) => product.id === itemId));
    }, 500);
    });
};
