import {Route, Switch, withRouter} from 'react-router-dom'
import {Component} from 'react'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './ProtectedRoute'
import Trending from './components/Trending'
import NxtWatchContext from './context/nxtWatchContext'
import VideoItemDetail from './components/VideoItemDetail'

class App extends Component {
  state = {
    isDarkTheme: false,
    selectedRoute: 'home',
  }

  componentDidMount() {
    const {history} = this.props
    console.log('History : ', history.location.pathname)
    let path = ''
    path = history.location.pathname
    const updatedPath = path.slice(1)
    console.log('path : ', updatedPath)
    if (
      updatedPath.length !== 0 &&
      ['home', 'trending', 'gaming', 'saved'].includes(updatedPath)
    ) {
      this.setState({selectedRoute: updatedPath})
    }
  }

  toggleDark = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeSelectedRoute = route => {
    this.setState({selectedRoute: route})
  }

  render() {
    const {isDarkTheme, selectedRoute} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          toggleDark: this.toggleDark,
          selectedRoute,
          changeSelectedRoute: this.changeSelectedRoute,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/video/:id" component={VideoItemDetail} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default withRouter(App)
