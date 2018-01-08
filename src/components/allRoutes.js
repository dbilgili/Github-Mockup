import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import Homepage from './homepage'
import Userpage from './userpage'
import Searchpage from './searchpage'
import Modal from './modal'

class AllRoutes extends Component{

  render(){

    const fixed = {
      position: 'fixed',
      top: -window.pageYOffset,
      left: '0',
      right: '0'
    };

    const modalBg = {
      position: 'static'
    }

    return(
      <div style={this.props.cardReducer.bgStyle ? fixed : modalBg}>
        <Switch location={this.props.cardReducer.modal ? this.props.locationReducer : this.props.location}>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/search/:query' component={Searchpage}/>
          <Route exact path='/user/:userId' component={Userpage}/>
        </Switch>
        <Route exact path='/user/:userId/:repoName' component={Modal}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    cardReducer: state.cardReducer,
    locationReducer: state.locationReducer
  };
};

export default connect(mapStateToProps)(AllRoutes);
