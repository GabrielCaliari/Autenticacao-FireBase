import React, {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import {SignIn} from './src/pages/SignIn';
import {Home} from './src/pages/Home';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {Container} from './src/pages/SignIn/style';

const App = () => {
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
      <Container>
        <ActivityIndicator size={'large'} color="orange" />
      </Container>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      {user ? <Home /> : <SignIn />}
    </SafeAreaView>
  );
};

export default App;
