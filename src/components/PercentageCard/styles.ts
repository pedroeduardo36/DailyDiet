import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

 
export const Container = styled(TouchableOpacity)`
  height: 102px;
  width: 100%;

  padding: 24px;
  border-radius: 8px;

  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.COLORS.GREE_LIGHT};
`;

export const Text = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;


