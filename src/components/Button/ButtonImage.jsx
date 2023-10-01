import React from 'react';
import './styles.scss';
import { useState } from 'react';

const ButtonImage = ({ imgDefault, imgHover, onClick, className }) => {

    const [click, setClick] = useState(false)

    const clickButton = () => {
        setClick(!click)

        onClick()
    }

    console.log('====================================');
    console.log(click);
    console.log('====================================');
    return (
        <>
            <button className={`button__containerImg`} onClick={() => clickButton()}>
                {
                    !click ?
                        <object type="image/svg+xml" data={imgDefault}></object>
                        :
                        <object type="image/svg+xml" data={imgHover}></object>
                }


            </button>
        </>
    )
}

export default ButtonImage