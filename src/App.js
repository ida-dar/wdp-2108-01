import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayoutContainer';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';
import Search from './components/views/Search/Search';
import Login from './components/views/Login/Login';
import Blog from './components/views/Blog/BlogContainer';
import Register from './components/views/Register/Register';
import Cart from './components/views/Cart/CartContainer';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route exact path={'/shop/:categoryId'} component={ProductList} />
          <Route exact path={'/search'} component={ProductList} />
          <Route exact path={'/product/:productId'} component={ProductPage} />
          <Route exact path={'/search'} component={Search} />
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/blog'} component={Blog} />
          <Route exact path={'/register'} component={Register} />
          <Route exact path={'/cart'} component={Cart} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
