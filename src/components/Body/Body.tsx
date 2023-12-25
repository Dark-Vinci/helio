import { JSX } from 'react';

import style from './Body.module.scss';
import { Follow } from './Follow';
import { ImageCard } from './ImageCard';

const topCard = [
    {
        amount: '$55,917,143',
        title: 'TVL',
    },

    {
        amount: '$21,212,064',
        title: 'Total HAY Borrowed',
    },

    {
        amount: '$300,847',
        title: 'HELIO Stabilization Pool',
    },

    {
        amount: '3,602',
        title: 'Total Borrowers',
    },
];

export function Body(): JSX.Element {
    return (
        <div className={ style.container }>
            <div className={ style.body_container }>
                <div className={ style.top }>
                    <div className={ style.top_count }>
                        {
                            topCard.map(({amount, title}, i) => {
                                return (
                                    <div
                                        key={i}
                                    >
                                        <div>
                                            <p>{ title }</p>
                                        </div>
                                        <div>
                                            <p>{ amount }</p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>

                    <div className={ style.cards }>
                        
                    </div>
                </div>

                <div className={ style.maximum }>
                    <div className={ style.left }>
                        <img 
                            src="https://helio.money/_next/static/media/stable-coin.12ef1a77.png" 
                            alt="dollar" 
                        />
                    </div>
                    <div className={ style.right }>
                        <div className={ style.right_container }>
                            <div className={ style.top }>
                                <p>Maximum Security With <span>Over-Collateralized Borrowing</span></p>
                            </div>

                            <div className={ style.bot }>
                                <p>HAY is an easy-to-use destablecoin on the BNB Chain. All HAY in circulation is directly backed by excess collateral, meaning that the value of the collateral is higher than the value of the HAY debt.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={ style.power }>
                    <ImageCard 
                        height={'650px'} 
                        imageUrl={'https://helio.money/_next/static/media/powered.4385e4d6.png'}
                    >
                        <div
                            // style={{backgroundColor: 'white'}}
                        >THIS IS THE CONTENT</div>
                    </ImageCard>
                </div>

                <div className={ style.follow }>
                    <Follow />
                </div>

                <div className={ style.percent }>
                    {/* hdjkdk */}
                    <ImageCard 
                        height={'715px'} 
                        imageUrl={'https://helio.money/_next/static/media/earning.dea4a465.jpg'}
                    >
                        <div>children</div>
                    </ImageCard>
                </div>
            </div>
        </div>
    );
}
