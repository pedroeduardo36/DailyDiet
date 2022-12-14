import styled from "styled-components/native";

export const PercentageContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 24px;
  padding-top: 48px;
  height: 200px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.GREE_LIGHT};
`;

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GREE_LIGHT};
`;

export const StatsContainer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;

  justify-content: center;
  align-items: center;
`;

export const InOrOutContainer = styled.View`
  flex-direction: row;
  width: 100%;

  justify-content: space-between;
  align-items: center;
`;
