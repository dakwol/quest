import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import GameLevel1 from '../../pages/GameLevel1/GameLevel1';
import GameLevel2 from '../../pages/GameLevel2/GameLevel2';


const GamePage = ({ isAuthenticated }) => {
    if (!isAuthenticated) {
        return <Redirect to='/login' />;
    }

    return (
        <Switch>
            <Route path='/' exact component={GameLevel1} />
            <Route path='/2' exact component={GameLevel2} />
            {/* <Route path='/3' exact component={GameLevel3} />
            <Route path='/4' exact component={GameLevel4} />
            <Route path='/5' exact component={GameLevel5} />
            <Route path='/6' exact component={GameLevel6} />
            <Route path='/7' exact component={GameLevel7} /> */}
        </Switch>
    );
};

export default GamePage;
