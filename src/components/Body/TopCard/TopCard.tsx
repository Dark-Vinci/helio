import { JSX } from 'react';

import style from './TopCard.module.scss';

interface TopCardInterface {
    readonly url: string;
    readonly description: string;
    readonly isComingSoon: boolean;
}

export function TopCard({
    url, 
    description,
    isComingSoon,
}: TopCardInterface): JSX.Element {
    return (
        <div className={ style.container }>
            { isComingSoon ? 
                <div>
                    <p>Coming Soon</p>
                </div>
                : null
            }
            <img 
                src={url} 
                alt="url"
            />

            <p>{ description }</p>
        </div>
    );
}
