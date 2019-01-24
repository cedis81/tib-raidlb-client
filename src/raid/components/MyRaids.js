import React, { Component } from 'react'
import { withRouter, Link, Redirect } from 'react-router-dom'

import messages from '../messages'
import apiUrl from '../../apiConfig'

class MyRaids extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user_id: this.props.user.id,
      user_name: this.props.user.email,
      raids: null
    }
  }


  componentDidMount() {
    fetch(`${apiUrl}/raids`)
      // fetch does not throw error. Need to use res.ok
      // return to intentionally throw JS error
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ raids: data.raids }))
      .catch(console.error)
  }

  render () {
    // if (this.state.notFound) {
    //   return <Redirect to='/' />
    // } else
    if (!this.state.raids) {
      return <p>loading...</p>
    }
    const raids = this.state.raids.map(raid => {
      if (this.state.user_id === raid.user.id) {
        return <li key={raid.id}>
          Raid ID: {raid.id} User: {raid.user.email} Boss: <Link to={`/raids/${raid.id}`}>{raid.boss_name}</Link> Time Remaining: {raid.time_remaining}
        </li>
      }})

    return (
      <React.Fragment>
        <h1>Raids belonging to {this.state.user_name}:</h1>
        <p>{raids}</p>
      </React.Fragment>
    )
  }
}

export default MyRaids
