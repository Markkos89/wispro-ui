import React from 'react';
import { RecoilRoot } from 'recoil';
import withErrorHandler from 'errorHandling';
import { App as ErrorBoundaryFallback } from 'errorHandling/Fallbacks';
import { Route, Switch } from 'react-router-dom'
import { privateRoutes, publicRoutes } from 'routes'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import PrivateRoute from './components/PrivateRoute/PrivateRoutes'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <RecoilRoot>
        <Provider store={store}>  
          <Router>
            <Switch>
              {privateRoutes.map(route => <PrivateRoute {...route} key={route.path || '#'}/>)}
              {publicRoutes.map(route => <Route {...route} key={route.path || '#'}/>)}
            </Switch>
          </Router>
        </Provider>
    </RecoilRoot>
  );
}

export default withErrorHandler(App, ErrorBoundaryFallback);
