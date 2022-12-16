import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 24px;
    border-radius: 6px;
    background-color: ${({theme}) => theme.COLORS.GRAY_100};
    margin-top: 24px;

`