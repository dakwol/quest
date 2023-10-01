import React from 'react'
import Header from '../../components/Header/Header'
import icons from '../../assets/icons/icons'
import SliderContainer from '../../components/SliderContainer/SliderContainer'


const WelcomePage = () => {
    return (
        <div className='containerPage'>
            <Header logo={icons.Logoquest} />
            <SliderContainer />
        </div>
    )
}

export default WelcomePage