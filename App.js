/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { Navigation } from 'react-native-navigation';
import { registerScreens } from './pages/route';
registerScreens();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
          name: "app.WelcomeScreen"
       }
    }
  });
});
