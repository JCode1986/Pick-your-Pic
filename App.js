import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image, TouchableOpacity, Button, CameraRoll, Linking, PermissionsAndroid } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Permissions from 'expo-permissions';
// import RNFetchBlob from 'react-native-fetch-blob';

// Permissions.getAsync(CameraRoll)

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      images: [],
      status: null,
    }
  }
    async componentDidMount() {
    this.getCameraRollPermissions();
    this.fetchImage();
  }
  
  getCameraRollPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
  
      this.setState({ status });

      if(status !== 'granted') {
        Linking.openURL('app-settings:')
        return;
      }

      console.log('Permission Granted')

  }

  fetchImage() {
    // fetch('https://dog.ceo/api/breeds/image/random') -- random dog pictures
    fetch('https://meme-api.herokuapp.com/gimme')
    .then((response) => response.json())
    .then((responseJson) => {
      
      this.state.images.push(responseJson.url)
      this.setState({
        isLoading: false,
        dataSource: responseJson.url
      })
    })

    .catch((error) => {
      console.log(error)
    });
  }

  
  render() {
    
    if(this.state.isLoading) {
      return (
        
        <View style={styles.container}>
          
          <ActivityIndicator/>
        
        </View>
      )
    } else {

      return (
        
        <View style={styles.container}>
          <LinearGradient
            colors={['rgba(0,0,0,0.8)', 'transparent']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: 300,
            }}
          />
          
          <Text style={styles.text}>Tap Image for Random Meme </Text>
        
        <View> 
          <TouchableOpacity onPress={() => this.fetchImage()}>
              {console.log(this.state.images)}
              <Image style={styles.images} source={{uri: this.state.dataSource }} />
          </TouchableOpacity>
        </View>
          
          <Button
            onPress={() => {
              console.log('you did not save the picture')
              // saveToCameraRoll = (image) => {
              //   if (Platform.OS === 'android') {
              //     RNFetchBlob
              //     .config({
              //       fileCache : true,
              //       appendExt : 'jpg',
              //     })
              //     .fetch('GET', image.urls.small)
              //     .then((res) => {
              //       CameraRoll.saveToCameraRoll(res.path())
              //         .then(Alert.alert('Success', 'Photo added to camera roll!'))
              //         .catch(err => console.log('err:', err))
              //     })
              //   } else {
              //     CameraRoll.saveToCameraRoll(image.urls.small)
              //       .then(Alert.alert('Success', 'Photo added to camera roll!'))
              //   }
              // }
              CameraRoll.saveToCameraRoll(this.state.images, 'photo')
              .then(response => {
                console.log('picture saved')
              })
              .catch((error) => {
                console.log(error)
              });
            }}
            title="Save to Camera Roll"
          />
        </View>       
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
    textShadowColor: 'white'
  },
  images: {
    resizeMode: 'contain',
    width: 350,
    height: 400,
    borderRadius: 10,
    margin: 10
  }, 
});
