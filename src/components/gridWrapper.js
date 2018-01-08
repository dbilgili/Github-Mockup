import React, {Component} from 'react'
import '../styles/card.css'
import '../styles/gridwrapper.css'
import {connect} from 'react-redux'

class Gridwrapper extends Component{

  render(){

    const center = {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    };

    return(
      <div style={center}>
        <div id="gridWrapper">
          {this.props.query && <div id="searchHeader">Results for <span style={{color: 'rgb(185, 185, 185)'}}>{this.props.query}</span></div>}
          {this.props.content}
        </div>
      </div>
    );
  }
};

function mapStateToProps(state){
  return{
    cardReducer: state.cardReducer
  };
};

export default connect(mapStateToProps)(Gridwrapper);
