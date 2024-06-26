import React from "react";

import { Container, Header, UserWrapper, UserInfo, Photo, User, UserGreeting, UserName, Icon, HighlightCards, Transactions, Title, TransactionList } from './styles'

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";

 export interface DataListProps extends TransactionCardProps{
    id: string;
}


export function Dashboard() {

    const data:DataListProps[] = [
        {
            id: '1',
            type: 'positive',
            title: "Desenvolvimento de site",
            amount: "R$ 12.000,00",
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date: '25/04/2024'
        },
        {
            id: '2',
            type: 'negative',
            title: "Hanburgueria Pizzy",
            amount: "R$ 59,00",
            category: {
                name: 'Alimentação',
                icon: 'coffee'
            },
            date: '25/04/2024'
        },
        {
            id: '3',
            type: 'negative',
            title: "Aluguel  do apartamento",
            amount: "R$ 1.200,00",
            category: {
                name: 'Casa',
                icon: 'home'
            },
            date: '25/04/2024'
        }
    ]

    return (

        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo
                            source={{ uri: 'https://github.com/wesleivisentin.png' }}
                        />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Weslei</UserName>
                        </User>

                    </UserInfo>
                    <Icon name="power" />
                </UserWrapper>
            </Header>
            <HighlightCards >
                <HighlightCard title="Entradas" amount="R$17.400,00" lastTransaction="Última saída dia 03 de abril" type="up" />
                <HighlightCard title="Saídas" amount="R$1.259,00" lastTransaction="Última entrada dia 13 de abril" type="down" />
                <HighlightCard title="Total" amount="R$16.141,00" lastTransaction="01 à 16 de abril" type="total" />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>

                <TransactionList
                    data={data}
                    keyExtractor={(item: { id: any; }) => item.id}
                    renderItem={({ item }: any) => <TransactionCard data={item} />}
                    
                />


            </Transactions>
        </Container>

    )
}

