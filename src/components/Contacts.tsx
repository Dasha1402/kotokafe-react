import styles from './Contacts.module.css';

export function Contacts() {
    return (
        <section id="contacts" className="section">
            <div className="container">
                <h2 className="section-title">Как нас найти</h2>
                <p className="section-subtitle">
                    Мы в самом центре - заходите на кофе и мурчание.
                </p>

                <div className={styles.contactsGrid}>
                    <div className={styles.contactInfo}>
                        <p><span className={styles.icon}>📍 </span> <strong>Адрес:</strong> ул. Пушкина, 15, 2 этаж (вход со двора, ищите вывеску с лапкой)</p>
                        <p><span className={styles.icon}>📞 </span> <strong>Телефон:</strong> +7 (999) 123-45-67</p>
                        <p><span className={styles.icon}>🕒 </span> <strong>Часы работы:</strong> Пн-Пт: 10:00 - 22:00, Сб-Вс: 11:00 - 23:00</p>
                        <p><span className={styles.icon}>✉️ </span> <strong>Почта:</strong> hello@thecatscup.ru</p>
                        <p style={{ fontStyle: 'italic', marginTop: '20px', color: '#777' }}>
                            Бронирование желательно за день. В выходные - за два.
                        </p>
                    </div>

                    <div className={styles.socialLinks}>
                        <a href="#"><span className={styles.icon}>✈️ </span> @thecatscup_cat</a>
                        <a href="#"><span className={styles.icon}>📸 </span> @thecatscup</a>
                        <a href="#"><span className={styles.icon}>Ⓜ️ </span> vk.com/thecatscup</a>
                        <a href="#"><span className={styles.icon}>▶️ </span> The Cat's Cup</a>
                    </div>
                </div>
            </div>
        </section>
    );
}