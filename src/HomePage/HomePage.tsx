import { JSX } from 'react';

import style from './HomePage.module.scss'
import { Body, Footer, Header, Nav } from '@components';

export function HomePage(): JSX.Element {
    return (
        <div className={ style.container }>
            <nav>
                <Nav />
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
