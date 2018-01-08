import React, {Component} from 'react'
import Card from './card'
import Header from './header'

import Gridwrapper from './gridWrapper'
import '../styles/loadpage.css'

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import {connect} from 'react-redux'
import {locationTrack} from '../actions/locationAction'

class Searchpage extends Component{

  componentWillMount(){
    this.props.locationTrack(this.props.location)
  }

  componentDidUpdate(){
    console.log("LOCATION", this.props.locationReducer)
  }

  render(){
    if(this.props.data.loading){
      return(
        <div>
          <Header content={this.props.match.params.query !== undefined ? this.props.match.params.query : ""}/>
          <div className="loading">Loading...</div>
        </div>
      )
    }
    else if(this.props.data.search.edges.length === 0)
      return(
        <div>
          <Header content={this.props.match.params.query !== undefined ? this.props.match.params.query : ""}/>
          <div className="noResult">No results match {this.props.match.params.query}</div>
        </div>
      )
    else{
      return(
        <div>
          <Header content={this.props.match.params.query !== undefined ? this.props.match.params.query : ""}/>
          <Gridwrapper query={this.props.match.params.query} content=
            {this.props.data.search.edges.map((data) =>
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
                avatar={data.node.owner.avatarUrl}
                username={data.node.owner.login}
                userQuery={true}
              />
            )} />
        </div>
      );
    }
  };
};

const repoQuery = gql`
  query($query: String!){
    search(query: $query, last: 24, type: REPOSITORY) {
      repositoryCount
      edges {
        node {
          ... on Repository {
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
            owner {
              id
              login
              avatarUrl
            }
            languages(first: 10, orderBy:{field: SIZE, direction: DESC}) {
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

const SearchpageWithData = graphql(
  repoQuery,
  {
    options: ownProps => ({
      variables: {
        query: ownProps.match.params.query
      }
    })
  }
)(Searchpage)

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

export default connect(mapStateToProps, matchDispatchToProps)(SearchpageWithData);
