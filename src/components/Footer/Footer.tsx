import { JSX } from 'react';

import style from './Footer.module.scss';
import { Window } from './Window';

const windowList = [
    {
        title: 'What is stablecoin?',
        description: [
            'Destablecoin is a new type of asset class within the crypto space that seeks to label a more accurate term in the current stablecoin landscape. The prefix “de-” stands for decentralized - it does not signify price volatility the way assets such as BTC experience. Destablecoins utilize decentralized, liquid staked, crypto assets only as collateral and do not aim to achieve absolute price stability with fiat-based currencies such as USD. While destablecoins are not fully volatile assets, it will allow for some price fluctuations as regular fiat-currencies would experience with varying reference rates and interest rate paraties as defined by the open market.'
        ],
        list: [],
        isOpened: false,
    },

    {
        title: `What's the difference between destablecoin and stablecoin?`,
        description: [
            'Destablecoins differ from the conventional 4 stablecoin types that currently exist in the market. Currently, there are four main types of stablecoins, Fiat-backed (BUSD), Crypto-backed (DAI), Algorithmic (USDD), Commodity-backed (PAXG). Like other crypto-backed stablecoins, destablecoins will utilize the overcollateralized model backed by crypto assets such as DAI. However, the key differences are:'
        ],
        list: [
            'Destablecoins are fully decentralized. Crypto-backed stablecoins such as DAI leverage on centralized crypto assets such as USDC, while destablecoins such as HAY will use decentralized assets such as BNB. as collateral. Additionally, destablecoins will also leverage on liquid staked assets.',
            'Secondly, destablecoins aims to achieve stability broadly without an absolute peg to the fiat currencies. All currencies are different and have varying reference rates, so price fluctuations should be considered a norm defined by the market instead of aiming for a sense of absolute price stability at all cost. Similarly with destablecoins, it does not aim to achieve absolute price parity with US $1 as a primary objective nor rely on fiat assets as the backed collateral.',
        ],
        isOpened: false,
    },

    {
        title: 'Why the term destablecoin',
        description: [
            `The term “destablecoins” helps to achieve two purposes.`,
            'Firstly, and more purposefully, the prefix “de” in “destablecoins” stands for decentralized, and that is to clearly distinguish products such as HAY from other legacy stablecoin products such as BUSD and USDC, which is controlled by a centralized custodian. This also helps mark the progression of stablecoins from being centralized to decentralized, and the DeFi industry as a whole',
            'Secondly, the term “stablecoin” or even “algorithmic stablecoin” is generally a misnomer, as all stablecoins, including fiat-backed ones, have potential to de-peg become volatile, albeit to a much lower extent. The stablecoin industry is under constant scrutiny due to many retail investors over-investing under the allure of constant stability and becoming vulnerable to significant financial loss during such an event. Using the term “destablecoins” signals the underlying risk of stablecoins and encourages users to invest more responsibly, building a far healthier and more sustainable ecosystem of users.',
            'Furthermore, products such as HAY do not use an “algorithm” to regulate its value, but rather through the use of over-collateralized assets. Therefore, “algorithmic stablecoins” is also not an appropriate representation of HAY.'
        ],
        list: [],
        isOpened: false,
    },

    {
        title: `Why the use of the term "destablecoin" if it might confuse new users to think that is might be "unstable" instead?`,
        description: [
            'The “de” in “destablecoins” stands for decentralized, and that is to clearly distinguish products such as HAY from others like BUSD or USDT, which is controlled by centralized custodians. This also helps mark the progression of stablecoins from being centralized to decentralized, and the DeFi industry as a whole. The team does recognise that it may cause some slight confusion in the wording, but we are committed to educating our community and continue to shed more light on what it means to be a destablecoin and how it can push the ethos of decentralization in crypto.'
        ],
        list: [],
        isOpened: false,
    },

    {
        title: 'What is point of a destablecoin then if there is a risk of depegging',
        description: [
            'It is important to remember that destablecoins are not more prone to de-pegging or de-stabilizing than stablecoins. All stablecoins are at risk of de-pegging, and thus the word “stablecoins” have always been a misnomer. In addition, having a “peg” with fiat currencies does not guarantee stability due to inflation. Furthermore, traditional fiat-currencies also have varying reference rates and interest rate parity. Yet, most would still consider the US Dollar a stable benchmark for global currency. The misnaming of this asset is critical as it obscures any inherent risk to holding such an asset. Every type of asset class has its potential strengths and weaknesses, and that should be clearly reflected to investors.',
            'The purpose of destablecoins, similar to stablecoins, is to offer a decentralized form of digital currency that is suitable for everyday trading and transactions due to lowered volatility, mirroring the way fiat currencies such as USD is used. Destablecoins enjoy the privileges of what stablecoins have to offer in terms of its ability to be borderless and permissionless due to its digital nature, and the element of decentralization further creates a more seamless, and secure user experience. Therefore, the value proposition of destablecoins, and stablecoins are still very much valid.',
            'Using the term destablecoins offer greater clarity and understanding of this asset class to not just users, but also builders; and can help achieve greater focus when building such ecosystems.'
        ],
        list: [],
        isOpened: false,
    }
];

export function Footer(): JSX.Element {
    return (
        <div className={ style.container }>
            <div className={ style.footer_container }>
                <div className={ style.top }>
                    <div className={ style.title }>
                        <p>FAQ</p>
                    </div>

                    <div className={ style.content }>
                        <div>
                            {
                                windowList.map(({list, description, title}, i) => {
                                    return (
                                        <div
                                            key={i}
                                        >
                                            <Window 
                                                title={ title } 
                                                isOpened={ false } 
                                                description={ description } 
                                                list={ list }
                                            />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className={ style.bot }>
                    <div className={ style.bot_container }>

                    </div>
                </div>
            </div>
        </div>
    );
}
