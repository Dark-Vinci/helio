import { JSX, useState } from 'react';

import style from './Footer.module.scss';
import { Window } from './Window';
import { windowList } from '@constants';


export function Footer(): JSX.Element {
    const [list, setList] = useState(windowList);

    const cardClickHandler = (title: string) => {
        console.log({title})
        // setList(windowList);

        const theEl = list.find(el => el.title === title);
        console.log({theEl})

        if (!theEl) {
            return;
        }

        theEl.isOpened = true;

        const ind = list.findIndex(el => el.title === title);
        console.log({ind})
        let newList = [...list];

        newList = newList.map(el => {
            return { ...el, isOpened: false }
        });

        newList[ind] = theEl;

        setList(newList);
    };

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

                    </div>
                </div>
            </div>
        </div>
    );
}
