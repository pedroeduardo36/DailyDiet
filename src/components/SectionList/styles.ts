import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const Header = styled.View`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
`;

export const Title = styled.View`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
`;

export const ItemView = styled.View`
  padding: 20px;
  margin-top: 8;
  background-color: ${({ theme }) => theme.COLORS.GREEN_MID};
`;
