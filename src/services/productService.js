const products = [
    {
    id: "1",
    name: "Sekiro: Shadows Die Twice PS4 Platinum Trophy",
    description: "Adventure game, SoulsLike game",
    price: 73.01,
    category: "ps4",
    image: "/src/assets/Sekiro Shadows Die Twice PS4 Platinum Trophy.webp",
    },

    {
    id: "2",
    name: "God of War: Ragnarok (+DLC) PS5 Platinum Trophy Service",
    description: "Adventure game",
    price: 103.44,
    category: "ps5",
    image: "/src/assets/God of War Ragnarok.webp",
    },

    {
    id: "3",
    name: "Spider-Man: Miles Morales",
    description: "Open-world game, Adventure game",
    price: 29.99,
    category: "ps4",
    image: "/src/assets/spiderman.jpg",
    },

    {
    id: "4",
    name: "Sifu (+DLC) PS4 Platinum Trophy Service",
    description: "adventure game, fighting game",
    price: 146.03,
    category: "ps4",
    image: "/src/assets/Sifu (+DLC) PS4 Platinum Trophy Service.webp",
    },

    {
    id: "5",
    name: "Tomb Raider",
    description: "adventure game, plataform game",
    price: 39.99,
    category: "ps4",
    image: "/src/assets/tomb.jpg",
    },

    {
    id: "6",
    name: "BloodBorne PS4 (+DLC) Platinum Trophy Service",
    description: "Open-world game, SoulsLike game",
    price: 66.93,
    category: "ps4",
    image: "/src/assets/BloodBorne PS4 (+DLC) Platinum Trophy Service.webp",
    },

    {
    id: "7",
    name: "Dark Souls 3",
    description: "Open-world game, SoulsLike game",
    price: 49.99,
    category: "ps4",
    image: "/src/assets/ds3.jpg",
    },

    {
    id: "8",
    name: "Assassins Creed",
    description: "Open-world game",
    price: 39.99,
    category: "ps5",
    image: "/src/assets/assassins.jpg",
    },

    {
    id: "9",
    name: "Elden Ring PS4 Platinum Trophy Service",
    description: "Open-world game, SoulsLike game",
    price: 73.01,
    category: "ps4",
    image: "/src/assets/Elden Ring PS4 Platinum Trophy Service.webp",
    },

    {
    id: "10",
    name: "God of war: Ascension PS3 Platinum Trophy Service",
    description: "adventure game",
    price: 36.51,
    category: "ps3",
    image: "/src/assets/god 3.webp",
    },

    {
    id: "11",
    name: "Atelier Ryza 3 PS4 Platinum Trophy Service",
    description: "Open-world game, rol game",
    price: 91.27,
    category: "ps4",
    image: "/src/assets/Atelier Ryza 3 PS4 Platinum Trophy Service.webp",
    },

    {
    id: "12",
    name: "Hollow knight (EU/NA) PS4 Platinum Trophy Service",
    description: "plataform game, soulslike game, adventre game",
    price: 73.01,
    category: "ps4",
    image: "/src/assets/Hollow knight.webp",
    },

    {
    id: "13",
    name: "Megadimension Neptunia VIIR PS4 Platinum Trophy Service",
    description: "Open-world game",
    price: 85.18,
    category: "ps4",
    image: "/src/assets/Megadimension Neptunia VIIR PS4 Platinum Trophy Service.webp",
    },

    {
    id: "14",
    name: "Resident Evil Village PS5 (+DLC) Platinum Trophy Service",
    description: "Horror game, survivor game",
    price: 97.35,
    category: "ps5",
    image: "/src/assets/Resident Evil Village PS5 (+DLC) Platinum Trophy Service.webp",
    },

    {
    id: "15",
    name: "Dark Souls II PS3 Platinum Trophy Service",
    description: "Open-world game, SoulsLike game",
    price: 73.01,
    category: "ps3",
    image: "/src/assets/Dark Souls II PS3 Platinum Trophy Service.webp",
    },

    {
    id: "16",
    name: "Resident Evil Village PS4 (+DLC) Platinum Trophy Service",
    description: "horror game, survivor game",
    price: 97.35,
    category: "ps4",
    image: "/src/assets/Resident Evil Village PS4 (+DLC) Platinum Trophy Service.webp",
    },

    {
    id: "17",
    name: "Kakarot PS4 Platinum Trophy Service",
    description: "figthting game, adventure game",
    price: 46.55,
    category: "ps4",
    image: "/src/assets/Kakarot PS4 Platinum Trophy Service.webp",
    },

    {
    id: "18",
    name: "Dark souls Remastered PS4 Platinum Trophy Service",
    description: "Open-world game, SoulsLike game",
    price: 51.72,
    category: "ps4",
    image: "/src/assets/Dark souls Remastered PS4 Platinum Trophy Service.webp",
    },

    {
    id: "19",
    name: "Devil May Cry 3 HD PS4 Platinum Trophy Service",
    description: "Adventure game",
    price: 91.27,
    category: "ps4",
    image: "/src/assets/Devil May Cry 3 HD PS4 Platinum Trophy Service.webp",
    },

    {
    id: "20",
    name: "Crash Bandicoot N’Sane Trilogy PS4 Platinum Trophy Service",
    description: "Plataform game",
    price: 182.54,
    category: "ps4",
    image: "/src/assets/Crash Bandicoot N’Sane Trilogy PS4 Platinum Trophy Service.webp",
    },

    {
    id: "21",
    name: "InFamous: First Light PS4 Platinum Trophy Service",
    description: "Open-world game, adventure game",
    price: 36.51,
    category: "ps4",
    image: "/src/assets/InFamous First Light PS4 Platinum Trophy Service.webp",
    },

    {
    id: "22",
    name: "Devil May Cry 5 PS5 Platinum Trophy Service",
    description: "adventure game",
    price: 225.13,
    category: "ps5",
    image: "/src/assets/Devil May Cry 5 PS5 Platinum Trophy Service.webp",
    },

    {
    id: "23",
    name: "Batman Arkham Knight (+DLC) PS4 Platinum Trophy Service",
    description: "Open-world game",
    price: 146.03,
    category: "ps4",
    image: "/src/assets/Batman Arkham Knight (+DLC) PS4 Platinum Trophy Service.webp",
    },

    {
    id: "24",
    name: "Tomb Raider: Legend PS5 Platinum Trophy Service",
    description: "Open-world game",
    price: 36.51,
    category: "ps5",
    image: "/src/assets/Tomb Raider Legend PS5 Platinum Trophy Service.webp",
    },

    {
    id: "25",
    name: "Detroit: Become Human PS4 Platinum Trophy Service",
    description: "Story game",
    price: 54.76,
    category: "ps4",
    image: "/src/assets/Detroit Become Human PS4 Platinum Trophy Service.webp",
    },

    {
    id: "26",
    name: "Devil May Cry 1 HD PS3 Platinum Trophy Service",
    description: "Adventure game",
    price: 85.18,
    category: "ps3",
    image: "/src/assets/Devil May Cry 1 HD PS3 Platinum Trophy Service.webp",
    },

    {
    id: "27",
    name: "LEGO Star Wars III: The Clone Wars PS3 Platinum Trophy Service",
    description: "Open-world game",
    price: 60.85,
    category: "ps3",
    image: "/src/assets/LEGO Star Wars III The Clone Wars PS3 Platinum Trophy Service.webp",
    },

    {
    id: "28",
    name: "Alice: Madness Returns PS3 (+DLC) Platinum Trophy Service",
    description: "Plataform game",
    price: 54.76,
    category: "ps3",
    image: "/src/assets/Alice Madness Returns PS3 (+DLC) Platinum Trophy Service.webp",
    },

    {
    id: "29",
    name: "Dark souls II: Scholar Of The First Sin PS4 Platinum Trophy",
    description: "Open-world game, SoulsLike game",
    price: 73.01,
    category: "ps4",
    image: "/src/assets/Dark souls II Scholar Of The First Sin PS4 Platinum Trophy.webp",
    },

    {
    id: "30",
    name: "Final Fantasy VII Remake (+DLC) PS5 Platinum Trophy Service",
    description: "Open-world game",
    price: 164.28,
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
