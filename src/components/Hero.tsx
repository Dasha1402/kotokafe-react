import styles from './Hero.module.css';

export function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.heroContent}`}>
                <h1>The Cat's Cup</h1>
                <p>
                    Первое котокафе в городе, где можно выпить латте и почесать за ушком.<br />
                    Без спешки, без стресса — только мурчание.<br />
                    Кофе, десерты и 12 пушистых резидентов.
                </p>
                <div className={styles.heroButtons}>
                    <a href="#booking" className="btn btn-primary">Забронировать столик</a>
                    <a href="#residents" className="btn btn-secondary">Познакомиться с котами</a>
                </div>
            </div>
        </section>
    );
}