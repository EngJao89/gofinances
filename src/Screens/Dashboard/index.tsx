import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';

import { TransactionCard } from '../../components/TransactionCard';

import { 
  Container, 
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreetings,
  UserName, 
  Icon,
  HighlightCards,
  Transactions,
  Title
} from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo 
              source={{ uri: 'https://avatars.githubusercontent.com/u/36192437?v=4' }}
            />
              <User>
                <UserGreetings>Olá, </UserGreetings>
                <UserName>João Ricardo</UserName>
              </User>
          </UserInfo>
          <Icon name="power"/>
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard 
          type="up"
          title="Entrada" 
          amount="R$ 17.400,00" 
          lastTransaction="Última entrada dia 13 de Abril" 
        />
        <HighlightCard 
          type="down"
          title="Saída" 
          amount="R$ 1.259,00" 
          lastTransaction="Última saída dia 02 de Abril"
        />
        <HighlightCard 
          type="total"
          title="Total" 
          amount="R$ 16.141,00" 
          lastTransaction="1 a 16 de Abril"
        />
      </HighlightCards>

      <Transactions>
        <Title> Listagem </Title>

        <TransactionCard />
      </Transactions>
    </Container>
  );
}