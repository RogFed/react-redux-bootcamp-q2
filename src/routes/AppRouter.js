import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {Products} from '../pages/Products';
import {Cart} from '../pages/Cart';
import {Home} from '../pages/Home';
import {Header} from '../components/Header';
import { Login } from '../pages/Login';
import { Order } from '../pages/Order';
import { selectUser } from '../store/user';

export const AppRouter = () => {
  const user = useSelector(selectUser)

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/products'>
          {user && user.id ? <Products /> : <Redirect to='/login' />}
        </Route>
        <Route path='/cart'>
          {user && user.id ? <Cart /> : <Redirect to='/login' />}
        </Route>
        <Route path='/order'>
          {user && user.id ? <Order /> : <Redirect to='/login' />}
        </Route>
        <Route path='/login'>
          {!user || !user.id ? <Login /> : <Redirect to='/products' />}
        </Route>
      </Switch>
    </Router>
  );
};
