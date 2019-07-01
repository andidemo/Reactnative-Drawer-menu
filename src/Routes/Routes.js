
import React ,{Component }from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from '../Source/Home'
import NavigationDrawerStructure from '../Source/HamburgerIcon'
import Login from '../Source/Login'
import { Root } from 'native-base';
import { createAppContainer, createSwitchNavigator, createStackNavigator, createDrawerNavigator,DrawerActions } from 'react-navigation';
const login = createStackNavigator({
  Login: {
    screen: Login
  }
});
const hamburger = createStackNavigator({
  NavigationDrawerStructure: {
    screen: NavigationDrawerStructure
  }
});

export const MainSwitchRoutes=createAppContainer(createSwitchNavigator({
auth:login,
home:hamburger
},
{
  initialRouteName:"home"
}
)
);
export default class Routes extends Component {
  render() {
    return (
      <Root><MainSwitchRoutes/>
  {/* <Router>
        <Scene key = "root">
           <Scene key = "login" component = {Login} title = "Login"  />
           <Scene key = "home" component = {Home} title = "Home" />
           <Scene key = "hamburgericon" component = {HamburgerIcon} title = "NavigationDrawerStructure" initial = {true}/>
        </Scene>
     </Router> */}
      </Root>
      
    );
  }
}
