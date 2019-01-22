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

  render () {
    const { raid, notFound } = this.state

    if (notFound) {
      return <Redirect to='/' />
    } else if (!raid) {
      return <p>loading...</p>
    }
    // else if (deleted) {
    //   return (
    //     <Redirect to={{
    //       pathname: '/',
    //       state: { message: 'Movie successfully deleted' }
    //     }} />
    //   )
    // }
    const { boss_name, time_remaining } = raid

    return (
      <React.Fragment>
        <h4>{boss_name}</h4>
        <p>Time Remaining: {time_remaining}</p>
        <button>Delete</button>
        <button>Edit</button>
      </React.Fragment>
    )
  }
}

export default withRouter(Raid)
