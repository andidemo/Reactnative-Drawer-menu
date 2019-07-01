
//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { View, Image, TouchableOpacity } from 'react-native';
// import all basic components
//For React Navigation 2.+ import following
import {DrawerNavigator, StackNavigator} from 'react-navigation';
//For React Navigation 3.+ import following
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import Screen1 from './Screen1'
import Home from './Home';
import Screen2 from './Screen2'
  class NavigationDrawerStructure extends Component {
//Structure for the navigatin Drawer

toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  }

render() {
return (
    <View style={{ flexDirection: 'row' }}>
 
 <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>

      <Image
        source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png' }}
        style={{ width: 25, height: 25, marginLeft: 5 }}
      />

    </TouchableOpacity>

  </View>
);
}
}

const FirstActivity_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    First: {
      screen: Screen1,
      navigationOptions: ({ navigation }) => ({
        title: 'Today Offeres',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  });
  const SecondActivity_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    Second: {
      screen: Screen2,
      navigationOptions: ({ navigation }) => ({
        title: 'Category',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  });
  const ThirdActivity_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    Third: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: 'Your Wallet',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  });
  const DrawerNavigatorExample = createDrawerNavigator({
    //Drawer Optons and indexing
    Screen1: {
      //Title
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Today Offeres',
      },
    },
    Screen2: {
        //Title
        screen: SecondActivity_StackNavigator,
        navigationOptions: {
          drawerLabel: 'Category',
        },
      },
      Screen3: {
        //Title
        screen: ThirdActivity_StackNavigator,
        navigationOptions: {
          drawerLabel: 'Your Wallet',
        },
      },
  });
   

  export default createAppContainer(DrawerNavigatorExample);