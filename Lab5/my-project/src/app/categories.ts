export interface Category {
    categoryId: number,
    name: string;
    url: string;
}


export const categories: Category[] = [
    {
        categoryId: 1,
        name: 'samsung',
        url: 'https://images.samsung.com/is/image/samsung/assets/ru/about-us/brand/logo/mo/256_144_4.png',
    },
    {
        categoryId: 2,
        name: 'apple',
        url: 'https://www.vectorlogo.zone/logos/apple/apple-ar21.png',
    },
    {
        categoryId: 3,
        name: 'laptop',
        url: 'https://media.takealot.com/covers_tsins/59057477/59057477-1-zoom.jpeg',
    },
    {
        categoryId: 4,
        name: 'keyboard',
        url: 'https://static.tildacdn.com/tild6666-3062-4137-b936-623733383239/K2A3.jpg',
    },
]