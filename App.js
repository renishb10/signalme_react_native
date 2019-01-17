/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

//Custom Components
import FetchLocation from './src/components/FetchLocation';
import UserMap from './src/components/UsersMap';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state = {
    userLocation: null
  }

  getUserLocationHandler = () => {
    console.log(1);
    navigator.geolocation.getCurrentPosition(pos => {
      	this.setState({
          userLocation: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }
        })
    }, err => {
      console.log(err);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Renish B</Text>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
        <UserMap userLocation={this.state.userLocation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
