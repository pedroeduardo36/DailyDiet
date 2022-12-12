import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  height: 102px;
  width: 100%;

  padding: 24px;

  align-items: center;
  justify-content: center;

  color: #e5f0db;
  background-color: #e5f0db;
`;

export const Text = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
