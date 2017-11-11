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
  AsyncStorage,
  TouchableOpacity,
  Linking,
} from 'react-native';

const api = 'https://api.douban.com/v2/movie/subject';

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 222,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    marginTop: 100,
  },
  play: {
    width: 107,
    height: 107,
  }
});
export default class Detail extends Component {
  static navigationOptions = {
    title: '详情页',
  };
  state = {
    data: {},
    ready: false,
    videoUri: '',
  };
  async componentDidMount() {
    const { state: { params: { id } } } = this.props.navigation;
    let textData, jsonData;

    textData = await AsyncStorage.getItem(id);

    if (textData) {
      // alert('数据来自本地');
    } else {
      const rawData = await fetch(`${api}/${id}`);
      textData = await rawData.text();
      // alert('数据来自服务器');
    }

    // title, summary
    // "images": {
    //   "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p494268647.webp",
    //     "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p494268647.webp",
    //     "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p494268647.webp"
    // },

    // 反序列化： "死的"字符串 => "活的"对象
    jsonData = JSON.parse(textData);
    jsonData.image = jsonData.images.large.replace('webp', 'jpg');

    // 序列化： "活的"对象 => "死的"字符串
    // const textData = JSON.stringify(jsonData);
    AsyncStorage.setItem(id, textData);

    this.setState({
      data: jsonData,
      ready: true,
    });

    this.fetchVideo(jsonData.mobile_url);
  }
  fetchVideo = async (mobile_url) => {
    let pageHtml = await fetch(mobile_url);
    pageHtml = await pageHtml.text();
    const regex = /href="([\w|\W]*\.mp4)"/;
    const result = pageHtml.match(regex);
    if (result && result[1]) {
      const videoUri = result[1];
      this.setState({
        videoUri
      });
    }
  };
  playVideo = () => {
    const { videoUri } = this.state;
    if (videoUri) {
      Linking.openURL(videoUri);
    } else {
      alert('正在获取预告片地址，请稍后重试');
    }
  };
  render() {
    const { data : { title, summary, image }, ready } = this.state;
    return (
      <View>
        {
          ready ?
            <View>
              <TouchableOpacity onPress={this.playVideo}>
                <Image source={{ uri: image }} style={styles.image}>
                  <Image source={require('../img/play-icon.png')} style={styles.play} />
                </Image>
              </TouchableOpacity>
              <Text>{title}</Text>
              <Text>{summary}</Text>
            </View>
            :
            <ActivityIndicator size="large" style={styles.loading} />
        }
      </View>
    );
  }
}
