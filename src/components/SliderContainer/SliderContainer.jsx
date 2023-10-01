import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import './style.scss';
import ButtonImage from '../Button/ButtonImage';
import icons from '../../assets/icons/icons';
import { Link } from 'react-router-dom';

const SliderContainer = () => {
    const userData = useSelector(state => state.user_data.userData);
    const sliderRef = useRef(null);

    const slides = [
        {
            id: 1,
            title: <p className='sliderTitle'>Добро пожаловать <span className='name'>{userData.name}</span>!</p>,
            text: 'В диджитал королевстве принцесса в опасности она была неосторожна и потеряла свои данные...'
        },
        {
            id: 2,
            text: <p className='sliderTitle'>Хитрый сотрудник <span className='nameZone'>/Зона Банка/</span> похитил данные и угрожает принцессе слить их в сеть...</p>
        },
        {
            id: 3,
            text: <p className='sliderTitle'>Тебе нужно  <span className='name'>написать программу</span> и спасти доверчивую принцессу максимально быстро!</p>,
            button: <Link to={'level/1'}><ButtonImage className={'buttonGoGame'} imgHovered={icons.ButtonBIg} imgDefault={icons.ButtonBIgDefault} /></Link>
        },
    ];

    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        swipe: false,
    };

    const goToNextSlide = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className='containerSlider'>
            <Slider ref={sliderRef} {...settings}>
                {slides.map((slide, index) => (
                    <div key={slide.id}>
                        <div className='sliderText__container'>
                            <h1 className={'sliderTitle'}>{slide.title}</h1>
                            <h1 className={'sliderTitle'}>{slide.text}</h1>
                            {slide.button}
                        </div>
                    </div>
                ))}
            </Slider>

            {slides.length > 0 && (
                <ButtonImage className={'buttonSkip'} onClick={goToNextSlide} text={'Скип'} ico={icons.forward} />
            )}
        </div>
    );
}

export default SliderContainer;
