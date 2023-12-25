import { JSX } from 'react';

import style from './Body.module.scss';
import { Follow } from './Follow';
import { ImageCard } from './ImageCard';
import { TopCard } from './TopCard';
import { FlipCard } from './FlipCard';
import { topCard, bigCard, flipCards } from '@constants';

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
                        {
                            bigCard.map(({imgUrl, description, isComingSoon}, i) => {
                                return (
                                    <div
                                        key={i}
                                    >
                                        <TopCard
                                            isComingSoon={isComingSoon}
                                            url={imgUrl} 
                                            description={description}                                            
                                        />
                                    </div>
                                );
                            })
                        }
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
                        <div className={ style.power_container}>
                            <div className={ style.p_container }>
                                <div>
                                    <p>Powered by BNB Chain</p>
                                    <p>HAY is changing the shape of DeFi and stablecoins in the BNB Chain ecosystem. Be part of this revolution.</p>
                                </div>
                            </div>
                        </div>
                    </ImageCard>
                </div>

                <div className={ style.contract }>
                    <div className={ style.top }>
                        <p>Helio smart contracts have undergone multiple external audits and security assessments</p>
                    </div>

                    <div className={ style.cards }>
                        {
                            flipCards.map(({url, title, backs}, i) => {
                                return (
                                    <div
                                        key={i}
                                    >
                                        <FlipCard 
                                            backs={backs} 
                                            title={title} 
                                            url={url}
                                        />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

                <div className={ style.follow }>
                    <Follow />
                </div>

                <div className={ style.percent }>
                    <ImageCard 
                        height={'715px'} 
                        imageUrl={'https://helio.money/_next/static/media/earning.dea4a465.jpg'}
                    >
                        <div className={style.percent_content}>
                            <div className={ style.p_container }>
                                <div className={ style.top }>
                                    <p>~7%</p>
                                </div>
                                <div className={ style.title }>
                                    <p>Sustainable Yield Savings</p>
                                </div>
                                <div className={ style.description }>
                                    <p>Yield protected by BNB over-collateralization</p>
                                </div>
                                <div className={ style.button }>
                                    <button>Start Earning</button>
                                </div>
                            </div>
                        </div>
                    </ImageCard>
                </div>
            </div>
        </div>
    );
}
