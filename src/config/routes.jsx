import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import icons from "../assets/icons/icons";
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import GamePage from './gameRouting/gameRouting';
import Loader from '../pages/Loader/Loader';
import WelcomePage from '../pages/WelcomePage/WelcomePage';

const Routes = () => {
    const userData = useSelector(state => state.user_data.userData);
    const isAuthenticated = userData.name;

    console.log(userData);

    const location = useLocation();
    const history = useHistory();

    const userInfo = JSON.parse(userData.user) || {};

    const [isOnline, setIsOnline] = useState(true);
    const [showRain, setShowRain] = useState(false);

    useEffect(() => {
        // Имитируйте задержку загрузки данных (можете заменить на реальную логику)
        const delay = 10000;
        const timeout = setTimeout(() => {
            setShowRain(false); // Остановка анимации дождя после загрузки
        }, delay);
        setShowRain(true); // Начало анимации дождя

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className='main'>
            {showRain ?
                <Loader onAnimationComplete={() => setShowRain(false)} colors={['#4B5565', '#697586', '#202939']} />
                :
                <Switch>
                    <Route path='/login' component={LoginPage} />
                    <Route path='/welcome' component={WelcomePage} />
                    <Route path='/' render={() => (isAuthenticated ? <GamePage isAuthenticated={isAuthenticated} /> : <Redirect to='/login' />)} />
                    {/* <Redirect to='/error' /> */}
                </Switch>
            }


        </div>
    );
};

export default Routes;
