import React from 'react';

import {Button, Text} from './styled';

interface MyLinkProps {
  title: string;
  onPress: () => void;
}
export function MyLink({title, onPress}: MyLinkProps) {
  return (
    <Button onPress={onPress}>
      <Text>{title}</Text>
    </Button>
  );
}
