import React from 'react';
import { Container, Category, Icon } from './stayles';

interface Props {
    title: string
}

export function CategorySelect({ title }: Props ) {
    return ( 
        <Container>
            <Category>{title}</Category>
            <Icon name="chevron-down"/>

        </Container>
    )
}