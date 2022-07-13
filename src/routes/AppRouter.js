import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {Products} from '../pages/Products';
import {Cart} from '../pages/Cart';
import {Home} from '../pages/Home';
import {Header} from '../components/Header';
import { Login } from '../pages/Login';

export const AppRouter = () => {
  const user = useSelector(({user}) => user)

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/products'>
          {/* {user && user.id ? <Products /> : <Redirect to='/login' />} */}
          <Products />
        </Route>
        <Route path='/cart'>
        {/* {user && user.id ? <Cart /> : <Redirect to='/login' />} */}
        <Cart />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};
