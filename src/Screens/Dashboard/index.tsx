import React from 'react';
import { Text, View } from 'react-native';

import { 
  Container, 
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreetings,
  UserName
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
        </UserWrapper>
      </Header>
    </Container>
  );
}