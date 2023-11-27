import React, {useState} from 'react';
import {Container, IconEye, PassWord, Photo, Title} from './style';
import MyInput from '../../global/MyInput';
import MyButton from '../../global/MyButton';
import {Alert, TextInputProps} from 'react-native';
import auth from '@react-native-firebase/auth';
import logo from '../../assets/logo.png';

interface InputProps extends TextInputProps {
  secureTextEntry?: boolean;
}

const CreateUser = ({secureTextEntry}: InputProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentSecure, setCurrentSecure] = useState<boolean>(
    !!secureTextEntry,
  );

  function signUp() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Sucesso', 'Conta de usuário criada e conectada!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('Esse endereço de email já esta em uso!');
          Alert.alert('Esse endereço de email já esta em uso!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('Esse endereço de email é inválido!');
        }
      });
  }

  const handleOnPressEye = () => {
    setCurrentSecure(current => !current);
  };

  return (
    <Container>
      <Photo source={logo} resizeMode="contain" />
      <Title>Crie sua conta</Title>
      <MyInput
        placeholder="e-mail"
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
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
      <MyButton title="Criar" onPress={signUp} />
    </Container>
  );
};

export default CreateUser;
