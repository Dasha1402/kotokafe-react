export interface MenuItem {
    name: string;
    price: string;
    description: string;
}

export interface MenuCategory {
    title: string;
    icon: string;
    items: MenuItem[];
}

export const menuData: MenuCategory[] = [
    {
        title: "Кофе",
        icon: "☕ ",
        items: [
            { name: "Латте с пенкой-котом", price: "320 ₽", description: "Классический латте, а на пенке - мордочка кота из корицы." },
            { name: "Мокко \"Мурка\"", price: "350 ₽", description: "Эспрессо, шоколад и немного корицы. Согревает лучше пледа." },
            { name: "Капучино \"Усатый\"", price: "300 ₽", description: "Плотная пенка, лёгкая горчинка и улыбка бариста в подарок." }
        ]
    },
    {
        title: "Десерты",
        icon: "🧁 ",
        items: [
            { name: "Чизкейк \"Лапка\"", price: "420 ₽", description: "Нежный, сливочный, с отпечатком лапки на топпинге." },
            { name: "Маффин \"Усатый\"", price: "280 ₽", description: "Шоколадный маффин с кремовыми усами сверху." },
            { name: "Медовик \"Мурлыка\"", price: "390 ₽", description: "Тот самый, из детства. Со сметанным кремом и щепоткой нежности." }
        ]
    },
    {
        title: "Для котов",
        icon: "🐾 ",
        items: [
            { name: "Лакомство от шефа", price: "150 ₽", description: "Натуральное лакомство, одобренное всеми двенадцатью резидентами." },
            { name: "Кошачья мята", price: "100 ₽", description: "Для особых случаев и особых гостей. Использовать с разрешения персонала." },
            { name: "\"Кошачий капучино\"", price: "120 ₽", description: "Тёплое молоко с витаминами. Подаётся в миниатюрной чашке." }
        ]
    }
];