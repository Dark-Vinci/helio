import { JSX, useState } from 'react';

import { FaMediumM, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";

import style from './Footer.module.scss';
import { Window } from './Window';
import { windowList } from '@constants';


export function Footer(): JSX.Element {
    const [list, setList] = useState(windowList);

    const cardClickHandler = (title: string) => {
        const ind = list.findIndex(el => el.title === title);

        if (ind < 0) {
            return;
        }

        let newList = [...list];
        const prevState = newList[ind].isOpened;

        let newLi = newList.map(el => {
            return { ...el, isOpened: false }
        });

        newLi[ind].isOpened = !prevState;

        setList(newLi);
    };

    return (
        <div className={ style.container }>
            <div className={ style.decoy }>
                <div className={ style.footer_container }>
                    <div className={ style.top }>
                        <div className={ style.title }>
                            <p>FAQ</p>
                        </div>

                        <div className={ style.content }>
                            <div>
                                {
                                    list.map(({list, description, title, isOpened}, i) => {
                                        return (
                                            <div
                                                key={i}
                                            >
                                                <Window 
                                                    title={ title } 
                                                    isOpened={ isOpened } 
                                                    description={ description } 
                                                    list={ list }
                                                    clickHandler={cardClickHandler}
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
                            <div className={ style.left }>
                                <div className={ style.cont }>
                                    <div className={ style.top_cont }>
                                        <a href='.'>© 2023 Helio. All rights reserved | partnerships@helio.money</a>
                                    </div>

                                    <ul>
                                        <li><a href=".">Whitepaper</a></li>
                                        <li><a href=".">Docs</a></li>
                                        <li><a href=".">GitHub</a></li>
                                        <li><a href=".">Bug Bounty</a></li>
                                        <li><a href=".">Audit</a></li>
                                    </ul>

                                </div>
                            </div>

                            <div className={ style.right }>
                                <div className={ style.icons }>
                                    <div>
                                        <FaTwitter
                                            size={'20px'}
                                        />
                                    </div>
                                    <div>
                                        <FaTelegramPlane 
                                            size={'20px'}
                                        />
                                    </div>
                                    <div>
                                        <IoLogoDiscord
                                            size={'20px'}
                                        />
                                    </div>
                                    <div>
                                        <FaMediumM
                                            size={'20px'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
