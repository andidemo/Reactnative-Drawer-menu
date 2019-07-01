
import React ,{Component }from 'react'
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import Camera from './Camera';
import Chat from './Chat';
import Menu from './Menu';

export default class Home extends Component {
  render() {
   
    return (
      <Container>
      {/* <Header hasTabs /> */}
      <Tabs>
        <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
          <Camera />
        </Tab>
        <Tab heading="Chat">
          <Chat />
        </Tab>
        <Tab heading={ <TabHeading><Icon name="apps" /><Text>Menu</Text></TabHeading>}>
          <Menu />
        </Tab>
      </Tabs>
    </Container>
    );
  }
}