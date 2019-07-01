import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,ImageBackground,Image
} from 'react-native';
import { PricingCard,Tile } from 'react-native-elements';

export default class Screen1 extends Component {
  //Screen1 Component
  render() {
    return (
      <ScrollView style={styles.container}>
            <Text style={styles.welcome}>Welcome to HDFC</Text>

      <PricingCard
  color="#4f9deb"
  title="Free"
  price="Rs : 0"
  imageSrc={{uri:"https://www.solidcoupon.com/wp-content/uploads/2016/07/PayZapp-akbartravels-offers.jpg"}}
  info={['Prime Customers', 'Debit Cards', 'First time flight booking free']}
  button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
></PricingCard>
<Image
        source={{ uri: 'https://cashbackoffers.today/wp-content/uploads/2018/01/filpkart-HDFC-Offers.jpg' }}
        style={{ width: 400, height: 250, marginLeft: 5 ,}}></Image>
      </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    flex: 1,
    margin: 20,
    backgroundColor: 'pink',
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    // paddingTop: 70,
  }
});