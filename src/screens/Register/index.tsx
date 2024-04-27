import React, { useState } from 'react';
import { Container, Header, Title, Form, Fields, TransactionTypes } from './styles';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/transactionTypeButton';
import { CategorySelect } from '../../components/Form/CategorySelect';

export function Register() {
    const [transactionType, setTransactionType] = useState('');

    function handTransactionTypeSelect(type: 'up' | 'down') {
        setTransactionType(type)
    }

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>
            <Form>
                <Fields>
                    <Input placeholder="Nome" />
                    <Input placeholder="Preço" />

                    <TransactionTypes>
                        <TransactionTypeButton
                            type="up"
                            title="Income"
                            onPress={() => handTransactionTypeSelect('up')}
                            isActive={transactionType === 'up'}
                        />
                        <TransactionTypeButton
                            type="down"
                            title="Outcome"
                            onPress={() => handTransactionTypeSelect('down')}
                            isActive={transactionType === 'down'}
                        />
                    </TransactionTypes>
                    <CategorySelect title="Categoria"/>
                </Fields>


                <Button title="Enviar" />

            </Form>


        </Container >
    )
}