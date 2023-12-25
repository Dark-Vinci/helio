import { JSX } from 'react';

import style from './Body.module.scss';
import { Follow } from './Follow';

export function Body(): JSX.Element {
    return (
        <div className={ style.container }>
            <div className="body_container">
                <Follow />
            </div>
        </div>
    );
}
