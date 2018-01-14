import React, {Component} from 'react'
import Card from './card'
import Header from './header'
import Gridwrapper from './gridWrapper'
import Loading from './loading'

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import {connect} from 'react-redux'
import {locationTrack} from '../actions/locationAction'
import {randomQuery} from '../actions/randomQueryAction'

class Homepage extends Component{

  componentWillMount(){
    this.props.locationTrack(this.props.location)

    const queryList = [
      'programming',
      'Control',
      'artificial intelligence',
      'styling',
      'computer',
      'machine learning',
      'framework',
      'deep learning',
      'computer vision',
      'neural networks'
    ];

    const randomNum = Math.floor(Math.random() * Math.floor(queryList.length));
    this.props.randomQuery(queryList[randomNum]);
  }

  render(){
    if(this.props.data.loading){
      return(
        <Loading/>
      )
    }
    else{
      return(
        <div>
          <Header/>
          <Gridwrapper content=
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
  query($name: String!){
    search(query: $name, last: 24, type: REPOSITORY) {
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


const HomepageWithData = graphql(
  repoQuery,
  {
    options: ownProps => ({
      variables: {
        name: ownProps.randomQueryReducer
      }
    })

  }
)(Homepage)


function mapStateToProps(state){
  return{
    cardReducer: state.cardReducer,
    locationReducer: state.locationReducer,
    randomQueryReducer: state.randomQueryReducer
  };
};

function matchDispatchToProps(dispatch){
  return{
    locationTrack: (location) => {
      dispatch(locationTrack(location))
    },
    randomQuery: (query) => {
      dispatch(randomQuery(query))
    }
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(HomepageWithData);
