/**
 * Created by sunny on 21/03/2017.
 */
/**
 * Created by sunny on 21/03/2017.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';


export default class Detail extends Component {
  static navigationOptions = {
    title: '详情页',
  };
  render() {
    const { state, goBack } = this.props.navigation;
    return (
      <View>
        <Text>电影详情页</Text>
        <Text>电影id: {state.params.id}</Text>
        <Text onPress={() => goBack()}>返回</Text>
      </View>
    );
  }
}
