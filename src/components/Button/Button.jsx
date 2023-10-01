import React, { useState } from 'react';
import './styles.scss';
import icons from '../../assets/icons/icons';

const ButtonVolume = ({ imgDefault, ico, onClick, className, text }) => {
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
        backgroundImage: `url(${isHovered ? icons.ButtonminiHover : icons.Buttonmini})`,
        transition: 'transform 0.1s ease',
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

export default ButtonVolume;
