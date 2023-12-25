import { JSX } from 'react';

import style from './ImageCard.module.scss';

interface ImageCardProps {
    readonly height: string;
    readonly imageUrl: string;
    readonly children: JSX.Element;
}

export function ImageCard({
    imageUrl, 
    children,
    height,
}: ImageCardProps): JSX.Element {
    return (
        <div 
            className={ style.container }
            style={{
                backgroundImage: `url(${imageUrl})`,
                height,
            }}
        >
            {
                children
            }
        </div>
    );
}
