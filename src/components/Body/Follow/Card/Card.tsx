
import { JSX } from 'react';

import style from './Card.module.scss';

interface cardInterface {
    readonly iconUrl: string;
}

export function Card({ iconUrl }: cardInterface): JSX.Element {
    return (
        <div className={ style.container}>
            <img 
                src={iconUrl} 
                alt={iconUrl} 
            />
        </div>
    );
}
