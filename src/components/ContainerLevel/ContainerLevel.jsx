import React from 'react';
import './styles.scss';
import icons from '../../assets/icons/icons';
import ButtonImage from '../Button/ButtonImage';
import { useState } from 'react';

const ContainerLevel = () => {
    const items = [
        [

            { id: 1, background: icons.Platform, objects: [] },
            { id: 2, background: icons.Platform, objects: [] },
            { id: 3, background: icons.Platform, objects: [{ exit: {} }] },
            { id: 4, background: icons.Platform, objects: [] },
        ],
        [
            { id: 6, background: icons.Platform, objects: [] },
            { id: 5, background: icons.Platform, objects: [{ data: {} }] },
            { id: 7, background: icons.Platform, objects: [] },
            { id: 8, background: icons.Platform, objects: [] },
        ],
        [
            { id: 9, background: icons.Platform, objects: [{ hero: {} }] },
            { id: 10, background: icons.Platform, objects: [] },
            { id: 11, background: icons.Platform, objects: [] },
            { id: 12, background: icons.Platform, objects: [] },
        ],
        [
            { id: 13, background: icons.Platform, objects: [] },
            { id: 14, background: icons.Platform, objects: [] },
            { id: 15, background: icons.Platform, objects: [] },
            { id: 16, background: icons.Platform, objects: [] },
        ]
    ];

    const buttons = [
        {
            id: 1,
            color: '',
            type: 'hero',
            action: 'select',
            select: [
                {
                    id: 1,
                    color: '',
                    type: 'hero',
                    action: 'up',
                },
                {
                    id: 2,
                    color: '',
                    type: 'hero',
                    action: 'down',
                },
                {
                    id: 3,
                    color: '',
                    type: 'hero',
                    action: 'left',
                },
                {
                    id: 4,
                    color: '',
                    type: 'hero',
                    action: 'right',
                },
            ]
        },
        {
            id: 2,
            color: '',
            type: 'hero',
            action: 'select',
            select: [
                {
                    id: 1,
                    color: '',
                    type: 'hero',
                    action: 'up',
                },
                {
                    id: 2,
                    color: '',
                    type: 'hero',
                    action: 'down',
                },
                {
                    id: 3,
                    color: '',
                    type: 'hero',
                    action: 'left',
                },
                {
                    id: 4,
                    color: '',
                    type: 'hero',
                    action: 'right',
                },
            ]
        },
        {
            id: 3,
            color: '',
            type: 'map',
            action: 'rotate',
            select: [
                {
                    id: 1,
                    color: '',
                    type: 'hero',
                    action: 'undo',
                },
                {
                    id: 2,
                    color: '',
                    type: 'hero',
                    action: 'redo',
                },
            ]
        },
        {
            id: 4,
            color: '',
            type: 'hero',
            action: 'select',
            select: [
                {
                    id: 1,
                    color: '',
                    type: 'hero',
                    action: 'up',
                },
                {
                    id: 2,
                    color: '',
                    type: 'hero',
                    action: 'down',
                },
                {
                    id: 3,
                    color: '',
                    type: 'hero',
                    action: 'left',
                },
                {
                    id: 4,
                    color: '',
                    type: 'hero',
                    action: 'right',
                },
            ]
        },
    ]

    // Состояние для открытия/закрытия выпадающего списка
    const [dropdownOpen, setDropdownOpen] = useState(null);

    // Состояние для отслеживания выбранного элемента в селекте
    const [selectedAction, setSelectedAction] = useState([]);

    const toggleDropdown = (buttonId) => {
        if (dropdownOpen === buttonId) {
            setDropdownOpen(null); // Закрыть список, если он уже открыт
        } else {
            setDropdownOpen(buttonId); // Открыть список
        }
    };

    const handleSelect = (action) => {
        setSelectedAction([...selectedAction, action]); // Сохранить выбранное действие
        setDropdownOpen(null); // Закрыть список после выбора
    };

    const runCode = () => {
        let heroX = 2;
        let heroY = 0;

        selectedAction.forEach((item) => {
            items[heroX][heroY].objects = []
            switch (item) {
                case 'left':
                    heroX = heroX - 1
                    break;
                case 'right':
                    heroX = heroX + 1
                    break;
                case 'up':
                    heroX = heroY - 1
                    break;
                case 'down':
                    heroX = heroY + 1
                    break;

            }
            if (item[heroX][heroY].objects.length > 0 && item[heroX][heroY].objects.data != undefined) {
                items[heroX][heroY].objects = [{ hero: {} }]
            }

        })
        console.log(items[heroX][heroY]);

        console.log('Выполнение кода для действия:', selectedAction);
    }

    return (
        <div>
            <div className='gameContainer'>
                {items.map((item) => {
                    return item.map((el) => {
                        return (
                            <div
                                key={el.id}
                                className='gridItem'
                            >
                                <img src={el.background} alt={`Item ${el.id}`} />
                            </div>
                        )
                    })
                })}
            </div>
            <div>
                {buttons.map((item) => (
                    <div key={item.id} className='buttonContainer'>

                        <button
                            className='dropdownButton'
                            onClick={() => toggleDropdown(item.id)}
                        >
                            {item.action}
                        </button>
                        {dropdownOpen === item.id && (
                            <ul className='dropdownList'>
                                {item.select.map((subItem) => (
                                    <li key={subItem.id} className='dropdownItem'>
                                        <button
                                            onClick={() => handleSelect(subItem.action)}
                                        >
                                            {subItem.action}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
                <ButtonImage text={'Запустить код'} onClick={() => { runCode() }} />
            </div>
        </div>
    );

};

export default ContainerLevel;
