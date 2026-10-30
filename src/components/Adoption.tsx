import { useState } from 'react';
import { catsData } from '../data/cats';
import styles from './Adoption.module.css';

export function Adoption() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: '', age: '', city: '', phone: '', email: '', socials: '',
        housingType: '', ownership: '', balcony: '', roommates: '', childrenAge: '',
        catExperience: '', prevCatStory: '', otherPets: '', expenses: '',
        timeHome: '', careInAbsence: '', allergy: '', behavior: '',
        catChoice: '', specificCat: 'none', whyAdopt: '', vetPlan: '', movePlan: '',
        agreementData: false, agreementRules: false, agreementContact: false
    });

    // 1. Проверка телефона
    const phoneRegex = /^[\d\s+()-]+$/;
    const isPhoneValid = phoneRegex.test(formData.phone);

    const isAgeValid = Number(formData.age) >= 18;

    // 2. Проверка всех трех галочек для активации кнопки
    const isFormValid =
        isPhoneValid &&
        formData.phone.length > 0 &&
        isAgeValid &&
        formData.agreementData &&
        formData.agreementRules &&
        formData.agreementContact;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
        setFormData({ ...formData, [name]: val });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isFormValid) return;

        console.log('Анкета отправлена:', formData);
        setIsSubmitted(true);
        window.scrollTo(0, document.getElementById('adoption')?.offsetTop || 0);
    };

    if (isSubmitted) {
        return (
            <section id="adoption" className="section">
                <div className="container">
                    <div className={styles.successMessage}>
                        <h3>Спасибо, {formData.name}!</h3>
                        <p>Ваша анкета отправлена. Мы свяжемся с вами в течение 2 дней.</p>
                        <button className="btn btn-secondary" style={{ marginTop: '20px' }} onClick={() => setIsSubmitted(false)}>
                            Вернуться
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="adoption" className="section">
            <div className="container">
                <h2 className="section-title">Хотите забрать кота домой?</h2>
                <p className="section-subtitle">Наши резиденты - не сотрудники, а друзья. Некоторые мечтают о своём человеке.</p>

                <div className={styles.adoptionInfo}>
                    <div className={styles.infoBlock}>
                        <h4>Что нужно:</h4>
                        <ul>
                            <li>🐾  Заполнить анкету (5 минут).</li>
                            <li>🐾  Пройти собеседование с администратором.</li>
                            <li>🐾  Подписать договор об ответственном содержании.</li>
                            <li>🐾  Держать связь первые 3 месяца.</li>
                        </ul>
                    </div>
                    <div className={styles.infoBlock}>
                        <h4>Что мы гарантируем:</h4>
                        <ul>
                            <li>🐾  Все коты здоровы, вакцинированы и стерилизованы.</li>
                            <li>🐾  Поможем с адаптацией и дадим советы.</li>
                            <li>🐾  Если что-то пойдёт не так - мы всегда на связи.</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.formContainer}>
                    <h3 style={{ marginBottom: '10px' }}>Анкета для усыновления</h3>
                    <p style={{ marginBottom: '30px', color: '#666' }}>Заполните - и мы свяжемся с вами в течение 2 дней. Это не экзамен, а знакомство.</p>

                    <form onSubmit={handleSubmit}>
                        <h4 className={styles.sectionHeader}>О вас:</h4>
                        <div className={styles.formGroup}>
                            <label>1. Имя и фамилия</label>
                            <input type="text" name="name" placeholder="(Как к вам обращаться?)" required value={formData.name} onChange={handleChange} />
                        </div>
                        <div className={styles.formGroup}>
                            <label>2. Возраст</label>
                            <input
                                type="number"
                                name="age"
                                placeholder="(Сколько вам лет?)"
                                required
                                value={formData.age}
                                onChange={handleChange}
                                // Добавляем красную рамку, если возраст меньше 18 и поле не пустое
                                className={!isAgeValid && formData.age !== '' ? styles.inputError : ''}
                            />
                            {/* Показываем ошибку, если возраст меньше 18 */}
                            {!isAgeValid && formData.age !== '' && (
                                <span className={styles.errorText}>Усыновление доступно только с 18 лет</span>
                            )}
                        </div>
                        <div className={styles.formGroup}>
                            <label>3. Город проживания</label>
                            <input type="text" name="city" placeholder="(Где вы живёте?)" required value={formData.city} onChange={handleChange} />
                        </div>

                        <div className={styles.formGroup}>
                            <label>4. Телефон</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="+7 (___) ___-__-__"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className={!isPhoneValid && formData.phone.length > 0 ? styles.inputError : ''}
                            />
                            {!isPhoneValid && formData.phone.length > 0 && (
                                <span className={styles.errorText}>Телефон может содержать только цифры и символы +, -, (, )</span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label>5. Email</label>
                            <input type="email" name="email" placeholder="(you@example.com)" required value={formData.email} onChange={handleChange} />
                        </div>
                        <div className={styles.formGroup}>
                            <label>6. Соцсети (по желанию)</label>
                            <input type="text" name="socials" placeholder="(Telegram/Instagram/VK)" value={formData.socials} onChange={handleChange} />
                        </div>

                        <h4 className={styles.sectionHeader}>О вашем доме:</h4>
                        <div className={styles.formGroup}>
                            <label>7. Тип жилья</label>
                            <div className={styles.radioGroup}>
                                <label><input type="radio" name="housingType" value="Квартира" required onChange={handleChange} /> Квартира</label>
                                <label><input type="radio" name="housingType" value="Частный дом" onChange={handleChange} /> Частный дом</label>
                                <label><input type="radio" name="housingType" value="Съёмное жильё" onChange={handleChange} /> Съёмное жильё</label>
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label>8. Жильё в собственности или в аренде?</label>
                            <div className={styles.radioGroup}>
                                <label><input type="radio" name="ownership" value="Собственное" required onChange={handleChange} /> Собственное</label>
                                <label><input type="radio" name="ownership" value="Аренда (с разрешением)" onChange={handleChange} /> Аренда (с разрешением на животных)</label>
                                <label><input type="radio" name="ownership" value="Аренда (без разрешения)" onChange={handleChange} /> Аренда (без разрешения)</label>
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label>9. Есть ли балкон?</label>
                            <div className={styles.radioGroup}>
                                <label><input type="radio" name="balcony" value="Да, застеклённый" required onChange={handleChange} /> Да, застеклённый</label>
                                <label><input type="radio" name="balcony" value="Да, не застеклённый" onChange={handleChange} /> Да, не застеклённый</label>
                                <label><input type="radio" name="balcony" value="Нет" onChange={handleChange} /> Нет</label>
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label>10. Кто ещё живёт с вами?</label>
                            <div className={styles.radioGroup}>
                                <label><input type="radio" name="roommates" value="Живу один/одна" required onChange={handleChange} /> Живу один/одна</label>
                                <label><input type="radio" name="roommates" value="Партнёр/супруг(а)" onChange={handleChange} /> Партнёр/супруг(а)</label>
                                <label><input type="radio" name="roommates" value="Дети" onChange={handleChange} /> Дети (укажите возраст)</label>
                            </div>
                            <div className={styles.radioGroup} style={{ marginTop: '10px' }}>
                                <label><input type="radio" name="roommates" value="Другие животные" onChange={handleChange} /> Другие животные</label>
                                <label><input type="radio" name="roommates" value="Пожилые родственники" onChange={handleChange} /> Пожилые родственники</label>
                            </div>

                            {/* 3. УСЛОВНЫЙ РЕНДЕРИНГ: Поле появляется только если roommates === 'Дети' */}
                            {formData.roommates === 'Дети' && (
                                <input
                                    type="text"
                                    name="childrenAge"
                                    placeholder="Возраст детей"
                                    style={{ marginTop: '15px', width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
                                    value={formData.childrenAge}
                                    onChange={handleChange}
                                />
                            )}
                        </div>

                        {/* ... Остальные поля анкеты (с 11 по 23) остаются без изменений ... */}
                        <h4 className={styles.sectionHeader}>Опыт с животными:</h4>
                        <div className={styles.formGroup}>
                            <label>11. Были ли у вас раньше коты?</label>
                            <div className={styles.radioGroup}>
                                <label><input type="radio" name="catExperience" value="Да, и сейчас есть" required onChange={handleChange} /> Да, и сейчас есть</label>
                                <label><input type="radio" name="catExperience" value="Да, были раньше" onChange={handleChange} /> Да, были раньше</label>
                                <label><input type="radio" name="catExperience" value="Нет, но очень хочу" onChange={handleChange} /> Нет, но очень хочу</label>
                                <label><input type="radio" name="catExperience" value="Нет, и это первый опыт" onChange={handleChange} /> Нет, и это первый опыт</label>
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label>12. Если были - что случилось с предыдущим котом?</label>
                            <textarea name="prevCatStory" rows={2} placeholder="(Расскажите коротко)" value={formData.prevCatStory} onChange={handleChange}></textarea>
                        </div>
                        <div className={styles.formGroup}>
                            <label>13. Есть ли у вас другие питомцы сейчас?</label>
                            <textarea name="otherPets" rows={2} placeholder="(Кто, сколько, возраст, характер)" value={formData.otherPets} onChange={handleChange}></textarea>
                        </div>
                        <div className={styles.formGroup}>
                            <label>14. Готовы ли вы к расходам на кота?</label>
                            <div className={styles.radioGroup}>
                                <label><input type="radio" name="expenses" value="Да, понимаю" required onChange={handleChange} /> Да, понимаю, что это 3000 - 5000 р. в месяц</label>
                                <label><input type="radio" name="expenses" value="Готов(а) обсуждать" onChange={handleChange} /> Готов(а) обсуждать</label>
                                <label><input type="radio" name="expenses" value="Нет, не задумывался" onChange={handleChange} /> Нет, не задумывался(ась)</label>
                            </div>
                        </div>

                        <h4 className={styles.sectionHeader}>О вашем образе жизни:</h4>
                        <div className={styles.formGroup}>
                            <label>15. Сколько времени вы проводите дома?</label>
                            <div className={styles.radioGroup}>
                                <label><input type="radio" name="timeHome" value="Большую часть дня" required onChange={handleChange} /> Большую часть дня</label>
                                <label><input type="radio" name="timeHome" value="Половину дня" onChange={handleChange} /> Половину дня</label>
                                <label><input type="radio" name="timeHome" value="Бываю только вечером" onChange={handleChange} /> Бываю только вечером</label>
                                <label><input type="radio" name="timeHome" value="Часто в разъездах" onChange={handleChange} /> Часто в разъездах</label>
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label>16. Кто будет заботиться о коте в ваше отсутствие?</label>
                            <textarea name="careInAbsence" rows={2} placeholder="(Отпуск, командировки)" value={formData.careInAbsence} onChange={handleChange}></textarea>
                        </div>
                        <div className={styles.formGroup}>
                            <label>17. Есть ли у кого-то из домашних аллергия?</label>
                            <div className={styles.radioGroup}>
                                <label><input type="radio" name="allergy" value="Нет" required onChange={handleChange} /> Нет</label>
                                <label><input type="radio" name="allergy" value="Да" onChange={handleChange} /> Да</label>
                                <label><input type="radio" name="allergy" value="Не знаю" onChange={handleChange} /> Не знаю</label>
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label>18. Готовы ли вы к тому, что кот может будить, шуметь, метить, царапать мебель?</label>
                            <div className={styles.radioGroup}>
                                <label><input type="radio" name="behavior" value="Да, готов" required onChange={handleChange} /> Да, готов(а)</label>
                                <label><input type="radio" name="behavior" value="Скорее да" onChange={handleChange} /> Скорее да</label>
                                <label><input type="radio" name="behavior" value="Не уверен" onChange={handleChange} /> Не уверен(а)</label>
                                <label><input type="radio" name="behavior" value="Нет" onChange={handleChange} /> Нет</label>
                            </div>
                        </div>

                        <h4 className={styles.sectionHeader}>О вашем выборе:</h4>
                        <div className={styles.formGroup}>
                            <label>19. Какого кота вы хотите?</label>
                            <div className={styles.radioGroup}>
                                <label><input type="radio" name="catChoice" value="Спокойного" required onChange={handleChange} /> Спокойного и ласкового</label>
                                <label><input type="radio" name="catChoice" value="Активного" onChange={handleChange} /> Игривого и активного</label>
                                <label><input type="radio" name="catChoice" value="Независимого" onChange={handleChange} /> Независимого</label>
                                <label><input type="radio" name="catChoice" value="Пожилого" onChange={handleChange} /> Пожилого (для спокойной жизни)</label>
                                <label><input type="radio" name="catChoice" value="Котёнка" onChange={handleChange} /> Котёнка</label>
                                <label><input type="radio" name="catChoice" value="Любого" onChange={handleChange} /> Без предпочтений - доверюсь вам</label>
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label>20. Есть ли кот из "The Cat's Cup", который вам особенно понравился?</label>
                            <div className={styles.radioGroup}>
                                <label><input type="radio" name="specificCat" value="none" checked={formData.specificCat === 'none'} onChange={handleChange} /> Без предпочтений</label>
                                {catsData.map(cat => (
                                    <label key={cat.id}>
                                        <input type="radio" name="specificCat" value={cat.name} checked={formData.specificCat === cat.name} onChange={handleChange} /> {cat.name}
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label>21. Почему вы хотите завести кота?</label>
                            <textarea name="whyAdopt" rows={2} placeholder="(Расскажите своими словами. Честно)" required value={formData.whyAdopt} onChange={handleChange}></textarea>
                        </div>
                        <div className={styles.formGroup}>
                            <label>22. Что вы будете делать если ваш кот заболеет?</label>
                            <textarea name="vetPlan" rows={2} placeholder="(Ваш план действий)" required value={formData.vetPlan} onChange={handleChange}></textarea>
                        </div>
                        <div className={styles.formGroup}>
                            <label>23. Что вы будете делать, если придётся переезжать?</label>
                            <textarea name="movePlan" rows={2} placeholder="(Готовы ли вы взять кота с собой?)" required value={formData.movePlan} onChange={handleChange}></textarea>
                        </div>

                        <div className={styles.checkboxGroup}>
                            <input type="checkbox" name="agreementData" required checked={formData.agreementData} onChange={handleChange} />
                            <label>Согласен(на) на обработку персональных данных</label>
                        </div>
                        <div className={styles.checkboxGroup}>
                            <input type="checkbox" name="agreementRules" required checked={formData.agreementRules} onChange={handleChange} />
                            <label>Ознакомлен(а) с условиями усыновления и готов(а) их соблюдать</label>
                        </div>
                        <div className={styles.checkboxGroup}>
                            <input type="checkbox" name="agreementContact" required checked={formData.agreementContact} onChange={handleChange} />
                            <label>Готов(а) держать связь с "The Cat's Cup" первые 3 месяца и присылать фото</label>
                        </div>

                        <button
                            type="submit"
                            className={`btn btn-primary ${styles.submitBtn}`}
                            disabled={!isFormValid} // Кнопка активна только если все 3 галочки стоят и телефон верный
                        >
                            Отправить анкету
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}