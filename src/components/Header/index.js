import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Top, Title, Logo} from './styles';
import logo from '~/assets/Nubank_Logo.png';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Manoel Carvalho</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#fff" />
    </Container>
  );
}
