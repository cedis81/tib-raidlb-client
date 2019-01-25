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
      user: props.user,
      flash: props.flash,
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
    const {flash} = this.state
    createRaid(this.state, this.state.user)
      .then(handleErrors)
      .then(res => res.json())
      .then(data => this.setState({ id: data.raid.id }))
      .then(() => flash(messages.createRaidSuccess, 'flash-success'))
      .catch(() => {
        this.setState({ raid: {
          boss_name: '',
          time_remaining: ''
        }})
        flash(messages.createRaidFailure, 'flash-error')
      })
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
