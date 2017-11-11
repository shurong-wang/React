/**
 * Created by tdzl2003 on 12/17/16.
 */

import { AppRegistry } from 'react-native';
import MyApp from './MyApp';

if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    error: () => {},
  };
}
console.ignoredYellowBox = ['Warning: Can only update'];

AppRegistry.registerComponent('MyApp', () => MyApp);
