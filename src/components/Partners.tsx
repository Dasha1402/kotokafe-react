import { partnersData } from '../data/partners';
import styles from './Partners.module.css';

export function Partners() {
    return (
        <section id="partners" className="section">
            <div className="container">
                <h2 className="section-title">Наши партнёры</h2>
                <p className="section-subtitle">Люди и организации, которые помогают нам заботиться о котах.</p>

                <div className={styles.partnersGrid}>
                    {partnersData.map(partner => (
                        <div key={partner.name} className={styles.partnerCard}>
                            <img src={partner.imageUrl} alt={partner.name} />
                            <h4>{partner.name}</h4>
                            <p>{partner.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}