import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CatCard } from './components/CatCard';
import { Menu } from './components/Menu';
import { Rules } from './components/Rules';
import { Booking } from './components/Booking';
import { Adoption } from './components/Adoption';
import { Reviews } from './components/Reviews';
import { Team } from './components/Team';
import { Partners } from './components/Partners';
import { Faq } from './components/Faq';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import { Reveal } from './components/Reveal'; // Наш новый компонент для анимации

import { catsData } from './data/cats';
import './index.css';

function App() {
    return (
        <>
            {/* Шапка и баннер загружаются сразу, без анимации */}
            <Header />
            <Hero />

            <main>
                {/* Оборачиваем каждую секцию в Reveal для плавного появления */}

                <Reveal>
                    <section id="residents" className="section bg-light">
                        <div className="container">
                            <h2 className="section-title">Наши резиденты</h2>
                            <p className="section-subtitle">
                                Двенадцать характеров, двенадцать историй. Каждый — со своим настроением, привычками и любимым местом у окна.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                                {catsData.map(cat => (
                                    <CatCard key={cat.id} cat={cat} />
                                ))}
                            </div>
                        </div>
                    </section>
                </Reveal>

                <Reveal>
                    <Menu />
                </Reveal>

                <Reveal>
                    <Rules />
                </Reveal>

                <Reveal>
                    <Booking />
                </Reveal>

                <Reveal>
                    <Adoption />
                </Reveal>

                <Reveal>
                    <Reviews />
                </Reveal>

                <Reveal>
                    <Team />
                </Reveal>

                <Reveal>
                    <Partners />
                </Reveal>

                <Reveal>
                    <Faq />
                </Reveal>

                <Reveal>
                    <Contacts />
                </Reveal>

            </main>

            {/* Подвал всегда в самом низу */}
            <Footer />
        </>
    );
}

export default App;