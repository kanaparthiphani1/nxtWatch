import {Component} from 'react'
import {HomeContainer, SideBarConatiner} from './styledComponents'
import Header from '../Header'
import SideBar from '../Sidebar'

class Home extends Component {
  render() {
    const ele = (
      <HomeContainer>
        <Header />
        <SideBarConatiner>
          <SideBar />
        </SideBarConatiner>
      </HomeContainer>
    )
    return ele
  }
}

export default Home
