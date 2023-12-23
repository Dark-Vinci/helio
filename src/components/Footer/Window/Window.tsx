import { JSX } from 'react';

import style from './Window.module.scss';

interface WindowProps {
    readonly title: string;
    readonly isOpened: boolean;
    readonly description: string[];
    readonly list: string[];
}

export function Window({
    title, 
    isOpened, 
    description, 
    list 
}: WindowProps): JSX.Element {
    return (
        <div className={ style.container }>
            <div className={ style.window_container }>
                <div className={ style.title }>
                    <p>{ title }</p>
                    <div className="icon">
                        ICON
                    </div>
                </div>

                <div 
                    className={ style.body }
                    style={{ display: isOpened ? 'auto' : 'none'}}
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
