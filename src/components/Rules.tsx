import { rulesData } from '../data/rules';
import styles from './Rules.module.css';

export function Rules() {
    return (
        <section id="rules" className="section bg-light">
            <div className="container">
                <h2 className="section-title">Правила The Cat's Cup</h2>
                <p className="section-subtitle">
                    Мы заботимся о комфорте котов и гостей. Всего несколько правил - и всем хорошо.
                </p>

                <div className={styles.rulesList}>
                    {rulesData.map((rule, index) => (
                        <div key={index} className={styles.ruleItem}>
                            <span className={styles.icon}>{rule.icon}</span>
                            <div>
                                <strong>{rule.title}</strong>
                                <p>{rule.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}