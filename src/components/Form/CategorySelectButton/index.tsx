import React from 'react';
import { Container, Category, Icon } from './stayles';

interface Props {
    title: string
    onPress: () => void
}

export function CategorySelectButton({ title, onPress }: Props ) {
    return ( 
        <Container onPress={onPress}>
            <Category>{title}</Category>
            <Icon name="chevron-down"/>

        </Container>
    )
}