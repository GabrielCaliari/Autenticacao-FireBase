import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(_user => {
      if (initializing) {
        setInitializing(false);
      }
      setUser(_user);
    });

    return unsubscribe;
  }, [initializing]);

  if (initializing) {
    return (
      <View>
        <ActivityIndicator size={'large'} color="orange" />
      </View>
    );
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </SafeAreaView>
  );
};

export default Routes;
