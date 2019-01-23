import React, { Component } from 'react'
import { withRouter, Link, Redirect } from 'react-router-dom'

import messages from '../messages'
import { handleErrors} from '../api'
import apiUrl from '../../apiConfig'

class Raid extends Component {
  constructor (props) {
    super(props)

    this.state = {
      notFound: null,
      deleted: false,
      raid: null
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
      .catch(() => this.setState({ notFound: true }))
  }

  destroy = event => {
    const id = this.props.match.params.id

    const options = {
      method: 'DELETE'
    }

    fetch(`${apiUrl}/raids/${id}`, options)
      .then(handleErrors)
      .then(() => this.setState({ deleted: true }))
      // .then(() => flash(messages.deleteRaidSuccess, 'flash-success'))
      .catch(console.error)
  }

  render () {
    const { raid, notFound, deleted } = this.state

    if (notFound) {
      return <Redirect to='/' />
    } else if (!raid) {
      return <p>loading...</p>
    } else if (deleted) {
      return (
        <Redirect to={{
          pathname: '/raids'
        }} />
      )
    }
    const { id, boss_name, time_remaining } = raid

    return (
      <React.Fragment>
        <h1>{boss_name}</h1>
        <p>Time Remaining: {time_remaining}</p>
        <button onClick={this.destroy}>Delete</button>
        <button>
          <Link to={`/raids/${id}/update`}>Edit</Link>
        </button>
      </React.Fragment>
    )
  }
}

export default withRouter(Raid)
