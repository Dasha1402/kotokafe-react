import { menuData } from '../data/menu';
import styles from './Menu.module.css';

export function Menu() {
    return (
        <section id="menu" className="section">
            <div className="container">
                <h2 className="section-title">Меню</h2>
                <p className="section-subtitle">
                    Всё, что нужно для идеального вечера: ароматный кофе, домашние десерты и немного лакомств для тех, кто сидит у вас на коленях.
                </p>

                <div className={styles.menuGrid}>
                    {menuData.map(category => (
                        <div key={category.title} className={styles.menuCategory}>
                            <h3>{category.icon} {category.title}</h3>
                            <ul>
                                {category.items.map((item, index) => (
                                    <li key={index}>
                                        <strong>{item.name}</strong> - {item.price}
                                        <br />
                                        <small>{item.description}</small>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}