import React from 'react';
import {Input} from './styled';
import {TextInputProps} from 'react-native';

type InputProps = TextInputProps;

const MyInput = ({...props}: InputProps) => {
  return (
    <Input autoCapitalize="none" placeholderTextColor="#727272" {...props} />
  );
};

export default MyInput;
