import { JSX } from 'react';

import style from './Body.module.scss';
import { Follow } from './Follow';
import { ImageCard } from './ImageCard';

export function Body(): JSX.Element {
    return (
        <div className={ style.container }>
            <div className="body_container">
                <div className="follow">
                    <Follow />
                </div>

                <div className="percent">
                    hdjkdk
                    <ImageCard 
                        height={'7i5px'} 
                        imageUrl={'https://helio.money/_next/static/media/earning.dea4a465.jpg'}
                    >
                        <div>children</div>
                    </ImageCard>
                </div>
            </div>
        </div>
    );
}
