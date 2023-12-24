import { JSX } from 'react';
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";

import style from './Window.module.scss';

interface WindowProps {
    readonly title: string;
    readonly isOpened: boolean;
    readonly description: string[];
    readonly list: string[];
    clickHandler: (title: string) => void;
}

export function Window({
    title, 
    isOpened, 
    description, 
    list,
    clickHandler,
}: WindowProps): JSX.Element {
    let openStyle = [style.body]
    if (isOpened) {
        openStyle.push(style.open)
    }

    return (
        <div 
            className={ style.container }
        >
            <div className={ style.window_container }>
                <div 
                    className={ style.title }
                    onClick={() => clickHandler(title)}
                >
                    <p>{ title }</p>
                    <div 
                        className={ style.icon }
                        // update animation
                    >
                        {
                            isOpened ?
                                // <FiPlus />
                                <LuMinus size={'30px'}/>
                                : <FiPlus size={'30px'}/>
                        }
                    </div>
                </div>

                <div 
                    className={ openStyle.join(' ') }
                >
                    {/* list of descriptions */}
                    <div className={ style.description }>
                        {
                            description.map((el, i) => {
                                return (
                                    <div
                                        key={i}
                                    >
                                        <p>{ el }</p>
                                    </div>
                                );
                            })
                        }
                    </div>

                        {/* list of items */}
                        {
                            list.length > 0 ?
                                <ul className={ style.list }>
                                    {
                                        list.map((el, i) => {
                                            return (
                                                <li
                                                    key={i}
                                                >
                                                    { el }
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                                :
                                null
                        }
                </div>
            </div>
    </div>
    );
}
