import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../pages/Home';

const App = createNativeStackNavigator();

const AppRoutes = () => (
  <App.Navigator>
    <App.Screen
      name="Initial"
      component={Home}
      options={{headerShown: false}}
    />
  </App.Navigator>
);

export default AppRoutes;
