import React from 'react'
import Header from '../../components/Header/Header';
import './styles.scss';
import LoginContainer from '../../components/LoginContainer/LoginContainer';
import icons from '../../assets/icons/icons';

const LoginPage = () => {
    return (
        <div className='containerPage'>
            <Header rating={true} logo={icons.Logo} />
            <LoginContainer />
            <p className='footerLoginPage'>Нажимая кнопку старт вы соглашаетесь с огромиными правилами которые вы ни разу не читали
                и отказываетесь от претензии к авторам. Все совпадения являются сопадениями.</p>
        </div>
    )
}

export default LoginPage