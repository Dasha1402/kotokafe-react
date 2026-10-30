import { teamData } from '../data/team';
import styles from './Team.module.css';

export function Team() {
    return (
        <section id="team" className="section bg-light">
            <div className="container">
                <h2 className="section-title">Наша команда</h2>
                <p className="section-subtitle">Люди, благодаря которым "The Cat's Cup" работает. И коты, которые её возглавляют.</p>

                <div className={styles.teamGrid}>
                    {teamData.map(member => (
                        <div key={member.name} className={styles.teamCard}>
                            <img src={member.imageUrl} alt={member.name} />
                            <h4>{member.name}</h4>
                            <p>{member.role}</p>
                            <p className={styles.quote}>«{member.quote}»</p>
                            <p className={styles.favoriteCat}>🐱  {member.favoriteCat}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}