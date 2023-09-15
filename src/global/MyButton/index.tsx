import React from 'react';
import {Button, Text} from './styled';
import {TouchableOpacityProps} from 'react-native';

interface MyButtonProps extends TouchableOpacityProps {
  title: string;
}

const MyButton = ({title, ...props}: MyButtonProps) => {
  return (
    <Button {...props}>
      <Text>{title}</Text>
    </Button>
  );
};

export default MyButton;
