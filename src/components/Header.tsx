import { useState } from 'react';
import styles from './Header.module.css';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>
                <a href="#" className={styles.logo}>
                    <img src="/img/иконка.png" alt="Логотип" />
                    <span>The Cat's Cup</span>
                </a>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
                    <ul className={styles.navList}>
                        <li><a href="#residents" onClick={closeMenu}>Наши резиденты</a></li>
                        <li><a href="#menu" onClick={closeMenu}>Меню</a></li>
                        <li><a href="#rules" onClick={closeMenu}>Правила</a></li>
                        <li><a href="#booking" onClick={closeMenu}>Забронировать столик</a></li>
                        <li><a href="#adoption" onClick={closeMenu}>Анкета для усыновления</a></li>
                        <li><a href="#team" onClick={closeMenu}>Наша команда</a></li>
                        <li><a href="#partners" onClick={closeMenu}>Наши партнёры</a></li>
                        <li><a href="#faq" onClick={closeMenu}>Частые вопросы</a></li>
                        <li><a href="#contacts" onClick={closeMenu}>Как нас найти</a></li>
                    </ul>
                </nav>

                <button
                    className={styles.burger}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? '✖' : '☰'}
                </button>
            </div>
        </header>
    );
}