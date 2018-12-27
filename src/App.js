import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Main from './components/Main'
import Master from './components/Master'
import NotFound from './components/NotFound'
import Callback from './components/Callback'

class App extends Component {
  render() {
    let mainComponent = "";
    console.log(this.props)
    switch (this.props.location) {
      case "":
        mainComponent = <Main {...this.props} />
        break
      case "secret":
        mainComponent = this.props.auth.isAuth() ? <Master {...this.props} /> : <NotFound />
        break
      case "callback":
        mainComponent = <Callback />
        break
      default:
        mainComponent = <NotFound />

    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome, {this.props.name}
          </p>
          {mainComponent}
        </header>
      </div>
    );
  }
}

export default App;
