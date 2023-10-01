import React from 'react';
import './styles.scss'
import bg from '../../assets/Pixelbg.svg';
import Logoquest from '../../assets/Logoquest.svg';
import Input from '../Input/Input';
import ButtonImage from '../Button/ButtonImage';
import icons from '../../assets/icons/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { setUserDataItem } from '../../store/userDataSlice';
import { Link } from 'react-router-dom';


const LoginContainer = () => {
    const userData = useSelector(state => state.user_data.userData);
    const dispatch = useDispatch(); // Получите функцию dispatch

    const [err, setErr] = useState('');

    const handleChange = (e) => {
        if (e.target.value != '') {
            dispatch(setUserDataItem(['name', e.target.value]))
            localStorage.setItem("name", e.target.value);
            setErr('')
        } else {
            setErr('Введите имя')
        }

    };


    return (
        <div className='container'>
            <div className='containerBg'>
                <object type="image/svg+xml" data={bg} className='bg'></object>
                <div className='containerCenter'>
                    <object type="image/svg+xml" data={Logoquest}></object>
                    <h1>Впиши свой юзернейм в историю</h1>
                    <div className='inputContainer'>
                        <Input label={'Username'} onChange={(e) => handleChange(e)} err={err} />
                        <Link to="/welcome"> <ButtonImage className={'startButton'} text={"Старт"} ico={icons.play} /></Link>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginContainer