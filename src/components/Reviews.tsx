import { reviewsData } from '../data/reviews';
import styles from './Reviews.module.css';

export function Reviews() {
    return (
        <section className="section bg-light">
            <div className="container">
                <h2 className="section-title">Что говорят гости</h2>
                <p className="section-subtitle">Нам доверяют самое ценное - время и внимание.</p>

                <div className={styles.reviewsGrid}>
                    {reviewsData.map((review, index) => (
                        <div key={index} className={styles.reviewCard}>
                            <div>
                                <strong>{review.author}</strong>
                                <p style={{ marginTop: '10px' }}>"{review.text}"</p>
                            </div>
                            <span className={styles.date}>{review.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}