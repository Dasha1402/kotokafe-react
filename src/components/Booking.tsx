import { useState } from 'react';
import { catsData } from '../data/cats';
import styles from './Booking.module.css';

export function Booking() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        favoriteCat: 'none',
        comments: '',
        agreement: false
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    // ИСПРАВЛЕНО: Убрали лишние слэши, чтобы линтер не ругался
    const phoneRegex = /^[\d\s+()-]+$/;
    const isPhoneValid = phoneRegex.test(formData.phone);

    const isFormValid = formData.agreement && isPhoneValid && formData.phone.length > 0;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

        setFormData({
            ...formData,
            [name]: val
        });
    };

    // ИСПРАВЛЕНО: Добавили <HTMLFormElement>, чтобы убрать предупреждение
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isFormValid) return;

        console.log('Данные для отправки на сервер:', formData);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <section id="booking" className="section">
                <div className="container">
                    <div className={styles.successMessage}>
                        <h3>Спасибо, {formData.name}!</h3>
                        <p>Ваша заявка на {formData.date} в {formData.time} принята.</p>
                        <p>Мы свяжемся с вами для подтверждения.</p>
                        <button className="btn btn-secondary" style={{ marginTop: '20px' }} onClick={() => setIsSubmitted(false)}>
                            Забронировать ещё раз
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="booking" className="section">
            <div className="container">
                <h2 className="section-title">Как забронировать столик</h2>
                <p className="section-subtitle">Ничего сложного. Три шага - и вы мурчите.</p>

                <div className={styles.formContainer}>
                    <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Оставить заявку</h3>

                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label>1. Имя и фамилия</label>
                            <input type="text" name="name" placeholder="Как к вам обращаться?" required value={formData.name} onChange={handleChange} />
                        </div>

                        <div className={styles.formGroup}>
                            <label>2. Телефон</label>
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

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>3. Дата</label>
                                <input type="date" name="date" required value={formData.date} onChange={handleChange} />
                            </div>
                            <div className={styles.formGroup}>
                                <label>4. Время</label>
                                <input type="time" name="time" required value={formData.time} onChange={handleChange} />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label>5. Количество гостей</label>
                            <input type="number" name="guests" min="1" max="10" placeholder="Укажите цифрой" required value={formData.guests} onChange={handleChange} />
                        </div>

                        <div className={styles.formGroup}>
                            <label>6. Любимчик</label>
                            <div className={styles.radioGroup}>
                                <label>
                                    <input type="radio" name="favoriteCat" value="none" checked={formData.favoriteCat === 'none'} onChange={handleChange} /> Без предпочтений
                                </label>
                                {catsData.map(cat => (
                                    <label key={cat.id}>
                                        <input type="radio" name="favoriteCat" value={cat.name} checked={formData.favoriteCat === cat.name} onChange={handleChange} /> {cat.name}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label>7. Комментарий</label>
                            <textarea name="comments" rows={3} placeholder="Пожелания, аллергии, повод" value={formData.comments} onChange={handleChange}></textarea>
                        </div>

                        <div className={styles.checkboxGroup}>
                            <input type="checkbox" name="agreement" required checked={formData.agreement} onChange={handleChange} />
                            <label>Согласен(на) на обработку персональных данных</label>
                        </div>

                        <button
                            type="submit"
                            className={`btn btn-primary ${styles.submitBtn}`}
                            disabled={!isFormValid}
                        >
                            Забронировать столик
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}