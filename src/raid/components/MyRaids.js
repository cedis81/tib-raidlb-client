import React, { Component } from 'react'
import { withRouter, Link, Redirect } from 'react-router-dom'

import { handleErrors, myRaid } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'
import './Raid.scss'
import RaidCreate from './RaidCreate'

class MyRaids extends Component {
  constructor (props) {
    super(props)

    this.state = {
      createIsHidden: true,
      flash: props.flash,
      raids: null
    }
  }

  componentDidMount() {
    const {flash} = this.state
    myRaid(this.props.user)
      // fetch does not throw error. Need to use res.ok
      // return to intentionally throw JS error
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ raids: data.raids }))
      .catch(() => flash(messages.getRaidFailure, 'flash-error'))
  }

  toggleHidden () {
    this.setState({
      createIsHidden: !this.state.createIsHidden
    })
  }

  render () {
    if (!this.state.raids) {
      return <p>Loading...</p>
    } else if (this.state.raids.length === 0) {
      return <p>You have no raids created. Please click <Link to='/raid-create'>here</Link> to create one and get started. Or, click <Link to='/raids'>here</Link> to view raids from other trainers!</p>
    }

    const raids = this.state.raids.map(raid => (
      <tbody key={raid.id}>
        <tr>
          <td>{raid.id}</td>
          <td><Link to={`/raids/${raid.id}`}>{raid.boss_name}</Link></td>
          <td>{raid.time_remaining}</td>
        </tr>
      </tbody>
    ))

    return (
      <React.Fragment>
        <h1>Raids you have submitted:</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>bossname</th>
              <th>time</th>
            </tr>
          </thead>
          {raids}
        </table>
      </React.Fragment>
    )
  }
}

// {!this.state.createIsHidden && <RaidCreate user={this.props.user}/>}
// <button onClick={this.toggleHidden.bind(this)}>
// Create a Raid
// </button>

export default MyRaids
