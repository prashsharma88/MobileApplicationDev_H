/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import Main from './stackNavigationDemo_src/Main';
import Main from './tabNavigationDemo_src/navigation/TabNavigation_Main';
import ProfileStackNavigation from './nestedNavigationDemo_src/navigation/ProfileStackNav';
import HomeStackNavigation from './nestedNavigationDemo_src/navigation/HomeStackNav';
import AppNavigation from './nestedNavigationDemo_src/navigation/AppNavigation';


AppRegistry.registerComponent(appName, () => AppNavigation);
