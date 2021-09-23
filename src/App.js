import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './ProtectedRoute'
import NxtWatchContext from './context/nxtWatchContext'

class App extends Component {
  state = {
    isDarkTheme: false,
  }

  toggleDark = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <NxtWatchContext.Provider
        data={{
          isDarkTheme,
          toggleDark: this.toggleDark,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
