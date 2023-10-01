import './App.scss';
import { Provider } from 'react-redux';

import { BrowserRouter, Route } from 'react-router-dom';

import Routes from './config/routes';
import { store } from './store/store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route render={props => (
          <>
            <Routes />
          </>
        )} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;