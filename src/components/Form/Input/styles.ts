import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
    width:100%;
    padding: 16px 18px;

    font-size: ${RFValue(14)}px;

    color: ${({ theme }:any) => theme.colors.title};
    background-color: ${({ theme }:any) => theme.colors.shape};
    border-radius: 5px;
    margin-bottom: 8px;
    font-family: ${({ theme }:any) => theme.fonts.regular};

`