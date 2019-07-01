import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native';
import Routes from './Routes/Routes'
import NavigationService from './Routes/NavigationService';
class App extends Component {
   render() {
      
      return (
        <Routes ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef)}} />
      )
   }
}
export default App

