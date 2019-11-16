// import React from 'react';
// import { Text, View, TouchableOpacity, StyleSheet, Button, CameraRoll, Dimensions } from 'react-native';
// import * as Permissions from 'expo-permissions';
// import { Camera } from 'expo-camera';


// import React from 'react';
// import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
// import * as Permissions from 'expo-permissions';
// import { Camera } from 'expo-camera';

// export default class CameraExample extends React.Component {
//   state = {
//     hasCameraPermission: null,
//     type: Camera.Constants.Type.back,
//   };

//   async componentDidMount() {
//     const { status } = await Permissions.askAsync(Permissions.CAMERA);
//     this.setState({ hasCameraPermission: status === 'granted' });
//   }

//   render() {
//     const { hasCameraPermission } = this.state;
//     if (hasCameraPermission === null) {
//       return <View />;
//     } else if (hasCameraPermission === false) {
//       return <Text>No access to camera</Text>;
//     } else {
//       return (
//         <View style={{ flex: 1 }}>
//           <Camera style={{ flex: 1 }} type={this.state.type}>
//             <View
//               style={{
//                 flex: 1,
//                 backgroundColor: 'transparent',
//                 flexDirection: 'row',
//               }}>
//               <TouchableOpacity
//                 style={{
//                   flex: 0.1,
//                   alignSelf: 'flex-end',
//                   alignItems: 'center',
//                 }}
//                 onPress={() => {
//                   this.setState({
//                     type:
//                       this.state.type === Camera.Constants.Type.back
//                         ? Camera.Constants.Type.front
//                         : Camera.Constants.Type.back,
//                   });
//                 }}>
//                 <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
//               </TouchableOpacity>
//             </View>
//           </Camera>
//         </View>
//       );
//     }
//   }
// }
// export default class CameraExample extends React.Component {
//   state = {
//     hasCameraPermission: null,
//     type: Camera.Constants.Type.back,
//     image: null
//   };

//   async componentDidMount() {
//     const { status } = await Permissions.askAsync(Permissions.CAMERA);
//     this.setState({ hasCameraPermission: status === 'granted' });
//   }

//   getRandomImage = () => {
//     const fetchParams = {
//       first: 25,
//     }

//     CameraRoll.getPhotos(fetchParams)
//       .then(data => {
//         const assets = data.edges
//         const images = assets.map((asset) => asset.node.image)
//         const random = Math.floor(Math.random() * images.length)
//         this.setState({
//           img: images[random]
//         })
//       })
//       .catch(err => console.log)
//   }

//   render() {
//     const { hasCameraPermission } = this.state;
//     if (hasCameraPermission === null) {
//       return <View />;
//     } else if (hasCameraPermission === false) {
//       return <Text>No access to camera</Text>;
//     } 
//     else {
//       return (
//         <View style={styles.image}>
//         { this.state.img ?
//           <Image
//             style={styles.image}
//             source={{ uri: this.state.img.uri }}
//           />
//           : null
//         }
        {/* <Button title="Get Random Image from CameraRoll" onPress={this.getRandomImage}/> */}
          {/* <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
              </TouchableOpacity>
            </View>
          </Camera> */}
//         </View>
//       );
//     }
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   image: {
//     resizeMode: 'contain',
//     margin: 20,
//   }
// });