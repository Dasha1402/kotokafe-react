export interface TeamMember {
    name: string;
    role: string;
    quote: string;
    favoriteCat: string;
    imageUrl: string;
}

export const teamData: TeamMember[] = [
    {
        name: "Ольга Смирнова",
        role: "Администратор",
        quote: "Знаю каждого кота по имени, характеру и любимой лежанке.",
        favoriteCat: "С Барсиком с первого дня",
        imageUrl: "/img/Ольга.webp"
    },
    {
        name: "Артём Лебедев",
        role: "Бариста",
        quote: "Делаю тот самый латте с пенкой-котом. За 2 года 8000 чашек.",
        favoriteCat: "Любимец Муси",
        imageUrl: "/img/Артём.webp"
    },
    {
        name: "Николай Орлов",
        role: "Шеф-повар",
        quote: "Готовлю десерты с лапками. Рыжик - мой главный дегустатор.",
        favoriteCat: "Друг Рыжика",
        imageUrl: "/img/Николай.webp"
    },
    {
        name: "Максим Белов",
        role: "Бариста",
        quote: "Выкормил котика из бутылки. Теперь он думает что я его мама.",
        favoriteCat: "Отец котика",
        imageUrl: "/img/Максим.webp"
    },
    {
        name: "Анна Соколова",
        role: "Волонтёр, куратор усыновления",
        quote: "Помогаю котам найти дом. И людям - найти кота.",
        favoriteCat: "Наставница Маруси",
        imageUrl: "/img/Анна.webp"
    }
];