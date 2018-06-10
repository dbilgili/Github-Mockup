import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import AllRoutes from './components/allRoutes'
import './styles/main.css'
import './styles/responsive.css'
import './styles/noresult.css'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Route component={AllRoutes}/>
      </BrowserRouter>
    );
  }
}

export default App;
