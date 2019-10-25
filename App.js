import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }

  componentDidMount() {
    return fetch('https://dog.ceo/api/breeds/image/random')
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
          <Text>it works!!</Text>
          <Image
          style={styles.images}
          source={{uri: this.state.dataSource }}
        />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {
    width: 501,
    height: 500
  }
});
