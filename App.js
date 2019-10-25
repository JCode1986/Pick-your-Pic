import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }

  // componentDidMount() {
  //   return fetch('https://dog.ceo/api/breeds/image/random')
  //   .then((response) => response.json())
  //   .then((responseJson) => {
      
  //     this.setState({
  //       isLoading: false,
  //       dataSource: responseJson.message,
  //     })
  //   })

  //   .catch((error) => {
  //     console.log(error)
  //   });
  // }

  componentDidMount() {
    this.fetchImage()
  }

  fetchImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((responseJson) => {
      
      this.setState({
        isLoading: false,
        dataSource: responseJson.message,
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
          <Text style={styles.text}>Tap Image for Random Doggos</Text>
          <View>
          <TouchableOpacity onPress={() => this.fetchImage()}>
              <Image style={styles.images} source={{uri: this.state.dataSource }} />
          </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'teal'
  },
  images: {
    width: 350,
    height: 350,
    borderRadius: 50
  }, 
});
