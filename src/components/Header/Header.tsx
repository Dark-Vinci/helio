import { JSX } from 'react';

import style from './Header.module.scss';

export function Header(): JSX.Element {
    return (
        <div className={ style.container }>
            <div className={ style.header_container }>
                <video
                    loop
                    muted
                    autoPlay
                >
                    <source 
                        src="https://helio.money/static/animations/bg-desktop.mp4" 
                        type="video/mp4" 
                    />
                </video>
                <div className={ style.other_container }>
                    <div className={ style.content_container }>
                        <div className={ style.content }>
                            <div className={ style.word }>
                                <p>Helio Protocol</p>
                                <p>The revolutionary USD Destablecoin backed by BNB</p>
                            </div>
                            <div className={ style.button }>
                                <button>Start Earning</button>
                            </div>
                        </div>
                    </div>
                    <div className={ style.bot }></div>
                </div>
            </div>
        </div>
    );
}
