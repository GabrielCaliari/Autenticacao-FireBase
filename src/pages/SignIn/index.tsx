import React, {useState} from 'react';
import {Container, Photo} from './style';
import auth from '@react-native-firebase/auth';
import logo from '../../assets/logo.png';
import MyInput from '../../global/MyInput';
import MyButton from '../../global/MyButton';
import {MyLink} from '../../global/MyLink';

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signUp() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Conta de usuário criada e conectada!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('Esse endereço de email já esta em uso!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('Esse endereço de email é inválido!');
        }
      });
  }

  function signIn() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('usuario logado!');
      })
      .catch(error => {
        if (error.code === 'auth/invalid-login') {
          console.log('Email ou senha estão incorretos');
        }
      });
  }

  return (
    <Container>
      <Photo source={logo} resizeMode="contain" />
      <MyInput placeholder="e-mail" value={email} onChangeText={setEmail} />
      <MyInput
        placeholder="senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <MyButton title="Entrar no app" onPress={signIn} />
      <MyLink title="Cadastrar" onPress={signUp} />
    </Container>
  );
};
