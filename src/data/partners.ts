export interface Partner {
    name: string;
    description: string;
    imageUrl: string;
}

export const partnersData: Partner[] = [
    {
        name: "Приют \"Добрые лапы\"",
        description: "Оттуда приехали Персик и Маруся.",
        imageUrl: "/img/Лапы.webp"
    },
    {
        name: "Ветклиника \"ЗооПлюс\"",
        description: "Сергей Кузнецов наблюдает всех наших котов.",
        imageUrl: "/img/Зоо.webp"
    },
    {
        name: "Royal Canin",
        description: "Официальный корм наших резидентов.",
        imageUrl: "/img/Роял.webp"
    },
    {
        name: "Питомник \"Nordic Star\"",
        description: "Елена Морозова доверила нам Нюшу.",
        imageUrl: "/img/нордик.webp"
    }
];