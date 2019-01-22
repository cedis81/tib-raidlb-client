import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'

import messages from '../messages'
import apiUrl from '../../apiConfig'
import RaidForm from './RaidForm'

class Raids extends Component {
  constructor (props) {
    super(props)

    this.state = {
      notFound: false,
      raid: {
        boss_name: '',
        time_remaining: ''
      }
    }
  }

  ComponentDidMount() {
    console.log(apiUrl)
    fetch(`${apiUrl}/raids`)
      // throw error if fetch res.ok is false. fetch itself does not throw error
      .then(console.log)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ raids: data.raids }))
      // if error, set raids not found to true to redirect to home, per below
      .catch(() => this.setState({ notFound: true }))
  }

  render () {
    // if (this.state.notFound) {
    //   return <Redirect to='/' />
    // } else if (!this.state.raids) {
    //   return <p>loading...</p>
    // }

    const { boss_name, time_remaining } = this.state.raid

    return (
      <RaidForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        raid={this.state.raid}
      />
    )
  }
}

export default RaidCreate
