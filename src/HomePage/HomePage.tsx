import { JSX } from 'react';

import style from './HomePage.module.scss'
import { Footer, Header, Nav } from '@components';

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

                <footer>
                    <Footer />
                </footer>
            </body>
        </div>
    );
}
