import './index.scss';

import React from 'react';
import { Router } from 'react-router-dom';
import DefaultLayout from './layout';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <DefaultLayout />
    </Router>
  );
}

export default App;
