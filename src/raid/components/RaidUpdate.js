import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'

import { handleErrors, updateRaid } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'
import RaidForm from './RaidForm'

class RaidUpdate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      notFound: null,
      updated: false,
      flash: props.flash,
      raid: {
        id: '',
        boss_name: '',
        time_remaining: ''
      }
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id

    fetch(`${apiUrl}/raids/${id}`)
      // fetch does not throw error. Need to use res.ok
      // return to intentionally throw JS error
      .then(handleErrors)
      .then(res => res.json())
      .then(data => this.setState({ raid: data.raid }))
      .catch(() => {
        this.setState({ notFound: true })
        flash(messages.getRaidFailure, 'flash-failure')
      })
  }


  handleChange = event => {
    const updatedRaid = {
      ...this.state.raid, [event.target.name]: event.target.value
    }
    this.setState({ raid: updatedRaid })
  }

  handleSubmit = event => {
    event.preventDefault()

    const {flash} = this.state
    updateRaid(this.state, this.props.user)
      .then(handleErrors)
      .then(res => res.json())
      .then(data => this.setState({ updated: true }))
      .then(() => flash(messages.updateRaidSuccess, 'flash-success'))
      .catch(() => flash(messages.updateRaidFailure, 'flash-failure'))
  }

  render () {
    const id = this.props.match.params.id

    if (this.state.updated) {
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

export default withRouter(RaidUpdate)
