import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;

  justify-content: flex-start;
  align-items: center;

  border-radius: 6px;
  padding: 18px;

  border: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const HourView = styled.View`
  padding-right: 8px;
  margin-right: 10px;
  border-right-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};

`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
  `}
  font-weight: bold;
`;

export const Meal = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
  flex: 1;
`;

export const Ball = styled.View`
  width: 18px;
  height: 18px;
  border-radius: 18px;
  color: ${({ theme }) => theme.COLORS.GREEN_MID};
  background-color: ${({ theme }) => theme.COLORS.GREEN_MID};
`;
