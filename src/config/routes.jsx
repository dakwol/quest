import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import icons from "../assets/icons/icons";
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import GamePage from './gameRouting/gameRouting';

const Routes = () => {
    const userData = useSelector(state => state.user_data.userData);
    const isAuthenticated = true;

    const location = useLocation();
    const history = useHistory();

    const userInfo = JSON.parse(userData.user) || {};

    const [isOnline, setIsOnline] = useState(true);



    return (
        <div className='main'>
            <Switch>
                <Route path='/login' component={LoginPage} />
                <Route path='/' render={() => (isAuthenticated ? <GamePage isAuthenticated={isAuthenticated} /> : <Redirect to='/login' />)} />
                {/* <Redirect to='/error' /> */}
            </Switch>
        </div>
    );
};

export default Routes;
