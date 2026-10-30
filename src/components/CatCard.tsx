import { useState } from 'react';
import type { Cat } from '../data/cats';
import styles from './CatCard.module.css';

interface CatCardProps {
    cat: Cat;
}

export function CatCard({ cat }: CatCardProps) {
    const [showBubble, setShowBubble] = useState(false);

    return (
        <div className={styles.card}>
            <div
                className={styles.imageWrapper}
                onMouseEnter={() => setShowBubble(true)}
                onMouseLeave={() => setShowBubble(false)}
                onClick={() => setShowBubble(!showBubble)}
            >
                {showBubble && (
                    <div className={styles.speechBubble}>
                        {cat.phrase}
                    </div>
                )}
                <img src={cat.imageUrl} alt={cat.name} />
            </div>

            <div className={styles.info}>
                <h3>🐱  {cat.name}</h3>
                <p><strong>Порода:</strong> {cat.breed}</p>
                <p><strong>Возраст:</strong> {cat.age}</p>
                <p><strong>Любимое лакомство:</strong> {cat.food}</p>
                <p><strong>Дата появления:</strong> {cat.date}</p>
                <p><strong>История:</strong> {cat.story}</p>
                <p><strong>Кто нашёл/принёс:</strong> {cat.rescuer}</p>
                <p>{cat.character}</p>
                <p className={styles.quote}>«{cat.quote}»</p>
            </div>
        </div>
    );
}