import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    
    background-color: ${({ theme }:any) => theme.colors.secondary};

    padding: 18px;
    align-items: center;
    
    border-radius: 5px;
    

`

export const Title = styled.Text `
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }:any) => theme.fonts.medium};;
    color: ${({ theme }:any) => theme.colors.shape};

`; 