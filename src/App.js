import React, { Component } from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import Raids from './raid/components/Raids'
import MyRaids from './raid/components/MyRaids'
import RaidCreate from './raid/components/RaidCreate'
import Raid from './raid/components/Raid'
import RaidUpdate from './raid/components/RaidUpdate'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      flashMessage: '',
      flashType: null
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  flash = (message, type) => {
    this.setState({ flashMessage: message, flashType: type })

    clearTimeout(this.messageTimeout)

    this.messageTimeout = setTimeout(() => this.setState({flashMessage: null
    }), 2000)
  }

  render () {
    const { flashMessage, flashType, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {flashMessage && <h3 className={flashType}>{flashMessage}</h3>}

        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp flash={this.flash} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn flash={this.flash} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut flash={this.flash} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/raids' render={() => (
            <Raids flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/my-raids' render={() => (
            <MyRaids flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/raid-create' render={() => (
            <RaidCreate flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/raids/:id' render={() => (
            <Raid flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/raids/:id/update' render={() => (
            <RaidUpdate flash={this.flash} user={user} />
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default App
