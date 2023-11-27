import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export const Photo = styled.Image`
  margin-bottom: 15px;
  width: 250px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: black;
  margin-bottom: 15px;
`;

export const IconEye = styled(Feather)`
  position: absolute;
  right: 14px;
  top: 16px;
`;

export const PassWord = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;
