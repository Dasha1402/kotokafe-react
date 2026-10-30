import { useEffect, useRef, useState } from 'react';
import styles from './Reveal.module.css';

interface RevealProps {
    children: React.ReactNode;
}

export function Reveal({ children }: RevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // IntersectionObserver следит, когда элемент попадает в зону видимости
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Когда элемент виден, включаем анимацию
                }
            });
        });

        const currentRef = domRef.current;
        if (currentRef) observer.observe(currentRef);

        // Очистка при размонтировании
        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <div
            className={`${styles.reveal} ${isVisible ? styles.active : ''}`}
            ref={domRef}
        >
            {children}
        </div>
    );
}