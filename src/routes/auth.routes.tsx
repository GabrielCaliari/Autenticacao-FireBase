import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignIn} from '../pages/SignIn';
import CreateUser from '../pages/createUser';

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{headerShown: false}}
    />
    <AuthStack.Screen name="SignUp" component={CreateUser} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
