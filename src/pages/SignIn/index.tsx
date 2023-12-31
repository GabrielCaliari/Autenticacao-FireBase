import React, {useState} from 'react';
import {Container, PassWord, Photo, IconEye} from './style';
import auth from '@react-native-firebase/auth';
import logo from '../../assets/logo.png';
import MyInput from '../../global/MyInput';
import MyButton from '../../global/MyButton';

import {useNavigation} from '@react-navigation/native';

import {MyLink} from '../../global/MyLink';
import {Alert, TextInputProps} from 'react-native';

export interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

interface InputProps extends TextInputProps {
  secureTextEntry?: boolean;
}

export const SignIn: React.FC = ({secureTextEntry}: InputProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {navigate} = useNavigation<ScreenNavigationProp>();
  const [currentSecure, setCurrentSecure] = useState<boolean>(
    !!secureTextEntry,
  );

  function signIn() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('usuario logado!');
      })
      .catch(error => {
        if (error.code === 'auth/invalid-login') {
          Alert.alert(
            'Erro na autenticação',
            'Email ou senha estão incorretos',
          );
        }
      });
  }

  const handleSignUp = () => {
    navigate('SignUp');
  };

  const handleOnPressEye = () => {
    setCurrentSecure(current => !current);
  };

  return (
    <Container>
      <Photo source={logo} resizeMode="contain" />
      <MyInput placeholder="e-mail" value={email} onChangeText={setEmail} />
      <PassWord>
        <MyInput
          placeholder="senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={currentSecure}
        />
        <IconEye
          onPress={handleOnPressEye}
          name={currentSecure ? 'eye' : 'eye-off'}
          size={20}
          color="black"
        />
      </PassWord>
      <MyButton title="Entrar no app" onPress={signIn} />
      <MyLink title="Cadastrar" onPress={handleSignUp} />
    </Container>
  );
};
