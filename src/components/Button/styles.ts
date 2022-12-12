import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";

export const Container = styled(TouchableOpacity)`
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 16px;
    border-radius: 8px;
    background-color: ${({theme}) => theme.COLORS.GRAY_700};
`
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
  `}
`;
