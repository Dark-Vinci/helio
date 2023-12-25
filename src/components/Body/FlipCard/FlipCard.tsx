import { JSX }  from 'react';

import style from './FlipCard.module.scss';

interface FlipCardProps {
    readonly backs: string[];
    readonly title: string;
    readonly url: string;
}

export function FlipCard({
    url, 
    backs, 
    title
}: FlipCardProps): JSX.Element {

    return (
        <div className={ style.container }>
            <div className={ style.front }>
                <img 
                    src={ url } 
                    alt="url" 
                />
                <p>{ title }</p>
            </div>
            <div className={ style.back }>
                <ul>
                    {
                        backs.map((el, i) => {
                            return (
                                <li
                                    key={i}
                                >
                                    { el }
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}
