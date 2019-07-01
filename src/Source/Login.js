import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity, TextInput, StyleSheet,Image } from 'react-native'
import { Actions } from 'react-native-router-flux';
// import { ScrollView } from 'react-native-gesture-handler';
class Login extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
  
   goToAbout = (email, pass) => {
    if (this.state.email != '') {
      //Check for the Name TextInput
      if (this.state.password != '') {
        //Check for the Email TextInput
        alert('email: ' + email + ' password: ' + pass)
        debugger
        this.props.navigation.navigate('NavigationDrawerStructure')
             } 
       else {
        alert('Please Enter email');
      }
    } else {
      alert('Please Enter password');
    }

 }
   render() {
       let pic= {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Stony_Brook_Athletics_Primary_Logo.png'
      };
      return (
         <ScrollView style = {styles.container}>
         <Image source={pic} style={styles.logo}/>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {()=>this.goToAbout(this.state.email, this.state.password)} 
            >
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </ScrollView>
      )
   }
}
export default Login

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white',
      alignSelf: 'center',
   },
   logo:{
    margin:30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 250,
   }
})
