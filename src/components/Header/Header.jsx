import React from 'react'
import icons from '../../assets/icons/icons'
import { Link } from 'react-router-dom'
import Buttons from '../Button/Button'
import './style.scss';
import ButtonImage from '../Button/ButtonImage';

const Header = ({ rating }) => {
    return (
        <div className='headerContainer'>
            <img src={icons.Logo} className='logo'></img>

            <div className='headerButtonContainer'>
                {/* <Buttons
                    ico={icons.Volume}
                /> */}

                <ButtonImage
                    imgDefault={icons.Buttonmini}
                    imgHover={icons.ButtonminiHover}
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