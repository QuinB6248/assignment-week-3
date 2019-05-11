import React, { Component } from 'react'
import { connect }from 'react-redux'
import ShowDetails from './ShowDetails'

class ShowDetailsContainer extends Component {
  render() {
    return (
      <div>
        <ShowDetails show={this.props.models}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        models: state
    } 
}

export default connect(mapStateToProps)(ShowDetailsContainer)