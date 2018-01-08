import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom'
import AllRoutes from './components/allRoutes'
import './styles/main.css'
import './styles/responsive.css'
import './styles/noresult.css'

class App extends Component {

  render() {
    return (
      <HashRouter>
        <Route component={AllRoutes}/>
      </HashRouter>
    );
  }
}

export default App;
