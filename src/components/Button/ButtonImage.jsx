import React, { useState } from 'react';
import './styles.scss';
import icons from '../../assets/icons/icons';

const ButtonImage = ({ imgDefault, imgHovered, ico, onClick, className, text }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseDown = () => {
        setIsHovered(true);
    };

    const handleMouseUp = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        onClick();
    };

    const buttonStyle = {
        backgroundImage: `url(${imgDefault ? (isHovered ? imgHovered : imgDefault) : (isHovered ? icons.ButtonFocus : icons.Button)})`,
        backgroundSize: '100% 100%',
        transition: 'transform 0.1s ease',
        padding: ' 16rem 24rem', // Регулируйте размер padding в зависимости от желаемого увеличения фонового изображения
    };

    const textStyle = {
        transform: isHovered ? 'translateY(0px)' : 'translateY(-5px) rotate(0)',
        transition: 'transform 0.1s ease',
    };

    return (
        <button
            className={`button__containerImg ${className} ${isHovered ? 'hovered' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={handleClick}
            style={buttonStyle}
        >
            <span style={textStyle}>{text} <img src={ico}></img></span>
        </button>
    );
};

export default ButtonImage;
