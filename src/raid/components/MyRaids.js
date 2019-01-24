import React, { Component } from 'react'
import { withRouter, Link, Redirect } from 'react-router-dom'

import messages from '../messages'
import apiUrl from '../../apiConfig'
import RaidCreate from './RaidCreate'

class MyRaids extends Component {
  constructor (props) {
    super(props)

    this.state = {
      createIsHidden: true,
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

  toggleHidden () {
    this.setState({
      createIsHidden: !this.state.createIsHidden
    })
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
        return (
          <tbody key={raid.id}>
            <tr>
              <td>{raid.id}</td>
              <td><Link to={`/raids/${raid.id}`}>{raid.boss_name}</Link></td>
              <td>{raid.time_remaining}</td>
            </tr>
          </tbody>
        )
      }
    })

    return (
      <React.Fragment>
        <h1>Raids belonging to {this.state.user_name}:</h1>
        {!this.state.createIsHidden && <RaidCreate user={this.props.user}/>}
        <button onClick={this.toggleHidden.bind(this)}>
          Create a Raid
        </button>
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

export default MyRaids