import React, {Component} from 'react'
import Header from './header'
import NotFound from './notFound'
import Loading from './loading'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import {modalToggle, bgStyleToggle} from '../actions/cardAction'
import '../styles/modal.css'



const ModalContent = (props) => {

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

  const Close = () =>{
    return(
      <div onClick={props.backFunction}>
        <svg className="close" version="1.1" x="0px" y="0px"
           viewBox="0 0 512 512">
           <g>
            <path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249
              C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306
              C514.019,27.23,514.019,14.135,505.943,6.058z"/>
          </g>
          <g>
            <path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636
              c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/>
          </g>
        </svg>
      </div>
    )
  }

  const Forked = () =>{
    return(
      <svg className="forked" viewBox="0 0 10 16" version="1.1">
        <path d="M8,1 C6.89,1 6,1.89 6,3 C6,3.73 6.41,4.38 7,4.72 L7,6 L5,8 L3,6 L3,4.72 C3.59,4.38 4,3.74 4,3 C4,1.89 3.11,1 2,1 C0.89,1 0,1.89 0,3 C0,3.73 0.41,4.38 1,4.72 L1,6.5 L4,9.5 L4,11.28 C3.41,11.62 3,12.26 3,13 C3,14.11 3.89,15 5,15 C6.11,15 7,14.11 7,13 C7,12.27 6.59,11.62 6,11.28 L6,9.5 L9,6.5 L9,4.72 C9.59,4.38 10,3.74 10,3 C10,1.89 9.11,1 8,1 L8,1 Z M2,4.2 C1.34,4.2 0.8,3.65 0.8,3 C0.8,2.35 1.35,1.8 2,1.8 C2.65,1.8 3.2,2.35 3.2,3 C3.2,3.65 2.65,4.2 2,4.2 L2,4.2 Z M5,14.2 C4.34,14.2 3.8,13.65 3.8,13 C3.8,12.35 4.35,11.8 5,11.8 C5.65,11.8 6.2,12.35 6.2,13 C6.2,13.65 5.65,14.2 5,14.2 L5,14.2 Z M8,4.2 C7.34,4.2 6.8,3.65 6.8,3 C6.8,2.35 7.35,1.8 8,1.8 C8.65,1.8 9.2,2.35 9.2,3 C9.2,3.65 8.65,4.2 8,4.2 L8,4.2 Z"></path>
      </svg>
    )
  }

  return(
    <div className={props.noModal ? "modalCard noModal" : "modalCard"} onClick={(e) => e.stopPropagation()}>
      <div className="header">
        <div className="userInfo_modal">
          <div className="userInfo_initial">
            <img alt="Avatar" className="avatar_modal" src={props.avatar}></img>
            <div className="names_modal">
              <div className="repoName_modal"><a target="_blank" href={props.url}>{props.reponame}</a></div>
              <div className="user_modal">by <Link to={`/user/${props.username}`} onClick={props.goToUserFunction}><div className="userName">{props.username}</div></Link> on <span className="date_modal">{props.createdAt.slice(0, 10)}</span></div>
            </div>
          </div>
          <ul className="repoInfo_modal">
            <li><Star/> {props.likes}</li>
            <li><Watch/> {props.watchers}</li>
            <li><Forked/> {props.forks}</li>
          </ul>
        </div>
        {props.showClose && <Close/>}
        <div>
        </div>
      <div className="separator_horizontal"  style={props.tags ? {marginBottom: '10'} : {marginBottom: '20px'}}></div>
      {props.tags &&
        <ul className="tagsList_modal">
          {props.tags.map((tag) => <li key={tag.node.topic.id}>{tag.node.topic.name}</li>)}
        </ul>}
      <div className="body_modal">
        {props.description === null
          ? <div className="body_text_modal"><div className="body_text_header_modal">Description</div><div className="body_text_modal noDesc" >No description provided</div></div>
          : <div className="body_text_modal"><div className="body_text_header_modal">Description</div><div>{props.description}</div></div>}
        <div className="separator_vertical"></div>
        <div className="body_text_modal languages">
          <div className="body_text_modal body_text_header_modal">Languages</div>
          <ul>
            {props.languages.length === 0
              ? <div className="body_text_modal noDesc">No language provided</div>
              : props.languages.map((lang) => <li key={lang.node.id} className="body_text_modal language">{lang.node.name}</li>)
            }
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}



class Modal extends Component{

  constructor(props){
    super(props)
    this.back = this.back.bind(this)
    this.goToUser = this.goToUser.bind(this)
    this.handleEscPress = this.handleEscPress.bind(this)
  }

  back(e){
    e.stopPropagation()
    this.props.bgStyleToggle()
    this.props.history.goBack()
    setTimeout(() => this.props.modalToggle(), 100)
  }

  goToUser(e){
    e.stopPropagation()
    this.props.bgStyleToggle()
    setTimeout(() => this.props.modalToggle(), 100)
  }

  handleEscPress(e){
    console.log(e.key)
  }

  render(){

    if(this.props.cardReducer.modal){
      return(
        <div className="modalPage" tabIndex="0" onKeyDown={(e) => this.handleEscPress(e)}>
          <div className="bg" onClick={(e) => this.back(e)}></div>
          <div className="modalContainer" onClick={(e) => this.back(e)}>
            <ModalContent
              avatar={this.props.cardReducer.data.avatar}
              url={this.props.cardReducer.data.url}
              reponame={this.props.cardReducer.data.reponame}
              username={this.props.cardReducer.data.username}
              createdAt={this.props.cardReducer.data.createdAt}
              likes={this.props.cardReducer.data.likes}
              watchers={this.props.cardReducer.data.watchers}
              forks={this.props.cardReducer.data.forks}
              tags={this.props.cardReducer.data.tags}
              description={this.props.cardReducer.data.description}
              languages={this.props.cardReducer.data.languages}
              backFunction={(e) => this.back(e)}
              goToUserFunction={(e) => this.goToUser(e)}
              showClose={true}
              noModal={false}
            />
          </div>
        </div>
        )
    }
    else{
      if(this.props.data.loading){
        return(
          <Loading/>
        )
      }
      else{
        if(!this.props.data.repository){
          return(
            <NotFound info="No such repository available"/>
          )
        }
        else{
          return(
            <div>
              <Header/>
              <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
                <ModalContent
                  avatar={this.props.data.repository.owner.avatarUrl}
                  url={this.props.data.repository.url}
                  reponame={this.props.data.repository.name}
                  username={this.props.data.repository.owner.login}
                  createdAt={this.props.data.repository.createdAt}
                  likes={this.props.data.repository.stargazers.totalCount}
                  watchers={this.props.data.repository.watchers.totalCount}
                  forks={this.props.data.repository.forkCount}
                  tags={this.props.data.repository.repositoryTopics.edges}
                  description={this.props.data.repository.description}
                  languages={this.props.data.repository.languages.edges}
                  backFunction={(e) => this.back(e)}
                  goToUserFunction={(e) => this.goToUser(e)}
                  showClose={false}
                  noModal={true}
                />
              </div>
            </div>
          )
        }
      }
    }
  };
};


const userQuery = gql`
query ($login: String!, $repoName: String!) {
  repository(owner: $login, name: $repoName) {
    owner {
      id
      login
      avatarUrl
    }
    id
    name
    createdAt
    forkCount
    homepageUrl
    url
    description
    repositoryTopics(first: 10) {
      edges {
        node {
          id
          topic {
            id
            name
          }
        }
      }
    }
    languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
      edges {
        node {
          id
          name
        }
      }
    }
    watchers {
      totalCount
    }
    stargazers {
      totalCount
    }
  }
}
`

const ModalWithData = graphql(
  userQuery,
  {
    options: ownProps => ({
      variables: {
        login: ownProps.match.params.userId,
        repoName: ownProps.match.params.repoName

      }
    })
  }
)(Modal)


function mapStateToProps(state){
  return{
    cardReducer: state.cardReducer
  };
};

function matchDispatchToProps(dispatch){
  return{
    modalToggle: () => {
      dispatch(modalToggle())
    },
    bgStyleToggle: () => {
      dispatch(bgStyleToggle())
    }
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(ModalWithData);
