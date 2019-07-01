
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
var ImagePicker = require('react-native-image-picker');
// import { Avatar} from 'react-native-elements'

export default class Camera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
    };
  }
  chooseFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
 
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
        });
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          {/*<Image 
          source={{ uri: this.state.filePath.path}} 
          style={{width: 100, height: 100}} />*/}
          {/* <Image
            source={{
              uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
            }}
            style={{ width: 100, height: 100 }}
          /> */}
          <Image
            source={{ uri: this.state.filePath.uri }}
            style={{ width: 200, height: 200, borderRadius: 200 / 2,marginBottom:10,marginTop:50 }}
            />
          {/* <Avatar
  xlarge
  rounded
  source={{ uri: this.state.filePath.uri }}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
  height={658}
  width={950}
  title="Choose File" onPress={this.chooseFile.bind(this)}
/> */}
          {/* <Text style={{ alignItems: 'center' }}>
            {this.state.filePath.uri}
          </Text> */}
          <Button title="Choose File" onPress={this.chooseFile.bind(this)} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});