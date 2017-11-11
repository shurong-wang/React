/**
 * Created by sunny on 21/03/2017.
 */

import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

import List from './pages/List';
import Detail from './pages/Detail';
import Cinemas from './pages/Cinemas';
import MyMovies from './pages/MyMovies';

const MyTab = TabNavigator({
  List: {screen: List},
  Cinemas: {screen: Cinemas},
  MyMovies: {screen: MyMovies},
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#0390EB',
    inactiveTintColor: '#fff',
    labelStyle: {
      fontSize: 20,
      marginBottom: 18,
    },
    style: {
      backgroundColor: '#222',
    },
  }

});

const MyApp = StackNavigator({
  MyTab: {screen: MyTab},
  Detail: {screen: Detail},
}, {
  headerMode: 'screen'
});

export default MyApp;