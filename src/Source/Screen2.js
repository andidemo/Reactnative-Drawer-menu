
//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
import { ScrollView, Text, Image,StyleSheet} from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
 
export default class Screen2 extends Component {

   
  //Screen2 Component
  render() {
    
    return (
      <ScrollView >
{/* <Card title="CARD WITH DIVIDER">
  {
    users.map((u, i) => {
      return (
        <ScrollView key={i} style={styles.user}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: u.avatar }}
          ></Image>
          <Text style={styles.name}>{u.name}</Text>
        </ScrollView>
      );
    })
  }
</Card>

 <Card containerStyle={{padding: 0}} >
  {
    users.map((u, i) => {
      return (
        <ScrollView>
        <ListItem
          key={i}
          // roundAvatar
          title={u.name}
          avatar={<Image source={require('../Assets/img/home.png')} 
          style={{ height: 30, width: 60 }} />}
                    avatarStyle={{borderRadius:50, height:100, width:100 }}
           containerStyle={{borderBottomWidth: 0, padding:0 }}
        ></ListItem>
        </ScrollView>
      );
    })
  }
</Card> */}


<Card
  title='Debit Card'
  image={require('../Assets/img/debit.jpg')}>
  <Text style={{marginBottom: 10}}>
  Say good-bye to the hassle of withdrawing cash every time you need to shop. Enjoy cashless, worry-free shopping - in stores and online - with HDFC Bank Debit Cards.  </Text>
  <Button
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='SHOW MORE'
    ></Button>
</Card>
<Card
  title='Credit Card'
  image={require('../Assets/img/des_top_logo-7Aug.jpg')}>
  <Text style={{marginBottom: 10}}>
  A credit card is a payment card issued to users (cardholders) to enable the cardholder to pay a merchant for goods and services based on the cardholder's promise to the card issuer to pay them for the amounts plus the other agreed charges.  </Text>
  <Button
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='SHOW MORE' ></Button>
</Card>

<Card
  title='Food Card'
  image={require('../Assets/img/foodplus.jpeg')}>
  <Text style={{marginBottom: 10}}>
  HDFC Bank FoodPlus Card - a smart and secure way of giving meal vouchers to your employees!  </Text>
  <Button
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='SHOW MORE' ></Button>
</Card>
<Card
  title='Travel Card'
  image={require('../Assets/img/travel.jpg')}>
  <Text style={{marginBottom: 10}}>
  HDFC Bank prepaid ForexPlus Cards offer a safe, easy, and cashless way to carry foreign currency on your travel abroad – ensuring that you are not inconvenienced on foreign shores. They are safer than cash, easier to use than traveller’s cheques, and cheaper to use than credit or debit cards. These ForexPlus Cards are available for transactions in all the popular foreign currencies. They are widely accepted and protect you from fluctuations in foreign exchange.  </Text>
  <Button
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='SHOW MORE' ></Button>
</Card>
<Card
  title='Farmer Card'
  image={require('../Assets/img/kisan.jpg')}>
  <Text style={{marginBottom: 10}}>
  Quick, competitive and transparent, HDFC Bank offers hassle-free Retail Agri Loans to farmers, providing them with the credit they need to meet all their farming, production and investment requirements. With the Kisan Gold Card, farmers are provided with anytime, anywhere banking!   </Text>
  <Button
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='SHOW MORE' ></Button>
</Card>
      </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});


const users = [
  {
     name: 'brynn',
     pic: 'https://banner2.kisspng.com/20180420/sdw/kisspng-computer-icons-user-profile-login-avatar-description-5ada41a3affa18.5037201115242530917208.jpg'
  },


 ]