import { JSX, useState, useEffect } from 'react';

import style from './HomePage.module.scss'
import { Body, Footer, Header, Nav } from '@components';

export function HomePage(): JSX.Element {
    const [scrollHeight, setScrollHeight] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            const newHeight = window.scrollY;
            setScrollHeight(newHeight);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className={ style.container }>
            <nav>
                <Nav scrollHeight={scrollHeight}/>
            </nav>

            <body>
                <section>
                    <Header />
                </section>

                <section>
                    <Body />
                </section>

                <footer>
                    <Footer />
                </footer>
            </body>
        </div>
    );
}
