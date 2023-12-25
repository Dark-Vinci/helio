import { JSX } from 'react';

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
    console.log({imageUrl, children});
    return (
        <div 
            className="container"
            style={{
                backgroundImage: imageUrl,
                height,
            }}
        >
            {
                children
            }
        </div>
    );
}
