import React from 'react';
import './styles.scss';

const Buttons = ({ text, onClick, ico, className }) => {
    return (
        <>
            <button className={`button__container ${ico ? 'iconContainer' : ''} ${className}`} onClick={onClick}>
                {ico && <object type="image/svg+xml" data={ico}></object>}
                {text}
            </button>
        </>
    )
}

export default Buttons