import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './css/math-effect.scss';
import 'font-awesome/css/font-awesome.css';
import store from './store';
import Clicker from './components/Clicker';
import MathEffect from './components/MathEffect';

const Routes = {
  CLICKER: 'clicker',
  MATH_EFFECT: 'MathEffect'
};

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path={ '/' + Routes.CLICKER } component={ Clicker }/>
            <Route path={ '/' + Routes.MATH_EFFECT } component={ MathEffect }/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
