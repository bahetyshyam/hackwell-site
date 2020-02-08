import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CodeOfConduct from './pages/CodeOfConduct';
import Home from './pages/Home';
import Register from './pages/Register';

const App = () => {
  return (
    <Switch>
      <div className='bg-gray-200'>
        <Route path='/register' exact component={Register} />
        <Route path='/code-of-conduct' exact component={CodeOfConduct} />
        <Route path='/' exact component={Home} />
      </div>
    </Switch>
  );
};

export default App;
