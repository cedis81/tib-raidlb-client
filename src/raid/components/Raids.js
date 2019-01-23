import React, { Component } from 'react'
import { withRouter, Link, Redirect } from 'react-router-dom'

import messages from '../messages'
import apiUrl from '../../apiConfig'

class Raids extends Component {
  constructor (props) {
    super(props)

    this.state = {
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

    const raids = this.state.raids.map(raid => (
      <li key={raid.id}>
        {raid.id} Boss: <Link to={`/raids/${raid.id}`}>{raid.boss_name}</Link> Time Remaining: {raid.time_remaining}
      </li>
    ))

    return (
      <React.Fragment>
        <h1>Raids:</h1>
        <p>{raids}</p>
      </React.Fragment>
    )
  }
}

export default Raids
