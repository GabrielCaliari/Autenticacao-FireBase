import React from 'react';
import {Container, Text} from './style';
import MyButton from '../../global/MyButton';
import auth from '@react-native-firebase/auth';

export const Home: React.FC = () => {
  function signOut() {
    auth().signOut();
  }

  return (
    <Container>
      <Text> Essa tela só pode ser vista por usuários autenticados</Text>
      <MyButton title="Sair" onPress={signOut} />
    </Container>
  );
};
