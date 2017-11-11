
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';



export default class MyMovies extends Component {
  static navigationOptions = {
    title: '我的电影',
    header: null
  };
  render() {
    return (
      <View>
        <Text>我的电影</Text>
      </View>
    );
  }
}
