import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'

import { handleErrors, createRaid } from '../api'
import messages from '../messages'
import RaidForm from './RaidForm'

class RaidCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id: null,
      raid: {
        boss_name: '',
        time_remaining: ''
      }
    }
  }

  handleChange = event => {
    const createdRaid = {
      ...this.state.raid, [event.target.name]: event.target.value
    }
    this.setState({ raid: createdRaid })
  }

  handleSubmit = event => {
    event.preventDefault()

    createRaid(this.state, this.props.user)
      .then(console.log())
      .then(handleErrors)
      .then(res => res.json())
      .then(data => this.setState({ id: data.raid.id }))
      .catch(console.error)
  }

  render () {
    const { id } = this.state

    if (id) {
      return <Redirect to={`/raids/${id}`} />
    }

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

export default withRouter(RaidCreate)
