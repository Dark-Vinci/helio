import { JSX } from 'react';

import style from './Window.module.scss';

export function Window(): JSX.Element {
    return (
        <div className={ style.container }>
            window
        </div>
    );
}
