import React, { Component } from 'react'
import loading from './Ajax-loader.gif'

export default class Spinnerr extends Component {
  render() {
    return (
      <div className="text-center">
        <img className="my-3" src={loading} alt="loading" />
      </div>
    )
  }
}
