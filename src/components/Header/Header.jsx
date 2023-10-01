import React from 'react'
import icons from '../../assets/icons/icons'
import { Link } from 'react-router-dom'
import Buttons from '../Button/Button'
import './style.scss';
import ButtonImage from '../Button/ButtonImage';
import ButtonVolume from '../Button/Button';

const Header = ({ rating, logo }) => {
    return (
        <div className='headerContainer'>
            <img src={logo} className='logo'></img>

            <div className='headerButtonContainer'>
                {/* <Buttons
                    ico={icons.Volume}
                /> */}

                <ButtonVolume
                    className={'volume'}
                />
                {rating &&
                    <Link to={'/'} className='linkReiting'>
                        <img src={icons.Rating}></img>
                        <h1>Рейтинг игроков</h1>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Header