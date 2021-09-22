import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './ProtectedRoute'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
      </Switch>
    )
  }
}

export default App
