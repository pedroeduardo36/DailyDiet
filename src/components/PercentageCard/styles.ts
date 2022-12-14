import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type PercentageCardStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: PercentageCardStyleProps
}
 
export const Container = styled(TouchableOpacity).attrs<Props>(({theme, type}) => ({

}))`
  height: 102px;
  width: 100%;


  flex-direction: column;
  padding: 24px;
  border-radius: 8px;

  align-items: center;
  justify-content: center;

  background-color:  ${({theme}) => theme.COLORS.GREE_LIGHT};
`;

export const RowContainer = styled.View`
  flex-direction: row;
`

export const Text = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;


