import React, {Component} from 'react'
import Card from './card'
import Header from './header'
import NotFound from './notFound'

import Loading from './loading'

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import {connect} from 'react-redux'
import {locationTrack} from '../actions/locationAction'

import '../styles/userpage.css'

class Userpage extends Component{

  componentWillMount(){
    this.props.locationTrack(this.props.location)
  }

  render(){

    const LocationSVG = () => {
      return(
        <svg className="locationSVG SVG" viewBox="0 0 12 16" version="1.1">
          <path d="M6,0 C2.69,0 0,2.5 0,5.5 C0,10.02 6,16 6,16 C6,16 12,10.02 12,5.5 C12,2.5 9.31,0 6,0 L6,0 Z M6,14.55 C4.14,12.52 1,8.44 1,5.5 C1,3.02 3.25,1 6,1 C7.34,1 8.61,1.48 9.56,2.36 C10.48,3.22 11,4.33 11,5.5 C11,8.44 7.86,12.52 6,14.55 L6,14.55 Z M8,5.5 C8,6.61 7.11,7.5 6,7.5 C4.89,7.5 4,6.61 4,5.5 C4,4.39 4.89,3.5 6,3.5 C7.11,3.5 8,4.39 8,5.5 L8,5.5 Z" id="Shape"></path>
        </svg>
      )
    }

    const LinkSVG = () => {
      return(
        <svg className="linkSVG SVG" viewBox="0 0 16 16" version="1.1">
          <path d="M4,9 L5,9 L5,10 L4,10 C2.5,10 1,8.31 1,6.5 C1,4.69 2.55,3 4,3 L8,3 C9.45,3 11,4.69 11,6.5 C11,7.91 10.09,9.22 9,9.75 L9,8.59 C9.58,8.14 10,7.32 10,6.5 C10,5.22 8.98,4 8,4 L4,4 C3.02,4 2,5.22 2,6.5 C2,7.78 3,9 4,9 L4,9 Z M13,6 L12,6 L12,7 L13,7 C14,7 15,8.22 15,9.5 C15,10.78 13.98,12 13,12 L9,12 C8.02,12 7,10.78 7,9.5 C7,8.67 7.42,7.86 8,7.41 L8,6.25 C6.91,6.78 6,8.09 6,9.5 C6,11.31 7.55,13 9,13 L13,13 C14.45,13 16,11.31 16,9.5 C16,7.69 14.5,6 13,6 L13,6 Z" id="Shape"></path>
        </svg>
      )
    }

    const MailSVG = () => {
      return(
        <svg className="mailSVG SVG" viewBox="0 0 14 16" version="1.1">
          <path d="M0,4 L0,12 C0,12.55 0.45,13 1,13 L13,13 C13.55,13 14,12.55 14,12 L14,4 C14,3.45 13.55,3 13,3 L1,3 C0.45,3 0,3.45 0,4 L0,4 Z M13,4 L7,9 L1,4 L13,4 L13,4 Z M1,5.5 L5,8.5 L1,11.5 L1,5.5 L1,5.5 Z M2,12 L5.5,9 L7,10.5 L8.5,9 L12,12 L2,12 L2,12 Z M13,11.5 L9,8.5 L13,5.5 L13,11.5 L13,11.5 Z" id="Shape"></path>
        </svg>
      )
    }

    const OrganizationSVG = () => {
      return(
        <svg className="OrganizationSVG SVG" viewBox="0 0 16 16" version="1.1">
          <path d="M16,12.999 C16,13.438 15.55,13.999 15,13.999 L7.995,13.999 C7.456,13.999 7.001,13.552 7,13 L1,13 C0.46,13 0,12.439 0,12 C0,9.366 3,8 3,8 C3,8 3.229,7.591 3,7 C2.159,6.379 1.942,6.41 2,4 C2.058,1.581 3.367,1 4.5,1 C5.633,1 6.942,1.58 7,4 C7.058,6.41 6.841,6.379 6,7 C5.771,7.59 6,8 6,8 C6,8 7.549,8.711 8.42,10.088 C9.196,9.369 10,8.999 10,8.999 C10,8.999 10.229,8.59 10,7.999 C9.159,7.379 8.942,7.409 9,4.999 C9.058,2.58 10.367,1.999 11.5,1.999 C12.633,1.999 13.937,2.58 13.995,4.999 C14.054,7.409 13.837,7.379 12.995,7.999 C12.766,8.589 12.995,8.999 12.995,8.999 C12.995,8.999 16,10.365 16,12.999" id="Shape"></path>
        </svg>
      )
    }

    if(this.props.data.loading){
      return(
        <Loading/>
      )
    }
    else{
      if(this.props.data.repositoryOwner === null){
        return(
          <NotFound info="No such user available"/>
        )
      }
      else{
        return(
          <div>
            <Header/>
            <div className="userPageWrapper">
              <div className="userPanelWrapper">
                <div className="userInfo_userpage">
                  <img alt="Avatar" src={this.props.data.repositoryOwner.avatarUrl} className="userAvatar"></img>
                  <div className="userName_userpage">{this.props.data.repositoryOwner.login}</div>
                  <div className="name_userpage">{this.props.data.repositoryOwner.name}</div>
                  {(this.props.data.repositoryOwner.bio || this.props.data.repositoryOwner.description) && <div className="description_userpage">{(this.props.data.repositoryOwner.bio || this.props.data.repositoryOwner.description)}</div>}
                  <ul className="extraInfo_userpage">
                    {this.props.data.repositoryOwner.location && <li><LocationSVG/>{this.props.data.repositoryOwner.location}</li>}
                    {this.props.data.repositoryOwner.websiteUrl && <li><LinkSVG/><a target="_blank" href={this.props.data.repositoryOwner.websiteUrl.startsWith('http') ? this.props.data.repositoryOwner.websiteUrl : "http://".concat(this.props.data.repositoryOwner.websiteUrl)}>{this.props.data.repositoryOwner.websiteUrl}</a></li>}
                    {this.props.data.repositoryOwner.email && <li><MailSVG/>{this.props.data.repositoryOwner.email}</li>}
                    {this.props.data.repositoryOwner.company && <li><OrganizationSVG/>{this.props.data.repositoryOwner.company}</li>}
                  </ul>
                  {/*<div className="separator_userpage"></div>
                  <div className="totalRepos_userpage">{this.props.data.repositoryOwner.repositories.edges.length} {this.props.data.repositoryOwner.repositories.edges.length > 1 ? "Repositories" : "Repository"}</div>*/}
                </div>
              </div>
              <div className="userCardWrapper">
                  {this.props.data.repositoryOwner.repositories.edges.map((data) =>
                    <Card
                      key={data.node.id}
                      id={data.node.id}
                      reponame={data.node.name}
                      url={data.node.url}
                      description={data.node.description}
                      createdAt={data.node.createdAt}
                      tags={data.node.repositoryTopics.edges.length > 0 ? data.node.repositoryTopics.edges : false}
                      color={data.node.languages.edges.length > 0 ? data.node.languages.edges[0].node.color : false}
                      language={data.node.languages.edges.length > 0 ? data.node.languages.edges[0].node.name : false}
                      languages={data.node.languages.edges}
                      likes={data.node.stargazers.totalCount}
                      watchers={data.node.watchers.totalCount}
                      forks={data.node.forkCount}
                      avatar={this.props.data.repositoryOwner.avatarUrl}
                      username={this.props.data.repositoryOwner.login}
                      userQuery={false}
                    />
                  )}
              </div>
            </div>
          </div>
        );
      }

    }
  };
};

const userQuery = gql`
query ($login: String!) {
  repositoryOwner(login: $login) {
    ... on User {
      id
      name
      login
      avatarUrl
      email
      bio
      company
      location
      websiteUrl
    }

    ... on Organization {
      id
      name
      login
      avatarUrl
      email
      description
      location
      websiteUrl
    }

    repositories(last: 15) {
      edges {
        node {
          id
          name
          description
          url
          createdAt
          forkCount
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
                color
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
    }
  }
}
`

const UserpageWithData = graphql(
  userQuery,
  {
    options: ownProps => ({
      variables: {
        login: ownProps.match.params.userId
      }
    })
  }
)(Userpage)

function mapStateToProps(state){
  return{
    cardReducer: state.cardReducer,
    locationReducer: state.locationReducer
  };
};


function matchDispatchToProps(dispatch){
  return{
    locationTrack: (location) => {
      dispatch(locationTrack(location))
    }
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(UserpageWithData);
