import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize"
import { Feather } from "@expo/vector-icons"

interface TypeProps {
    type: 'up' | 'down' | 'total'
}

export const Container = styled.View<TypeProps>`
    background-color: ${({ theme, type }: any) => 
    type === 'total' ? theme.colors.secondary : theme.colors.shape};
    width: ${RFValue(300)}px;
    border-radius: 5px;
    padding: 19px 23px ${RFValue(42)}px;
    margin-right: 16px;
   

`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
    font-family: ${({ theme }: any) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme, type }: any) => 
     type === 'total' ? theme.colors.shape : theme.colors.text_dark};
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;

  ${({ type }: any) => type === 'up' && css`
    color: ${({ theme }) => theme.colors.sucess};
  `};

  ${({ type }: any) => type === 'down' && css`
    color: ${({ theme }) => theme.colors.attention};
  `};

  ${({ type }: any) => type === 'total' && css`
    color: ${({ theme }) => theme.colors.shape};
  `};
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
    font-family: ${({ theme }: any) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    margin-top: 38px;
    color: ${({ theme, type }: any) => 
     type === 'total' ? theme.colors.shape : theme.colors.text_dark};
`;

export const LastTransition = styled.Text<TypeProps>`
    font-family: ${({ theme }: any) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${({ theme, type }: any) => 
     type === 'total' ? theme.colors.shape : theme.colors.text};
`;

