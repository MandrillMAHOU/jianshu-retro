import React, { Component, Fragment } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import './style.js';
import store from './store/index';
import './statics/iconfont/iconfontLib'; // icon font lib
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Route path='/(|detail)/' component={Header}/>
            <Route path='/' exact component={Home}/>
            <Route path='/detail/:id' exact component={Detail}/>
            <Route path='/login' exact component={Login}/>
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
