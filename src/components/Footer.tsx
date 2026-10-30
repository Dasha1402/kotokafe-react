import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <p>© 2026 The Cat's Cup. Все права защищены.</p>
                <p>Сделано с любовью и кошачьей шерстью.</p>
            </div>
        </footer>
    );
}