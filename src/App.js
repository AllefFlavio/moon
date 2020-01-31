import React, { Component } from 'react';
import { 
  BrowserRouter, 
  Switch, 
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import InnerPage from './pages/InnerPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/index" component={Home} />
          <Route path="/inner-page" component={InnerPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
