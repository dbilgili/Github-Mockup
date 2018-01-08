import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {modalToggle, selectedCard, bgStyleToggle} from '../actions/cardAction'

import '../styles/card.css'


class Card extends Component{

  render(){
    const Star = () =>{
      return(
        <svg className="star" version="1.1" x="0px" y="0px"
           viewBox="0 0 426.667 426.667">
        <polygon points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91
          81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "/>
        </svg>
      )
    }

    const Watch = () =>{
      return(
        <svg className="watcher" viewBox="0 0 16 16" version="1.1">
        <path d="M8.06,2 C3,2 0,8 0,8 C0,8 3,14 8.06,14 C13,14 16,8 16,8 C16,8 13,2 8.06,2 L8.06,2 Z M8,12 C5.8,12 4,10.22 4,8 C4,5.8 5.8,4 8,4 C10.22,4 12,5.8 12,8 C12,10.22 10.22,12 8,12 L8,12 Z M10,8 C10,9.11 9.11,10 8,10 C6.89,10 6,9.11 6,8 C6,6.89 6.89,6 8,6 C9.11,6 10,6.89 10,8 L10,8 Z" id="Shape"></path>
        </svg>
      )
    }

    return(
      <div className="card">
        <div className="cardWrapper">
          <div className="info">
            <Link to={`/user/${this.props.username}/${this.props.reponame}`}><div onClick={() => {this.props.modalToggle();this.props.bgStyleToggle();this.props.selectedCard(this.props)}} className="repoName">{this.props.reponame}</div></Link>
            {this.props.description === null ? <div className=" description noDesc">No description provided</div> : <div className="description">{this.props.description}
              <div className='gradient'></div>
            </div>}

            {this.props.tags && <div className="screen">
              <ul className="tags">
                {this.props.tags.map((tag) => <li key={tag.node.topic.id}>{tag.node.topic.name}</li>)}
              </ul>
            </div>}

            <div className="details">
              {this.props.color && (this.props.language !== "Makefile" && this.props.language !== "CMake") && <div className="circle" style={{backgroundColor: this.props.color}}></div>}
              {this.props.language && (this.props.language !== "Makefile" && this.props.language !== "CMake") && <div className="moreinfo">{this.props.language}</div>}
              {this.props.likes >= 0 && <Star/>}
              {this.props.likes >= 0 && <div className="moreinfo">{this.props.likes}</div>}
              {this.props.watchers >= 0 && <Watch/>}
              {this.props.watchers >= 0 && <div className="moreinfo">{this.props.watchers}</div>}
              <div className='gradientHorizontal'></div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <img alt="Avatar" className="avatar" src={this.props.avatar}></img>
          {this.props.userQuery
            ? <Link to={`/user/${this.props.username}`}><div className="userName">{this.props.username}</div></Link>
            : <div className="userName noLink">{this.props.username}</div>
          }
        </div>
      </div>
    )
  }
}

function matchDispatchToProps(dispatch){
  return{
    modalToggle: () => {
      dispatch(modalToggle())
    },
    selectedCard: (data) => {
      dispatch(selectedCard(data))
    },
    bgStyleToggle: () => {
      dispatch(bgStyleToggle())
    }
  };
};

export default connect(null, matchDispatchToProps)(Card);
