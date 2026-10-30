export interface Rule {
	icon: string;
	title: string;
	description: string;
}

export const rulesData: Rule[] = [
	{ icon: "🧼 ", title: "Мойте руки перед общением с котами", description: "Так вы защищаете и их, и себя." },
	{ icon: "🚫 ", title: "Не кормите котов со стола", description: "У каждого резидента своё меню, составленное ветеринаром." },
	{ icon: "📸 ", title: "Фотографируйте, но без вспышки", description: "Кошачьи глаза чувствительны к яркому свету." },
	{ icon: "💤 ", title: "Не будите спящих", description: "Они на работе. Сон - часть их рабочего дня." },
	{ icon: "🤫 ", title: "Говорите тихо", description: "Громкие звуки пугают наших пушистых сотрудников." }
];