import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import '../styles/searchbar.css'

class Searchbar extends Component {

  constructor(props){
    super(props)
    this.state = {
      query: this.props.content
    }
    this.submitHandler = this.submitHandler.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  submitHandler(event){
    event.preventDefault()
    this.props.history.push("/search/".concat(this.state.query)) 
  }

  handleInput(event){
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            id="searchBar"
            placeholder="Search Repository"
            value={this.state.query}
            onChange={this.handleInput}
            onBlur={this.handleInput}
            >
          </input>
        </form>
      </div>
    );
  }
}

export default withRouter(Searchbar);
