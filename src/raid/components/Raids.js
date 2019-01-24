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
      <tbody key={raid.id}>
        <tr>
          <td>Raid ID: {raid.id}</td>
          <td>User: {raid.user.email}</td>
          <td>Boss: <Link to={`/raids/${raid.id}`}>{raid.boss_name}</Link></td>
          <td>Time Remaining: {raid.time_remaining}</td>
        </tr>
      </tbody>
    ))

    return (
      <React.Fragment>
        <h1>Raids:</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>user</th>
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

export default Raids
