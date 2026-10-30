import { useState } from 'react';
import { faqData } from '../data/faq';
import styles from './Faq.module.css';

export function Faq() {
    // Состояние для хранения индекса открытого вопроса (null, если все закрыты)
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        // Если кликнули на уже открытый - закрываем. Если на другой - открываем его.
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="section bg-light">
            <div className="container">
                <h2 className="section-title">Частые вопросы</h2>
                <p className="section-subtitle">
                    Собрали всё, что обычно спрашивают. Если не нашли ответ - позвоните.
                </p>

                <div className={styles.faqList}>
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={styles.faqItem}
                                onClick={() => toggleQuestion(index)}
                            >
                                <div className={styles.summary}>
                                    <span>🐾  {item.question}</span>
                                    <span className={`${styles.icon} ${isOpen ? styles.open : ''}`}>
                                        +
                                    </span>
                                </div>
                                {/* Показываем ответ только если isOpen === true */}
                                {isOpen && (
                                    <div className={styles.answer}>
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}